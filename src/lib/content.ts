import trusteeLogo from "@/assets/projects/trustee.png";
import overheatLogo from "@/assets/projects/overheat.png";
import undersecLogo from "@/assets/projects/undersec.png";
import flexshipLogo from "@/assets/projects/flexship.png";
import aeneasLogo from "@/assets/projects/aeneas.png";

export type ProjectKey =
  | "TRUSTEE"
  | "OVERHEAT"
  | "UNDERSEC"
  | "FLEXSHIP"
  | "AENEAS";

export const projects: Record<
  ProjectKey,
  {
    name: string;
    logo: string;
    url: string;
    period: { it: string; en: string };
    sub: { it: string; en: string };
    ref: string;
    badges: ("horizon" | "active" | "project")[];
    short: { it: string; en: string };
    long: { it: string; en: string };
    objectives: { it: string[]; en: string[] };
  }
> = {
  TRUSTEE: {
    name: "TRUSTEE",
    logo: trusteeLogo,
    url: "https://trusteeproject.eu/",
    period: { it: "Feb 2025 – in corso", en: "Feb 2025 – ongoing" },
    sub: {
      it: "fuTure pRoof efficient and sUSTainable dEployment of zEwt",
      en: "fuTure pRoof efficient and sUSTainable dEployment of zEwt",
    },
    ref: "EU Horizon GA 101192328 · HORIZON-CL5-2024-D5-01",
    badges: ["horizon", "active"],
    short: {
      it: "Conoscenze e raccomandazioni evidence-based per il dispiegamento dello Zero-Emission Waterborne Transport (ZEWT).",
      en: "Evidence-based knowledge and recommendations for the deployment of Zero-Emission Waterborne Transport (ZEWT).",
    },
    long: {
      it: "TRUSTEE fornisce a decisori e stakeholder dello ZEWT — su livelli politico, di investimento, industriale, tecnologico e operativo — un corpus organico di conoscenze e raccomandazioni costruito su un approccio evidence-based: scenari di foresight al 2030 e 2050, un framework di valutazione multidimensionale (ambiente, società, tecnologia, finanza, operatività, safety & security) e una roadmap di validazione robusta.",
      en: "TRUSTEE supports ZEWT decision-makers and stakeholders — across policy, investment, industry, technology and operations — with a comprehensive, evidence-based body of knowledge and recommendations: 2030 and 2050 foresight scenarios, a multidimensional assessment framework (environment, society, technology, finance, operations, safety & security) and a robust validation roadmap.",
    },
    objectives: {
      it: [
        "Scenari di foresight ZEWT al 2030 e 2050",
        "Framework di valutazione multidimensionale",
        "Roadmap di validazione con stakeholder diretti e indiretti",
      ],
      en: [
        "ZEWT foresight scenarios for 2030 and 2050",
        "Multidimensional assessment framework",
        "Validation roadmap with direct and indirect stakeholders",
      ],
    },
  },
  OVERHEAT: {
    name: "OVERHEAT",
    logo: overheatLogo,
    url: "https://overheat-project.eu/",
    period: { it: "Gen 2024 – in corso", en: "Jan 2024 – ongoing" },
    sub: {
      it: "Innovative Strategies for Containership Fires Prevention and Management",
      en: "Innovative Strategies for Containership Fires Prevention and Management",
    },
    ref: "EU Horizon GA 101076633 · HORIZON-CL5-2022-D6-01-08",
    badges: ["horizon", "active"],
    short: {
      it: "Soluzioni digitali e in tempo reale per la prevenzione e gestione degli incendi a bordo delle navi portacontainer.",
      en: "Real-time digital solutions for the prevention and management of fires on board container ships.",
    },
    long: {
      it: "OVERHEAT sviluppa soluzioni innovative di antincendio per le portacontainer con un approccio integrato e in tempo reale, che mette al centro safety, protezione ambientale e conformità normativa. Il progetto combina tecnologie emergenti e valutazioni della safety culture per aprire una nuova fase nella prevenzione e gestione degli incendi nel trasporto marittimo.",
      en: "OVERHEAT delivers innovative fire-management solutions for container ships with an integrated real-time approach centred on safety, environmental protection and regulatory compliance. The project combines cutting-edge technologies and safety-culture assessments to usher in a new era of fire prevention and management in maritime transport.",
    },
    objectives: {
      it: [
        "Monitoraggio e detection precoce a bordo",
        "Strategie operative di contenimento e mitigazione",
        "Conformità SOLAS e cultura della safety",
      ],
      en: [
        "On-board monitoring and early detection",
        "Operational containment and mitigation strategies",
        "SOLAS compliance and safety culture",
      ],
    },
  },
  UNDERSEC: {
    name: "UnderSec",
    logo: undersecLogo,
    url: "https://undersec-project.eu/",
    period: { it: "Nov 2023 – in corso", en: "Nov 2023 – ongoing" },
    sub: {
      it: "Underwater Security — Situational Awareness & Decision Support",
      en: "Underwater Security — Situational Awareness & Decision Support",
    },
    ref: "EU Horizon GA 101121288 · HORIZON-CL3-2022-BM-01-01",
    badges: ["horizon", "active"],
    short: {
      it: "Sistema prototipale integrato con sensori multimodali e asset robotici per la sicurezza subacquea di navi, porti e infrastrutture marittime.",
      en: "Integrated prototype system with multimodal sensors and robotic assets for the underwater security of ships, ports and maritime infrastructures.",
    },
    long: {
      it: "UnderSec sviluppa un sistema prototipale integrato — sensori multimodali e asset robotici — per la situational awareness e il supporto alle decisioni nel dominio della sicurezza subacquea, con capacità di risposta operativa. I singoli componenti e l'intero prototipo sono validati in scenari reali con Coast Guard, autorità portuali e enti di controllo frontiere.",
      en: "UnderSec develops an integrated prototype system — multimodal sensors and robotic assets — for situational awareness and decision support in the underwater security domain, with operational response capabilities. Individual components and the full prototype are validated in real-life scenarios with Coast Guard, port authorities and border control agencies.",
    },
    objectives: {
      it: [
        "Situational awareness subacquea multimodale",
        "Asset robotici per ispezione e risposta",
        "Validazione operativa con end-user reali",
      ],
      en: [
        "Multimodal underwater situational awareness",
        "Robotic assets for inspection and response",
        "Operational validation with real end-users",
      ],
    },
  },
  FLEXSHIP: {
    name: "FLEXSHIP",
    logo: flexshipLogo,
    url: "https://www.flexship-project.eu/",
    period: { it: "Set 2023 – in corso", en: "Sep 2023 – ongoing" },
    sub: {
      it: "Electrification of vessels — Green Digital Twin",
      en: "Electrification of vessels — Green Digital Twin",
    },
    ref: "EU Horizon GA 101095863 · HORIZON-CL5-2022-D5-01-01",
    badges: ["horizon", "active"],
    short: {
      it: "Concept digitale «green» per l'elettrificazione delle navi: Green Digital Twin e sistema batteria modulare ad alta efficienza, dimostrato su due navi esistenti (TRL 7).",
      en: "Digital 'green' concept for vessel electrification: Green Digital Twin and modular high-efficiency battery system, demonstrated on two existing vessels (TRL 7).",
    },
    long: {
      it: "FLEXSHIP realizza un Green Digital Twin per progettare architetture elettriche di bordo fit-for-purpose e integra un sistema batteria modulare, compatto, leggero e ad alta efficienza, dimostrato su due navi esistenti. Il progetto fornisce linee guida per integrazione sicura e interoperabilità di sistema, puntando a TRL 7.",
      en: "FLEXSHIP delivers a Green Digital Twin to design fit-for-purpose on-board electrical architectures and integrates a compact, low-weight, modular, high-efficiency battery system, demonstrated on two existing vessels. The project provides guidance for safe integration and system interoperability, targeting TRL 7.",
    },
    objectives: {
      it: [
        "Green Digital Twin per architetture elettriche navali",
        "Sistema batteria modulare ad alta efficienza",
        "Dimostrazione TRL 7 su navi esistenti",
      ],
      en: [
        "Green Digital Twin for naval electric architectures",
        "Modular high-efficiency battery system",
        "TRL 7 demonstration on existing vessels",
      ],
    },
  },
  AENEAS: {
    name: "AENEAS",
    logo: aeneasLogo,
    url: "https://www.project-aeneas.eu/",
    period: { it: "Set 2023 – Gen 2026 · concluso", en: "Sep 2023 – Jan 2026 · completed" },
    sub: {
      it: "innovAtive ENErgy storage systems onboArd vesselS",
      en: "innovAtive ENErgy storage systems onboArd vesselS",
    },
    ref: "EU Horizon GA 101095902 · HORIZON-CL5-2022-D5-01-02",
    badges: ["horizon"],
    short: {
      it: "Tre soluzioni di nuova generazione per lo stoccaggio energetico a bordo, per uno shipping parzialmente o totalmente elettrico (TRL 5), tarate su short-sea e vie navigabili interne.",
      en: "Three next-generation on-board energy storage solutions enabling partially or fully electric shipping (TRL 5), tailored for short-sea and inland waterway operations.",
    },
    long: {
      it: "AENEAS contribuisce a un trasporto via acqua climate-neutral e a minor impatto ambientale sviluppando tre soluzioni di stoccaggio energetico pulito di nuova generazione, abilitanti lo shipping elettrico parziale o completo. Le applicazioni e gli usi finali sono valutati a TRL 5, considerando le condizioni operative specifiche delle navi target nello short-sea e nelle vie navigabili interne.",
      en: "AENEAS contributes to climate-neutral and environment-friendly waterborne transport by developing three next-generation clean energy storage solutions enabling partial or fully electric shipping. End uses and applications are assessed at TRL 5, accounting for the specific operational conditions of short-sea and inland waterway vessels.",
    },
    objectives: {
      it: [
        "Stoccaggio energetico ad alta densità per uso navale",
        "Architetture elettriche di bordo sicure e scalabili",
        "Riduzione delle emissioni operative",
      ],
      en: [
        "High-density energy storage for marine use",
        "Safe and scalable on-board electrical architectures",
        "Reduction of operational emissions",
      ],
    },
  },
};

export const education = [
  {
    year: "2021",
    title: { it: "Laurea Triennale con Lode", en: "B.Sc. with Honours" },
    sub: {
      it: "Scienze Nautiche, Aeronautiche e Meteo-Oceanografiche",
      en: "Nautical, Aeronautical and Meteo-Oceanographic Sciences",
    },
    inst: "Università degli Studi di Napoli «Parthenope»",
    body: {
      it: "Solide basi in scienze nautiche, meteorologia, oceanografia e fondamenti aeronautici.",
      en: "Solid foundations in nautical sciences, meteorology, oceanography and aeronautical fundamentals.",
    },
  },
  {
    year: "M.Sc.",
    title: { it: "Laurea Magistrale", en: "M.Sc." },
    sub: {
      it: "Scienze e Tecnologie della Navigazione",
      en: "Navigation Sciences and Technologies",
    },
    inst: "Università degli Studi di Napoli «Parthenope»",
    body: {
      it: "Tesi: «MASS e Navigazione a Rotta Adattiva: un caso di studio». Specializzazione in GNSS, navigazione inerziale e sensor fusion.",
      en: "Thesis: 'MASS and Adaptive Route Navigation: a case study'. Specialisation in GNSS, inertial navigation and sensor fusion.",
    },
  },
  {
    year: "Adv.",
    title: {
      it: "Advanced Training — Environmental Manager",
      en: "Advanced Training — Environmental Manager",
    },
    sub: {
      it: "Gestione ambientale e performance navale",
      en: "Environmental management and vessel performance",
    },
    inst: "Specialised programme",
    body: {
      it: "Specializzazione in sostenibilità e gestione ambientale per il trasporto marittimo.",
      en: "Specialisation in sustainability and environmental management for maritime transport.",
    },
  },
];

export const subjects = {
  it: ["Navigazione", "Strumenti Nautici", "Tecnologia Marittima", "GNSS e Posizionamento", "Scienze Nautiche"],
  en: ["Navigation", "Nautical Instruments", "Maritime Technology", "GNSS & Positioning", "Nautical Sciences"],
};

export const skills = [
  "GNSS",
  "Remote Sensing",
  "Inertial Navigation",
  "Sensor Fusion",
  "MASS",
  "Environmental Management",
];

/* -------------------- TEACHING — materiali & calcolatori -------------------- */

export const PORTFOLIO_BASE = "https://danielepalma.github.io/portfolio-navigazione";

export type MaterialGroup = {
  title: { it: string; en: string };
  items: {
    icon: "pdf" | "xls" | "doc";
    title: { it: string; en: string };
    meta: { it: string; en: string };
    href: string;
  }[];
};

export const teachingMaterials: MaterialGroup[] = [
  {
    title: { it: "Navigazione", en: "Navigation" },
    items: [
      {
        icon: "pdf",
        title: { it: "Navigazione Astronomica — Scheda Operativa", en: "Celestial Navigation — Operational Sheet" },
        meta: { it: "PDF · Aggiornato 2024", en: "PDF · Updated 2024" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
      {
        icon: "pdf",
        title: { it: "Esercizi di Rotta e Navigazione Costiera", en: "Route & Coastal Navigation Exercises" },
        meta: { it: "PDF · 24 esercizi svolti", en: "PDF · 24 worked exercises" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
      {
        icon: "pdf",
        title: { it: "Carte Nautiche — Guida alla Lettura", en: "Nautical Charts — Reading Guide" },
        meta: { it: "PDF · Con esercizi pratici", en: "PDF · With practical exercises" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
      {
        icon: "xls",
        title: { it: "Tabelle di Correzione Magnetica", en: "Magnetic Correction Tables" },
        meta: { it: "Excel · Aggiornamento annuale", en: "Excel · Yearly update" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
    ],
  },
  {
    title: { it: "Statica della Nave & Idrostatica", en: "Ship Statics & Hydrostatics" },
    items: [
      {
        icon: "pdf",
        title: { it: "Stabilità della Nave — Teoria e Formule", en: "Ship Stability — Theory and Formulas" },
        meta: { it: "PDF · Dispensa completa", en: "PDF · Full handout" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
      {
        icon: "pdf",
        title: { it: "Curve Idrostatiche — Interpolazione", en: "Hydrostatic Curves — Interpolation" },
        meta: { it: "PDF · Con esempi numerici", en: "PDF · With worked examples" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
      {
        icon: "pdf",
        title: { it: "Spostamento Pesi — Esercizi Svolti", en: "Weight Shifting — Worked Exercises" },
        meta: { it: "PDF · 18 problemi risolti", en: "PDF · 18 solved problems" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
      {
        icon: "xls",
        title: { it: "Dati Idrostatici Nave di Riferimento", en: "Reference Vessel Hydrostatic Data" },
        meta: { it: "Excel · Tabella editabile", en: "Excel · Editable table" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
    ],
  },
  {
    title: { it: "Prove & Verifiche", en: "Tests & Assessments" },
    items: [
      {
        icon: "pdf",
        title: { it: "Simulazione Esame di Stato — Navigazione", en: "State Exam Simulation — Navigation" },
        meta: { it: "PDF · A.S. 2023/24", en: "PDF · School year 2023/24" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
      {
        icon: "pdf",
        title: { it: "Verifica Trimestrale — Stabilità", en: "Term Test — Stability" },
        meta: { it: "PDF · Classi 4ª e 5ª", en: "PDF · 4th and 5th year" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
      {
        icon: "pdf",
        title: { it: "Compito in Classe — Idrostatica", en: "Class Test — Hydrostatics" },
        meta: { it: "PDF · Con tabella dati", en: "PDF · With data sheet" },
        href: `${PORTFOLIO_BASE}/#materiali`,
      },
    ],
  },
];

export type Calculator = {
  emoji: string;
  title: { it: string; en: string };
  body: { it: string; en: string };
  tags: string[];
  href: string;
  status?: "soon" | "featured";
};

export const calculators: Calculator[] = [
  {
    emoji: "⚓",
    title: { it: "Calcolatore Statica della Nave", en: "Ship Statics Calculator" },
    body: {
      it: "Lo strumento più completo: interpolazione idrostatica, spostamento pesi, GM' e sbandamento, incaglio, free surface effect, allagamento, bunker e formule inverse.",
      en: "The most complete tool: hydrostatic interpolation, weight shifting, GM' and heeling, grounding, free-surface effect, flooding, bunker and inverse formulas.",
    },
    tags: ["Interpolazione", "Spostamento Pesi", "GM'", "Incaglio", "Free Surface", "Allagamento", "Bunker"],
    href: `/calcolatori/statica-nave.html`,
    status: "featured",
  },
];

/* -------------------- FORMULARI DI NAVIGAZIONE -------------------- */

export type FormularySection = {
  title: { it: string; en: string };
  formulas: {
    name: { it: string; en: string };
    expression: string;
    legend: { it: string; en: string };
  }[];
};

export const formulari: FormularySection[] = [
  {
    title: { it: "Rotta e Velocità", en: "Course & Speed" },
    formulas: [
      {
        name: { it: "Spazio percorso", en: "Distance run" },
        expression: "M = V · t",
        legend: {
          it: "M = miglia · V = velocità (nodi) · t = tempo (ore)",
          en: "M = miles · V = speed (knots) · t = time (hours)",
        },
      },
      {
        name: { it: "Velocità media", en: "Average speed" },
        expression: "V = M / t",
        legend: { it: "in nodi (kn)", en: "in knots (kn)" },
      },
      {
        name: { it: "Correzione bussola", en: "Compass correction" },
        expression: "Rv = Rb + d ± δ",
        legend: {
          it: "Rv = rotta vera · Rb = rotta bussola · d = declinazione · δ = deviazione",
          en: "Rv = true course · Rb = compass course · d = variation · δ = deviation",
        },
      },
    ],
  },
  {
    title: { it: "Lossodromia", en: "Rhumb-line Sailing" },
    formulas: [
      {
        name: { it: "Differenza di latitudine", en: "Difference of latitude" },
        expression: "Δφ = φ₂ − φ₁",
        legend: { it: "in primi d'arco", en: "in arc minutes" },
      },
      {
        name: { it: "Allontanamento", en: "Departure" },
        expression: "A = Δλ · cos(φm)",
        legend: {
          it: "φm = latitudine media · Δλ = differenza di longitudine",
          en: "φm = mean latitude · Δλ = difference of longitude",
        },
      },
      {
        name: { it: "Rotta lossodromica", en: "Rhumb-line course" },
        expression: "tan R = A / Δφ",
        legend: { it: "R = angolo di rotta", en: "R = course angle" },
      },
    ],
  },
  {
    title: { it: "Ortodromia", en: "Great-circle Sailing" },
    formulas: [
      {
        name: { it: "Distanza ortodromica", en: "Great-circle distance" },
        expression: "cos M = sinφ₁·sinφ₂ + cosφ₁·cosφ₂·cosΔλ",
        legend: { it: "M in gradi · 1° = 60 NM", en: "M in degrees · 1° = 60 NM" },
      },
      {
        name: { it: "Rotta iniziale", en: "Initial course" },
        expression: "tan Ri = sinΔλ / (cosφ₁·tanφ₂ − sinφ₁·cosΔλ)",
        legend: { it: "misurata dal Nord vero", en: "measured from true North" },
      },
    ],
  },
  {
    title: { it: "Statica & Stabilità", en: "Statics & Stability" },
    formulas: [
      {
        name: { it: "Spostamento pesi (sbandamento)", en: "Weight shift (heel)" },
        expression: "tan θ = (p · d) / (D · GM')",
        legend: {
          it: "p = peso · d = braccio · D = dislocamento · GM' = metacentrica corretta",
          en: "p = weight · d = arm · D = displacement · GM' = corrected metacentric height",
        },
      },
      {
        name: { it: "Free Surface Effect", en: "Free Surface Effect" },
        expression: "GG₀ = (i · ρl) / D",
        legend: {
          it: "i = momento d'inerzia · ρl = densità liquido",
          en: "i = moment of inertia · ρl = liquid density",
        },
      },
      {
        name: { it: "Passaggio acqua dolce/salata", en: "Fresh / salt water transit" },
        expression: "FWA = D / (4 · TPC)",
        legend: {
          it: "FWA in mm · D in t · TPC = tonnellate per cm",
          en: "FWA in mm · D in t · TPC = tonnes per cm",
        },
      },
    ],
  },
  {
    title: { it: "Astronomia Nautica", en: "Celestial Navigation" },
    formulas: [
      {
        name: { it: "Altezza stimata", en: "Computed altitude" },
        expression: "sin h = sinφ·sinδ + cosφ·cosδ·cosP",
        legend: {
          it: "h = altezza · δ = declinazione · P = angolo orario",
          en: "h = altitude · δ = declination · P = hour angle",
        },
      },
      {
        name: { it: "Azimut", en: "Azimuth" },
        expression: "tan Z = sinP / (sinφ·cosP − cosφ·tanδ)",
        legend: { it: "Z = azimut astronomico", en: "Z = celestial azimuth" },
      },
      {
        name: { it: "Latitudine alla meridiana", en: "Latitude at meridian passage" },
        expression: "φ = (90° − h) ± δ",
        legend: { it: "+ se astro a Sud · − se a Nord", en: "+ if body to S · − if to N" },
      },
    ],
  },
];