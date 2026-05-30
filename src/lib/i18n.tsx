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
    nav_cv: "CV",
    nav_profile: "Profilo",
    nav_lessons: "Lezioni",
    nav_notes: "Appunti",
    nav_exercises: "Esercitazioni",
    nav_calculators: "Calcolatori",
    nav_formularies: "Formulari",
    home_students_title: "Per gli studenti dell'ITTL",
    home_students_body:
      "Materiali, lezioni, calcolatori e formulari per studiare la navigazione, la statica della nave e l'astronomia nautica. Tutto raccolto in un unico posto.",
    home_teaching_cta: "Esplora la didattica",
    home_more: "Altre sezioni",
    teaching_subnav: "Sezioni didattiche",
    about_subnav: "Su di me",
    cv_title: "Curriculum Vitae",
    cv_lead: "Versione sintetica del mio percorso professionale, accademico e di ricerca.",
    cv_download: "Scarica CV (PDF)",
    sidebar_title: "Navigazione",
    read_more: "Approfondisci",
    back_home: "Torna alla home",
    home_intro_title: "Benvenuto",
    home_intro_body:
      "Portfolio professionale di ricerca e didattica nel settore della navigazione marittima, dei sistemi GNSS e della sostenibilità dei trasporti.",
    explore: "Esplora le sezioni",
    about_title: "Chi Sono",
    about_lead:
      "Ricercatore presso la Fondazione Institute for Sustainable Society and Innovation (ISSNOVA) e docente di Navigazione.",
    about_p1:
      "Sono ricercatore presso la Fondazione Institute for Sustainable Society and Innovation (ISSNOVA) e docente di Navigazione. Ho conseguito la Laurea Magistrale (con lode) in Scienze e Tecnologie della Navigazione all'Università degli Studi di Napoli «Parthenope», con specializzazione in MASS — Maritime Autonomous Surface Ships e navigazione a rotta adattiva.",
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
      "Docente di Navigazione presso un Istituto Tecnico Trasporti e Logistica (ITTL). In questo spazio condivido materiali, lezioni e calcolatori interattivi sviluppati per gli studenti.",
    teaching_intro_short:
      "Materiali, lezioni e calcolatori interattivi per la didattica della navigazione, della statica della nave e dell'idrostatica.",
    teaching_subjects: "Materie & Aree",
    teaching_materials_title: "Materiali & Lezioni",
    teaching_materials_lead:
      "Schede, dispense, esercizi e prove organizzati per argomento. Clicca su un elemento per aprire o scaricare.",
    teaching_lessons_lead:
      "Slide e presentazioni usate in aula, divise per argomento. Materiale di riferimento per seguire le lezioni e ripassare i concetti chiave.",
    teaching_notes_lead:
      "Appunti sintetici, schemi e mappe concettuali per studiare e ripassare in autonomia, organizzati per argomento.",
    teaching_exercises_title: "Esercitazioni",
    teaching_exercises_lead:
      "Compiti, esercizi guidati e giochi didattici per mettere in pratica gli argomenti studiati, divisi per argomento.",
    materials_general_group: "Generale",
    preview_label: "Anteprima",
    open_label: "Apri",
    download_label: "Scarica",
    no_preview_available: "Anteprima non disponibile per questo formato. Apri o scarica il file.",
    teaching_calc_title: "Calcolatori Interattivi",
    teaching_calc_lead:
      "Applicazioni web sviluppate per la didattica: si aprono direttamente nel browser, senza installazione.",
    teaching_open: "Apri",
    teaching_soon: "Prossimamente",
    teaching_featured: "Strumento completo",
    teaching_portfolio_cta: "Vai al portfolio didattico completo",
    teaching_formulari_title: "Formulari di Navigazione",
    teaching_formulari_lead:
      "Raccolta di formule essenziali per la navigazione, la statica della nave e l'astronomia nautica.",
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
      "ISSNOVA — Fondazione Institute for Sustainable Society and Innovation. Ricercatore in sostenibilità dei trasporti.",
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
    nav_cv: "CV",
    nav_profile: "Profile",
    nav_lessons: "Lessons",
    nav_notes: "Notes",
    nav_exercises: "Exercises",
    nav_calculators: "Calculators",
    nav_formularies: "Formularies",
    home_students_title: "For ITTL students",
    home_students_body:
      "Materials, lessons, calculators and formularies to study navigation, ship statics and celestial astronomy. All gathered in one place.",
    home_teaching_cta: "Explore teaching",
    home_more: "Other sections",
    teaching_subnav: "Teaching sections",
    about_subnav: "About me",
    cv_title: "Curriculum Vitae",
    cv_lead: "A concise version of my professional, academic and research path.",
    cv_download: "Download CV (PDF)",
    sidebar_title: "Navigation",
    read_more: "Read more",
    back_home: "Back to home",
    home_intro_title: "Welcome",
    home_intro_body:
      "Professional portfolio of research and teaching in maritime navigation, GNSS systems, and transport sustainability.",
    explore: "Explore the sections",
    about_title: "About Me",
    about_lead:
      "Researcher at the Fondazione Institute for Sustainable Society and Innovation (ISSNOVA) and Navigation teacher.",
    about_p1:
      "I am a researcher at the Fondazione Institute for Sustainable Society and Innovation (ISSNOVA) and a Navigation teacher. I earned my M.Sc. (cum laude) in Navigation Sciences and Technologies at the University of Naples «Parthenope», specializing in MASS — Maritime Autonomous Surface Ships and adaptive routing.",
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
      "Navigation teacher at an Italian Istituto Tecnico Trasporti e Logistica (ITTL). Here I share materials, lessons and interactive calculators built for students.",
    teaching_intro_short:
      "Materials, lessons and interactive calculators for navigation, ship statics and hydrostatics.",
    teaching_subjects: "Subjects & Areas",
    teaching_materials_title: "Materials & Lessons",
    teaching_materials_lead:
      "Sheets, handouts, exercises and tests grouped by topic. Click an item to open or download.",
    teaching_lessons_lead:
      "Slides and presentations used in class, grouped by topic. Reference material to follow lessons and review key concepts.",
    teaching_notes_lead:
      "Concise notes, diagrams and concept maps for independent study and review, organized by topic.",
    teaching_exercises_title: "Exercises",
    teaching_exercises_lead:
      "Assignments, guided exercises and educational games to practice what you study, grouped by topic.",
    materials_general_group: "General",
    preview_label: "Preview",
    open_label: "Open",
    download_label: "Download",
    no_preview_available: "Preview not available for this format. Open or download the file.",
    teaching_calc_title: "Interactive Calculators",
    teaching_calc_lead:
      "Web apps built for teaching: they open right in the browser, no install needed.",
    teaching_open: "Open",
    teaching_soon: "Coming soon",
    teaching_featured: "Full toolkit",
    teaching_portfolio_cta: "Visit the full teaching portfolio",
    teaching_formulari_title: "Navigation Formularies",
    teaching_formulari_lead:
      "Collection of essential formulas for navigation, ship statics and celestial astronomy.",
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
      "ISSNOVA — Fondazione Institute for Sustainable Society and Innovation. Researcher in transport sustainability.",
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