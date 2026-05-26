export type ProjectKey = "AENEAS" | "FLEXSHIP" | "OVERHEAT";

export const projects: Record<
  ProjectKey,
  {
    name: string;
    sub: { it: string; en: string };
    ref: string;
    badges: ("horizon" | "active" | "project")[];
    short: { it: string; en: string };
    long: { it: string; en: string };
    objectives: { it: string[]; en: string[] };
  }
> = {
  AENEAS: {
    name: "AENEAS",
    sub: {
      it: "Sistemi innovativi di accumulo energia a bordo",
      en: "Innovative on-board energy storage systems",
    },
    ref: "EU Horizon GA 101095902 · HORIZON-CL5-2022-D5-01-02",
    badges: ["horizon", "active"],
    short: {
      it: "Trasporto marittimo a impatto climatico zero, stoccaggio energia di nuova generazione, navigazione elettrica.",
      en: "Zero-impact maritime transport, next-generation energy storage, electric navigation.",
    },
    long: {
      it: "AENEAS sviluppa soluzioni di accumulo energetico di nuova generazione per il trasporto marittimo, abilitando la navigazione elettrica parziale o completa e contribuendo all'obiettivo europeo di impatto climatico zero. Il progetto integra tecnologie batteria avanzate, sistemi di gestione termica e architetture di bordo ottimizzate.",
      en: "AENEAS develops next-generation energy storage solutions for maritime transport, enabling partial or fully electric navigation and contributing to Europe's zero-climate-impact goal. The project integrates advanced battery technologies, thermal management systems, and optimised on-board architectures.",
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
  FLEXSHIP: {
    name: "FLEXSHIP",
    sub: {
      it: "Electrification of vessels — Green Digital Twin",
      en: "Electrification of vessels — Green Digital Twin",
    },
    ref: "EU Horizon GA 101095863 · HORIZON-CL5-2022-D5-01-01",
    badges: ["horizon", "active"],
    short: {
      it: "Gemello digitale verde per architetture elettriche navali e sistema batteria modulare ad alta efficienza.",
      en: "Green digital twin for naval electric architectures and a modular high-efficiency battery system.",
    },
    long: {
      it: "FLEXSHIP costruisce un gemello digitale «green» per progettare, simulare e validare architetture elettriche navali. Il cuore tecnologico è un sistema batteria modulare scalabile, in grado di adattarsi a diverse classi di vascelli mantenendo elevata efficienza energetica e affidabilità.",
      en: "FLEXSHIP builds a 'green' digital twin to design, simulate and validate naval electric architectures. Its technological core is a scalable modular battery system that adapts to different vessel classes while keeping high energy efficiency and reliability.",
    },
    objectives: {
      it: [
        "Gemello digitale per la progettazione elettrica navale",
        "Sistema batteria modulare ad alta efficienza",
        "Validazione virtuale di scenari operativi",
      ],
      en: [
        "Digital twin for naval electric design",
        "Modular high-efficiency battery system",
        "Virtual validation of operating scenarios",
      ],
    },
  },
  OVERHEAT: {
    name: "OVERHEAT",
    sub: {
      it: "Overheating of critical systems in vessels",
      en: "Overheating of critical systems in vessels",
    },
    ref: "EU Project · Sostenibilità marittima europea",
    badges: ["project"],
    short: {
      it: "Studio dei fenomeni di surriscaldamento dei sistemi critici di bordo.",
      en: "Study of overheating phenomena in critical on-board systems.",
    },
    long: {
      it: "OVERHEAT analizza i fenomeni di surriscaldamento nei sistemi critici di bordo, identificando soluzioni progettuali e operative per migliorare la sicurezza e la sostenibilità del trasporto marittimo europeo.",
      en: "OVERHEAT analyses overheating phenomena in critical on-board systems, identifying design and operational solutions to improve safety and sustainability of European maritime transport.",
    },
    objectives: {
      it: [
        "Caratterizzazione termica dei sistemi critici",
        "Strategie di mitigazione progettuale e operativa",
        "Linee guida di sicurezza per il trasporto marittimo",
      ],
      en: [
        "Thermal characterisation of critical systems",
        "Design and operational mitigation strategies",
        "Safety guidelines for maritime transport",
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