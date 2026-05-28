import { useEffect, useState } from "react";
import { FileText, FileSpreadsheet, ArrowUpRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";

type Material = {
  id: string;
  area: string;
  title_it: string;
  title_en: string;
  meta_it: string;
  meta_en: string;
  icon: string;
  file_path: string;
};

function MaterialIcon({ kind }: { kind: string }) {
  if (kind === "xls") return <FileSpreadsheet size={18} className="text-gold-700" />;
  return <FileText size={18} className="text-gold-700" />;
}

export function MaterialsList({ area }: { area: string }) {
  const { lang } = useLang();
  const [items, setItems] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("materials")
      .select("*")
      .eq("area", area)
      .order("sort_order")
      .then(({ data }) => {
        setItems((data ?? []) as Material[]);
        setLoading(false);
      });
  }, [area]);

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
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((m) => {
        const url = supabase.storage.from("materials").getPublicUrl(m.file_path).data.publicUrl;
        const title = lang === "it" ? m.title_it : m.title_en;
        const meta = lang === "it" ? m.meta_it : m.meta_en;
        return (
          <a
            key={m.id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="nautical-card p-4 flex items-start gap-3 group hover:-translate-y-0.5 transition-transform"
          >
            <span className="h-9 w-9 shrink-0 rounded-full bg-offwhite border border-gold/50 flex items-center justify-center">
              <MaterialIcon kind={m.icon} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-display text-sm text-navy leading-snug">{title}</span>
              {meta && (
                <span className="block text-[11px] text-ink-muted mt-1 font-mono">{meta}</span>
              )}
            </span>
            <ArrowUpRight
              size={16}
              className="text-gold-700 mt-1 shrink-0 opacity-60 group-hover:opacity-100 transition"
            />
          </a>
        );
      })}
    </div>
  );
}