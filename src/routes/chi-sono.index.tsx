import { createFileRoute } from "@tanstack/react-router";
import { Anchor } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { skills } from "@/lib/content";

export const Route = createFileRoute("/chi-sono/")({
  head: () => ({
    meta: [
      { title: "Chi Sono — Daniele Palma Esposito" },
      { name: "description", content: "Biografia di Daniele Palma Esposito, ricercatore ISSNOVA e docente di Navigazione." },
      { property: "og:title", content: "Chi Sono — Daniele Palma Esposito" },
      { property: "og:description", content: "Biografia di Daniele Palma Esposito, ricercatore ISSNOVA e docente di Navigazione." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <div>
      <PageHeader icon="🧭" title={t("about_title")} lead={t("about_lead")} />

      <div className="grid md:grid-cols-[1fr_2fr] gap-6">
        <div className="nautical-card p-5">
          <img
            src={profilePhoto}
            alt="Daniele Palma Esposito"
            width={400}
            height={400}
            loading="lazy"
            className="w-full aspect-square object-cover rounded-md border border-gold/40"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="pill pill-gold">ISSNOVA</span>
            <span className="pill pill-navy">{t("teaching_role")}</span>
          </div>
        </div>
        <div className="nautical-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-9 w-9 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
              <Anchor size={16} />
            </span>
            <h3 className="font-display text-base uppercase tracking-wider-2 text-navy">
              {t("bio_card_title")}
            </h3>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-muted">{t("about_p1")}</p>
          <p className="text-[15px] leading-relaxed text-ink-muted mt-3">{t("about_p2")}</p>

          <p className="mt-6 font-display uppercase tracking-wider-2 text-xs text-navy mb-3">
            {t("skills_label")}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="pill pill-gold">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}