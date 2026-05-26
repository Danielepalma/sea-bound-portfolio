import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Check } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/progetti")({
  head: () => ({
    meta: [
      { title: "Progetti Europei — AENEAS, FLEXSHIP, OVERHEAT" },
      { name: "description", content: "Progetti Horizon Europe: AENEAS, FLEXSHIP, OVERHEAT — trasporto marittimo a impatto zero." },
      { property: "og:title", content: "Progetti Europei — Daniele Palma Esposito" },
      { property: "og:description", content: "Progetti Horizon Europe sul trasporto marittimo sostenibile." },
    ],
  }),
  component: ProjectsPage,
});

function BadgePill({ kind }: { kind: "horizon" | "active" | "project" }) {
  const { t } = useLang();
  if (kind === "horizon") return <span className="pill pill-blue">{t("eu_horizon")}</span>;
  if (kind === "active") return <span className="pill pill-green">{t("status_active")}</span>;
  return <span className="pill pill-amber">{t("eu_project")}</span>;
}

function ProjectsPage() {
  const { t, lang } = useLang();
  const list = Object.values(projects);

  return (
    <div>
      <PageHeader icon="⚓" title={t("projects_title")} lead={t("projects_lead")} />

      <div className="space-y-6">
        {list.map((p) => (
          <article key={p.name} className="nautical-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
                  <Anchor size={18} />
                </span>
                <div>
                  <h3 className="font-display text-lg uppercase tracking-wider-2 text-navy">
                    {p.name}
                  </h3>
                  <p className="text-navy font-semibold text-sm">{p.sub[lang]}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <BadgePill key={b} kind={b} />
                ))}
              </div>
            </div>

            <p className="text-xs text-ink-muted mb-4 font-mono">{p.ref}</p>
            <p className="text-[15px] text-ink-muted leading-relaxed mb-5">{p.long[lang]}</p>

            <p className="font-display uppercase tracking-wider-2 text-xs text-navy mb-3">
              {lang === "it" ? "Obiettivi" : "Objectives"}
            </p>
            <ul className="space-y-2">
              {p.objectives[lang].map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-ink-muted">
                  <Check size={16} className="text-gold-700 mt-0.5 shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}