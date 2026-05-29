## 1. Logo

- Header (`Layout.tsx`): rimuovo `rounded-full` + `object-contain` schiacciante, uso un contenitore quadrato più grande (h-32/h-40 md) con `object-cover` o `object-contain` su sfondo trasparente senza il cerchio bianco che taglia il logo. Risultato: il logo riempie lo spazio assegnato senza essere ritagliato in cerchio.
- Favicon (`public/favicon.png`): rigenero a 512×512 con padding corretto così la miniatura della tab Chrome non risulta schiacciata.

## 2. Editor contenuti (login → modifica testi)

Nuova tabella `page_content` su Lovable Cloud:

```text
page_content
  key TEXT PK            -- es. "home.hero.title", "cv.profile", "contact.email"
  value_it TEXT
  value_en TEXT
  updated_at TIMESTAMPTZ
```

- RLS: lettura pubblica (anon+auth), scrittura solo admin (`has_role`).
- Hook `usePageContent(key)` che fa fetch da Supabase con fallback al testo di default già presente in `i18n.tsx` → nessuna pagina si rompe se la riga non esiste.
- Pagine cablate: Home (hero), Chi sono / Progetti / Formazione, CV (profilo, esperienze, istruzione, pubblicazioni come blocchi testuali), Contatti (email, sede, affiliazione).
- Admin (`/admin`) riorganizzato in tab:
  1. **Materiali** (già esistente)
  2. **Testi pagine** — lista di chiavi raggruppate per pagina, ogni voce ha due textarea IT/EN con salvataggio inline.
- Login esistente (`/login`) già funzionante: l'utente fa login, vede il link "Admin" nell'header e accede alla nuova area testi.

## 3. Contatti

- Rimuovo il form fake (non invia nulla).
- Layout nuovo: card grandi con
  - **Email**: `danielepalmaesposito13@gmail.com` con bottone `mailto:` "Scrivimi"
  - **LinkedIn**: bottone esistente
  - **Sede** e **Affiliazione**: card informative
- Email, sede e affiliazione leggibili dalla tabella `page_content` → modificabili dall'admin.

## 4. File toccati

- `src/components/portfolio/Layout.tsx` (logo header)
- `public/favicon.png` (rigenerato)
- nuova migrazione: tabella `page_content` + RLS + GRANT
- `src/hooks/use-page-content.tsx` (nuovo)
- `src/routes/index.tsx`, `src/routes/cv.tsx`, `src/routes/chi-sono*.tsx`, `src/routes/contatti.tsx` (consumano `usePageContent`)
- `src/routes/admin.tsx` (tab Materiali / Testi)
- `src/lib/i18n.tsx` (default fallback per le nuove chiavi)

## 5. Non incluso

- Invio email reale dal form (rimosso su tua richiesta).
- Editor WYSIWYG: i testi sono semplici textarea (markdown leggero non necessario per ora — posso aggiungerlo dopo se serve).
