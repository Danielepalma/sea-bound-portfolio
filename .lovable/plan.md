## 1. Progetti Europei — 5 progetti con logo

Aggiorno `src/lib/content.ts` con i 5 progetti reali (testi adattati dai contenuti LinkedIn forniti):

- **TRUSTEE** — HORIZON-CL5-2024-D5-01 · GA 101192328 — *fuTure pRoof efficient and sUSTainable dEployment of zEwt* (Feb 2025 – in corso)
- **OVERHEAT** — HORIZON-CL5-2022-D6-01-08 · GA 101076633 — *Innovative strategies for containership fires prevention and management* (Gen 2024 – in corso)
- **UNDERSEC** — HORIZON-CL3-2022-BM-01-01 · GA 101121288 — *Underwater Security* (Nov 2023 – in corso)
- **FLEXSHIP** — HORIZON-CL5-2022-D5-01-01 · GA 101095863 — *Green Digital Twin per elettrificazione navale* (Set 2023 – in corso)
- **AENEAS** — HORIZON-CL5-2022-D5-01-02 · GA 101095902 — *Innovative on-board energy storage systems* (Set 2023 – Gen 2026)

Per ogni progetto aggiungo: `logo` (path locale in `src/assets/projects/`), `period`, `dateRange`, e link al sito ufficiale (`url`). Recupero i loghi dai siti ufficiali:
- trustee-project.eu, overheat-project.eu, undersec-project.eu, flexship-project.eu, aeneas-project.eu (se un sito non è raggiungibile uso CORDIS o ricerca web), salvati come `src/assets/projects/{slug}.png`.

Aggiorno `src/routes/progetti.tsx`: la card di ciascun progetto mostra logo (sinistra, ~80px), titolo, sottotitolo, GA, periodo, descrizione, obiettivi, badge Horizon/Active, e CTA "Sito ufficiale". Stesso trattamento (logo + link) nell'anteprima della home se presente.

## 2. Didattica — solo intro + materiali/lezioni/calcolatori

Riscrivo `src/routes/didattica.tsx`:

- **Intro breve** (3–4 righe): "Docente di Navigazione presso un ITTL. Condivido qui materiali, lezioni e calcolatori interattivi sviluppati per gli studenti." Rimuovo qualunque descrizione di metodologia/approccio.
- **Sezione "Materiali & Lezioni"** — griglia di card raggruppate per area (Navigazione, Statica della nave & Idrostatica, Prove & Verifiche), ogni card con icona, titolo, breve descrizione e link esterno al PDF/risorsa su `danielepalma.github.io/portfolio-navigazione/`.
- **Sezione "Calcolatori Interattivi"** — card prominenti (con highlight per "Calcolatore Statica della Nave"), ognuna con pill di moduli e bottone "Apri" verso l'URL corrispondente:
  - Calcolatore Statica della Nave (in evidenza) → `/calcolatore_statica_della_nave__1_.html`
  - Navigazione Astronomica, Rotte e Distanze, Passaggio Acqua Dolce/Salata, Simulatore Incaglio, Bunker & Portata, Meteorologia Nautica (prossimamente).
- **CTA finale** "Vai al portfolio didattico completo →" verso `https://danielepalma.github.io/portfolio-navigazione/`.

Aggiungo i dati in `src/lib/content.ts` (`teachingMaterials`, `calculators`) bilingue IT/EN. Rimuovo dal dizionario `i18n.tsx` le chiavi `teaching_approach_*` e i riferimenti a "metodologia".

## 3. ISSNOVA — nome corretto

In `src/lib/i18n.tsx` aggiorno `affiliation_body` (IT e EN) a:

> "ISSNOVA — Fondazione Institute for Sustainable Society and Innovation. Ricercatore in sostenibilità dei trasporti."

Verifico anche `about_p1` / `about_p2` e qualsiasi altro punto che menzioni ISSNOVA, lasciando "Institute for Sustainable Society and Innovation" non tradotto in entrambe le lingue.

## Note tecniche

- Loghi: tento il download con `curl` dai siti ufficiali; se uno non è recuperabile, genero un placeholder coerente (testo del progetto su sfondo navy/oro) con `imagegen`.
- Niente cambi a routing, layout, header o sidebar.
- Build verificata implicitamente; controllo che le immagini importate esistano prima del riferimento.
