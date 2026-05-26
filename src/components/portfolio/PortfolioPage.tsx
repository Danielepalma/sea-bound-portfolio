import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Anchor,
  Compass,
  Ship,
  Satellite,
  Leaf,
  GraduationCap,
  BookOpen,
  Mail,
  MapPin,
  Linkedin,
  Menu,
  X,
  Award,
  ClipboardList,
  Send,
} from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

const NAV = [
  { id: "chi-sono", label: "Chi Sono" },
  { id: "ricerca", label: "Ricerca" },
  { id: "progetti", label: "Progetti Europei" },
  { id: "didattica", label: "Didattica" },
  { id: "formazione", label: "Formazione" },
  { id: "contatti", label: "Contatti" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function Section({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="scroll-mt-28 py-14"
    >
      <h2 className="section-title text-xl md:text-2xl mb-8 flex items-center gap-3">
        {icon && <span aria-hidden>{icon}</span>}
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function CardHeader({ icon: Icon, title }: { icon: typeof Anchor; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="h-9 w-9 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
        <Icon size={16} />
      </span>
      <h3 className="font-display text-base uppercase tracking-wider-2 text-navy">{title}</h3>
    </div>
  );
}

export function PortfolioPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="bg-navy-gradient text-white relative">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="shrink-0"
          >
            <div className="p-1 rounded-full bg-gold-gradient">
              <div className="p-1 rounded-full bg-navy-deep">
                <img
                  src={profilePhoto}
                  alt="Daniele Palma Esposito"
                  width={144}
                  height={144}
                  className="h-32 w-32 md:h-36 md:w-36 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center md:text-left flex-1"
          >
            <span className="pill pill-gold mb-4 inline-flex">
              <Compass size={12} /> Docente & Ricercatore
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-gold-light leading-tight">
              Daniele Palma Esposito
            </h1>
            <p className="mt-3 text-xs md:text-sm uppercase tracking-wider-2 text-white/75 font-light">
              Ricercatore e Docente di Navigazione
            </p>
            <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start text-xs text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={12} className="text-gold" /> Giugliano in Campania, Italia
              </span>
              <span className="opacity-40">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Ship size={12} className="text-gold" /> ISSNOVA · Docente di Navigazione
              </span>
            </div>
          </motion.div>

          {/* Mobile menu toggle */}
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
        {/* SIDEBAR */}
        <aside
          className={`${
            navOpen ? "block" : "hidden"
          } md:block md:sticky md:top-6 md:self-start md:w-56 shrink-0 md:py-10`}
        >
          <nav className="bg-navy text-white rounded-md p-4 border border-gold/30 shadow-soft">
            <p className="font-display text-[11px] uppercase tracking-wider-2 text-gold mb-3 px-2">
              Navigazione
            </p>
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setNavOpen(false)}
                    className="block px-3 py-2 rounded text-sm text-white/80 hover:text-gold-light hover:bg-white/5 transition font-display uppercase tracking-wider-2 text-[12px]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 min-w-0">
          {/* CHI SONO */}
          <Section id="chi-sono" icon="🧭" title="Chi Sono">
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
                  <span className="pill pill-navy">Docente di Navigazione</span>
                </div>
              </div>
              <div className="nautical-card p-6">
                <CardHeader icon={Anchor} title="Bio" />
                <p className="text-[15px] leading-relaxed text-ink-muted">
                  Sono un <strong className="text-navy">Ricercatore in Sostenibilità dei Trasporti</strong>{" "}
                  presso ISSNOVA e docente di Navigazione. Ho conseguito la Laurea Magistrale (con lode) in Scienze e
                  Tecnologie della Navigazione all&apos;Università degli Studi di Napoli
                  &laquo;Parthenope&raquo;, con specializzazione in{" "}
                  <em>MASS — Maritime Autonomous Surface Ships e navigazione a rotta adattiva</em>.
                </p>
                <p className="text-[15px] leading-relaxed text-ink-muted mt-3">
                  Nel percorso accademico ho acquisito competenze avanzate in: elaborazione dati
                  GNSS, telerilevamento, navigazione inerziale e sensor fusion. Ho partecipato a
                  diversi progetti europei nel settore marittimo.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "GNSS",
                    "Telerilevamento",
                    "Navigazione Inerziale",
                    "Sensor Fusion",
                    "MASS",
                    "Gestione Ambientale",
                  ].map((s) => (
                    <span key={s} className="pill pill-gold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* RICERCA */}
          <Section id="ricerca" icon="📐" title="Aree di Ricerca">
            <div className="bg-navy-gradient rounded-md p-6 md:p-8 shadow-soft border border-gold/30">
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    icon: Ship,
                    title: "MASS — Navi Autonome",
                    body: "Navigazione autonoma di superficie e rotta adattiva per il trasporto marittimo del futuro.",
                  },
                  {
                    icon: Leaf,
                    title: "Sostenibilità Marittima",
                    body: "Efficienza ambientale, riduzione delle emissioni e performance navale.",
                  },
                  {
                    icon: Satellite,
                    title: "GNSS & Sensor Fusion",
                    body: "Elaborazione dati di posizionamento, telerilevamento e integrazione inerziale.",
                  },
                ].map((r) => (
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
          </Section>

          {/* PROGETTI EUROPEI */}
          <Section id="progetti" icon="⚓" title="Progetti Europei">
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  name: "AENEAS",
                  sub: "Sistemi innovativi di accumulo energia a bordo",
                  ref: "EU Horizon GA 101095902 · HORIZON-CL5-2022-D5-01-02",
                  badges: [
                    { c: "pill-blue", t: "EU Horizon" },
                    { c: "pill-green", t: "In corso" },
                  ],
                  desc: "Trasporto marittimo a impatto climatico zero, stoccaggio energia di nuova generazione, navigazione elettrica parziale o completa.",
                },
                {
                  name: "FLEXSHIP",
                  sub: "Electrification of vessels — Green Digital Twin",
                  ref: "EU Horizon GA 101095863 · HORIZON-CL5-2022-D5-01-01",
                  badges: [
                    { c: "pill-blue", t: "EU Horizon" },
                    { c: "pill-green", t: "In corso" },
                  ],
                  desc: "Gemello digitale verde per architetture elettriche navali, sistema batteria modulare ad alta efficienza.",
                },
                {
                  name: "OVERHEAT",
                  sub: "Overheating of critical systems in vessels",
                  ref: "EU Project · Sostenibilità marittima europea",
                  badges: [{ c: "pill-amber", t: "EU Project" }],
                  desc: "Studio dei fenomeni di surriscaldamento dei sistemi critici di bordo per la sicurezza e la sostenibilità navale.",
                },
              ].map((p) => (
                <div key={p.name} className="nautical-card p-6">
                  <CardHeader icon={Anchor} title={p.name} />
                  <p className="text-navy font-semibold text-sm mb-1">{p.sub}</p>
                  <p className="text-xs text-ink-muted mb-3 font-mono">{p.ref}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.badges.map((b) => (
                      <span key={b.t} className={`pill ${b.c}`}>
                        {b.t}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* DIDATTICA */}
          <Section id="didattica" icon="📚" title="Didattica">
            <div className="nautical-card p-6 md:p-8">
              <CardHeader icon={BookOpen} title="Docente di Navigazione" />
              <p className="text-[15px] leading-relaxed text-ink-muted">
                Docente di Navigazione. Formazione di tecnici nel settore dei trasporti marittimi,
                con attenzione alle competenze tecnico-pratiche e alla cultura nautica.
              </p>
              <div className="mt-6">
                <p className="font-display uppercase tracking-wider-2 text-xs text-navy mb-3">
                  Materie & Aree
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Navigazione",
                    "Strumenti Nautici",
                    "Tecnologia Marittima",
                    "GNSS e Posizionamento",
                    "Scienze Nautiche",
                  ].map((s) => (
                    <span key={s} className="pill pill-navy">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* FORMAZIONE */}
          <Section id="formazione" icon="🎓" title="Formazione">
            <div className="relative pl-8">
              <div className="absolute left-2 top-2 bottom-2 w-[2px] timeline-line rounded" />
              {[
                {
                  icon: GraduationCap,
                  title: "Laurea Triennale con Lode",
                  sub: "Scienze Nautiche, Aeronautiche e Meteo-Oceanografiche · 2021",
                  body: "Università degli Studi di Napoli «Parthenope».",
                },
                {
                  icon: Award,
                  title: "Laurea Magistrale",
                  sub: "Scienze e Tecnologie della Navigazione · Univ. Napoli «Parthenope»",
                  body: "Tesi: «MASS e Navigazione a Rotta Adattiva: un caso di studio».",
                },
                {
                  icon: ClipboardList,
                  title: "Advanced Training — Environmental Manager",
                  sub: "Gestione ambientale e performance navale",
                  body: "Specializzazione in sostenibilità e gestione ambientale per il trasporto marittimo.",
                },
              ].map((e, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  <span className="absolute -left-7 top-1.5 h-4 w-4 rounded-full bg-gold-gradient ring-4 ring-white" />
                  <div className="nautical-card p-5">
                    <div className="flex items-start gap-3">
                      <e.icon size={18} className="text-gold mt-1 shrink-0" />
                      <div>
                        <h4 className="font-display uppercase tracking-wider-2 text-sm text-navy">
                          {e.title}
                        </h4>
                        <p className="text-xs text-gold-700 mt-0.5 font-semibold">{e.sub}</p>
                        <p className="text-sm text-ink-muted mt-2 leading-relaxed">{e.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* CONTATTI */}
          <Section id="contatti" icon="✉️" title="Contatti">
            <div className="grid md:grid-cols-[2fr_1fr] gap-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 4000);
                  (e.target as HTMLFormElement).reset();
                }}
                className="nautical-card p-6 space-y-4"
              >
                <CardHeader icon={Mail} title="Inviami un messaggio" />
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider-2 text-navy mb-1.5">
                    Nome
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-3 py-2.5 rounded border border-gold/40 bg-offwhite focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider-2 text-navy mb-1.5">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-3 py-2.5 rounded border border-gold/40 bg-offwhite focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider-2 text-navy mb-1.5">
                    Messaggio
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 rounded border border-gold/40 bg-offwhite focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm"
                  />
                </div>
                <button type="submit" className="btn-navy inline-flex items-center gap-2">
                  <Send size={14} /> {sent ? "Inviato" : "Invia"}
                </button>
              </form>

              <div className="space-y-4">
                <div className="nautical-card p-5">
                  <CardHeader icon={MapPin} title="Sede" />
                  <p className="text-sm text-ink-muted">
                    📍 Giugliano in Campania, Campania, Italia
                  </p>
                </div>
                <div className="nautical-card p-5">
                  <CardHeader icon={Compass} title="Affiliazione" />
                  <p className="text-sm text-ink-muted leading-relaxed">
                    <strong className="text-navy">ISSNOVA</strong> — Istituto Nazionale di Studi
                    sullo Sviluppo delle Organizzazioni Virtuali e dell&apos;Innovazione.
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/daniele-palma-esposito-402055153/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy w-full inline-flex items-center justify-center gap-2"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </Section>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-navy-gradient text-white/80 mt-16">
        <div className="gold-rule" />
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p className="font-display uppercase tracking-wider-2 text-gold-light">
            Daniele Palma Esposito
          </p>
          <p className="text-white/60">
            © {new Date().getFullYear()} · Ricercatore ISSNOVA · Docente di Navigazione
          </p>
        </div>
      </footer>
    </div>
  );
}