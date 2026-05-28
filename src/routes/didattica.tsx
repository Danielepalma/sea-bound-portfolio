import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FileText, FileSpreadsheet, ArrowUpRight, Star, Calculator, Sigma } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { calculators, formulari } from "@/lib/content";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/didattica")({
  head: () => ({
    meta: [
      { title: "Didattica — Docente di Navigazione" },
      { name: "description", content: "Materiali, lezioni e calcolatori interattivi per la didattica della navigazione, statica della nave e idrostatica." },
      { property: "og:title", content: "Didattica — Daniele Palma Esposito" },
      { property: "og:description", content: "Materiali, lezioni e calcolatori interattivi per gli studenti dell'ITTL." },
    ],
  }),
  component: TeachingPage,
});

function MaterialIcon({ kind }: { kind: string }) {
  if (kind === "xls") return <FileSpreadsheet size={18} className="text-gold-700" />;
  return <FileText size={18} className="text-gold-700" />;
}

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

function TeachingPage() {
  const { t, lang } = useLang();
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    supabase
      .from("materials")
      .select("*")
      .order("area")
      .order("sort_order")
      .then(({ data }) => setMaterials((data ?? []) as Material[]));
  }, []);

  const grouped = materials.reduce<Record<string, Material[]>>((acc, m) => {
    (acc[m.area] ??= []).push(m);
    return acc;
  }, {});

  return (
    <div>
      <PageHeader icon="📚" title={t("teaching_title")} lead={t("teaching_body")} />

      {/* MATERIALI */}
      <section className="mb-14">
        <div className="mb-6">
          <h3 className="font-display text-xl md:text-2xl text-navy uppercase tracking-wider-2 mb-2">
            {t("teaching_materials_title")}
          </h3>
          <p className="text-ink-muted text-sm max-w-3xl">{t("teaching_materials_lead")}</p>
        </div>

        {materials.length === 0 ? (
          <p className="text-ink-muted text-sm italic">
            {lang === "it"
              ? "Nessun materiale disponibile al momento."
              : "No materials available yet."}
          </p>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([area, items]) => (
              <div key={area}>
                <p className="font-display uppercase tracking-wider-2 text-xs text-gold-700 mb-3">
                  {area}
                </p>
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
                          <span className="block font-display text-sm text-navy leading-snug">
                            {title}
                          </span>
                          {meta && (
                            <span className="block text-[11px] text-ink-muted mt-1 font-mono">
                              {meta}
                            </span>
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
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CALCOLATORI */}
      <section className="mb-12">
        <div className="mb-6">
          <h3 className="font-display text-xl md:text-2xl text-navy uppercase tracking-wider-2 mb-2">
            {t("teaching_calc_title")}
          </h3>
          <p className="text-ink-muted text-sm max-w-3xl">{t("teaching_calc_lead")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {calculators.map((c) => {
            const featured = c.status === "featured";
            const soon = c.status === "soon";
            return (
              <article
                key={c.title.it}
                className={`nautical-card p-6 flex flex-col ${
                  featured ? "md:col-span-2 border-gold" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold text-lg">
                      {c.emoji}
                    </span>
                    <h4 className="font-display text-base md:text-lg uppercase tracking-wider-2 text-navy">
                      {c.title[lang]}
                    </h4>
                  </div>
                  {featured && (
                    <span className="pill pill-gold inline-flex shrink-0">
                      <Star size={11} /> {t("teaching_featured")}
                    </span>
                  )}
                </div>
                <p className="text-[14px] text-ink-muted leading-relaxed mb-4">{c.body[lang]}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {c.tags.map((tag) => (
                    <span key={tag} className="pill pill-navy">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  {soon ? (
                    <span className="pill pill-amber inline-flex">{t("teaching_soon")}</span>
                  ) : (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-navy inline-flex items-center gap-2"
                    >
                      <Calculator size={14} /> {t("teaching_open")}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* FORMULARI */}
      <section className="mb-14">
        <div className="mb-6 flex items-start gap-3">
          <span className="h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold shrink-0">
            <Sigma size={18} />
          </span>
          <div>
            <h3 className="font-display text-xl md:text-2xl text-navy uppercase tracking-wider-2 mb-2">
              {t("teaching_formulari_title")}
            </h3>
            <p className="text-ink-muted text-sm max-w-3xl">{t("teaching_formulari_lead")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {formulari.map((g) => (
            <article key={g.title.it} className="nautical-card p-6">
              <h4 className="font-display text-base uppercase tracking-wider-2 text-navy mb-4 pb-3 border-b border-gold/30">
                {g.title[lang]}
              </h4>
              <ul className="space-y-4">
                {g.formulas.map((f) => (
                  <li key={f.name.it}>
                    <p className="font-display text-[13px] text-navy mb-1">{f.name[lang]}</p>
                    <p className="font-mono text-[13px] bg-offwhite border border-gold/30 rounded px-3 py-2 text-navy">
                      {f.expression}
                    </p>
                    <p className="text-[11px] text-ink-muted mt-1 font-mono">{f.legend[lang]}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}