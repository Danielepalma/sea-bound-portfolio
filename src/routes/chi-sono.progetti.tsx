import { createFileRoute } from "@tanstack/react-router";
import { Check, ExternalLink, CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { projects } from "@/lib/content";
import { useEditable } from "@/hooks/use-page-content";

export const Route = createFileRoute("/chi-sono/progetti")({
  head: () => ({
    meta: [
      { title: "Progetti Europei — AENEAS, FLEXSHIP, OVERHEAT, UnderSec, TRUSTEE" },
      { name: "description", content: "Progetti Horizon Europe sul trasporto marittimo sostenibile." },
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
  const lead = useEditable("projects.lead");

  return (
    <div>
      <PageHeader icon="⚓" title={t("projects_title")} lead={lead} />

      <div className="space-y-6">
        {list.map((p) => (
          <article key={p.name} className="nautical-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 mb-5">
              <div className="shrink-0 flex md:block items-center justify-center">
                <div className="h-24 w-24 md:h-28 md:w-28 rounded-md bg-white border border-gold/40 flex items-center justify-center p-2 shadow-sm">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-wider-2 text-navy">
                      {p.name}
                    </h3>
                    <p className="text-navy font-semibold text-sm">{p.sub[lang]}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.badges.map((b) => (
                      <BadgePill key={b} kind={b} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted font-mono mb-3">
                  <span>{p.ref}</span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={12} className="text-gold-700" />
                    {p.period[lang]}
                  </span>
                </div>
                <p className="text-[15px] text-ink-muted leading-relaxed">{p.long[lang]}</p>
              </div>
            </div>

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

            <div className="mt-5 pt-5 border-t border-gold/20">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display uppercase tracking-wider-2 text-xs text-gold-700 hover:text-navy transition"
              >
                {lang === "it" ? "Sito ufficiale" : "Official site"}
                <ExternalLink size={12} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}