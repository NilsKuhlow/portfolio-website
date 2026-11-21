# Designsystem – nilskuhlow.com

Die Seite folgt den *Prinzipien* von Mlak Elbuzidis Portfolio: viel Leere, wenige Seiten, ein Name als Logo, je Seite eine Farbe. Form und Inhalt sind eigenständig. Es gibt keine Handschrift, keine fremden Farben und keine fremden Motive.

## Prinzipien

1. **Weniger Seiten:** Start, arbeiten, über, kontakt. Dazu eine kurze Seite pro Projekt. Geplant, aber noch nicht online: texte (lyrische Essays, 120–300 Wörter, je ein Bild). Die Rubrik kommt erst, wenn eigene Texte da sind.
2. **Weiß ist das Material:** Inhalte schweben in der Fläche. Leere wird nicht aufgefüllt.
3. **Eine Farbe pro Seite:** Nur der Name und der aktive Menüpunkt tragen die Seitenfarbe. Alles andere ist Graustufe, Farbe kommt allein aus den Bildern.
4. **Harte Typo, leise Texte:** Der Name steht in fetter Grotesk und Versalien. Alles andere ist klein, ruhig und kleingeschrieben.
5. **Bilder ohne Effekte:** keine Rundungen, keine Schatten, keine Karussells. Die Bilder sitzen frei und asymmetrisch.
6. **Kein Framework:** reines HTML und eine CSS-Datei. Kein JavaScript und kein Build-Schritt.

## Farben

| Token | Wert | Verwendung |
|---|---|---|
| `--ink` | `#1E1E1E` | Text, Name auf der Startseite |
| `--grey` | `#9B9B9B` | Metadaten, Bildunterschriften, inaktive Links |
| `--line` | `#E6E6E6` | Haarlinien |
| `--paper` | `#FFFFFF` | Hintergrund |
| `--backstein` | `#D0806A` | Seitenfarbe **arbeiten** und alle Projektseiten |
| `--ostsee` | `#86A9BE` | Seitenfarbe **über** |
| `--holz` | `#C4A86C` | Seitenfarbe **kontakt** |
| `--schilf` | `#9AA27A` | reserviert für **texte** (noch nicht online) |

Die drei Seitenfarben kommen aus deinem eigenen Kontext: Wismarer Backstein, Ostsee und Holz (Zimmerer).
Sie werden über `<body class="s-arbeiten">` usw. gesetzt und landen in `--accent`.

## Typografie

- Schrift: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Systemschrift für alles außer längeren Texten
- **Leseschrift:** EB Garamond (400, 400 kursiv, 600), lokal in `assets/fonts/` (SIL OFL), nicht über Google Fonts eingebunden (DSGVO). Nur für eigene Texte (`.read`), 17 px, Zeilenhöhe 1.5. Eine Projektseite mit Text hat ein freies Layout (`.free`, 12-Spalten-Raster): Der Text bleibt ein zusammenhängender Block links (Spalten 1–7). Die Bilder sind nicht an einzelne Absätze gebunden, sondern frei und versetzt verteilt: das Hauptbild oben rechts, zwei Bilder rechts neben dem Text, zwei darunter versetzt. Auf dem Handy steht alles untereinander
- **Name:** 20 px (mobil 18 px), Gewicht 700, Versalien, Zeilenhöhe 1.0, zweizeilig gestapelt (NILS / KUHLOW)
- **Menü:** 18 px (mobil 16 px), Gewicht 400, 72 px unter dem Namen; Name und Menü beginnen 48 px tiefer als der Seitenrand (mobil 24 px), auf jeder Seite gleich, kleingeschrieben. Aktiv: Seitenfarbe. Inaktiv: `--ink`, beim Hover Seitenfarbe
- **Projekttitel:** 15 px, 700, Versalien
- **Fließtext:** 13 px, Zeilenhöhe 1.55, maximal 34 em breit
- **Meta und Bildunterschrift:** 11 px, `--grey`
- Jahreszahlen und Zahlen mit `font-variant-numeric: tabular-nums`

## Raster & Abstände

- Desktop: zwei Spalten. Links 220 px für Name und Menü (sticky), rechts der Inhalt
- Seitenrand 32 px, mobil 16 px
- Abstands-Skala: 4 · 8 · 16 · 32 · 64 · 128 px
- Unter 760 px wird alles einspaltig. Das Menü steht dann waagerecht unter dem Namen

## Komponenten

- **Liste (arbeiten, Werdegang):** `Jahr, Titel` in der ersten Zeile, darunter eingerückt die Zeile in Grau, ohne Linien. Die graue Zeile nennt nur die Kategorie (z. B. „Kunst und Architektur“, „Installation“): kein Medium, kein Ort, kein „·“
- **Projektseite:** Titel, Meta-Zeile, kurzer Text (höchstens 3 Sätze), dann Bilder untereinander. Jedes zweite Bild ist versetzt und schmaler. Unter jedem Bild steht eine winzige graue Unterschrift
- **Weiterblättern:** am Ende „← arbeiten“ und „nächstes →“
- **Links im Text:** `--ink` mit 1 px Unterstreichung in `--line`. Beim Hover wechselt die Unterstreichung zur Seitenfarbe

## Ton

- Kleinschreibung in Menü und Mikrotexten (`arbeiten`, `über`, `kontakt`, `auf anfrage, schreib mir`). Kein Lebenslauf online, nur auf Anfrage über kontakt.
- Kurz und sachlich. Ein Projekt wird in drei Sätzen erklärt, nicht in dreißig
