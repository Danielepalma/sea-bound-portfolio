import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Compass, MapPin, Ship, Menu, X, Globe, Shield, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
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

  type NavItem =
    | { to: string; label: string }
    | { label: string; children: { to: string; label: string }[] };

  const NAV: NavItem[] = [
    { to: "/", label: t("nav_home") },
    {
      label: t("nav_teaching"),
      children: [
        { to: "/didattica/lezioni", label: t("nav_lessons") },
        { to: "/didattica/esercitazioni", label: t("nav_exercises") },
        { to: "/didattica/appunti", label: t("nav_notes") },
        { to: "/didattica/calcolatori", label: t("nav_calculators") },
        { to: "/didattica/formulari", label: t("nav_formularies") },
      ],
    },
    {
      label: t("nav_about"),
      children: [
        { to: "/chi-sono", label: t("nav_profile") },
        { to: "/chi-sono/progetti", label: t("nav_projects") },
        { to: "/chi-sono/formazione", label: t("nav_education") },
      ],
    },
    { to: "/cv", label: t("nav_cv") },
    { to: "/contatti", label: t("nav_contact") },
  ];

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
              <img
                src={logo}
                alt="Daniele Palma Esposito — logo"
                width={192}
                height={192}
                className="h-36 w-36 md:h-44 md:w-44 rounded-full object-cover bg-navy ring-2 ring-gold/60 shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
              />
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
              {NAV.map((n) =>
                "children" in n ? (
                  <NavGroup
                    key={n.label}
                    label={n.label}
                    items={n.children}
                    pathname={pathname}
                    onNavigate={() => setNavOpen(false)}
                  />
                ) : (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      onClick={() => setNavOpen(false)}
                      className={`block px-3 py-2 rounded text-[12px] font-display uppercase tracking-wider-2 transition ${
                        pathname === n.to
                          ? "bg-gold-gradient text-navy font-semibold"
                          : "text-white/80 hover:text-gold-light hover:bg-white/5"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                ),
              )}
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

function NavGroup({
  label,
  items,
  pathname,
  onNavigate,
}: {
  label: string;
  items: { to: string; label: string }[];
  pathname: string;
  onNavigate: () => void;
}) {
  const anyActive = items.some((i) => pathname === i.to || pathname.startsWith(i.to + "/"));
  const [open, setOpen] = useState(anyActive);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-3 py-2 rounded text-[12px] font-display uppercase tracking-wider-2 transition ${
          anyActive ? "text-gold-light bg-white/5" : "text-white/80 hover:text-gold-light hover:bg-white/5"
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="mt-1 ml-2 pl-2 border-l border-gold/30 space-y-1">
          {items.map((i) => {
            const active = pathname === i.to;
            return (
              <li key={i.to}>
                <Link
                  to={i.to}
                  onClick={onNavigate}
                  className={`block px-3 py-1.5 rounded text-[11px] font-display uppercase tracking-wider-2 transition ${
                    active
                      ? "bg-gold-gradient text-navy font-semibold"
                      : "text-white/70 hover:text-gold-light hover:bg-white/5"
                  }`}
                >
                  {i.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
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