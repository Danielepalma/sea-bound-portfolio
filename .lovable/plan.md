## Piano

### 1. Nascondere il badge "Edit with Lovable"
Chiamata a `publish_settings--set_badge_visibility(hide_badge: true)`.  
Nota: richiede piano Pro o superiore — se il piano non lo consente, lo segnalo.

### 2. Sostituire il calcolatore Statica della Nave
- Sovrascrivere `public/calcolatori/statica-nave.html` con il file allegato `calcolatore_statica_della_nave.html` (5470 righe).
- Il link in `src/lib/content.ts` (`/calcolatori/statica-nave.html`) resta invariato.

### 3. Sistemare e migliorare l'interfaccia Admin (`src/routes/admin.tsx`)

**Perché l'eliminazione "non funziona" oggi:**
- `remove()` chiama `supabase.storage.remove()` e poi `supabase.from().delete()` senza mai controllare gli errori né mostrare feedback. Se uno dei due step fallisce in silenzio (es. percorso storage non più valido) l'elemento non scompare e l'utente non sa perché. Il pulsante è inoltre una piccola icona rossa senza etichetta.
- Anche "Miniatura" è una `<label>` testuale grigia poco riconoscibile come pulsante.

**Modifiche al form "Nuovo materiale":**
- Sostituire gli `<input type="file">` nudi con drop-zone/bottoni stilizzati ed etichettati: **"Scegli file"** e **"Scegli miniatura"**, con anteprima del nome file selezionato e miniatura preview se è un'immagine.
- Pulsante "Carica" più grande, con stato disabilitato/loader chiaro.
- Toast di successo/errore (`sonner`, già installato) al posto del solo `setErr`.

**Modifiche alla lista materiali esistenti:**
- Layout a card più ariosa per ogni materiale con: thumbnail (più grande, 56px), titolo, area, topic, e una riga di azioni con pulsanti **etichettati** invece di sole icone:
  - **"Apri"** (link al file)
  - **"Cambia miniatura"** (file picker nascosto dietro un bottone visibile, con conferma toast)
  - **"Modifica"** → apre un piccolo dialog inline (Dialog di shadcn) per modificare titolo IT/EN, meta IT/EN, area, topic; salvataggio con `update()` e toast.
  - **"Elimina"** in rosso, con `AlertDialog` di shadcn al posto del `window.confirm`.
- `remove()` riscritta con try/catch, controlla `error` su entrambe le chiamate, mostra toast d'errore con messaggio Supabase, e procede alla `delete` su DB anche se la rimozione storage fallisce (per evitare orfani non eliminabili). Aggiorna lo stato locale ottimisticamente.
- `changeThumb()` analogamente con error handling e toast.

**Niente modifiche allo schema DB** (la colonna `thumbnail_path` esiste già).

### 4. File toccati
- `public/calcolatori/statica-nave.html` (sovrascritto)
- `src/routes/admin.tsx` (refactor UI + error handling)
- nessun cambiamento a migrazioni, RLS, routing, o frontend pubblico

### Fuori scope
- Generazione automatica di anteprime PDF
- Modifica del file caricato (sostituzione del binario dello stesso record); rimane "elimina e ricarica"
