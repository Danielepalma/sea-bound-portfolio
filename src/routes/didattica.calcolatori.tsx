import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Star, Calculator } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { MaterialsList } from "@/components/portfolio/MaterialsList";
import { useLang } from "@/lib/i18n";
import { calculators } from "@/lib/content";

export const Route = createFileRoute("/didattica/calcolatori")({
  head: () => ({
    meta: [
      { title: "Calcolatori — Didattica della Navigazione" },
      { name: "description", content: "Calcolatori interattivi per la statica della nave e la navigazione." },
      { property: "og:title", content: "Calcolatori — Didattica" },
      { property: "og:description", content: "Calcolatori interattivi." },
    ],
  }),
  component: CalcolatoriPage,
});

function CalcolatoriPage() {
  const { t, lang } = useLang();
  return (
    <div>
      <PageHeader
        icon="🧮"
        title={t("teaching_calc_title")}
        lead={t("teaching_calc_lead")}
      />

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {calculators.map((c) => {
          const featured = c.status === "featured";
          const soon = c.status === "soon";
          return (
            <article
              key={c.title.it}
              className={`nautical-card p-6 flex flex-col ${featured ? "md:col-span-2 border-gold" : ""}`}
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

      <h3 className="font-display text-base uppercase tracking-wider-2 text-navy mb-4">
        {lang === "it" ? "Altri calcolatori caricati" : "Other uploaded calculators"}
      </h3>
      <MaterialsList area="calcolatori" />
    </div>
  );
}