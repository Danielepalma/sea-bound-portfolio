import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Trash2, Upload, LogOut, FileText, FileSpreadsheet, ArrowUpRight,
  FolderOpen, FileEdit, Image as ImageIcon, Pencil, FileUp,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { AdminContentEditor } from "@/components/portfolio/AdminContentEditor";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin · Materiali" }] }),
  component: AdminPage,
});

type Material = {
  id: string;
  area: string;
  title_it: string;
  title_en: string;
  meta_it: string;
  meta_en: string;
  icon: string;
  file_path: string;
  sort_order: number;
  topic: string | null;
  topic_order: number;
  thumbnail_path: string | null;
};

function publicUrl(path: string) {
  return supabase.storage.from("materials").getPublicUrl(path).data.publicUrl;
}

function AdminPage() {
  const { user, isAdmin, loading, signOut } = useAuth();
  const { lang } = useLang();
  const navigate = useNavigate();
  const [tab, setTab] = useState<"materials" | "content">("materials");
  const [items, setItems] = useState<Material[]>([]);
  const [area, setArea] = useState("lezioni");
  const [titleIt, setTitleIt] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [metaIt, setMetaIt] = useState("");
  const [metaEn, setMetaEn] = useState("");
  const [topic, setTopic] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [thumb, setThumb] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) navigate({ to: "/login" });
  }, [loading, user, isAdmin, navigate]);

  const load = async () => {
    const { data, error } = await supabase
      .from("materials")
      .select("*")
      .order("area")
      .order("sort_order");
    if (error) toast.error(error.message);
    setItems((data ?? []) as Material[]);
  };

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error(lang === "it" ? "Seleziona un file" : "Select a file");
      return;
    }
    setBusy(true);
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "pdf";
    const icon = ["xls", "xlsx", "csv"].includes(ext) ? "xls" : ext === "doc" || ext === "docx" ? "doc" : "pdf";
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const { error: upErr } = await supabase.storage.from("materials").upload(path, file);
    if (upErr) {
      setBusy(false);
      toast.error(upErr.message);
      return;
    }
    let thumbPath: string | null = null;
    if (thumb) {
      const tp = `thumbnails/${Date.now()}-${thumb.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      const { error: tErr } = await supabase.storage.from("materials").upload(tp, thumb);
      if (tErr) toast.error(`Thumbnail: ${tErr.message}`);
      else thumbPath = tp;
    }
    const { error: insErr } = await supabase.from("materials").insert({
      area, title_it: titleIt, title_en: titleEn || titleIt,
      meta_it: metaIt, meta_en: metaEn || metaIt,
      icon, file_path: path, created_by: user?.id,
      topic: topic.trim() || null,
      thumbnail_path: thumbPath,
    });
    setBusy(false);
    if (insErr) {
      toast.error(insErr.message);
      return;
    }
    toast.success(lang === "it" ? "Materiale caricato" : "Material uploaded");
    setTitleIt(""); setTitleEn(""); setMetaIt(""); setMetaEn("");
    setFile(null); setThumb(null);
    const fileInput = document.getElementById("admin-file") as HTMLInputElement | null;
    if (fileInput) fileInput.value = "";
    const thumbInput = document.getElementById("admin-thumb") as HTMLInputElement | null;
    if (thumbInput) thumbInput.value = "";
    load();
  };

  const remove = async (m: Material) => {
    const paths = [m.file_path, ...(m.thumbnail_path ? [m.thumbnail_path] : [])];
    const { error: stErr } = await supabase.storage.from("materials").remove(paths);
    if (stErr) toast.warning(`Storage: ${stErr.message}`);
    const { error: dbErr } = await supabase.from("materials").delete().eq("id", m.id);
    if (dbErr) {
      toast.error(dbErr.message);
      return;
    }
    toast.success(lang === "it" ? "Materiale eliminato" : "Material deleted");
    setItems((prev) => prev.filter((x) => x.id !== m.id));
  };

  const changeThumb = async (m: Material, f: File) => {
    const path = `thumbnails/${Date.now()}-${f.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const { error: upErr } = await supabase.storage.from("materials").upload(path, f);
    if (upErr) {
      toast.error(upErr.message);
      return;
    }
    if (m.thumbnail_path) await supabase.storage.from("materials").remove([m.thumbnail_path]);
    const { error } = await supabase.from("materials").update({ thumbnail_path: path }).eq("id", m.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(lang === "it" ? "Miniatura aggiornata" : "Thumbnail updated");
    load();
  };

  const saveEdit = async (m: Material, patch: Partial<Material>) => {
    const { error } = await supabase.from("materials").update(patch).eq("id", m.id);
    if (error) {
      toast.error(error.message);
      return false;
    }
    toast.success(lang === "it" ? "Modifiche salvate" : "Changes saved");
    load();
    return true;
  };

  if (loading) return <p className="text-ink-muted">…</p>;
  if (!isAdmin) return null;

  return (
    <div>
      <PageHeader
        icon="🛠️"
        title={lang === "it" ? "Area amministrazione" : "Admin area"}
        lead={lang === "it" ? "Gestisci i materiali didattici e i testi del sito." : "Manage teaching materials and site copy."}
      />

      <div className="flex justify-between items-center mb-6 text-xs">
        <span className="text-ink-muted">{user?.email}</span>
        <div className="flex gap-3">
          <Link to="/didattica" className="text-gold-700 hover:text-navy inline-flex items-center gap-1">
            {lang === "it" ? "Vedi pagina pubblica" : "View public page"} <ArrowUpRight size={12} />
          </Link>
          <button onClick={() => { signOut(); navigate({ to: "/" }); }} className="text-gold-700 hover:text-navy inline-flex items-center gap-1">
            <LogOut size={12} /> {lang === "it" ? "Esci" : "Sign out"}
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-8 border-b border-gold/30">
        <button
          onClick={() => setTab("materials")}
          className={`px-4 py-2 text-xs font-display uppercase tracking-wider-2 inline-flex items-center gap-2 border-b-2 -mb-px transition ${
            tab === "materials" ? "border-gold text-navy" : "border-transparent text-ink-muted hover:text-navy"
          }`}
        >
          <FolderOpen size={12} /> {lang === "it" ? "Materiali" : "Materials"}
        </button>
        <button
          onClick={() => setTab("content")}
          className={`px-4 py-2 text-xs font-display uppercase tracking-wider-2 inline-flex items-center gap-2 border-b-2 -mb-px transition ${
            tab === "content" ? "border-gold text-navy" : "border-transparent text-ink-muted hover:text-navy"
          }`}
        >
          <FileEdit size={12} /> {lang === "it" ? "Testi pagine" : "Page content"}
        </button>
      </div>

      {tab === "content" ? (
        <AdminContentEditor />
      ) : (
        <MaterialsTab
          items={items}
          area={area} setArea={setArea}
          titleIt={titleIt} setTitleIt={setTitleIt}
          titleEn={titleEn} setTitleEn={setTitleEn}
          metaIt={metaIt} setMetaIt={setMetaIt}
          metaEn={metaEn} setMetaEn={setMetaEn}
          topic={topic} setTopic={setTopic}
          file={file} thumb={thumb}
          setFile={setFile} setThumb={setThumb}
          submit={submit} remove={remove} changeThumb={changeThumb} saveEdit={saveEdit}
          busy={busy} lang={lang}
        />
      )}
    </div>
  );
}

type MaterialsTabProps = {
  items: Material[];
  area: string; setArea: (v: string) => void;
  titleIt: string; setTitleIt: (v: string) => void;
  titleEn: string; setTitleEn: (v: string) => void;
  metaIt: string; setMetaIt: (v: string) => void;
  metaEn: string; setMetaEn: (v: string) => void;
  topic: string; setTopic: (v: string) => void;
  file: File | null; thumb: File | null;
  setFile: (f: File | null) => void;
  setThumb: (f: File | null) => void;
  submit: (e: FormEvent) => void;
  remove: (m: Material) => void;
  changeThumb: (m: Material, f: File) => void;
  saveEdit: (m: Material, patch: Partial<Material>) => Promise<boolean>;
  busy: boolean;
  lang: string;
};

function MaterialsTab({
  items, area, setArea, titleIt, setTitleIt, titleEn, setTitleEn,
  metaIt, setMetaIt, metaEn, setMetaEn, topic, setTopic,
  file, thumb, setFile, setThumb, submit, remove, changeThumb, saveEdit, busy, lang,
}: MaterialsTabProps) {
  const existingTopics = Array.from(
    new Set(items.filter((m) => m.area === area && m.topic).map((m) => m.topic as string)),
  ).sort();
  const [confirmDelete, setConfirmDelete] = useState<Material | null>(null);
  const [editing, setEditing] = useState<Material | null>(null);
  const [thumbPreview, setThumbPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!thumb) { setThumbPreview(null); return; }
    const url = URL.createObjectURL(thumb);
    setThumbPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [thumb]);

  return (
    <div>
      <form onSubmit={submit} className="nautical-card p-6 mb-10 space-y-4">
        <h3 className="font-display uppercase tracking-wider-2 text-sm text-navy mb-2">
          {lang === "it" ? "Nuovo materiale" : "New material"}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="text-xs">
            <span className="block text-navy mb-1">Area</span>
            <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite">
              <option value="lezioni">Lezioni</option>
              <option value="esercitazioni">Esercitazioni</option>
              <option value="appunti">Appunti</option>
              <option value="calcolatori">Calcolatori</option>
              <option value="formulari">Formulari</option>
            </select>
          </label>
          <label className="text-xs">
            <span className="block text-navy mb-1">
              {lang === "it" ? "Argomento" : "Topic"}{" "}
              <span className="text-ink-muted">({lang === "it" ? "raggruppa i file" : "groups files"})</span>
            </span>
            <input
              list={`topics-${area}`}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={lang === "it" ? "es. Astronomia nautica" : "e.g. Celestial navigation"}
              className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite"
            />
            <datalist id={`topics-${area}`}>
              {existingTopics.map((tp) => (<option key={tp} value={tp} />))}
            </datalist>
          </label>
          <label className="text-xs">
            <span className="block text-navy mb-1">Titolo (IT) *</span>
            <input required value={titleIt} onChange={(e) => setTitleIt(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
          <label className="text-xs">
            <span className="block text-navy mb-1">Title (EN)</span>
            <input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
          <label className="text-xs">
            <span className="block text-navy mb-1">Descrizione breve (IT)</span>
            <input value={metaIt} onChange={(e) => setMetaIt(e.target.value)} placeholder="es. PDF · 24 esercizi" className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
          <label className="text-xs">
            <span className="block text-navy mb-1">Short meta (EN)</span>
            <input value={metaEn} onChange={(e) => setMetaEn(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 pt-2">
          <div className="rounded border-2 border-dashed border-gold/50 bg-offwhite/50 p-4 flex items-center gap-3">
            <FileUp size={22} className="text-gold-700 shrink-0" />
            <div className="flex-1 min-w-0">
              <label htmlFor="admin-file" className="btn-navy inline-flex items-center gap-2 cursor-pointer text-xs">
                <Upload size={12} /> {lang === "it" ? "Scegli file" : "Choose file"}
              </label>
              <input
                id="admin-file"
                type="file"
                required
                className="sr-only"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
              <p className="text-[11px] text-ink-muted mt-1 truncate">
                {file ? file.name : (lang === "it" ? "PDF, Excel, Word…" : "PDF, Excel, Word…")}
              </p>
            </div>
          </div>
          <div className="rounded border-2 border-dashed border-gold/50 bg-offwhite/50 p-4 flex items-center gap-3">
            {thumbPreview ? (
              <img src={thumbPreview} alt="" className="h-12 w-12 rounded object-cover border border-gold/40 shrink-0" />
            ) : (
              <ImageIcon size={22} className="text-gold-700 shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <label htmlFor="admin-thumb" className="btn-navy inline-flex items-center gap-2 cursor-pointer text-xs">
                <ImageIcon size={12} /> {lang === "it" ? "Scegli miniatura" : "Choose thumbnail"}
              </label>
              <input
                id="admin-thumb"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => setThumb(e.target.files?.[0] ?? null)}
              />
              <p className="text-[11px] text-ink-muted mt-1 truncate">
                {thumb ? thumb.name : (lang === "it" ? "Opzionale (PNG/JPG)" : "Optional (PNG/JPG)")}
              </p>
            </div>
          </div>
        </div>

        <button type="submit" disabled={busy} className="btn-navy inline-flex items-center gap-2 px-5 py-2.5 text-sm disabled:opacity-60">
          <Upload size={14} /> {busy ? (lang === "it" ? "Caricamento…" : "Uploading…") : (lang === "it" ? "Carica materiale" : "Upload material")}
        </button>
      </form>

      <h3 className="font-display uppercase tracking-wider-2 text-sm text-navy mb-3">
        {lang === "it" ? "Materiali caricati" : "Uploaded materials"} ({items.length})
      </h3>
      <div className="space-y-3">
        {items.map((m) => (
          <div key={m.id} className="nautical-card p-4 flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {m.thumbnail_path ? (
                <img src={publicUrl(m.thumbnail_path)} alt="" className="h-14 w-14 rounded object-cover border border-gold/40 shrink-0" />
              ) : (
                <span className="h-14 w-14 rounded bg-offwhite border border-gold/40 flex items-center justify-center shrink-0">
                  {m.icon === "xls" ? <FileSpreadsheet size={22} className="text-gold-700" /> : <FileText size={22} className="text-gold-700" />}
                </span>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-display text-navy text-sm truncate">{m.title_it}</p>
                <p className="text-[11px] text-ink-muted font-mono truncate">
                  {m.area}{m.topic ? ` · ${m.topic}` : ""}{m.meta_it ? ` · ${m.meta_it}` : ""}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href={publicUrl(m.file_path)} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-gold/50 bg-offwhite text-navy hover:bg-gold/10"
              >
                <ArrowUpRight size={12} /> {lang === "it" ? "Apri" : "Open"}
              </a>
              <label className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-gold/50 bg-offwhite text-navy hover:bg-gold/10 cursor-pointer">
                <ImageIcon size={12} /> {lang === "it" ? "Miniatura" : "Thumbnail"}
                <input
                  type="file" accept="image/*" className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) changeThumb(m, f);
                    e.target.value = "";
                  }}
                />
              </label>
              <button
                type="button" onClick={() => setEditing(m)}
                className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-gold/50 bg-offwhite text-navy hover:bg-gold/10"
              >
                <Pencil size={12} /> {lang === "it" ? "Modifica" : "Edit"}
              </button>
              <button
                type="button" onClick={() => setConfirmDelete(m)}
                className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-red-300 bg-red-50 text-red-700 hover:bg-red-100"
              >
                <Trash2 size={12} /> {lang === "it" ? "Elimina" : "Delete"}
              </button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-ink-muted text-sm">{lang === "it" ? "Nessun materiale ancora." : "No materials yet."}</p>
        )}
      </div>

      <AlertDialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {lang === "it" ? "Eliminare questo materiale?" : "Delete this material?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirmDelete?.title_it}
              <br />
              {lang === "it"
                ? "Il file e l'eventuale miniatura saranno rimossi. L'operazione non è reversibile."
                : "The file and thumbnail will be removed. This cannot be undone."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{lang === "it" ? "Annulla" : "Cancel"}</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                if (confirmDelete) await remove(confirmDelete);
                setConfirmDelete(null);
              }}
              className="bg-red-700 text-white hover:bg-red-800"
            >
              {lang === "it" ? "Elimina" : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {editing && (
        <EditMaterialDialog
          material={editing}
          onClose={() => setEditing(null)}
          onSave={async (patch) => {
            const ok = await saveEdit(editing, patch);
            if (ok) setEditing(null);
          }}
          lang={lang}
        />
      )}
    </div>
  );
}

function EditMaterialDialog({
  material, onClose, onSave, lang,
}: {
  material: Material;
  onClose: () => void;
  onSave: (patch: Partial<Material>) => Promise<void>;
  lang: string;
}) {
  const [titleIt, setTitleIt] = useState(material.title_it);
  const [titleEn, setTitleEn] = useState(material.title_en);
  const [metaIt, setMetaIt] = useState(material.meta_it);
  const [metaEn, setMetaEn] = useState(material.meta_en);
  const [area, setArea] = useState(material.area);
  const [topic, setTopic] = useState(material.topic ?? "");
  const [saving, setSaving] = useState(false);
  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{lang === "it" ? "Modifica materiale" : "Edit material"}</DialogTitle>
        </DialogHeader>
        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <label>
            <span className="block text-navy mb-1">Area</span>
            <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite">
              <option value="lezioni">Lezioni</option>
              <option value="esercitazioni">Esercitazioni</option>
              <option value="appunti">Appunti</option>
              <option value="calcolatori">Calcolatori</option>
              <option value="formulari">Formulari</option>
            </select>
          </label>
          <label>
            <span className="block text-navy mb-1">{lang === "it" ? "Argomento" : "Topic"}</span>
            <input value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
          <label>
            <span className="block text-navy mb-1">Titolo (IT)</span>
            <input value={titleIt} onChange={(e) => setTitleIt(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
          <label>
            <span className="block text-navy mb-1">Title (EN)</span>
            <input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
          <label>
            <span className="block text-navy mb-1">Descrizione (IT)</span>
            <input value={metaIt} onChange={(e) => setMetaIt(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
          <label>
            <span className="block text-navy mb-1">Meta (EN)</span>
            <input value={metaEn} onChange={(e) => setMetaEn(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite" />
          </label>
        </div>
        <DialogFooter>
          <button type="button" onClick={onClose} className="text-xs px-4 py-2 rounded border border-gold/40 text-navy hover:bg-offwhite">
            {lang === "it" ? "Annulla" : "Cancel"}
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={async () => {
              setSaving(true);
              await onSave({
                title_it: titleIt,
                title_en: titleEn || titleIt,
                meta_it: metaIt,
                meta_en: metaEn || metaIt,
                area,
                topic: topic.trim() || null,
              });
              setSaving(false);
            }}
            className="btn-navy inline-flex items-center gap-2 text-xs disabled:opacity-60"
          >
            {saving ? (lang === "it" ? "Salvataggio…" : "Saving…") : (lang === "it" ? "Salva" : "Save")}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
