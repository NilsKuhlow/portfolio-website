# TODO — Portfolio-Website Nils Kuhlow

Stand: 2026-05-29 · Verbesserungsliste nach Priorität. „Erledigt" wurde in der Live-Preview verifiziert.

---

## ⚙️ Build-Workflow (NEU — wichtig)

Die Seite wird nicht mehr im Browser per Babel übersetzt, sondern **vorkompiliert**:

1. Quellcode bearbeiten: die `*.jsx`-Dateien im Projektordner (`Nav.jsx`, `Home.jsx`, `app.jsx`, …).
2. **Nach jeder Änderung an einer `.jsx`-Datei:** `npm run build` ausführen (kompiliert mit esbuild nach `build/`).
   - Einmalig vorher `npm install` (zieht esbuild). Live-Modus: `npm run watch`.
3. Seite lokal ansehen: `npm run serve` (bzw. `python -m http.server 8000`), dann `http://localhost:8000`.
4. Zum Deployen werden gebraucht: `index.html`, `build/`, `vendor/`, `assets/`, `fonts/`, `favicon.svg`. **Nicht** nötig: `node_modules/`, die `*.jsx`-Quellen.

---

## ✅ Erledigt

- **Helvetica überall**, Dark-Mode in der Nav (+ `prefers-color-scheme` + Persistenz), Intro-Band,
  News-Überschrift entklont, Gelb als Hover-/Aktiv-Signal, Karussell 6→9 s, Bild-Render-Bug behoben. *(frühere Sitzungen)*
- **SEO/Meta** — `<html lang="de">`, deutscher `<title>` (folgt der Sprachumschaltung), `meta description`,
  Open Graph + Twitter Card, `favicon.svg` (NK-Monogramm), `theme-color` (hell/dunkel).
  ⚠️ Beim Deploy noch `og:url` + `og:image`/`canonical` auf ABSOLUTE Domain-URLs setzen (Kommentar im `<head>`).
- **Accessibility** — klickbare `<a>`/`<div>` sind jetzt echte `<button>` (Text-Links) bzw.
  `role="button"` + Tastatur (`Enter`/`Leertaste`) für Karten/Zeilen/Hero; Hintergrundbilder mit
  `role="img"` + `aria-label` (alt-Ersatz); Karussell-Punkte mit lokalisiertem `aria-label`;
  `prefers-reduced-motion`-Guard. Verifiziert: 0 klickbare `<a>` ohne `href`.
- **Responsive** — `@media`-Layer (820 px / 520 px) + `className`-Hooks auf allen Layout-Grids.
  Verifiziert bei 375 px: alles stapelt einspaltig, Verzeichnis-Zeilen reduziert, **kein horizontaler Overflow**.
- **Performance/Build** — React als **Production-UMD lokal** in `vendor/` (kein CDN/Single-Point-of-Failure),
  JSX **vorab kompiliert** (esbuild, kein Babel-standalone mehr → ~3 MB + Transpile-bei-jedem-Aufruf gespart),
  redundante `colors_and_type.css` gelöscht (Quelle = inline `<style>` in `index.html`). Verifiziert: keine
  Konsolenfehler, alle 5 Routen rendern, `babelLoaded: false`, 0 unpkg-Skripte.

---

## 🔴 Als Nächstes — beim Bilder-Einpflegen

- [ ] **Bilder komprimieren** (`04-fabric.jpg` ist 13 MB) → ~1600 px / WebP q75, Ziel < 1 MB gesamt.
- [ ] **Echte Inhalte für die 9 Platzhalter-Projekte** (Bilder + eigene Texte in `data.jsx`) oder leere entfernen.
- [ ] **Echte `<img>` statt CSS-`background-image`** → bringt `loading="lazy"` + `srcset` (responsive Bilder).
      Hinweis: Die Bilder haben jetzt schon `role="img"` + `aria-label` als alt-Ersatz; echte `<img>` ergänzt nur Lazy-Load/srcset.

## 🟠 Inhalt / Aufräumen

- [ ] CV-Download echt verlinken (statt `alert('CV PDF.')` in `About.jsx`).
- [ ] Tote Links: Footer `href="#"` (Instagram + 2 leere), Contact-Instagram — echte URLs oder entfernen.
- [ ] Tote i18n-Keys `instaSub`, `p3`; `NEWS`-Liste aus `Home.jsx` nach `i18n.jsx` auslagern.
- [ ] Ungenutzte Assets `03-wave.png` (3,3 MB) + `06-figure.jpg` (2,2 MB): bewusst NICHT gelöscht (echte
      Spatial-Sound-Fotos). Entweder als zusätzliche Bilder einbinden oder löschen.

## 🟡 Nice-to-have

- [ ] Mobiles Nav: aktuell bricht es bei < 820 px sauber um. Optional: echtes Hamburger-/Burger-Menü.
- [ ] Design/Eigenständigkeit: eigenes Logo statt Text-Wortmarke; ggf. Hero-Format-Variante.
