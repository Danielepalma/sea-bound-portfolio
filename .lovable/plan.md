## Obiettivi

1. **Responsività** — Il layout va in modalità "desktop" solo a partire da 768px (breakpoint `md`); su schermi medi/piccoli ci sono diversi problemi: il logo è enorme (144–176px), il pulsante hamburger è in posizione assoluta e può sovrapporsi al contenuto, il titolo H1 va a 3xl e può fuoriuscire, padding orizzontali fissi a 24px su mobile, sidebar/main gap eccessivo.
2. **Pagina Formulari** — Rimuovere le tabelle/formule precaricate (provenienti da `src/lib/content.ts → formulari`) e lasciare solo l'elenco dei file caricati tramite admin.
3. **Miniature dei file** — Ogni materiale caricato deve poter avere un'immagine di anteprima visibile sia nella card pubblica sia nell'elenco admin.

## Cosa fare

### 1. Responsività di `PortfolioLayout`
- Header: ridurre il logo su schermi piccoli (es. `h-24 w-24` → `sm:h-32 sm:w-32` → `md:h-40 md:w-40`), titolo `text-2xl sm:text-3xl md:text-5xl`, padding `px-4 sm:px-6`, gap ridotto.
- Hamburger: spostarlo dal posizionamento assoluto a posizionamento in-flow (in alto a destra dentro la barra), così non sovrappone più contenuto e resta cliccabile.
- Container generale: `max-w-6xl px-4 sm:px-6`, gap `gap-6 md:gap-10`.
- Footer: layout già flex-col → migliorare allineamenti e text-size.
- Verificare overflow di tabelle/elenchi: aggiungere `min-w-0` dove serve e `overflow-x-auto` ai blocchi CV/elenchi larghi.
- Tutto resta basato su Tailwind, nessun cambio di logica.

### 2. Pagina `didattica/formulari`
- Eliminare l'intero blocco `<div className="grid md:grid-cols-2 ...">` che mappa `formulari` da `content.ts`.
- Eliminare anche il titolo "Formulari caricati" intermedio: la lista `MaterialsList` diventa l'unico contenuto sotto al `PageHeader`.
- Rimuovere gli import non più usati (`Sigma`, `formulari`).
- Lasciare `formulari` in `content.ts` invariato (non in uso, ma non rimosso per evitare effetti collaterali).

### 3. Miniature per i materiali
- **Database**: aggiungere colonna `thumbnail_path TEXT NULL` alla tabella `materials`.
- **Admin (`admin.tsx`)**:
  - Nuovo campo file opzionale "Immagine anteprima (PNG/JPG)" nel form di upload.
  - Se presente, viene caricato nello stesso bucket `materials` con prefisso `thumbnails/…` e il percorso salvato in `thumbnail_path`.
  - Nell'elenco dei materiali caricati, mostrare la miniatura (40×40 `object-cover`) al posto dell'icona quando disponibile.
  - Pulsante "Cambia miniatura" per aggiornarla su un materiale esistente (upload separato, niente edit complesso).
- **Frontend (`MaterialsList.tsx`)**:
  - Quando `thumbnail_path` è valorizzato, la card mostra un quadrato 64×64 con l'immagine; altrimenti fallback all'icona attuale.
  - Auto-anteprima per file immagine: se il file caricato è già un'immagine e non c'è una miniatura esplicita, generare l'URL pubblico del file stesso come miniatura.
- **Tipi**: aggiornare il tipo locale `Material` nei due file (i tipi Supabase vengono rigenerati automaticamente dopo la migration).

## Modifiche tecniche

- Migration SQL: `ALTER TABLE public.materials ADD COLUMN IF NOT EXISTS thumbnail_path TEXT;` (nessuna nuova RLS: ricade sotto le policy esistenti).
- Bucket `materials` è già pubblico → nessuna modifica storage.
- File toccati:
  - `src/components/portfolio/Layout.tsx` (responsive)
  - `src/routes/didattica.formulari.tsx` (pulizia)
  - `src/components/portfolio/MaterialsList.tsx` (miniature lato pubblico)
  - `src/routes/admin.tsx` (campo miniatura + visualizzazione)
  - nuova migration SQL

## Fuori scope
- Editor full-fledged dei materiali (rinomina titoli ecc.): non richiesto.
- Generazione automatica miniature da PDF (richiederebbe un servizio server, non chiesto).
- Modifica di `formulari` in `content.ts` (non più referenziato dopo la pulizia, ma lasciato in repo).
