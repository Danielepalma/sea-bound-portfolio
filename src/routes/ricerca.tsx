import { createFileRoute } from "@tanstack/react-router";
import { Ship, Leaf, Satellite } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/ricerca")({
  head: () => ({
    meta: [
      { title: "Ricerca — MASS, Sostenibilità Marittima, GNSS" },
      { name: "description", content: "Aree di ricerca: MASS, sostenibilità del trasporto marittimo, GNSS e sensor fusion." },
      { property: "og:title", content: "Ricerca — Daniele Palma Esposito" },
      { property: "og:description", content: "Aree di ricerca su MASS, sostenibilità marittima e GNSS." },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const { t } = useLang();

  const areas = [
    { icon: Ship, title: t("research_mass_title"), body: t("research_mass_body") },
    { icon: Leaf, title: t("research_sus_title"), body: t("research_sus_body") },
    { icon: Satellite, title: t("research_gnss_title"), body: t("research_gnss_body") },
  ];

  return (
    <div>
      <PageHeader icon="📐" title={t("research_title")} lead={t("research_lead")} />

      <div className="bg-navy-gradient rounded-md p-6 md:p-8 shadow-soft border border-gold/30 mb-8">
        <div className="grid md:grid-cols-3 gap-5">
          {areas.map((r) => (
            <div
              key={r.title}
              className="bg-navy-deep/60 backdrop-blur border border-gold/40 rounded-md p-5"
            >
              <div className="h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center text-navy mb-3">
                <r.icon size={18} />
              </div>
              <h3 className="font-display text-gold-light uppercase tracking-wider-2 text-sm mb-2">
                {r.title}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {areas.map((r) => (
          <article key={r.title} className="nautical-card p-6">
            <h4 className="font-display uppercase tracking-wider-2 text-sm text-navy mb-3">
              {r.title}
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed">{r.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}