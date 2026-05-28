import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Trash2, Upload, LogOut, FileText, FileSpreadsheet, ArrowUpRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";

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
};

function publicUrl(path: string) {
  return supabase.storage.from("materials").getPublicUrl(path).data.publicUrl;
}

function AdminPage() {
  const { user, isAdmin, loading, signOut } = useAuth();
  const { lang } = useLang();
  const navigate = useNavigate();
  const [items, setItems] = useState<Material[]>([]);
  const [area, setArea] = useState("lezioni");
  const [titleIt, setTitleIt] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [metaIt, setMetaIt] = useState("");
  const [metaEn, setMetaEn] = useState("");
  const [file, setFile] = useState<File | null>(null);
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
    const { error: insErr } = await supabase.from("materials").insert({
      area, title_it: titleIt, title_en: titleEn || titleIt,
      meta_it: metaIt, meta_en: metaEn || metaIt,
      icon, file_path: path, created_by: user?.id,
    });
    setBusy(false);
    if (insErr) return setErr(insErr.message);
    setTitleIt(""); setTitleEn(""); setMetaIt(""); setMetaEn(""); setFile(null);
    (document.getElementById("admin-file") as HTMLInputElement | null)!.value = "";
    load();
  };

  const remove = async (m: Material) => {
    if (!confirm("Eliminare questo materiale?")) return;
    await supabase.storage.from("materials").remove([m.file_path]);
    await supabase.from("materials").delete().eq("id", m.id);
    load();
  };

  if (loading) return <p className="text-ink-muted">…</p>;
  if (!isAdmin) return null;

  return (
    <div>
      <PageHeader
        icon="🛠️"
        title={lang === "it" ? "Gestione materiali" : "Materials management"}
        lead={lang === "it" ? "Carica, organizza ed elimina i materiali didattici." : "Upload, organise and remove teaching materials."}
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

      <form onSubmit={submit} className="nautical-card p-6 mb-10 space-y-3">
        <h3 className="font-display uppercase tracking-wider-2 text-sm text-navy mb-2">
          {lang === "it" ? "Nuovo materiale" : "New material"}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="text-xs">
            <span className="block text-navy mb-1">Area</span>
            <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full border border-gold/40 rounded px-3 py-2 bg-offwhite">
              <option value="lezioni">Lezioni</option>
              <option value="appunti">Appunti</option>
              <option value="calcolatori">Calcolatori</option>
              <option value="formulari">Formulari</option>
            </select>
          </label>
          <label className="text-xs">
            <span className="block text-navy mb-1">File (PDF/Excel/…)</span>
            <input id="admin-file" type="file" required onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="w-full text-xs" />
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
            <span className="h-8 w-8 rounded-full bg-offwhite border border-gold/40 flex items-center justify-center shrink-0">
              {m.icon === "xls" ? <FileSpreadsheet size={14} className="text-gold-700" /> : <FileText size={14} className="text-gold-700" />}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-display text-navy text-sm truncate">{m.title_it}</p>
              <p className="text-[11px] text-ink-muted font-mono">{m.area} · {m.meta_it}</p>
            </div>
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