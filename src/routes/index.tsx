import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Compass,
  BookOpen,
  FileText,
  Calculator,
  Sigma,
  GraduationCap,
  Mail,
  User,
  ArrowRight,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daniele Palma Esposito — Ricercatore e Docente di Navigazione" },
      {
        name: "description",
        content:
          "Portfolio di Daniele Palma Esposito, ricercatore in sostenibilità dei trasporti presso ISSNOVA e docente di Navigazione.",
      },
      { property: "og:title", content: "Daniele Palma Esposito — Navigazione & Ricerca" },
      {
        property: "og:description",
        content:
          "Ricercatore in sostenibilità dei trasporti marittimi e docente di Navigazione. Progetti Horizon Europe, GNSS, MASS, Sensor Fusion.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();

  const teachingCards = [
    {
      to: "/didattica/lezioni",
      icon: BookOpen,
      label: t("nav_lessons"),
      body: t("teaching_materials_lead"),
    },
    {
      to: "/didattica/appunti",
      icon: FileText,
      label: t("nav_notes"),
      body: t("teaching_materials_lead"),
    },
    {
      to: "/didattica/calcolatori",
      icon: Calculator,
      label: t("nav_calculators"),
      body: t("teaching_calc_lead"),
    },
    {
      to: "/didattica/formulari",
      icon: Sigma,
      label: t("nav_formularies"),
      body: t("teaching_formulari_lead"),
    },
  ] as const;

  const secondary = [
    { to: "/chi-sono", icon: User, label: t("nav_about") },
    { to: "/cv", icon: GraduationCap, label: t("nav_cv") },
    { to: "/contatti", icon: Mail, label: t("nav_contact") },
  ] as const;

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-navy-gradient text-white rounded-md p-8 md:p-10 mb-10 border border-gold/30 shadow-soft"
      >
        <p className="font-display text-[11px] uppercase tracking-wider-2 text-gold mb-3">
          <Compass className="inline mr-2" size={14} /> {t("home_students_title")}
        </p>
        <h1 className="font-display text-2xl md:text-4xl text-gold-light mb-4 leading-tight">
          {t("home_students_title")}
        </h1>
        <p className="text-white/80 max-w-2xl leading-relaxed mb-6">
          {t("home_students_body")}
        </p>
        <Link
          to="/didattica/lezioni"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-navy font-display uppercase tracking-wider-2 text-xs hover:opacity-90 transition"
        >
          <BookOpen size={14} /> {t("home_teaching_cta")} <ArrowRight size={12} />
        </Link>
      </motion.section>

      <h2 className="section-title text-xl mb-6">{t("nav_teaching")}</h2>
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {teachingCards.map((c, i) => (
          <motion.div
            key={c.to}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              to={c.to}
              className="nautical-card p-6 block group h-full hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
                  <c.icon size={18} />
                </span>
                <h3 className="font-display uppercase tracking-wider-2 text-sm text-navy">
                  {c.label}
                </h3>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-3">{c.body}</p>
              <span className="inline-flex items-center gap-1.5 text-gold-700 font-display uppercase tracking-wider-2 text-[11px] group-hover:gap-2.5 transition-all">
                {t("read_more")} <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <h2 className="section-title text-xl mb-6">{t("home_more")}</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {secondary.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="nautical-card p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
          >
            <span className="h-9 w-9 rounded-full bg-offwhite border border-gold/40 flex items-center justify-center">
              <c.icon size={16} className="text-gold-700" />
            </span>
            <span className="font-display uppercase tracking-wider-2 text-xs text-navy">
              {c.label}
            </span>
            <ArrowRight size={12} className="ml-auto text-gold-700" />
          </Link>
        ))}
      </div>
    </div>
  );
}
