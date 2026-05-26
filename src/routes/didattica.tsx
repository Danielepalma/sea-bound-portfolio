import { createFileRoute } from "@tanstack/react-router";
import { FileText, FileSpreadsheet, ArrowUpRight, Star, Calculator } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { teachingMaterials, calculators, PORTFOLIO_BASE } from "@/lib/content";

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

function MaterialIcon({ kind }: { kind: "pdf" | "xls" | "doc" }) {
  if (kind === "xls") return <FileSpreadsheet size={18} className="text-gold-700" />;
  return <FileText size={18} className="text-gold-700" />;
}

function TeachingPage() {
  const { t, lang } = useLang();

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

        <div className="space-y-8">
          {teachingMaterials.map((g) => (
            <div key={g.title.it}>
              <p className="font-display uppercase tracking-wider-2 text-xs text-gold-700 mb-3">
                {g.title[lang]}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {g.items.map((it) => (
                  <a
                    key={it.title.it}
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nautical-card p-4 flex items-start gap-3 group hover:-translate-y-0.5 transition-transform"
                  >
                    <span className="h-9 w-9 shrink-0 rounded-full bg-offwhite border border-gold/50 flex items-center justify-center">
                      <MaterialIcon kind={it.icon} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-display text-sm text-navy leading-snug">
                        {it.title[lang]}
                      </span>
                      <span className="block text-[11px] text-ink-muted mt-1 font-mono">
                        {it.meta[lang]}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-gold-700 mt-1 shrink-0 opacity-60 group-hover:opacity-100 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
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

      <div className="text-center">
        <a
          href={PORTFOLIO_BASE + "/"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display uppercase tracking-wider-2 text-sm text-gold-700 hover:text-navy transition"
        >
          {t("teaching_portfolio_cta")} <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}