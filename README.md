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
cv.pdf, favicon.svg, CNAME
```

## Projekt hinzufügen

1. Bilder nach `assets/projects/<projekt>/` legen. Breite höchstens etwa 2000 px, JPG.
2. Einen bestehenden Ordner unter `arbeiten/` kopieren und Titel, Meta-Zeile, Text und Bilder anpassen.
3. Das Projekt in `arbeiten/index.html` in die Liste eintragen und den „nächstes →“-Link der Nachbarseite anpassen.

## Lokal ansehen

Weil alle Pfade mit `/` beginnen, muss die Seite über einen Server laufen und nicht als Datei geöffnet werden:

```
python -m http.server 8000
```
