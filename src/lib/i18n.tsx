import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "it" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <K extends keyof typeof dict.it>(k: K) => string;
};

const LangCtx = createContext<Ctx | null>(null);

export const dict = {
  it: {
    role: "Ricercatore e Docente di Navigazione",
    badge: "Docente & Ricercatore",
    location: "Giugliano in Campania, Italia",
    nav_home: "Home",
    nav_about: "Chi Sono",
    nav_research: "Ricerca",
    nav_projects: "Progetti Europei",
    nav_teaching: "Didattica",
    nav_education: "Formazione",
    nav_contact: "Contatti",
    sidebar_title: "Navigazione",
    read_more: "Approfondisci",
    back_home: "Torna alla home",
    home_intro_title: "Benvenuto",
    home_intro_body:
      "Portfolio professionale di ricerca e didattica nel settore della navigazione marittima, dei sistemi GNSS e della sostenibilità dei trasporti.",
    explore: "Esplora le sezioni",
    about_title: "Chi Sono",
    about_lead:
      "Ricercatore in Sostenibilità dei Trasporti presso ISSNOVA e docente di Navigazione.",
    about_p1:
      "Sono un Ricercatore in Sostenibilità dei Trasporti presso ISSNOVA e docente di Navigazione. Ho conseguito la Laurea Magistrale (con lode) in Scienze e Tecnologie della Navigazione all'Università degli Studi di Napoli «Parthenope», con specializzazione in MASS — Maritime Autonomous Surface Ships e navigazione a rotta adattiva.",
    about_p2:
      "Nel percorso accademico ho acquisito competenze avanzate in: elaborazione dati GNSS, telerilevamento, navigazione inerziale e sensor fusion. Ho partecipato a diversi progetti europei nel settore marittimo.",
    skills_label: "Competenze",
    research_title: "Aree di Ricerca",
    research_lead:
      "Tre filoni che orientano il mio lavoro accademico e applicato: navigazione autonoma, sostenibilità del trasporto marittimo e integrazione dei dati di posizionamento.",
    research_mass_title: "MASS — Navi Autonome di Superficie",
    research_mass_body:
      "Navigazione autonoma di superficie e rotta adattiva per il trasporto marittimo del futuro. Studio dei sistemi di percezione, decisione e controllo per imbarcazioni autonome.",
    research_sus_title: "Sostenibilità del Trasporto Marittimo",
    research_sus_body:
      "Efficienza ambientale, riduzione delle emissioni e performance navale. Approccio integrato a tecnologia, normativa e operatività.",
    research_gnss_title: "GNSS & Sensor Fusion",
    research_gnss_body:
      "Elaborazione dati di posizionamento, telerilevamento e integrazione inerziale. Algoritmi di fusione sensoriale per la navigazione robusta.",
    projects_title: "Progetti Europei",
    projects_lead:
      "Partecipazione a progetti Horizon Europe nel cluster Climate, Energy and Mobility (CL5) per il trasporto marittimo a impatto zero.",
    status_active: "In corso",
    eu_horizon: "EU Horizon",
    eu_project: "EU Project",
    teaching_title: "Didattica",
    teaching_role: "Docente di Navigazione",
    teaching_body:
      "Docente di Navigazione. Formazione di tecnici nel settore dei trasporti marittimi, con attenzione alle competenze tecnico-pratiche e alla cultura nautica.",
    teaching_subjects: "Materie & Aree",
    teaching_approach_title: "Approccio Didattico",
    teaching_approach_body:
      "Lezioni integrate con esempi reali derivati dalla ricerca europea: i risultati dei progetti su MASS, elettrificazione navale e sostenibilità entrano in aula come casi di studio aggiornati.",
    education_title: "Formazione",
    education_lead:
      "Percorso accademico all'Università degli Studi di Napoli «Parthenope» e formazione avanzata in gestione ambientale.",
    contact_title: "Contatti",
    contact_lead: "Per collaborazioni di ricerca, interventi o richieste accademiche.",
    form_name: "Nome",
    form_email: "Email",
    form_message: "Messaggio",
    form_send: "Invia",
    form_sent: "Inviato",
    location_label: "Sede",
    affiliation_label: "Affiliazione",
    affiliation_body:
      "ISSNOVA — Istituto Nazionale di Studi sullo Sviluppo delle Organizzazioni Virtuali e dell'Innovazione.",
    bio_card_title: "Bio",
    lang_switch: "EN",
  },
  en: {
    role: "Researcher and Navigation Teacher",
    badge: "Teacher & Researcher",
    location: "Giugliano in Campania, Italy",
    nav_home: "Home",
    nav_about: "About",
    nav_research: "Research",
    nav_projects: "EU Projects",
    nav_teaching: "Teaching",
    nav_education: "Education",
    nav_contact: "Contact",
    sidebar_title: "Navigation",
    read_more: "Read more",
    back_home: "Back to home",
    home_intro_title: "Welcome",
    home_intro_body:
      "Professional portfolio of research and teaching in maritime navigation, GNSS systems, and transport sustainability.",
    explore: "Explore the sections",
    about_title: "About Me",
    about_lead:
      "Researcher in Transport Sustainability at ISSNOVA and Navigation teacher.",
    about_p1:
      "I am a Researcher in Transport Sustainability at ISSNOVA and a Navigation teacher. I earned my M.Sc. (cum laude) in Navigation Sciences and Technologies at the University of Naples «Parthenope», specializing in MASS — Maritime Autonomous Surface Ships and adaptive routing.",
    about_p2:
      "My academic path covers GNSS data processing, remote sensing, inertial navigation, and sensor fusion. I have contributed to several European research projects in the maritime sector.",
    skills_label: "Skills",
    research_title: "Research Areas",
    research_lead:
      "Three pillars guide my academic and applied work: autonomous navigation, sustainability of maritime transport, and integration of positioning data.",
    research_mass_title: "MASS — Maritime Autonomous Surface Ships",
    research_mass_body:
      "Autonomous surface navigation and adaptive routing for the maritime transport of the future. Perception, decision and control systems for autonomous vessels.",
    research_sus_title: "Maritime Transport Sustainability",
    research_sus_body:
      "Environmental efficiency, emissions reduction and vessel performance. An integrated approach across technology, regulation and operations.",
    research_gnss_title: "GNSS & Sensor Fusion",
    research_gnss_body:
      "Positioning data processing, remote sensing and inertial integration. Sensor-fusion algorithms for robust navigation.",
    projects_title: "European Projects",
    projects_lead:
      "Participation in Horizon Europe projects under the Climate, Energy and Mobility cluster (CL5) for zero-impact maritime transport.",
    status_active: "Ongoing",
    eu_horizon: "EU Horizon",
    eu_project: "EU Project",
    teaching_title: "Teaching",
    teaching_role: "Navigation Teacher",
    teaching_body:
      "Navigation teacher. Training of technicians in the maritime transport sector, focused on technical-practical skills and nautical culture.",
    teaching_subjects: "Subjects & Areas",
    teaching_approach_title: "Teaching Approach",
    teaching_approach_body:
      "Lessons integrated with real examples from European research: outcomes from MASS, vessel electrification and sustainability projects enter the classroom as up-to-date case studies.",
    education_title: "Education",
    education_lead:
      "Academic path at the University of Naples «Parthenope» and advanced training in environmental management.",
    contact_title: "Contact",
    contact_lead: "For research collaborations, talks, or academic inquiries.",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send",
    form_sent: "Sent",
    location_label: "Location",
    affiliation_label: "Affiliation",
    affiliation_body:
      "ISSNOVA — National Institute for Studies on the Development of Virtual Organizations and Innovation.",
    bio_card_title: "Bio",
    lang_switch: "IT",
  },
} as const;

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "it" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = <K extends keyof typeof dict.it>(k: K) => dict[lang][k] ?? dict.it[k];

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}