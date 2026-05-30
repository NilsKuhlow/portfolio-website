# Portfolio — Nils Kuhlow

Persönliche Portfolio-Website (Architekturstudium, Hochschule Wismar). Statische
Single-Page-App mit React, zweisprachig (DE/EN), Hell-/Dunkelmodus, Helvetica-Neue-Designsystem.

## Entwicklung

Die Oberfläche liegt als `*.jsx` vor und wird mit **esbuild vorkompiliert** (kein Babel im Browser).

```bash
npm install      # einmalig – installiert esbuild
npm run build    # kompiliert *.jsx -> build/
npm run watch    # Build im Watch-Modus
npm run serve    # statischer Server auf http://localhost:8000
```

> Nach jeder Änderung an einer `.jsx`-Datei `npm run build` ausführen, sonst zeigt sich nichts.

## Struktur

- `index.html` — Einstieg, Designsystem (inline `<style>`), Skript-Reihenfolge
- `*.jsx` — Quellkomponenten (`Nav`, `Home`, `Projects`, `ProjectDetail`, `About`, `Contact`, `Footer`, `app`)
- `i18n.jsx`, `data.jsx` — Texte/Inhalte (DE/EN); `tweaks-panel.jsx`
- `build/` — kompilierte Komponenten (Ausgabe von `npm run build`)
- `vendor/` — React/ReactDOM (Production-UMD, lokal gehostet)
- `assets/`, `fonts/`, `favicon.svg`

## Deployment

Statisch hostbar. Benötigt werden: `index.html`, `build/`, `vendor/`, `assets/`, `fonts/`, `favicon.svg`.
Offene Aufgaben siehe `TODO.md`.
