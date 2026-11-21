# Portfolio – Nils Kuhlow

nilskuhlow.com ist eine statische Seite aus reinem HTML und einer CSS-Datei. Es gibt kein Framework, keinen Build-Schritt und kein JavaScript.
Das Designsystem steht in [DESIGNSYSTEM.md](DESIGNSYSTEM.md).

## Struktur

```
index.html                 Start: Name + Menü
arbeiten/index.html        Projektliste
arbeiten/<projekt>/        eine Seite pro Projekt
ueber/index.html
kontakt/index.html
404.html
style.css                  das gesamte Design
assets/projects/<projekt>/ Bilder (hero.jpg, g1.jpg …)
favicon.svg, CNAME         (kein Lebenslauf online: auf Anfrage über kontakt)
assets/fonts/              EB Garamond (Leseschrift, lokal)
tools/gen.js               erzeugt alle HTML-Seiten
tools/resize.ps1           verkleinert Bilder auf 2000 px
```

## Seiten erzeugen

Alle HTML-Seiten entstehen aus `tools/gen.js`. Dort stehen die Projekte (Titel, Meta-Zeile, Text, Bilder in Reihenfolge mit Bildunterschrift), die Texte von über und kontakt sowie der Seitenaufbau. Die HTML-Dateien deshalb **nicht von Hand ändern**, sondern `gen.js` anpassen und neu erzeugen:

```
node tools/gen.js
```

Das braucht nur Node.js, keine Pakete. Liste, „nächstes →“-Links und Bildmaße kommen automatisch.

## Projekt hinzufügen

1. Bilder verkleinern und ablegen, eins pro Aufruf:
   ```
   powershell -File tools/resize.ps1 -Src "<Originalbild>" -Dst "assets/projects/<projekt>/hero.jpg"
   ```
   Das erste Bild heißt `hero.jpg`, die weiteren `g1.jpg`, `g2.jpg` …
2. In `tools/gen.js` im Array `P` einen Eintrag anlegen (am einfachsten einen bestehenden kopieren). Die Reihenfolge in `P` ist die Reihenfolge in der Liste.
3. `node tools/gen.js` ausführen, lokal ansehen, committen.

Für ein Projekt mit eigenem längerem Text (wie Loslassen) gibt es die Felder `essay` (Absätze, `*wort*` wird kursiv) und `free` (Bildverteilung im freien Layout).

## Lokal ansehen

Weil alle Pfade mit `/` beginnen, muss die Seite über einen Server laufen und nicht als Datei geöffnet werden:

```
python -m http.server 8000
```
