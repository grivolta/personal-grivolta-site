# Note di progetto — giorgio.rivolta.pro

Contesto per chiunque (persona o assistente) lavori su questo sito.

## Cos'è
Sito personale a pagina singola di Giorgio Rivolta, Project & People Manager PMP.
Tutto in `index.html`: HTML, CSS e JS inline, nessuna dipendenza esterna
tranne i font Google. Ospitato su GitHub Pages.

Il vecchio sito (template Bootstrap + jQuery + AOS) è stato sostituito
integralmente. Le cartelle `css/`, `js/`, `scripts/` non sono più usate.
Restano necessarie: `images/`, `cv/`, `favicon.ico`.

## L'idea portante
Svolta del 2026-09: il sito **non è più un CV in HTML**. Il CV tecnico vive
nel PDF scaricabile (`cv/CV_GiorgioRivolta.pdf`); tutto quello che sta sotto
l'hero è uno specchio della parte comunitaria — beneficienza, ambiente,
volontariato, famiglia. L'hero stabilisce chi è professionalmente (kicker,
titolo, pulsante CV) e lo dice esplicitamente in `.hero-note`: "trovi il CV
qui sotto, il resto racconta cosa riempie il mio cuore". Da lì in poi niente
più numeri di progetto, programmi selezionati, percorso di carriera o elenco
di competenze: quella roba resta nel PDF.

Sezioni attuali, in ordine:
1. **Hero** — identità professionale + link al CV + la frase-cardine sopra.
2. **Il registro ("In numeri")** — solo tre numeri, tutti comunità: 100+ kg,
   2 associazioni, 1 idea da tramandare. Ognuno ha una piccola icona a
   cerchio sopra il numero (SVG line-art disegnate ad hoc, non foto stock:
   le foto vere delle giornate di raccolta non esistono ancora, vedi sotto).
3. **"I miei principi"** (non più "Come lavoro") — stessi quattro principi,
   riscritti per non citare esplicitamente il lavoro/i progetti: sono
   principi di vita che si applicano di conseguenza anche in ufficio, ma
   il testo non lo dice apertamente.
4. **Credenziali** — solo tre badge visivi (sigilli a cerchio): PMP, PSM I,
   CCNA. Niente più elenco di tool/settori/altre certificazioni.
5. **Contatti** — invariato.

Se si aggiungono sezioni, restare dentro questa cornice: comunità, non CV.

3. **La linea che cambia natura.** È l'elemento portante. Divide le sezioni e
   viene generata da `buildPath(points, t, w, h)` nello script. Gli stessi
   punti vengono disegnati con una tensione `t` diversa: a `t=0` sono
   angoli retti che leggono come il profilo di un Gantt, a `t=1` sono
   colline morbide. Ogni `.divider` ha `data-morph` con la sua `t`, e il
   valore **cresce scendendo nella pagina** (0.15 → 0.45 → 0.75 → 1).
   Non cambiare quell'ordine: è il senso dell'effetto. La stessa funzione
   disegna le tre creste dell'hero, che si muovono col puntatore.

## Design
- Bianco, verde profondo `#0B3122`, verde `#1B5E3F`, oro `#C89B3C`,
  inchiostro `#101B14`.
- **L'oro è un accento**: filetti, etichette, numeri della comunità, la linea.
  Mai come riempimento di aree estese.
- Font: Fraunces (titoli), Karla (testo), IBM Plex Mono (etichette e numeri).
- Bordi netti e filetti da 1px, niente ombre o gradienti.
- Ritmo delle bande: hero verde scuro → bianco → mist → bianco →
  verde scuro → bianco → verde scuro. Serve a dare respiro, non decorare.
- Foto in hero: ritratto 4:5 con cornice oro sfalsata dietro (`.portrait`).
  Il taglio si regola con `object-position` su `.portrait img`.
- I numeri del registro si contano da soli all'ingresso e rivelano una riga
  di contesto (`.ctx`) al passaggio. Su mobile il contesto è sempre visibile.

## Bilingue
- **L'inglese vive nel markup**, non in un dizionario.
- L'italiano sta nell'oggetto `IT` nello script in fondo.
- Ogni elemento traducibile ha `data-i18n="chiave"`. Per aggiungerne uno:
  metti l'attributo nel markup con il testo inglese dentro, poi aggiungi la
  chiave corrispondente in `IT`. L'inglese si autocompila da solo.
- La lingua iniziale segue il browser; la scelta si salva in `localStorage`.

### Lingua: scelte volute
Non "correggere" queste:
- Ruoli aziendali e settori (quando compaiono) restano **in inglese anche
  nella versione italiana** (Project Manager, Scrum Master...). Dalla svolta
  del 2026-09 il corpo del sito evita comunque di nominare esplicitamente
  ruoli/aziende: quei riferimenti stanno nel CV, non più in pagina.
- L'italiano è scritto come lingua d'origine, non tradotto dall'inglese.
  Evitare calchi ("guidare un programma", "delivery" dove basta "progetto").

## Accessibilità
Skip link, focus visibile oro, `prefers-reduced-motion` rispettato,
schema.org Person con `volunteerFor`. Mantenerli.

## Idee non ancora fatte
- Foto reali delle giornate di raccolta con Plasticfree — nella sezione "In
  numeri" al posto delle icone SVG disegnate ad hoc (o accanto). Le icone
  attuali sono un placeholder scelto apposta per non usare foto stock non
  pertinenti presenti in `images/` (retaggio del vecchio sito).
- I sigilli PMP/PSM I/CCNA in "Credenziali" sono disegnati da zero (cerchio
  + sigla), non i loghi ufficiali degli enti certificatori: se un giorno si
  vogliono i badge reali (es. da Credly), vanno scaricati con permesso
  esplicito dell'utente, non generati.
- Link ai siti di PMI-NIC e Plasticfree.
