import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { c as createLucideIcon, u as useLang, d as useEditable, P as PageHeader, M as MapPin } from "./router-C1wlfgR9.js";
import { p as projects } from "./content-DzVdtPT7.js";
import { D as Download } from "./download-3xV878aC.js";
import { M as Mail } from "./mail-BmUIzLpj.js";
import { L as Linkedin } from "./linkedin-Drvfzoxx.js";
import { E as ExternalLink } from "./external-link-BahJmSA8.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const experiences = [{
  period: "09/2023 – oggi",
  role: {
    it: "Maritime Sustainability Researcher",
    en: "Maritime Sustainability Researcher"
  },
  org: "ISSNOVA — Institute for Sustainable Society and Innovation, Napoli",
  body: {
    it: "Ricerca sui progetti europei AENEAS, FLEXSHIP, OVERHEAT, UnderSec, TRUSTEE. Competenze in project management, elettrificazione navale, formazione marittima, target di sostenibilità, combustibili alternativi, maritime safety & security.",
    en: "Research on EU projects AENEAS, FLEXSHIP, OVERHEAT, UnderSec, TRUSTEE. Project management, vessel electrification, maritime training, sustainability targets, alternative fuels, maritime safety & security."
  }
}, {
  period: "09/2024 – 06/2025",
  role: {
    it: "Docente di Scienze e Tecnologie della Navigazione",
    en: "Navigation Science & Technology Teacher"
  },
  org: "Fondazione «Villaggio dei Ragazzi» — Maddaloni",
  body: {
    it: "",
    en: ""
  }
}, {
  period: "12/2023 – 03/2024",
  role: {
    it: "Docente di Scienze e Tecnologie Nautiche",
    en: "Nautical Science & Technology Teacher"
  },
  org: "ITTL «Duca degli Abruzzi» — Napoli",
  body: {
    it: "Logistica: operazioni portuali, gestione magazzini, normative ISO, sicurezza sul lavoro.",
    en: "Logistics: port operations, warehouse management, ISO standards, workplace safety."
  }
}, {
  period: "03/2023 – 05/2023",
  role: {
    it: "Docente di Attività Didattiche Integrative — Geodesia e Navigazione",
    en: "Integrative Teaching — Geodesy and Navigation"
  },
  org: "Università degli Studi di Napoli «Parthenope»",
  body: {
    it: "",
    en: ""
  }
}, {
  period: "03/2020 – 10/2021",
  role: {
    it: "Operatore Ufficio Orientamento",
    en: "Orientation Office Operator"
  },
  org: "Università degli Studi di Napoli «Parthenope»",
  body: {
    it: "",
    en: ""
  }
}, {
  period: "03/2018",
  role: {
    it: "Deck Cadet — Tirocinio",
    en: "Deck Cadet — Internship"
  },
  org: "GNV — Grandi Navi Veloci",
  body: {
    it: "",
    en: ""
  }
}];
const cvEducation = [{
  year: "2024",
  title: {
    it: "Laurea Magistrale in Scienze e Tecnologie della Navigazione · cum laude",
    en: "M.Sc. in Navigation Sciences and Technologies · cum laude"
  },
  inst: "Università degli Studi di Napoli «Parthenope»",
  note: {
    it: "Tesi: «MASS e Navigazione a Rotta Adattiva: un caso di studio».",
    en: "Thesis: 'MASS and Adaptive Routing Navigation: a case study'."
  }
}, {
  year: "2023",
  title: {
    it: "Advanced Training — Environmental Manager",
    en: "Advanced Training — Environmental Manager"
  },
  inst: "Università degli Studi di Napoli «Parthenope»",
  note: {
    it: "",
    en: ""
  }
}, {
  year: "2022",
  title: {
    it: "FIT 24 CFU",
    en: "FIT 24 CFU"
  },
  inst: "Università degli Studi di Napoli «Parthenope»",
  note: {
    it: "",
    en: ""
  }
}, {
  year: "2021",
  title: {
    it: "Laurea Triennale in Scienze Nautiche, Aeronautiche e Meteo-Oceanografiche · cum laude",
    en: "B.Sc. in Nautical, Aeronautical and Meteo-Oceanographic Sciences · cum laude"
  },
  inst: "Università degli Studi di Napoli «Parthenope»",
  note: {
    it: "",
    en: ""
  }
}, {
  year: "2018",
  title: {
    it: "Diploma ITTL",
    en: "ITTL Diploma"
  },
  inst: "ITTL «Duca degli Abruzzi» — Napoli",
  note: {
    it: "",
    en: ""
  }
}];
const publications = [{
  year: "2025",
  title: "Bridging the Skills Gap in Maritime Training: Preparing the Workforce for Vessel Electrification",
  venue: "NAV2025 — 21st International Conference on Ships and Maritime Research",
  role: {
    it: "primo autore",
    en: "first author"
  }
}, {
  year: "2025",
  title: "The Use of Novel Solutions and Human-Machine Interaction in Case of Fire Incidents on Containerships",
  venue: "ISIEA 2025 — 4th Int. Symposium on Industrial Engineering and Automation",
  role: {
    it: "co-autore",
    en: "co-author"
  }
}, {
  year: "2024",
  title: "Human Factors Implication in Innovative Strategies for Containership Fires Prevention and Management",
  venue: "AHFE 2024 — 15th Int. Conference on Applied Human Factors and Ergonomics",
  role: {
    it: "co-autore",
    en: "co-author"
  }
}];
function CvPage() {
  const {
    t,
    lang
  } = useLang();
  const lead = useEditable("cv.lead");
  const profile = useEditable("cv.profile");
  const email = useEditable("contact.email");
  const linkedin = useEditable("contact.linkedin");
  const location = useEditable("contact.location");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { icon: "📄", title: t("cv_title"), lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-6 md:p-8 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-navy", children: "Daniele Palma Esposito" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold-700 font-display uppercase tracking-wider-2 text-xs mt-1", children: "Maritime Sustainability Researcher · ISSNOVA" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/cv/daniele-palma-esposito-cv.pdf", target: "_blank", rel: "noopener noreferrer", className: "btn-navy inline-flex items-center gap-2 self-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 }),
          " ",
          t("cv_download")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-2 text-sm text-ink-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "text-gold-700" }),
          " ",
          email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-gold-700" }),
          " +39 331 998 0900"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-gold-700" }),
          " ",
          location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: linkedin, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-gold-700 hover:text-navy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 14 }),
          " LinkedIn ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 11 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: lang === "it" ? "Profilo" : "Profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-ink-muted leading-relaxed whitespace-pre-line", children: profile }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: lang === "it" ? "Esperienze professionali" : "Work experience", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: experiences.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display uppercase tracking-wider-2 text-sm text-navy", children: e.role[lang] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-gold-700", children: e.period })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gold-700 font-semibold", children: e.org }),
      e.body[lang] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted mt-2 leading-relaxed", children: e.body[lang] })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: lang === "it" ? "Istruzione e formazione" : "Education and training", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: cvEducation.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display uppercase tracking-wider-2 text-sm text-navy", children: e.title[lang] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-gold-700", children: e.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted italic", children: e.inst }),
      e.note[lang] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted mt-2", children: e.note[lang] })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: lang === "it" ? "Progetti europei" : "European projects", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: Object.values(projects).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", className: "nautical-card p-4 flex items-start gap-3 hover:-translate-y-0.5 transition-transform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 shrink-0 rounded bg-white border border-gold/40 flex items-center justify-center p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.logo, alt: p.name, className: "max-h-full max-w-full object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm text-navy", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-ink-muted font-mono truncate", children: p.ref }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-gold-700 font-mono", children: p.period[lang] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14, className: "text-gold-700 mt-1 shrink-0" })
    ] }, p.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: lang === "it" ? "Pubblicazioni" : "Publications", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: publications.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-navy", children: p.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-gold", children: p.role[lang] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm text-navy mt-2 leading-snug", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted italic mt-1", children: p.venue })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: lang === "it" ? "Conferenze e seminari" : "Conferences and seminars", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-ink-muted", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "nautical-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-navy", children: "NAV 2025" }),
        " · 21st Int. Conf. on Ships and Maritime Research · Messina, 18–20 giugno 2025"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "nautical-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-navy", children: "AHFE 2024" }),
        " · 15th Int. Conf. on Applied Human Factors and Ergonomics · Nizza, 24–27 luglio 2024"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: lang === "it" ? "Certificazioni" : "Certifications", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-ink-muted", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "nautical-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-navy", children: "AI in Aviation Traffic Flow — Summer School 2024" }),
        " · ASDA · ISSNOVA · Parthenope"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "nautical-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-navy", children: "I.S.A.B.E.L.L.A." }),
        " · Blue Economy start-up acceleration (CUP B69J19000570007)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "nautical-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-navy", children: "Corso SAP MM/FI" }),
        " · 2022"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "nautical-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-navy", children: "Volontario XXX Summer Universiade 2019" }),
        " · Napoli"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: lang === "it" ? "Competenze e lingue" : "Skills and languages", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display uppercase tracking-wider-2 text-xs text-navy mb-3", children: lang === "it" ? "Competenze tecniche" : "Technical skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["GNSS", "Remote Sensing", "Inertial Navigation", "Sensor Fusion", "MASS", "QGIS", "Matlab/Simulink", "Microsoft Office", "SAP"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-gold", children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display uppercase tracking-wider-2 text-xs text-navy mb-3", children: lang === "it" ? "Lingue" : "Languages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-ink-muted space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-navy", children: "Italiano" }),
            " — madrelingua"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-navy", children: "English" }),
            " — B2 (listening · reading · speaking · writing)"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-ink-muted italic mt-8", children: lang === "it" ? "Autorizzo il trattamento dei dati personali ai sensi del Regolamento UE 679/2016." : "I authorize the processing of personal data in accordance with EU Regulation 679/2016." })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg uppercase tracking-wider-2 text-navy mb-4 pb-2 border-b border-gold/30", children: title }),
    children
  ] });
}
export {
  CvPage as component
};
