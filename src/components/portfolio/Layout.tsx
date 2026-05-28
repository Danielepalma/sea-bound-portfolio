import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Compass, MapPin, Ship, Menu, X, Globe, Shield } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import { useLang } from "@/lib/i18n";
import { useAuth } from "@/hooks/use-auth";

function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "it" ? "en" : "it")}
      aria-label="Toggle language"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/60 text-gold-light text-[11px] uppercase tracking-wider-2 font-display hover:bg-white/5 transition"
    >
      <Globe size={12} />
      {t("lang_switch")}
    </button>
  );
}

export function PortfolioLayout({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const { isAdmin } = useAuth();
  const [navOpen, setNavOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const NAV = [
    { to: "/", label: t("nav_home") },
    { to: "/chi-sono", label: t("nav_about") },
    { to: "/ricerca", label: t("nav_research") },
    { to: "/progetti", label: t("nav_projects") },
    { to: "/didattica", label: t("nav_teaching") },
    { to: "/formazione", label: t("nav_education") },
    { to: "/contatti", label: t("nav_contact") },
  ] as const;

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="bg-navy-gradient text-white relative">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <Link to="/" className="block">
              <div className="p-1 rounded-full bg-gold-gradient">
                <div className="p-1 rounded-full bg-navy-deep">
                  <img
                    src={profilePhoto}
                    alt="Daniele Palma Esposito"
                    width={144}
                    height={144}
                    className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-center md:text-left flex-1"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 flex-wrap">
              <span className="pill pill-gold inline-flex">
                <Compass size={12} /> {t("badge")}
              </span>
              <LangToggle />
              {isAdmin && (
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/60 text-gold-light text-[11px] uppercase tracking-wider-2 font-display hover:bg-white/5 transition"
                >
                  <Shield size={12} /> Admin
                </Link>
              )}
            </div>
            <Link to="/" className="block">
              <h1 className="font-display text-3xl md:text-5xl text-gold-light leading-tight hover:text-gold transition">
                Daniele Palma Esposito
              </h1>
            </Link>
            <p className="mt-3 text-xs md:text-sm uppercase tracking-wider-2 text-white/75 font-light">
              {t("role")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start text-xs text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={12} className="text-gold" /> {t("location")}
              </span>
              <span className="opacity-40">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Ship size={12} className="text-gold" /> ISSNOVA
              </span>
            </div>
          </motion.div>

          <button
            onClick={() => setNavOpen((v) => !v)}
            className="md:hidden absolute top-4 right-4 text-gold-light"
            aria-label="Toggle navigation"
          >
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className="gold-rule" />
      </header>

      {/* LAYOUT */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">
        <aside
          className={`${
            navOpen ? "block" : "hidden"
          } md:block md:sticky md:top-6 md:self-start md:w-56 shrink-0 md:py-10`}
        >
          <nav className="bg-navy text-white rounded-md p-4 border border-gold/30 shadow-soft">
            <p className="font-display text-[11px] uppercase tracking-wider-2 text-gold mb-3 px-2">
              {t("sidebar_title")}
            </p>
            <ul className="space-y-1">
              {NAV.map((n) => {
                const active = pathname === n.to;
                return (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      onClick={() => setNavOpen(false)}
                      className={`block px-3 py-2 rounded text-[12px] font-display uppercase tracking-wider-2 transition ${
                        active
                          ? "bg-gold-gradient text-navy font-semibold"
                          : "text-white/80 hover:text-gold-light hover:bg-white/5"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 min-w-0 py-10">{children}</main>
      </div>

      <footer className="bg-navy-gradient text-white/80 mt-16">
        <div className="gold-rule" />
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p className="font-display uppercase tracking-wider-2 text-gold-light">
            Daniele Palma Esposito
          </p>
          <p className="text-white/60">
            © {new Date().getFullYear()} · Ricercatore ISSNOVA · {t("role")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  icon,
  title,
  lead,
}: {
  icon?: string;
  title: string;
  lead?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="section-title text-2xl md:text-3xl mb-3 flex items-center gap-3">
        {icon && <span aria-hidden>{icon}</span>}
        {title}
      </h2>
      {lead && <p className="text-ink-muted text-[15px] md:text-base max-w-3xl leading-relaxed">{lead}</p>}
    </motion.div>
  );
}