import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Compass } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { subjects } from "@/lib/content";

export const Route = createFileRoute("/didattica")({
  head: () => ({
    meta: [
      { title: "Didattica — Docente di Navigazione" },
      { name: "description", content: "Docenza di Navigazione: formazione di tecnici nel settore dei trasporti marittimi." },
      { property: "og:title", content: "Didattica — Daniele Palma Esposito" },
      { property: "og:description", content: "Docenza di Navigazione e formazione tecnica nel settore marittimo." },
    ],
  }),
  component: TeachingPage,
});

function TeachingPage() {
  const { t, lang } = useLang();

  return (
    <div>
      <PageHeader icon="📚" title={t("teaching_title")} lead={t("teaching_body")} />

      <div className="grid md:grid-cols-2 gap-6">
        <article className="nautical-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-9 w-9 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
              <BookOpen size={16} />
            </span>
            <h3 className="font-display text-base uppercase tracking-wider-2 text-navy">
              {t("teaching_role")}
            </h3>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-muted">{t("teaching_body")}</p>
          <p className="mt-6 font-display uppercase tracking-wider-2 text-xs text-navy mb-3">
            {t("teaching_subjects")}
          </p>
          <div className="flex flex-wrap gap-2">
            {subjects[lang].map((s) => (
              <span key={s} className="pill pill-navy">
                {s}
              </span>
            ))}
          </div>
        </article>

        <article className="nautical-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-9 w-9 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
              <Compass size={16} />
            </span>
            <h3 className="font-display text-base uppercase tracking-wider-2 text-navy">
              {t("teaching_approach_title")}
            </h3>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-muted">{t("teaching_approach_body")}</p>
        </article>
      </div>
    </div>
  );
}