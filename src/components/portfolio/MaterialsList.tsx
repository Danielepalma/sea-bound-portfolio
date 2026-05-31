import { useEffect, useMemo, useState } from "react";
import { FileText, FileSpreadsheet, ArrowUpRight, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { MaterialPreview } from "./MaterialPreview";

type Material = {
  id: string;
  area: string;
  title_it: string;
  title_en: string;
  meta_it: string;
  meta_en: string;
  icon: string;
  file_path: string;
  topic: string | null;
  topic_order: number;
  thumbnail_path: string | null;
};

const IMG_EXT = /\.(png|jpe?g|gif|webp|svg|avif)$/i;

function MaterialIcon({ kind }: { kind: string }) {
  if (kind === "xls") return <FileSpreadsheet size={18} className="text-gold-700" />;
  return <FileText size={18} className="text-gold-700" />;
}

export function MaterialsList({ area }: { area: string }) {
  const { lang, t } = useLang();
  const [items, setItems] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("materials")
      .select("*")
      .eq("area", area)
      .order("topic_order")
      .order("topic")
      .order("sort_order")
      .then(({ data }) => {
        setItems((data ?? []) as Material[]);
        setLoading(false);
      });
  }, [area]);

  const groups = useMemo(() => {
    const map = new Map<string, { label: string; order: number; items: Material[] }>();
    for (const m of items) {
      const key = (m.topic ?? "").trim();
      const label = key.length > 0 ? key : t("materials_general_group");
      const g = map.get(label) ?? { label, order: m.topic_order ?? 0, items: [] };
      g.items.push(m);
      map.set(label, g);
    }
    return [...map.values()].sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));
  }, [items, t]);

  if (loading) {
    return <p className="text-ink-muted text-sm italic">…</p>;
  }

  if (items.length === 0) {
    return (
      <p className="text-ink-muted text-sm italic">
        {lang === "it"
          ? "Nessun materiale disponibile al momento."
          : "No materials available yet."}
      </p>
    );
  }

  return (
    <>
      <div className="space-y-8">
        {groups.map((g) => (
          <section key={g.label}>
            <h3 className="font-display text-[13px] uppercase tracking-wider-2 text-gold-700 border-b border-gold/30 pb-1 mb-3">
              {g.label}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {g.items.map((m) => {
                const url = supabase.storage.from("materials").getPublicUrl(m.file_path).data.publicUrl;
                const title = lang === "it" ? m.title_it : m.title_en;
                const meta = lang === "it" ? m.meta_it : m.meta_en;
                const thumbUrl = m.thumbnail_path
                  ? supabase.storage.from("materials").getPublicUrl(m.thumbnail_path).data.publicUrl
                  : IMG_EXT.test(m.file_path)
                  ? url
                  : null;
                return (
                  <div
                    key={m.id}
                    className="nautical-card p-4 flex items-start gap-3 group hover:-translate-y-0.5 transition-transform min-w-0"
                  >
                    {thumbUrl ? (
                      <button
                        type="button"
                        onClick={() => setPreview({ url, title })}
                        className="h-16 w-16 shrink-0 rounded-md overflow-hidden border border-gold/50 bg-offwhite"
                        aria-label={t("preview_label")}
                      >
                        <img src={thumbUrl} alt="" loading="lazy" className="h-full w-full object-cover" />
                      </button>
                    ) : (
                      <span className="h-9 w-9 shrink-0 rounded-full bg-offwhite border border-gold/50 flex items-center justify-center">
                        <MaterialIcon kind={m.icon} />
                      </span>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm text-navy leading-snug">{title}</p>
                      {meta && (
                        <p className="text-[11px] text-ink-muted mt-1 font-mono">{meta}</p>
                      )}
                      <div className="flex items-center gap-3 mt-2 text-[11px]">
                        <button
                          type="button"
                          onClick={() => setPreview({ url, title })}
                          className="inline-flex items-center gap-1 text-gold-700 hover:text-navy"
                        >
                          <Eye size={12} /> {t("preview_label")}
                        </button>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-gold-700 hover:text-navy"
                        >
                          <ArrowUpRight size={12} /> {t("open_label")}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      {preview && (
        <MaterialPreview url={preview.url} title={preview.title} onClose={() => setPreview(null)} />
      )}
    </>
  );
}