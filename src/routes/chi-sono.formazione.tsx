import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award, ClipboardList } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { education } from "@/lib/content";
import { useEditable } from "@/hooks/use-page-content";

export const Route = createFileRoute("/chi-sono/formazione")({
  head: () => ({
    meta: [
      { title: "Formazione — Università di Napoli «Parthenope»" },
      { name: "description", content: "Percorso accademico in Scienze e Tecnologie della Navigazione, MASS e gestione ambientale." },
      { property: "og:title", content: "Formazione — Daniele Palma Esposito" },
      { property: "og:description", content: "Percorso accademico e specializzazione in MASS e gestione ambientale." },
    ],
  }),
  component: EducationPage,
});

const icons = [GraduationCap, Award, ClipboardList];

function EducationPage() {
  const { t, lang } = useLang();
  const lead = useEditable("education.lead");

  return (
    <div>
      <PageHeader icon="🎓" title={t("education_title")} lead={lead} />

      <div className="relative pl-8">
        <div className="absolute left-2 top-2 bottom-2 w-[2px] timeline-line rounded" />
        {education.map((e, i) => {
          const Icon = icons[i] ?? GraduationCap;
          return (
            <div key={i} className="relative mb-8 last:mb-0">
              <span className="absolute -left-7 top-1.5 h-4 w-4 rounded-full bg-gold-gradient ring-4 ring-white" />
              <div className="nautical-card p-6">
                <div className="flex items-start gap-3">
                  <Icon size={20} className="text-gold mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h4 className="font-display uppercase tracking-wider-2 text-sm text-navy">
                        {e.title[lang]}
                      </h4>
                      <span className="text-[11px] font-mono text-gold-700">{e.year}</span>
                    </div>
                    <p className="text-xs text-gold-700 font-semibold">{e.sub[lang]}</p>
                    <p className="text-xs text-ink-muted italic mt-0.5">{e.inst}</p>
                    <p className="text-sm text-ink-muted mt-3 leading-relaxed">{e.body[lang]}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}