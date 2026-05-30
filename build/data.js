const PROJECTS = [
  {
    id: "spatialsound",
    t: { de: "Spatial Sound \u2014 Klang in Raum \xFCbersetzt", en: "Spatial Sound \u2014 Translating Sound into Space" },
    location: "Wismar",
    year: "2026",
    semester: { de: "2. Semester \xB7 laufend", en: "2nd semester \xB7 ongoing" },
    tag: { de: "Forschung \xB7 Installation", en: "Research \xB7 Installation" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/projects/spatial-sound/01-poster.jpg",
    hero: "assets/projects/spatial-sound/02-render.jpg",
    stripA: "assets/projects/spatial-sound/04-fabric.jpg",
    stripB: "assets/projects/spatial-sound/05-vessel.jpg",
    kicker: { de: "Studio I \xB7 Queens of Structure", en: "Studio I \xB7 Queens of Structure" },
    summary: {
      de: "Spatial Sound untersucht, wie Klang nicht nur als H\xF6rbares, sondern als r\xE4umliche Erfahrung verstanden werden kann. Die Arbeit \xFCbersetzt Rhythmus, Resonanz, Dichte und Fragmentierung in architektonische Konzepte \u2014 Klang als Erzeuger von Raum, nicht als nachtr\xE4gliche Schicht.",
      en: "Spatial Sound explores how sound can be understood not only as something we hear, but as something that shapes spatial experience. The project investigates the relationship between acoustic phenomena and architectural form, asking how rhythm, resonance, density and fragmentation can be translated into spatial concepts."
    },
    bodyP1: {
      de: "Statt Klang als sekund\xE4re Schicht der Architektur zu behandeln, versteht diese Arbeit ihn als Erzeuger von Raum. Durch Analyse, visuelle Studien und r\xE4umliche Interpretation werden klangliche Qualit\xE4ten in Atmosph\xE4ren, Bewegungen und volumetrische Beziehungen \xFCbersetzt.",
      en: "Rather than treating sound as a secondary layer of architecture, this work understands it as a generator of space. Through analysis, visual studies, and spatial interpretation, sonic qualities are transformed into atmospheres, movements, and volumetric relationships."
    },
    bodyP2: {
      de: "Das Ergebnis ist ein architektonischer Ansatz, in dem Raum nicht mehr nur durch W\xE4nde, Fl\xE4chen und Struktur definiert wird, sondern auch durch Vibration, Zeitlichkeit und Wahrnehmung. Die Arbeit bewegt sich zwischen Klangforschung, visuellem Experiment und architektonischem Denken \u2014 getragen von der Idee, dass Architektur als szenografische und akustische Bedingung gelesen, entworfen und erfahren werden kann, die sich durch den K\xF6rper in der Zeit entfaltet.",
      en: "The result is an architectural approach in which space is no longer defined only by walls, surfaces, and structure, but also by vibration, temporality, and perception. The project moves between sound research, visual experimentation, and architectural thinking \u2014 driven by the idea that architecture can be read, designed, and experienced as a scenographic and acoustic condition, one that unfolds through the body in time."
    },
    pull: {
      de: "Raum ist nicht nur Wand und Fl\xE4che \u2014 Raum ist Vibration, Zeit, Wahrnehmung.",
      en: "Space is not only wall and surface \u2014 space is vibration, time, perception."
    },
    capText: {
      de: "Oben \u2014 Render der akustischen H\xFClle. Mitte \u2014 Wellenfeldstudie aus Cymatics-Versuchen. Unten \u2014 Modellfragmente aus Reispapier und Karton, in der Aula fotografiert, M\xE4rz 2026.",
      en: "Top \u2014 render of the acoustic envelope. Middle \u2014 wave-field study from cymatics experiments. Below \u2014 model fragments in rice paper and cardboard, photographed in the studio, March 2026."
    },
    process: {
      de: ["Cymatics-Versuche \xB7 Wasser, Sand, Lautsprecher", "Frequenzanalysen der Wismarer Hafenkl\xE4nge", "Modellfragmente aus Reispapier, Karton und Stoff", "Render und 1:1-Stoffh\xFClle f\xFCr die Abschluss-Installation"],
      en: ["Cymatics experiments \xB7 water, sand, loudspeaker", "Frequency analysis of Wismar harbour soundscape", "Model fragments in rice paper, cardboard, and fabric", "Render and 1:1 fabric envelope for the closing installation"]
    },
    role: { de: "Gruppenarbeit", en: "Group project" }
  },
  {
    id: "genius-loci",
    t: { de: "Genius Loci \u2014 Innenr\xE4ume der Stadt", en: "Genius Loci \u2014 Interiors of the City" },
    location: "Wismar",
    year: "2025",
    semester: { de: "1. Semester \xB7 WS 2025/26", en: "1st semester \xB7 winter 2025/26" },
    tag: { de: "Forschung \xB7 Stadtraum", en: "Research \xB7 Urban space" },
    status: { de: "Forschung", en: "Research" },
    img: "assets/projects/genius-loci/card.jpg",
    hero: "assets/projects/genius-loci/hero.jpg",
    stripA: "assets/projects/genius-loci/a.jpg",
    stripB: "assets/projects/genius-loci/b.jpg",
    kicker: { de: "EGD1 \xB7 Raumanalyse", en: "EGD1 \xB7 Spatial analysis" },
    summary: {
      de: "Eine Untersuchung \xFCber das Verh\xE4ltnis von Innen und Au\xDFen im st\xE4dtischen Raum. K\xF6nnen Stra\xDFen und Pl\xE4tze als Innenr\xE4ume der Stadt verstanden werden \u2014 gefasst durch Fassaden, Vegetation, Licht und Bewegung? Fotografie und K\xF6rper im Stadtraum werden zur Methode, um Grenzen, \xDCberg\xE4nge und Atmosph\xE4ren lesbar zu machen.",
      en: "A study of the relationship between inside and outside in the urban realm. Can streets and squares be read as interiors of the city \u2014 held by fa\xE7ades, vegetation, light and movement? Photography and the body in space become a method for making boundaries, thresholds and atmospheres legible."
    },
    bodyP1: {
      de: "Ausgangspunkt war die Frage, wie Stra\xDFen und Pl\xE4tze r\xE4umlich wirken und inwiefern sie als Innenr\xE4ume der Stadt verstanden werden k\xF6nnen, die durch Fassaden, Vegetation, Licht und Bewegung gefasst sind. Anhand textlicher und konzeptioneller Untersuchungen habe ich analysiert, wo diese R\xE4ume enden und wie sie sich nach au\xDFen \xF6ffnen \u2014 zur Landschaft, zum Himmel und zur Weite.",
      en: "The starting point was how streets and squares act spatially, and how far they can be understood as interiors of the city, framed by fa\xE7ades, vegetation, light and movement. Through textual and conceptual study I traced where these rooms end and how they open outward \u2014 toward the landscape, the sky and the distance."
    },
    bodyP2: {
      de: "Dabei zeigte sich, dass Innen und Au\xDFen keine Gegens\xE4tze sind, sondern sich gegenseitig bedingen: Begrenzung schafft Orientierung und Spannung, \xD6ffnung erm\xF6glicht Verbindung und Ausdehnung. Das Projekt sch\xE4rfte mein Verst\xE4ndnis f\xFCr r\xE4umliche \xDCberg\xE4nge und f\xFCr Architektur als Zusammenspiel von Schutz und Offenheit.",
      en: "What emerged was that inside and outside are not opposites but conditions of one another: enclosure creates orientation and tension, opening allows connection and extension. The project sharpened my sense for spatial thresholds and for architecture as an interplay of shelter and openness."
    },
    pull: {
      de: "Innen und Au\xDFen sind keine Gegens\xE4tze \u2014 sie bedingen einander.",
      en: "Inside and outside are not opposites \u2014 each makes the other possible."
    },
    capText: {
      de: "K\xF6rper im Stadtraum, im Abendlicht fotografiert: Bewegung als Ma\xDF f\xFCr Enge, Weite und \xDCbergang.",
      en: "The body in the city, photographed in evening light: movement as a measure of enclosure, distance and threshold."
    },
    process: {
      de: ["Textliche und konzeptionelle Raumanalyse", "Fotografische Studien im Abendlicht", "Bewegung und K\xF6rper als r\xE4umliches Ma\xDF", "Kartierung von Grenzen und \xD6ffnungen"],
      en: ["Textual and conceptual spatial analysis", "Photographic studies in evening light", "Body and movement as a spatial measure", "Mapping of edges and openings"]
    },
    role: { de: "Einzelarbeit", en: "Solo project" }
  },
  {
    id: "randstadt-intervention",
    t: { de: "Randstadt Intervention", en: "Edge-City Intervention" },
    location: "Wismar \xB7 Randstadt",
    year: "2025",
    semester: { de: "1. Semester \xB7 WS 2025/26", en: "1st semester \xB7 winter 2025/26" },
    tag: { de: "Installation \xB7 1:1", en: "Installation \xB7 1:1" },
    status: { de: "Gebaut", en: "Built" },
    img: "assets/projects/randstadt-intervention/card.jpg",
    hero: "assets/projects/randstadt-intervention/hero.jpg",
    stripA: "assets/projects/randstadt-intervention/a.jpg",
    stripB: "assets/projects/randstadt-intervention/b.jpg",
    kicker: { de: "EGD1 \xB7 Installation 1:1", en: "EGD1 \xB7 1:1 installation" },
    summary: {
      de: "Eine ortsspezifische, performative Rauminstallation im Ma\xDFstab 1:1. Mit einfachen Mitteln wird ein bestehender Weg in der Randstadt von Wismar verdichtet und neu gelesen: Ein Folientunnel b\xFCndelt Bewegung und Wahrnehmung, f\xFChrt von der Weite in die Enge \u2014 und \xF6ffnet sich am Ende in einen nat\xFCrlich gewachsenen Raum.",
      en: "A site-specific, performative installation at full scale. With simple means, an existing path on the edge of Wismar is condensed and re-read: a tunnel of foil gathers movement and perception, leading from openness into compression \u2014 and opening, at its end, into a space shaped by nature."
    },
    bodyP1: {
      de: "Ein klar gefasster Weg in der Randstadt sollte r\xE4umlich interpretiert und intensiviert werden. Mit einfachen Materialien entstand ein gezielter Eingriff, der den \xDCbergang zwischen Offenheit und Enge bewusst inszeniert. Der Weg f\xFChrt aus dem offenen Stadtraum in einen zunehmend verdichteten Tunnel, der die Bewegung visuell und atmosph\xE4risch b\xFCndelt.",
      en: "A clearly framed path on the edge of the city was to be interpreted and intensified in spatial terms. With simple materials, a precise intervention stages the shift between openness and constriction. The route leads from open urban space into an increasingly dense tunnel that gathers movement, visually and atmospherically."
    },
    bodyP2: {
      de: "Am Ende \xF6ffnet sich die Struktur in einen nat\xFCrlich geformten Raum unter einem dichten Bl\xE4tterdach. Der Wechsel zwischen k\xFCnstlichem Eingriff und bestehender Natur sch\xE4rft die Wahrnehmung des Ortes und macht den Weg selbst zum r\xE4umlichen Erlebnis.",
      en: "At its end the structure opens into a space shaped by nature, beneath a dense canopy of leaves. The shift between artificial intervention and existing nature sharpens the perception of the place and turns the path itself into a spatial experience."
    },
    pull: {
      de: "Der Eingriff ver\xE4ndert nicht den Ort, sondern die Art, ihn zu durchschreiten.",
      en: "The intervention does not change the place \u2014 it changes the way you move through it."
    },
    capText: {
      de: "Folientunnel entlang eines winterlichen Randstadt-Wegs: von der Weite in die Enge und zur\xFCck ins Freie unter dem Bl\xE4tterdach.",
      en: "A foil tunnel along a wintry edge-city path: from openness into compression and back into the open beneath the leaves."
    },
    process: {
      de: ["Ortsanalyse eines gefassten Wegs in der Randstadt", "Eingriff mit einfachen Materialien (Folie)", "Verdichtung von Bewegung und Wahrnehmung", "1:1-Aufbau und performative Durchwegung"],
      en: ["Site analysis of a framed edge-city path", "Intervention with simple materials (foil)", "Condensing movement and perception", "Full-scale build and performative walk-through"]
    },
    role: { de: "Teamarbeit", en: "Team project" }
  },
  {
    id: "raum-struktur-huelle",
    t: { de: "Raum \u2013 Struktur \u2013 H\xFClle", en: "Space \u2013 Structure \u2013 Skin" },
    location: "Wismar \xB7 Randstadt",
    year: "2025",
    semester: { de: "1. Semester \xB7 WS 2025/26", en: "1st semester \xB7 winter 2025/26" },
    tag: { de: "Entwurf \xB7 Bestand", en: "Design \xB7 Existing fabric" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/projects/raum-struktur-huelle/card.jpg",
    hero: "assets/projects/raum-struktur-huelle/hero.jpg",
    stripA: "assets/projects/raum-struktur-huelle/a.jpg",
    stripB: "assets/projects/raum-struktur-huelle/b.jpg",
    kicker: { de: "EGD1 \xB7 Entwurf im Bestand", en: "EGD1 \xB7 Intervention in context" },
    summary: {
      de: "Ein additiver Eingriff in ein Wohnensemble aus Plattenbauten: eine leichte, parasit\xE4re Struktur schreibt sich in die strenge Geometrie des Bestands ein. Raum, tragende Struktur und H\xFClle werden als voneinander abh\xE4ngige Ebenen verstanden, aus deren Zusammenspiel eine neue architektonische Ordnung entsteht.",
      en: "An additive intervention into a housing ensemble of prefabricated slabs: a light, parasitic structure inscribes itself into the strict geometry of the existing fabric. Space, load-bearing structure and skin are read as interdependent layers whose interplay gives rise to a new architectural order."
    },
    bodyP1: {
      de: "Ausgangspunkt war ein Wohnensemble aus Plattenbauten mit strikter Geometrie und repetitiven Fassadenlinien in einer Randstadtsituation. \xDCber die vorhandenen Bauk\xF6rper legt der Entwurf eine leichte, lineare Konstruktion, die diese miteinander verbindet. \xDCber Br\xFCcken werden die D\xE4cher erschlossen und zu einer gemeinschaftlich nutzbaren Fl\xE4che zusammengef\xFChrt; eine zus\xE4tzliche \xDCberdachung schafft gesch\xFCtzte Bereiche.",
      en: "The starting point was a housing ensemble of prefabricated slabs with strict geometry and repetitive fa\xE7ade lines, set on the edge of the city. Over the existing volumes the design lays a light, linear construction that links them together. Bridges open up the roofs and join them into a shared surface; an added canopy creates sheltered zones."
    },
    bodyP2: {
      de: "Durch die eng gesetzten, stabartigen Elemente entstehen unterschiedlich ausgepr\xE4gte Zwischenr\xE4ume mit wechselnden Blickbeziehungen, Offenheiten und Aufenthaltszonen. Die Struktur \xFCbernimmt mehrere Rollen zugleich: Wegesystem, Ort der Begegnung, sozialer Raum \u2014 und er\xF6ffnet neue M\xF6glichkeiten der Vernetzung im bestehenden Wohngef\xFCge.",
      en: "The closely set, rod-like elements create in-between spaces of varying character, with shifting views, degrees of openness and places to stay. The structure takes on several roles at once: a system of paths, a place of encounter, a social space \u2014 opening new connections within the existing fabric."
    },
    pull: {
      de: "Die Struktur ist Weg, Treffpunkt und H\xFClle zugleich \u2014 sie verbindet, was nebeneinander stand.",
      en: "The structure is path, meeting point and skin at once \u2014 it connects what merely stood side by side."
    },
    capText: {
      de: "Leichte, stabartige Struktur \xFCber dem Plattenbau-Bestand: Br\xFCcken erschlie\xDFen die D\xE4cher zu einer gemeinschaftlichen Fl\xE4che. Modell und Detail.",
      en: "A light, rod-like structure above the prefab ensemble: bridges open the roofs into a shared surface. Model and detail."
    },
    process: {
      de: ["Analyse der Plattenbau-Geometrie und Randstadtsituation", "Additive, parasit\xE4re Leichtstruktur", "Br\xFCcken und Dacherschlie\xDFung als Gemeinschaftsfl\xE4che", "Modellstudien zu Zwischenraum und Blickbeziehung"],
      en: ["Analysis of the prefab geometry and edge-city site", "Additive, parasitic light structure", "Bridges and roof access as shared space", "Model studies of in-between space and views"]
    },
    role: { de: "Gruppenarbeit", en: "Group project" }
  },
  {
    id: "masse-und-hohlraum",
    t: { de: "Masse und Hohlraum", en: "Mass and Void" },
    location: "Wismar",
    year: "2025",
    semester: { de: "1. Semester \xB7 WS 2025/26", en: "1st semester \xB7 winter 2025/26" },
    tag: { de: "Modell \xB7 Licht", en: "Model \xB7 Light" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/projects/masse-und-hohlraum/card.jpg",
    hero: "assets/projects/masse-und-hohlraum/hero.jpg",
    stripA: "assets/projects/masse-und-hohlraum/a.jpg",
    stripB: "assets/projects/masse-und-hohlraum/b.jpg",
    kicker: { de: "EGD1 \xB7 Raumexperiment", en: "EGD1 \xB7 Spatial experiment" },
    summary: {
      de: "Eine Untersuchung \xFCber das Verh\xE4ltnis von Volumen und Leere. Raum wird nicht als Nebenprodukt verstanden, sondern als aktives Element, das durch Masse gefasst und erlebbar wird. \xDCber Wachs- und Betong\xFCsse entstehen Modelle, die ausschlie\xDFlich den Hohlraum sichtbar machen \u2014 und das Licht zum eigentlichen Baustoff erkl\xE4ren.",
      en: "A study of volume and emptiness. Space is treated not as a by-product but as an active element, defined and made tangible by mass. Through wax and concrete casts, the project produces models that show only the void \u2014 and make light the true material."
    },
    bodyP1: {
      de: "Zur Untersuchung wurden bestehende Buchk\xF6rper als Material genutzt. Durch das Ausschneiden r\xE4umlicher Abfolgen und das Ausgie\xDFen der Negativr\xE4ume mit Wachs entstanden Modelle, die nur den Hohlraum zeigten. So lie\xDFen sich Raumwirkungen losgel\xF6st von Fassade und Volumen analysieren \u2014 Lichtf\xFChrung, Transparenz und \xDCberlagerung als zentrale Entwurfsparameter.",
      en: "Existing book bodies were used as raw material. By cutting away spatial sequences and casting the resulting voids in wax, the work produced models that showed only the hollow space. This made it possible to analyse spatial effects detached from fa\xE7ade and volume \u2014 light, transparency and overlap as the core design parameters."
    },
    bodyP2: {
      de: "Auf dieser Basis entstand eine r\xE4umliche Struktur, in der das Licht Orientierung und Abfolge bestimmt. Die Realisierung erfolgte als Betonguss in Erde, im Verfahren am Glockenguss orientiert. Nach dem Aush\xE4rten blieb ein klar definierter Innenraum zur\xFCck, der \xFCber ein Oberlicht und gezielt gesetzte \xD6ffnungen belichtet wird \u2014 die Lichtf\xFChrung macht den Weg durch die Struktur erfahrbar.",
      en: "From this grew a spatial structure in which light governs orientation and sequence. It was realised as a concrete cast in earth, a process borrowed from bell-casting. Once set, a clearly defined interior remained, lit through a skylight and carefully placed openings \u2014 the play of light makes the path through the structure tangible."
    },
    pull: {
      de: "Nicht die Masse war das Thema, sondern das, was sie umschlie\xDFt.",
      en: "The subject was never the mass, but what it encloses."
    },
    capText: {
      de: "Negativr\xE4ume in Wachs und Beton gegossen, im Verfahren des Glockengusses; Oberlicht und \xD6ffnungen f\xFChren das Licht durch den Innenraum.",
      en: "Voids cast in wax and concrete, after the technique of bell-casting; a skylight and openings draw light through the interior."
    },
    process: {
      de: ["Buchk\xF6rper als Material \u2014 Ausschneiden r\xE4umlicher Abfolgen", "Negativr\xE4ume in Wachs ausgegossen", "Betonguss in Erde (analog Glockenguss)", "Belichtung \xFCber Oberlicht und gesetzte \xD6ffnungen"],
      en: ["Book bodies as material \u2014 cutting spatial sequences", "Voids cast in wax", "Concrete cast in earth (after bell-casting)", "Lighting through skylight and placed openings"]
    },
    role: { de: "Gruppenarbeit", en: "Group project" }
  },
  {
    id: "zu-wasser-lassen",
    t: { de: "Zu Wasser lassen \u2014 Ein Boot aus Karton", en: "Set Afloat \u2014 A Boat from Cardboard" },
    location: "Wismar \xB7 Wendorf",
    year: "2025",
    semester: { de: "1. Semester \xB7 WS 2025/26", en: "1st semester \xB7 winter 2025/26" },
    tag: { de: "Stegreif \xB7 Modellbau", en: "Workshop \xB7 Model-making" },
    status: { de: "Gebaut", en: "Built" },
    img: "assets/projects/zu-wasser-lassen/card.jpg",
    hero: "assets/projects/zu-wasser-lassen/hero.jpg",
    stripA: "assets/projects/zu-wasser-lassen/a.jpg",
    stripB: "assets/projects/zu-wasser-lassen/b.jpg",
    kicker: { de: "EGD1 \xB7 Einf\xFChrungsstegreif", en: "EGD1 \xB7 Opening workshop" },
    summary: {
      de: "Ein viert\xE4giger Stegreif zum Auftakt des Studiums: Aus Karton, Pappmach\xE9 und Farbe sollte ein schwimmf\xE4higes Boot entstehen \u2014 Form als unmittelbares Ergebnis konstruktiver Logik. Zwischen Material, Auftrieb und Hydrodynamik f\xFChrte der Weg vom 1:20-Modell bis zum 1:1-Boot und endete in einer Regatta am Strand von Wendorf.",
      en: "A four-day opening workshop: a buoyant boat made only from cardboard, papier-m\xE2ch\xE9 and paint \u2014 form as the direct result of structural logic. Working between material, buoyancy and hydrodynamics, the project moved from a 1:20 model to a full-size boat and ended in a regatta on the beach at Wendorf."
    },
    bodyP1: {
      de: "Am Anfang stand kein Entwurf, sondern eine Frage des Materials: Wie tr\xE4gt eine Schicht aus Karton und Pappmach\xE9 ein Gewicht \xFCber Wasser? In schnellen Papiermodellen im Ma\xDFstab 1:20 wurden Form, Volumen und Stabilit\xE4t getestet und Schritt f\xFCr Schritt weiterentwickelt \u2014 jede Iteration eine Antwort auf die vorige.",
      en: "It did not begin with a design but with a question of material: how does a shell of cardboard and papier-m\xE2ch\xE9 carry weight across water? Quick 1:20 paper models tested form, volume and stability and developed them step by step \u2014 each iteration an answer to the last."
    },
    bodyP2: {
      de: "Aus den Versuchen wuchs ein Rumpf, der hochskaliert und schlie\xDFlich im Ma\xDFstab 1:1 gebaut wurde. Der Prozess verband konstruktive Logik mit gestalterischem Anspruch und m\xFCndete in einem funktionsf\xE4higen Objekt \u2014 auf die Probe gestellt bei einer Regatta am Strand von Wendorf.",
      en: "From these experiments grew a hull that was scaled up and finally built at full size. The process tied constructive logic to a design ambition and led to a working object \u2014 put to the test in a regatta on the beach at Wendorf."
    },
    pull: {
      de: "Die Form war kein Bild, sondern die Folge dessen, was das Material tragen konnte.",
      en: "The form was never an image \u2014 it was the consequence of what the material could carry."
    },
    capText: {
      de: "Vom Papiermodell zum 1:1-Boot: Konstruktion, Probefahrt und Regatta am Strand von Wendorf.",
      en: "From paper model to full-size boat: construction, trial and regatta on the beach at Wendorf."
    },
    process: {
      de: ["Papiermodelle 1:20 \u2014 Form, Volumen, Stabilit\xE4t", "Iterative Tests von Auftrieb und Hydrodynamik", "Hochskalierung und Bau im Ma\xDFstab 1:1", "Regatta am Strand von Wendorf"],
      en: ["1:20 paper models \u2014 form, volume, stability", "Iterative tests of buoyancy and hydrodynamics", "Scaling up and building at full size", "Regatta on the beach at Wendorf"]
    },
    role: { de: "Teamarbeit", en: "Team project" }
  },
  {
    id: "weitere-arbeiten",
    t: { de: "Grundlagen \u2014 Collage, Geometrie, Freihand", en: "Foundations \u2014 Collage, Geometry, Freehand" },
    location: "Wismar",
    year: "2025",
    semester: { de: "1. Semester \xB7 WS 2025/26", en: "1st semester \xB7 winter 2025/26" },
    tag: { de: "Grundlagen \xB7 Darstellung", en: "Foundations \xB7 Representation" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/projects/weitere-arbeiten/card.jpg",
    hero: "assets/projects/weitere-arbeiten/hero.jpg",
    stripA: "assets/projects/weitere-arbeiten/a.jpg",
    stripB: "assets/projects/weitere-arbeiten/b.jpg",
    kicker: { de: "EGD1 \xB7 Digitale Grundlagen \xB7 Geometrie \xB7 Freihand", en: "EGD1 \xB7 Digital foundations \xB7 Geometry \xB7 Freehand" },
    summary: {
      de: "Begleitende Arbeiten aus den Grundlagenmodulen: eine digitale Collage \xFCber die Schwelle zwischen Alltag und Freiheit, geometrisch-konstruktive Darstellungen und Freihandzeichnungen. Drei \xDCbungen im Darstellen \u2014 vom freien Bild \xFCber die exakte Konstruktion bis zur Hand.",
      en: "Accompanying work from the foundation modules: a digital collage on the threshold between everyday life and freedom, geometric construction drawings, and freehand studies. Three exercises in representation \u2014 from the free image to exact construction to the hand."
    },
    bodyP1: {
      de: 'Die Collage \u201ETor zur Freiheit" thematisiert die Schwelle zwischen der \u201EGefangenschaft" im Alltag und der Freiheit. Der Protagonist steht am \xDCbergang eines entleerten st\xE4dtischen Umfelds hin zu einem idealisierten, immateriellen Raum, der durch das helle Tor sichtbar wird \u2014 ein Ort, den es nur auf dem Papier gibt. Das Tor wird zur Schnittstelle zwischen gelebter Realit\xE4t und m\xF6glicher Zukunft.',
      en: 'The collage "Gate to Freedom" takes up the threshold between the "captivity" of everyday life and freedom. The figure stands at the passage from an emptied urban setting toward an idealised, immaterial space made visible by the bright gate \u2014 a place that exists only on paper. The gate becomes the interface between lived reality and a possible future.'
    },
    bodyP2: {
      de: "Daneben stehen Arbeiten aus dem Geometrischen Darstellen und dem Freihandzeichnen: perspektivische Konstruktionen, Innenraumstudien und Zeichnungen organischer Formen. Sie bilden das handwerkliche Fundament des Semesters \u2014 das Sehen, Konstruieren und Darstellen, auf dem die Entw\xFCrfe aufbauen.",
      en: "Alongside it stand works from descriptive geometry and freehand drawing: perspective constructions, interior studies and drawings of organic forms. They form the craft foundation of the semester \u2014 the seeing, constructing and representing on which the designs are built."
    },
    pull: {
      de: "Das Tor existiert nur auf dem Papier \u2014 und genau dort beginnt der Entwurf.",
      en: "The gate exists only on paper \u2014 and that is exactly where design begins."
    },
    capText: {
      de: 'Collage \u201ETor zur Freiheit", Freihandzeichnungen organischer Formen und perspektivische Konstruktionen aus den Grundlagenmodulen.',
      en: 'The collage "Gate to Freedom", freehand studies of organic forms, and perspective constructions from the foundation modules.'
    },
    process: {
      de: ['Digitale Collage \u201ETor zur Freiheit"', "Perspektivische Konstruktion (Geometrisches Darstellen)", "Innenraum- und Perspektivstudien", "Freihandzeichnen organischer Formen"],
      en: ['Digital collage "Gate to Freedom"', "Perspective construction (descriptive geometry)", "Interior and perspective studies", "Freehand drawing of organic forms"]
    },
    role: { de: "Einzelarbeit", en: "Solo project" }
  }
];
window.L = (v, lang) => v && typeof v === "object" && v[lang] != null ? v[lang] : v;
const CV = {
  education: [
    {
      y: "2025 \u2014 heute",
      what: { de: "B.A. Architektur", en: "B.A. Architecture" },
      where: { de: "Hochschule Wismar", en: "Hochschule Wismar, Germany" },
      detail: { de: "Architekturstudium seit dem Wintersemester 2025/26; aktuell im ersten Studienjahr (2. Semester).", en: "Architecture studies since winter semester 2025/26; currently first year, second semester." }
    },
    {
      y: "2023 \u2014 2025",
      what: { de: "Ausbildung zum Zimmerer", en: "Apprenticeship as a carpenter (Zimmerer)" },
      where: { de: "Hamburg", en: "Hamburg, Germany" },
      detail: { de: "Dreij\xE4hrige Ausbildung im Holzbau, Gesellenabschluss im Juli 2025 \u2014 die Grundlage meines materialnahen Zugangs zur Architektur.", en: "Three-year training in timber construction, journeyman qualification in July 2025 \u2014 the foundation of my material-led approach to architecture." }
    },
    {
      y: "2015 \u2014 2023",
      what: { de: "Allgemeine Hochschulreife (Abitur)", en: "Abitur (university entrance qualification)" },
      where: { de: "Gymnasium Eppendorf, Hamburg", en: "Gymnasium Eppendorf, Hamburg" },
      detail: { de: "", en: "" }
    }
  ],
  skills: {
    de: ["Zimmererhandwerk & Holzbau", "Teamf\xE4higkeit", "L\xF6sungsorientierung", "Zuverl\xE4ssigkeit", "Kritikf\xE4higkeit", "Selbstreflexion"],
    en: ["Carpentry & timber construction", "Teamwork", "Solution-oriented thinking", "Reliability", "Openness to criticism", "Self-reflection"]
  },
  languages: [
    { l: { de: "Deutsch", en: "German" }, level: { de: "Muttersprache", en: "Native" } },
    { l: { de: "Englisch", en: "English" }, level: { de: "Gute Kenntnisse", en: "Good working knowledge" } }
  ],
  interests: {
    de: ["Handball", "Schach", "Calisthenics", "K\xFCnstlerische Arbeiten"],
    en: ["Handball", "Chess", "Calisthenics", "Artistic work"]
  },
  engagement: {
    de: "Volleyball-Team Hamburg \u2014 Erarbeitung eines Turnierkonzepts f\xFCr den Verein.",
    en: "Volleyball team in Hamburg \u2014 developed a tournament concept for the club."
  }
};
window.PROJECTS = PROJECTS;
window.CV = CV;
