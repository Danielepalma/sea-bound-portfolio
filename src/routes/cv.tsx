import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Daniele Palma Esposito" },
      { name: "description", content: "Curriculum Vitae di Daniele Palma Esposito — Maritime Sustainability Researcher @ ISSNOVA." },
      { property: "og:title", content: "CV — Daniele Palma Esposito" },
      { property: "og:description", content: "Curriculum sintetico: ricerca, didattica e progetti europei." },
    ],
  }),
  component: CvPage,
});

const experiences = [
  {
    period: "09/2023 – oggi",
    role: { it: "Maritime Sustainability Researcher", en: "Maritime Sustainability Researcher" },
    org: "ISSNOVA — Institute for Sustainable Society and Innovation, Napoli",
    body: {
      it: "Ricerca sui progetti europei AENEAS, FLEXSHIP, OVERHEAT, UnderSec, TRUSTEE. Competenze in project management, elettrificazione navale, formazione marittima, target di sostenibilità, combustibili alternativi, maritime safety & security.",
      en: "Research on EU projects AENEAS, FLEXSHIP, OVERHEAT, UnderSec, TRUSTEE. Project management, vessel electrification, maritime training, sustainability targets, alternative fuels, maritime safety & security.",
    },
  },
  {
    period: "09/2024 – 06/2025",
    role: { it: "Docente di Scienze e Tecnologie della Navigazione", en: "Navigation Science & Technology Teacher" },
    org: "Fondazione «Villaggio dei Ragazzi» — Maddaloni",
    body: { it: "", en: "" },
  },
  {
    period: "12/2023 – 03/2024",
    role: { it: "Docente di Scienze e Tecnologie Nautiche", en: "Nautical Science & Technology Teacher" },
    org: "ITTL «Duca degli Abruzzi» — Napoli",
    body: {
      it: "Logistica: operazioni portuali, gestione magazzini, normative ISO, sicurezza sul lavoro.",
      en: "Logistics: port operations, warehouse management, ISO standards, workplace safety.",
    },
  },
  {
    period: "03/2023 – 05/2023",
    role: { it: "Docente di Attività Didattiche Integrative — Geodesia e Navigazione", en: "Integrative Teaching — Geodesy and Navigation" },
    org: "Università degli Studi di Napoli «Parthenope»",
    body: { it: "", en: "" },
  },
  {
    period: "03/2020 – 10/2021",
    role: { it: "Operatore Ufficio Orientamento", en: "Orientation Office Operator" },
    org: "Università degli Studi di Napoli «Parthenope»",
    body: { it: "", en: "" },
  },
  {
    period: "03/2018",
    role: { it: "Deck Cadet — Tirocinio", en: "Deck Cadet — Internship" },
    org: "GNV — Grandi Navi Veloci",
    body: { it: "", en: "" },
  },
];

const cvEducation = [
  { year: "2024", title: { it: "Laurea Magistrale in Scienze e Tecnologie della Navigazione · cum laude", en: "M.Sc. in Navigation Sciences and Technologies · cum laude" }, inst: "Università degli Studi di Napoli «Parthenope»", note: { it: "Tesi: «MASS e Navigazione a Rotta Adattiva: un caso di studio».", en: "Thesis: 'MASS and Adaptive Routing Navigation: a case study'." } },
  { year: "2023", title: { it: "Advanced Training — Environmental Manager", en: "Advanced Training — Environmental Manager" }, inst: "Università degli Studi di Napoli «Parthenope»", note: { it: "", en: "" } },
  { year: "2022", title: { it: "FIT 24 CFU", en: "FIT 24 CFU" }, inst: "Università degli Studi di Napoli «Parthenope»", note: { it: "", en: "" } },
  { year: "2021", title: { it: "Laurea Triennale in Scienze Nautiche, Aeronautiche e Meteo-Oceanografiche · cum laude", en: "B.Sc. in Nautical, Aeronautical and Meteo-Oceanographic Sciences · cum laude" }, inst: "Università degli Studi di Napoli «Parthenope»", note: { it: "", en: "" } },
  { year: "2018", title: { it: "Diploma ITTL", en: "ITTL Diploma" }, inst: "ITTL «Duca degli Abruzzi» — Napoli", note: { it: "", en: "" } },
];

const publications = [
  { year: "2025", title: "Bridging the Skills Gap in Maritime Training: Preparing the Workforce for Vessel Electrification", venue: "NAV2025 — 21st International Conference on Ships and Maritime Research", role: { it: "primo autore", en: "first author" } },
  { year: "2025", title: "The Use of Novel Solutions and Human-Machine Interaction in Case of Fire Incidents on Containerships", venue: "ISIEA 2025 — 4th Int. Symposium on Industrial Engineering and Automation", role: { it: "co-autore", en: "co-author" } },
  { year: "2024", title: "Human Factors Implication in Innovative Strategies for Containership Fires Prevention and Management", venue: "AHFE 2024 — 15th Int. Conference on Applied Human Factors and Ergonomics", role: { it: "co-autore", en: "co-author" } },
];

function CvPage() {
  const { t, lang } = useLang();

  return (
    <div>
      <PageHeader icon="📄" title={t("cv_title")} lead={t("cv_lead")} />

      {/* Header card */}
      <div className="nautical-card p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
          <div>
            <h2 className="font-display text-2xl text-navy">Daniele Palma Esposito</h2>
            <p className="text-gold-700 font-display uppercase tracking-wider-2 text-xs mt-1">
              Maritime Sustainability Researcher · ISSNOVA
            </p>
          </div>
          <a
            href="/cv/daniele-palma-esposito-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy inline-flex items-center gap-2 self-start"
          >
            <Download size={14} /> {t("cv_download")}
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-2 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-2"><Mail size={14} className="text-gold-700" /> danielepalmaesposito13@gmail.com</span>
          <span className="inline-flex items-center gap-2"><Phone size={14} className="text-gold-700" /> +39 331 998 0900</span>
          <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-gold-700" /> Giugliano in Campania, Italia</span>
          <a href="https://www.linkedin.com/in/daniele-palma-esposito-402055153/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold-700 hover:text-navy">
            <Linkedin size={14} /> LinkedIn <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Profilo */}
      <Section title={lang === "it" ? "Profilo" : "Profile"}>
        <p className="text-[15px] text-ink-muted leading-relaxed">
          {lang === "it"
            ? "Maritime Sustainability Researcher presso ISSNOVA, Laurea Magistrale con lode in Scienze e Tecnologie della Navigazione (Parthenope). Specializzazione in Navigazione e Surveying con tesi su Maritime Autonomous Surface Ships (MASS) e routing adattivo. Competenze avanzate in elaborazione dati GNSS, telerilevamento, navigazione inerziale e sensor fusion. Specializzazione in gestione ambientale per la performance navale. Contributi attivi ai progetti europei TRUSTEE, AENEAS, FLEXSHIP, UnderSec e OVERHEAT."
            : "Maritime Sustainability Researcher at ISSNOVA, M.Sc. (cum laude) in Navigation Sciences and Technologies (Parthenope). Specialised in Navigation and Surveying, thesis on Maritime Autonomous Surface Ships (MASS) and adaptive routing. Advanced skills in GNSS data processing, remote sensing, inertial navigation and sensor fusion. Advanced training in environmental management for vessel performance. Active contributor to EU projects TRUSTEE, AENEAS, FLEXSHIP, UnderSec and OVERHEAT."}
        </p>
      </Section>

      {/* Esperienze */}
      <Section title={lang === "it" ? "Esperienze professionali" : "Work experience"}>
        <div className="space-y-4">
          {experiences.map((e, i) => (
            <div key={i} className="nautical-card p-5">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h4 className="font-display uppercase tracking-wider-2 text-sm text-navy">{e.role[lang]}</h4>
                <span className="text-[11px] font-mono text-gold-700">{e.period}</span>
              </div>
              <p className="text-xs text-gold-700 font-semibold">{e.org}</p>
              {e.body[lang] && <p className="text-sm text-ink-muted mt-2 leading-relaxed">{e.body[lang]}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* Istruzione */}
      <Section title={lang === "it" ? "Istruzione e formazione" : "Education and training"}>
        <div className="space-y-3">
          {cvEducation.map((e, i) => (
            <div key={i} className="nautical-card p-5">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h4 className="font-display uppercase tracking-wider-2 text-sm text-navy">{e.title[lang]}</h4>
                <span className="text-[11px] font-mono text-gold-700">{e.year}</span>
              </div>
              <p className="text-xs text-ink-muted italic">{e.inst}</p>
              {e.note[lang] && <p className="text-sm text-ink-muted mt-2">{e.note[lang]}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* Progetti europei */}
      <Section title={lang === "it" ? "Progetti europei" : "European projects"}>
        <div className="grid sm:grid-cols-2 gap-3">
          {Object.values(projects).map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="nautical-card p-4 flex items-start gap-3 hover:-translate-y-0.5 transition-transform">
              <div className="h-12 w-12 shrink-0 rounded bg-white border border-gold/40 flex items-center justify-center p-1">
                <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm text-navy">{p.name}</p>
                <p className="text-[11px] text-ink-muted font-mono truncate">{p.ref}</p>
                <p className="text-[11px] text-gold-700 font-mono">{p.period[lang]}</p>
              </div>
              <ExternalLink size={14} className="text-gold-700 mt-1 shrink-0" />
            </a>
          ))}
        </div>
      </Section>

      {/* Pubblicazioni */}
      <Section title={lang === "it" ? "Pubblicazioni" : "Publications"}>
        <div className="space-y-3">
          {publications.map((p, i) => (
            <div key={i} className="nautical-card p-5">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <span className="pill pill-navy">{p.year}</span>
                <span className="pill pill-gold">{p.role[lang]}</span>
              </div>
              <p className="font-display text-sm text-navy mt-2 leading-snug">{p.title}</p>
              <p className="text-xs text-ink-muted italic mt-1">{p.venue}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Conferenze */}
      <Section title={lang === "it" ? "Conferenze e seminari" : "Conferences and seminars"}>
        <ul className="space-y-2 text-sm text-ink-muted">
          <li className="nautical-card p-4"><span className="font-display text-navy">NAV 2025</span> · 21st Int. Conf. on Ships and Maritime Research · Messina, 18–20 giugno 2025</li>
          <li className="nautical-card p-4"><span className="font-display text-navy">AHFE 2024</span> · 15th Int. Conf. on Applied Human Factors and Ergonomics · Nizza, 24–27 luglio 2024</li>
        </ul>
      </Section>

      {/* Certificazioni */}
      <Section title={lang === "it" ? "Certificazioni" : "Certifications"}>
        <ul className="space-y-2 text-sm text-ink-muted">
          <li className="nautical-card p-4"><span className="font-display text-navy">AI in Aviation Traffic Flow — Summer School 2024</span> · ASDA · ISSNOVA · Parthenope</li>
          <li className="nautical-card p-4"><span className="font-display text-navy">I.S.A.B.E.L.L.A.</span> · Blue Economy start-up acceleration (CUP B69J19000570007)</li>
          <li className="nautical-card p-4"><span className="font-display text-navy">Corso SAP MM/FI</span> · 2022</li>
          <li className="nautical-card p-4"><span className="font-display text-navy">Volontario XXX Summer Universiade 2019</span> · Napoli</li>
        </ul>
      </Section>

      {/* Competenze + lingue */}
      <Section title={lang === "it" ? "Competenze e lingue" : "Skills and languages"}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="nautical-card p-5">
            <p className="font-display uppercase tracking-wider-2 text-xs text-navy mb-3">
              {lang === "it" ? "Competenze tecniche" : "Technical skills"}
            </p>
            <div className="flex flex-wrap gap-2">
              {["GNSS", "Remote Sensing", "Inertial Navigation", "Sensor Fusion", "MASS", "QGIS", "Matlab/Simulink", "Microsoft Office", "SAP"].map((s) => (
                <span key={s} className="pill pill-gold">{s}</span>
              ))}
            </div>
          </div>
          <div className="nautical-card p-5">
            <p className="font-display uppercase tracking-wider-2 text-xs text-navy mb-3">
              {lang === "it" ? "Lingue" : "Languages"}
            </p>
            <ul className="text-sm text-ink-muted space-y-1">
              <li><span className="font-display text-navy">Italiano</span> — madrelingua</li>
              <li><span className="font-display text-navy">English</span> — B2 (listening · reading · speaking · writing)</li>
            </ul>
          </div>
        </div>
      </Section>

      <p className="text-[11px] text-ink-muted italic mt-8">
        {lang === "it"
          ? "Autorizzo il trattamento dei dati personali ai sensi del Regolamento UE 679/2016."
          : "I authorize the processing of personal data in accordance with EU Regulation 679/2016."}
      </p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h3 className="font-display text-lg uppercase tracking-wider-2 text-navy mb-4 pb-2 border-b border-gold/30">
        {title}
      </h3>
      {children}
    </section>
  );
}