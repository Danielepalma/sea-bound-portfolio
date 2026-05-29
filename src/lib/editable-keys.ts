export type EditableEntry = {
  page: string;
  label: string;
  defaultIt: string;
  defaultEn: string;
  multiline?: boolean;
};

export const EDITABLE: Record<string, EditableEntry> = {
  // HOME
  "home.hero.title": {
    page: "Home",
    label: "Titolo hero",
    defaultIt: "Per gli studenti dell'ITTL",
    defaultEn: "For ITTL students",
  },
  "home.hero.body": {
    page: "Home",
    label: "Testo hero",
    defaultIt:
      "Materiali, lezioni, calcolatori e formulari per studiare la navigazione, la statica della nave e l'astronomia nautica. Tutto raccolto in un unico posto.",
    defaultEn:
      "Materials, lessons, calculators and formularies to study navigation, ship statics and celestial astronomy. All gathered in one place.",
    multiline: true,
  },

  // CHI SONO
  "about.lead": {
    page: "Chi sono",
    label: "Sottotitolo",
    defaultIt:
      "Ricercatore presso la Fondazione Institute for Sustainable Society and Innovation (ISSNOVA) e docente di Navigazione.",
    defaultEn:
      "Researcher at the Fondazione Institute for Sustainable Society and Innovation (ISSNOVA) and Navigation teacher.",
    multiline: true,
  },
  "about.p1": {
    page: "Chi sono",
    label: "Bio — paragrafo 1",
    defaultIt:
      "Sono ricercatore presso la Fondazione Institute for Sustainable Society and Innovation (ISSNOVA) e docente di Navigazione. Ho conseguito la Laurea Magistrale (con lode) in Scienze e Tecnologie della Navigazione all'Università degli Studi di Napoli «Parthenope», con specializzazione in MASS — Maritime Autonomous Surface Ships e navigazione a rotta adattiva.",
    defaultEn:
      "I am a researcher at the Fondazione Institute for Sustainable Society and Innovation (ISSNOVA) and a Navigation teacher. I earned my M.Sc. (cum laude) in Navigation Sciences and Technologies at the University of Naples «Parthenope», specializing in MASS — Maritime Autonomous Surface Ships and adaptive routing.",
    multiline: true,
  },
  "about.p2": {
    page: "Chi sono",
    label: "Bio — paragrafo 2",
    defaultIt:
      "Nel percorso accademico ho acquisito competenze avanzate in: elaborazione dati GNSS, telerilevamento, navigazione inerziale e sensor fusion. Ho partecipato a diversi progetti europei nel settore marittimo.",
    defaultEn:
      "My academic path covers GNSS data processing, remote sensing, inertial navigation, and sensor fusion. I have contributed to several European research projects in the maritime sector.",
    multiline: true,
  },

  // PROGETTI
  "projects.lead": {
    page: "Progetti europei",
    label: "Sottotitolo",
    defaultIt:
      "Partecipazione a progetti Horizon Europe nel cluster Climate, Energy and Mobility (CL5) per il trasporto marittimo a impatto zero.",
    defaultEn:
      "Participation in Horizon Europe projects under the Climate, Energy and Mobility cluster (CL5) for zero-impact maritime transport.",
    multiline: true,
  },

  // FORMAZIONE
  "education.lead": {
    page: "Formazione",
    label: "Sottotitolo",
    defaultIt:
      "Percorso accademico all'Università degli Studi di Napoli «Parthenope» e formazione avanzata in gestione ambientale.",
    defaultEn:
      "Academic path at the University of Naples «Parthenope» and advanced training in environmental management.",
    multiline: true,
  },

  // CV
  "cv.lead": {
    page: "CV",
    label: "Sottotitolo",
    defaultIt: "Versione sintetica del mio percorso professionale, accademico e di ricerca.",
    defaultEn: "A concise version of my professional, academic and research path.",
    multiline: true,
  },
  "cv.profile": {
    page: "CV",
    label: "Profilo professionale",
    defaultIt:
      "Maritime Sustainability Researcher presso ISSNOVA, Laurea Magistrale con lode in Scienze e Tecnologie della Navigazione (Parthenope). Specializzazione in Navigazione e Surveying con tesi su Maritime Autonomous Surface Ships (MASS) e routing adattivo. Competenze avanzate in elaborazione dati GNSS, telerilevamento, navigazione inerziale e sensor fusion. Specializzazione in gestione ambientale per la performance navale. Contributi attivi ai progetti europei TRUSTEE, AENEAS, FLEXSHIP, UnderSec e OVERHEAT.",
    defaultEn:
      "Maritime Sustainability Researcher at ISSNOVA, M.Sc. (cum laude) in Navigation Sciences and Technologies (Parthenope). Specialised in Navigation and Surveying, thesis on Maritime Autonomous Surface Ships (MASS) and adaptive routing. Advanced skills in GNSS data processing, remote sensing, inertial navigation and sensor fusion. Advanced training in environmental management for vessel performance. Active contributor to EU projects TRUSTEE, AENEAS, FLEXSHIP, UnderSec and OVERHEAT.",
    multiline: true,
  },

  // CONTATTI
  "contact.email": {
    page: "Contatti",
    label: "Email",
    defaultIt: "danielepalmaesposito13@gmail.com",
    defaultEn: "danielepalmaesposito13@gmail.com",
  },
  "contact.linkedin": {
    page: "Contatti",
    label: "URL LinkedIn",
    defaultIt: "https://www.linkedin.com/in/daniele-palma-esposito-402055153/",
    defaultEn: "https://www.linkedin.com/in/daniele-palma-esposito-402055153/",
  },
  "contact.location": {
    page: "Contatti",
    label: "Sede",
    defaultIt: "Giugliano in Campania, Italia",
    defaultEn: "Giugliano in Campania, Italy",
  },
  "contact.affiliation": {
    page: "Contatti",
    label: "Affiliazione",
    defaultIt:
      "ISSNOVA — Fondazione Institute for Sustainable Society and Innovation. Ricercatore in sostenibilità dei trasporti.",
    defaultEn:
      "ISSNOVA — Fondazione Institute for Sustainable Society and Innovation. Researcher in transport sustainability.",
    multiline: true,
  },
};

export type EditableKey = keyof typeof EDITABLE;