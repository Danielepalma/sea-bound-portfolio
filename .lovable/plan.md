
# Piano di riorganizzazione del sito

## 1. Logo del sito
- Salvare il logo allegato in `src/assets/logo.png`
- Sostituire il segnaposto attuale nell'header (`src/components/portfolio/Layout.tsx`) con il logo circolare DPE
- Usarlo anche come favicon

## 2. Nuova struttura del menu

Da:
```
Home · Chi sono · Ricerca · Progetti · Didattica · Formazione · Contatti
```

A (con focus didattico):
```
Home · Didattica ▾ · Chi sono ▾ · CV · Contatti
```

- **Didattica** (dropdown — 4 voci separate):
  - Lezioni → `/didattica/lezioni`
  - Appunti → `/didattica/appunti`
  - Calcolatori → `/didattica/calcolatori`
  - Formulari → `/didattica/formulari`
- **Chi sono** (dropdown — raggruppa le pagine personali):
  - Profilo → `/chi-sono`
  - Progetti europei → `/chi-sono/progetti`
  - Formazione → `/chi-sono/formazione`
- **CV** → `/cv` (nuova pagina)
- **Contatti** → `/contatti`
- ❌ Eliminata: `/ricerca`

## 3. Home page — focus studenti
- Hero rivisto: messaggio diretto agli studenti dell'ITTL ("Materiali, lezioni e strumenti per studiare la navigazione")
- 4 card grandi in primo piano: **Lezioni**, **Appunti**, **Calcolatori**, **Formulari**
- Sotto, riga più piccola con: "Chi sono", "CV", "Contatti"
- Rimosso il riferimento a Ricerca

## 4. Pagine Didattica (4 separate)
Tutte e 4 condividono lo stesso pattern: header + griglia di materiali filtrati per `area` dalla tabella `materials` su Lovable Cloud.

- **Lezioni** (`area = 'lezioni'`) — slide, presentazioni
- **Appunti** (`area = 'appunti'`) — dispense PDF
- **Calcolatori** — pagina dedicata con la card della "Statica della Nave" (locale) + placeholder "Prossimamente" per i futuri
- **Formulari** — i formulari attualmente in `content.ts` (navigazione, ecc.), più materiali da DB con `area = 'formulari'`

Aggiornare anche il pannello admin (`/admin`) per esporre le 4 nuove aree nel selettore.

## 5. Pagine "Chi sono" raggruppate
Mantenere i contenuti esistenti spostandoli sotto `/chi-sono/*`:
- `/chi-sono` — biografia (ex chi-sono.tsx)
- `/chi-sono/progetti` — progetti europei (ex progetti.tsx)
- `/chi-sono/formazione` — formazione (ex formazione.tsx)

Sulla pagina `/chi-sono` aggiungere un sotto-menu visibile (tab) per navigare tra le tre sezioni.

## 6. Nuova pagina CV (`/cv`)
Pagina in stile nautical-card coerente col resto del sito, sezioni:
- **Intestazione**: nome, ruolo (Maritime Sustainability Researcher @ ISSNOVA), contatti, social
- **Profilo** — versione sintetica dell'"About me"
- **Esperienze** — timeline: ISSNOVA, Villaggio dei Ragazzi, ITTL Duca degli Abruzzi, Parthenope (Geodesia/Navigazione, Orientamento), GNV cadet
- **Istruzione** — Laurea Magistrale (cum laude), Corso Environmental Manager, 24 CFU, Laurea Triennale (cum laude), Diploma ITTL
- **Progetti europei** — 5 progetti con GA number e link
- **Pubblicazioni** — 3 paper (NAV2025, ISIEA 2025, AHFE 2024)
- **Conferenze** — NAV 2025 Messina, AHFE 2024 Nice
- **Certificazioni** — AI Summer School, ISABELLA, SAP MM/FI, Universiade
- **Lingue e competenze** — Inglese B2, QGIS, Matlab/Simulink, Office, SAP
- Pulsante "Scarica CV PDF" (link al PDF originale in `public/`)

Email/telefono dal CV pubblici sì/no: uso quelli già presenti nel sito (no telefono privato, no indirizzo casa).

## 7. Eliminazioni
- `src/routes/ricerca.tsx` (e relativa voce i18n/menu)
- Le rotte vecchie `progetti.tsx` e `formazione.tsx` vengono spostate sotto `chi-sono/`

## 8. Sezione tecnica
- Routing TanStack file-based con dot-notation: `didattica.lezioni.tsx`, `chi-sono.progetti.tsx`, ecc. Niente loader protetti su route pubbliche.
- Dropdown header: componente Popover/NavigationMenu di shadcn già installato.
- Migrazione DB **non** necessaria: la tabella `materials` ha già la colonna `area` (text libero), basta usare i nuovi valori. Aggiorno solo le opzioni del selettore in `/admin`.
- CV PDF: copiare il file allegato in `public/cv/daniele-palma-esposito-cv.pdf` per il download.
- i18n: aggiungere chiavi IT/EN per le nuove pagine e voci di menu in `src/lib/i18n.tsx`.

Confermi e procedo con l'implementazione?
