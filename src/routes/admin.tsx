import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Trash2, Upload, LogOut, FileText, FileSpreadsheet, ArrowUpRight, FolderOpen, FileEdit } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { AdminContentEditor } from "@/components/portfolio/AdminContentEditor";

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
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) navigate({ to: "/login" });
  }, [loading, user, isAdmin, navigate]);

  const load = async () => {
    const { data } = await supabase
      .from("materials")
      .select("*")
      .order("area")
      .order("sort_order");
    setItems((data ?? []) as Material[]);
  };

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return setErr("Seleziona un file");
    setBusy(true);
    setErr(null);
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "pdf";
    const icon = ["xls", "xlsx", "csv"].includes(ext) ? "xls" : ext === "doc" || ext === "docx" ? "doc" : "pdf";
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const { error: upErr } = await supabase.storage.from("materials").upload(path, file);
    if (upErr) {
      setBusy(false);
      return setErr(upErr.message);
    }
    let thumbPath: string | null = null;
    if (thumb) {
      const tExt = thumb.name.split(".").pop()?.toLowerCase() ?? "png";
      const tp = `thumbnails/${Date.now()}-${thumb.name.replace(/[^a-zA-Z0-9._-]/g, "_")}.${tExt === "png" || tExt === "jpg" || tExt === "jpeg" || tExt === "webp" || tExt === "gif" || tExt === "svg" || tExt === "avif" ? "" : "png"}`.replace(/\.$/, "");
      const finalPath = `thumbnails/${Date.now()}-${thumb.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      const { error: tErr } = await supabase.storage.from("materials").upload(finalPath, thumb);
      if (!tErr) thumbPath = finalPath;
      void tp;
    }
    const { error: insErr } = await supabase.from("materials").insert({
      area, title_it: titleIt, title_en: titleEn || titleIt,
      meta_it: metaIt, meta_en: metaEn || metaIt,
      icon, file_path: path, created_by: user?.id,
      topic: topic.trim() || null,
      thumbnail_path: thumbPath,
    });
    setBusy(false);
    if (insErr) return setErr(insErr.message);
    setTitleIt(""); setTitleEn(""); setMetaIt(""); setMetaEn(""); setFile(null); setThumb(null);
    // keep `topic` and `area` so the admin can upload several items in the same topic in a row
    (document.getElementById("admin-file") as HTMLInputElement | null)!.value = "";
    const thumbInput = document.getElementById("admin-thumb") as HTMLInputElement | null;
    if (thumbInput) thumbInput.value = "";
    load();
  };

  const remove = async (m: Material) => {
    if (!confirm("Eliminare questo materiale?")) return;
    const paths = [m.file_path, ...(m.thumbnail_path ? [m.thumbnail_path] : [])];
    await supabase.storage.from("materials").remove(paths);
    await supabase.from("materials").delete().eq("id", m.id);
    load();
  };

  const changeThumb = async (m: Material, f: File) => {
    const path = `thumbnails/${Date.now()}-${f.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const { error: upErr } = await supabase.storage.from("materials").upload(path, f);
    if (upErr) return alert(upErr.message);
    if (m.thumbnail_path) await supabase.storage.from("materials").remove([m.thumbnail_path]);
    const { error } = await supabase.from("materials").update({ thumbnail_path: path }).eq("id", m.id);
    if (error) return alert(error.message);
    load();
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
            tab === "materials"
              ? "border-gold text-navy"
              : "border-transparent text-ink-muted hover:text-navy"
          }`}
        >
          <FolderOpen size={12} /> {lang === "it" ? "Materiali" : "Materials"}
        </button>
        <button
          onClick={() => setTab("content")}
          className={`px-4 py-2 text-xs font-display uppercase tracking-wider-2 inline-flex items-center gap-2 border-b-2 -mb-px transition ${
            tab === "content"
              ? "border-gold text-navy"
              : "border-transparent text-ink-muted hover:text-navy"
          }`}
        >
          <FileEdit size={12} /> {lang === "it" ? "Testi pagine" : "Page content"}
        </button>
      </div>

      {tab === "content" ? <AdminContentEditor /> : <MaterialsTab
        items={items}
        area={area}
        setArea={setArea}
        titleIt={titleIt}
        setTitleIt={setTitleIt}
        titleEn={titleEn}
        setTitleEn={setTitleEn}
        metaIt={metaIt}
        setMetaIt={setMetaIt}
        metaEn={metaEn}
        setMetaEn={setMetaEn}
        topic={topic}
        setTopic={setTopic}
        setFile={setFile}
        setThumb={setThumb}
        submit={submit}
        remove={remove}
        changeThumb={changeThumb}
        busy={busy}
        err={err}
        lang={lang}
      />}
    </div>
  );
}

type MaterialsTabProps = {
  items: Material[];
  area: string;
  setArea: (v: string) => void;
  titleIt: string;
  setTitleIt: (v: string) => void;
  titleEn: string;
  setTitleEn: (v: string) => void;
  metaIt: string;
  setMetaIt: (v: string) => void;
  metaEn: string;
  setMetaEn: (v: string) => void;
  topic: string;
  setTopic: (v: string) => void;
  setFile: (f: File | null) => void;
  setThumb: (f: File | null) => void;
  submit: (e: FormEvent) => void;
  remove: (m: Material) => void;
  changeThumb: (m: Material, f: File) => void;
  busy: boolean;
  err: string | null;
  lang: string;
};

function MaterialsTab({
  items, area, setArea, titleIt, setTitleIt, titleEn, setTitleEn,
  metaIt, setMetaIt, metaEn, setMetaEn, topic, setTopic, setFile, setThumb, submit, remove, changeThumb, busy, err, lang,
}: MaterialsTabProps) {
  const existingTopics = Array.from(
    new Set(items.filter((m) => m.area === area && m.topic).map((m) => m.topic as string)),
  ).sort();
  return (
    <div>
      <form onSubmit={submit} className="nautical-card p-6 mb-10 space-y-3">
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
            <span className="block text-navy mb-1">File (PDF/Excel/…)</span>
            <input id="admin-file" type="file" required onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="w-full text-xs" />
          </label>
          <label className="text-xs sm:col-span-2">
            <span className="block text-navy mb-1">
              {lang === "it" ? "Miniatura (immagine, opzionale)" : "Thumbnail (image, optional)"}
            </span>
            <input
              id="admin-thumb"
              type="file"
              accept="image/*"
              onChange={(e) => setThumb(e.target.files?.[0] ?? null)}
              className="w-full text-xs"
            />
          </label>
          <label className="text-xs sm:col-span-2">
            <span className="block text-navy mb-1">
              {lang === "it" ? "Argomento" : "Topic"}{" "}
              <span className="text-ink-muted">
                ({lang === "it" ? "raggruppa i file" : "groups files"})
              </span>
            </span>
            <input
              list={`topics-${area}`}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={lang === "it" ? "es. Astronomia nautica" : "e.g. Celestial navigation"}
              className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite"
            />
            <datalist id={`topics-${area}`}>
              {existingTopics.map((tp) => (
                <option key={tp} value={tp} />
              ))}
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
        {err && <p className="text-red-700 text-xs">{err}</p>}
        <button type="submit" disabled={busy} className="btn-navy inline-flex items-center gap-2">
          <Upload size={14} /> {busy ? "…" : lang === "it" ? "Carica" : "Upload"}
        </button>
      </form>

      <h3 className="font-display uppercase tracking-wider-2 text-sm text-navy mb-3">
        {lang === "it" ? "Materiali caricati" : "Uploaded materials"} ({items.length})
      </h3>
      <div className="space-y-2">
        {items.map((m) => (
          <div key={m.id} className="nautical-card p-3 flex items-center gap-3 text-sm">
            {m.thumbnail_path ? (
              <img
                src={publicUrl(m.thumbnail_path)}
                alt=""
                className="h-10 w-10 rounded object-cover border border-gold/40 shrink-0"
              />
            ) : (
              <span className="h-8 w-8 rounded-full bg-offwhite border border-gold/40 flex items-center justify-center shrink-0">
                {m.icon === "xls" ? <FileSpreadsheet size={14} className="text-gold-700" /> : <FileText size={14} className="text-gold-700" />}
              </span>
            )}
            <div className="flex-1 min-w-0">
              <p className="font-display text-navy text-sm truncate">{m.title_it}</p>
              <p className="text-[11px] text-ink-muted font-mono">
                {m.area}
                {m.topic ? ` · ${m.topic}` : ""}
                {m.meta_it ? ` · ${m.meta_it}` : ""}
              </p>
            </div>
            <label className="text-[11px] text-gold-700 hover:text-navy cursor-pointer">
              {lang === "it" ? "Miniatura" : "Thumb"}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) changeThumb(m, f);
                  e.target.value = "";
                }}
              />
            </label>
            <a href={publicUrl(m.file_path)} target="_blank" rel="noreferrer" className="text-xs text-gold-700 hover:text-navy">
              <ArrowUpRight size={14} />
            </a>
            <button onClick={() => remove(m)} className="text-red-700 hover:text-red-900">
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        {items.length === 0 && <p className="text-ink-muted text-sm">{lang === "it" ? "Nessun materiale ancora." : "No materials yet."}</p>}
      </div>
    </div>
  );
}