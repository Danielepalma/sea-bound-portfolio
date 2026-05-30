## 1. Logo

- **Header + homepage**: contenitore quadrato con `rounded-full` + `overflow-hidden` + `object-cover` su `aspect-square`, sfondo navy/oro di cornice. Risultato: cerchio perfetto, nessuna deformazione (object-cover ritaglia il quadrato centrale dell'immagine, non la schiaccia).
- **Logo allegato**: non risulta un file allegato a questo messaggio. Quando passi alla build mi confermerai se vuoi:
  (a) caricare ora un nuovo file (lo metto in `src/assets/logo.png` sovrascrivendo l'attuale), oppure
  (b) tenere il logo già presente forzandolo in forma circolare.
- **Favicon**: rigenero a partire dallo stesso logo, mascherato a cerchio su sfondo navy 512×512, così la tab Chrome non risulta schiacciata.

## 2. File per argomento + nuova sezione "Esercitazioni"

Aggiungo il concetto di **argomento (topic)** ai materiali. Migrazione DB:

```text
materials
  + topic TEXT NULL              -- es. "Astronomia nautica", "Statica della nave"
  + topic_order INT DEFAULT 0    -- ordinamento argomenti dentro l'area

esercitazioni  → nuovo valore valido per `area` (lezioni | esercitazioni | appunti | calcolatori | formulari)
```

- Nuova rotta `/didattica/esercitazioni` (compiti, giochi, esercizi a tema), aggiunta al sotto-menu Didattica e alla home.
- `MaterialsList` raggruppa i file per `topic` con titoletto di sezione; i materiali senza topic finiscono in un gruppo "Generale" / "General".
- Admin: campo `Argomento` (autocomplete dai topic già esistenti per quell'area) nel form di upload + colonna nella lista, con possibilità di editare topic e ordine inline.

## 3. Anteprima file

- Nuovo componente `<MaterialPreview>` che apre un modal con:
  - **PDF** → `<iframe>` dell'URL pubblico (i PDF dello storage Supabase si aprono nativamente nel browser).
  - **Immagini** (png/jpg/webp) → `<img>` full-width.
  - **Office / altro** (xls/xlsx/doc/docx) → niente preview inline (i browser non supportano), mostro card con "Apri / Scarica" + link diretto.
- Nelle card di `MaterialsList` aggiungo l'icona **occhio** "Anteprima" oltre al link "Apri in nuova scheda".

## 4. Didascalie Lezioni vs Appunti

Distinguo i lead:
- **Lezioni**: "Slide e presentazioni usate in aula, divise per argomento. Materiale di riferimento per seguire le lezioni e ripassare i concetti chiave."
- **Appunti**: "Appunti sintetici, schemi e mappe concettuali per studiare e ripassare in autonomia, divisi per argomento."
- **Esercitazioni** (nuovo): "Compiti, esercizi guidati e giochi didattici per mettere in pratica gli argomenti studiati."

## 5. Sicurezza

Due finding aperti — fix in un'unica migrazione:

**a. CRITICO — `user_roles` privilege escalation** (qualsiasi utente loggato può inserirsi come admin):
- aggiungo policy `INSERT/UPDATE/DELETE` su `user_roles` con `WITH CHECK / USING (has_role(auth.uid(), 'admin'))`
- mantengo il trigger `handle_first_user_admin` (security definer, bypassa RLS) per il bootstrap del primo admin
- revoco `INSERT/UPDATE/DELETE` su `public.user_roles` al role `authenticated` (anche con policy bloccante, la mancanza di grant è cintura+bretelle)

**b. WARN — SECURITY DEFINER eseguibile da `authenticated`**: `has_role` deve restare SECURITY DEFINER (è quella che evita la ricorsione RLS), ma `REVOKE EXECUTE ... FROM PUBLIC, anon, authenticated` e poi `GRANT EXECUTE ... TO authenticated` solo se serve dal client. In realtà `has_role` viene usata solo dentro le policy RLS (lato server in PostgREST), quindi posso lasciarla con `EXECUTE` solo a `postgres, service_role` e revocarla a `anon, authenticated`. Le policy continuano a funzionare perché vengono valutate con i privilegi del DB owner.

## 6. File toccati

- `src/components/portfolio/Layout.tsx` (logo header rotondo)
- `src/routes/index.tsx` (logo hero / card Esercitazioni)
- `public/favicon.png` (rigenerato circolare)
- `src/assets/logo.png` (sostituito se l'utente carica nuovo file)
- nuova migrazione: `materials.topic`, fix `user_roles` + `has_role` grants
- `src/components/portfolio/MaterialsList.tsx` (raggruppamento per topic + tasto preview)
- `src/components/portfolio/MaterialPreview.tsx` (nuovo, modal preview)
- `src/routes/didattica.esercitazioni.tsx` (nuovo)
- `src/routes/didattica.tsx` (sotto-menu + 5 voci)
- `src/routes/didattica.lezioni.tsx`, `didattica.appunti.tsx` (lead distinti)
- `src/routes/admin.tsx` (campo topic + option "esercitazioni")
- `src/lib/i18n.tsx` (chiavi nuove)

## 7. Non incluso

- Rinominare/spostare in massa i materiali già caricati: restano senza topic finché non li modifichi dall'admin (compaiono nel gruppo "Generale").
- Preview di file Office in-browser (richiederebbe servizi esterni tipo Google Docs viewer, no per privacy + dipendenza esterna).
