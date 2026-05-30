// data.jsx — bilingual content. p.t / p.summary / p.kicker etc are objects { de, en }.

const PROJECTS = [
  {
    id: 'spatialsound',
    t: { de: 'Spatial Sound — Klang in Raum übersetzt', en: 'Spatial Sound — Translating Sound into Space' },
    location: 'Wismar', year: '2026',
    semester: { de: '2. Semester · laufend', en: '2nd semester · ongoing' },
    tag: { de: 'Forschung · Installation', en: 'Research · Installation' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/projects/spatial-sound/01-poster.jpg',
    hero: 'assets/projects/spatial-sound/02-render.jpg',
    stripA: 'assets/projects/spatial-sound/04-fabric.jpg',
    stripB: 'assets/projects/spatial-sound/05-vessel.jpg',
    kicker: { de: 'Studio I · Queens of Structure', en: 'Studio I · Queens of Structure' },
    summary: {
      de: 'Spatial Sound untersucht, wie Klang nicht nur als Hörbares, sondern als räumliche Erfahrung verstanden werden kann. Die Arbeit übersetzt Rhythmus, Resonanz, Dichte und Fragmentierung in architektonische Konzepte — Klang als Erzeuger von Raum, nicht als nachträgliche Schicht.',
      en: 'Spatial Sound explores how sound can be understood not only as something we hear, but as something that shapes spatial experience. The project investigates the relationship between acoustic phenomena and architectural form, asking how rhythm, resonance, density and fragmentation can be translated into spatial concepts.',
    },
    bodyP1: {
      de: 'Statt Klang als sekundäre Schicht der Architektur zu behandeln, versteht diese Arbeit ihn als Erzeuger von Raum. Durch Analyse, visuelle Studien und räumliche Interpretation werden klangliche Qualitäten in Atmosphären, Bewegungen und volumetrische Beziehungen übersetzt.',
      en: 'Rather than treating sound as a secondary layer of architecture, this work understands it as a generator of space. Through analysis, visual studies, and spatial interpretation, sonic qualities are transformed into atmospheres, movements, and volumetric relationships.',
    },
    bodyP2: {
      de: 'Das Ergebnis ist ein architektonischer Ansatz, in dem Raum nicht mehr nur durch Wände, Flächen und Struktur definiert wird, sondern auch durch Vibration, Zeitlichkeit und Wahrnehmung. Die Arbeit bewegt sich zwischen Klangforschung, visuellem Experiment und architektonischem Denken — getragen von der Idee, dass Architektur als szenografische und akustische Bedingung gelesen, entworfen und erfahren werden kann, die sich durch den Körper in der Zeit entfaltet.',
      en: 'The result is an architectural approach in which space is no longer defined only by walls, surfaces, and structure, but also by vibration, temporality, and perception. The project moves between sound research, visual experimentation, and architectural thinking — driven by the idea that architecture can be read, designed, and experienced as a scenographic and acoustic condition, one that unfolds through the body in time.',
    },
    pull: {
      de: 'Raum ist nicht nur Wand und Fläche — Raum ist Vibration, Zeit, Wahrnehmung.',
      en: 'Space is not only wall and surface — space is vibration, time, perception.',
    },
    capText: {
      de: 'Oben — Render der akustischen Hülle. Mitte — Wellenfeldstudie aus Cymatics-Versuchen. Unten — Modellfragmente aus Reispapier und Karton, in der Aula fotografiert, März 2026.',
      en: 'Top — render of the acoustic envelope. Middle — wave-field study from cymatics experiments. Below — model fragments in rice paper and cardboard, photographed in the studio, March 2026.',
    },
    process: {
      de: ['Cymatics-Versuche · Wasser, Sand, Lautsprecher', 'Frequenzanalysen der Wismarer Hafenklänge', 'Modellfragmente aus Reispapier, Karton und Stoff', 'Render und 1:1-Stoffhülle für die Abschluss-Installation'],
      en: ['Cymatics experiments · water, sand, loudspeaker', 'Frequency analysis of Wismar harbour soundscape', 'Model fragments in rice paper, cardboard, and fabric', 'Render and 1:1 fabric envelope for the closing installation'],
    },
    role: { de: 'Gruppenarbeit', en: 'Group project' },
  },
  {
    id: 'genius-loci',
    t: { de: 'Genius Loci — Innenräume der Stadt', en: 'Genius Loci — Interiors of the City' },
    location: 'Wismar', year: '2025',
    semester: { de: '1. Semester · WS 2025/26', en: '1st semester · winter 2025/26' },
    tag: { de: 'Forschung · Stadtraum', en: 'Research · Urban space' },
    status: { de: 'Forschung', en: 'Research' },
    img: 'assets/projects/genius-loci/card.jpg',
    hero: 'assets/projects/genius-loci/hero.jpg',
    stripA: 'assets/projects/genius-loci/a.jpg',
    stripB: 'assets/projects/genius-loci/b.jpg',
    kicker: { de: 'EGD1 · Raumanalyse', en: 'EGD1 · Spatial analysis' },
    summary: {
      de: 'Eine Untersuchung über das Verhältnis von Innen und Außen im städtischen Raum. Können Straßen und Plätze als Innenräume der Stadt verstanden werden — gefasst durch Fassaden, Vegetation, Licht und Bewegung? Fotografie und Körper im Stadtraum werden zur Methode, um Grenzen, Übergänge und Atmosphären lesbar zu machen.',
      en: 'A study of the relationship between inside and outside in the urban realm. Can streets and squares be read as interiors of the city — held by façades, vegetation, light and movement? Photography and the body in space become a method for making boundaries, thresholds and atmospheres legible.',
    },
    bodyP1: {
      de: 'Ausgangspunkt war die Frage, wie Straßen und Plätze räumlich wirken und inwiefern sie als Innenräume der Stadt verstanden werden können, die durch Fassaden, Vegetation, Licht und Bewegung gefasst sind. Anhand textlicher und konzeptioneller Untersuchungen habe ich analysiert, wo diese Räume enden und wie sie sich nach außen öffnen — zur Landschaft, zum Himmel und zur Weite.',
      en: 'The starting point was how streets and squares act spatially, and how far they can be understood as interiors of the city, framed by façades, vegetation, light and movement. Through textual and conceptual study I traced where these rooms end and how they open outward — toward the landscape, the sky and the distance.',
    },
    bodyP2: {
      de: 'Dabei zeigte sich, dass Innen und Außen keine Gegensätze sind, sondern sich gegenseitig bedingen: Begrenzung schafft Orientierung und Spannung, Öffnung ermöglicht Verbindung und Ausdehnung. Das Projekt schärfte mein Verständnis für räumliche Übergänge und für Architektur als Zusammenspiel von Schutz und Offenheit.',
      en: 'What emerged was that inside and outside are not opposites but conditions of one another: enclosure creates orientation and tension, opening allows connection and extension. The project sharpened my sense for spatial thresholds and for architecture as an interplay of shelter and openness.',
    },
    pull: {
      de: 'Innen und Außen sind keine Gegensätze — sie bedingen einander.',
      en: 'Inside and outside are not opposites — each makes the other possible.',
    },
    capText: {
      de: 'Körper im Stadtraum, im Abendlicht fotografiert: Bewegung als Maß für Enge, Weite und Übergang.',
      en: 'The body in the city, photographed in evening light: movement as a measure of enclosure, distance and threshold.',
    },
    process: {
      de: ['Textliche und konzeptionelle Raumanalyse', 'Fotografische Studien im Abendlicht', 'Bewegung und Körper als räumliches Maß', 'Kartierung von Grenzen und Öffnungen'],
      en: ['Textual and conceptual spatial analysis', 'Photographic studies in evening light', 'Body and movement as a spatial measure', 'Mapping of edges and openings'],
    },
    role: { de: 'Einzelarbeit', en: 'Solo project' },
  },
  {
    id: 'randstadt-intervention',
    t: { de: 'Randstadt Intervention', en: 'Edge-City Intervention' },
    location: 'Wismar · Randstadt', year: '2025',
    semester: { de: '1. Semester · WS 2025/26', en: '1st semester · winter 2025/26' },
    tag: { de: 'Installation · 1:1', en: 'Installation · 1:1' },
    status: { de: 'Gebaut', en: 'Built' },
    img: 'assets/projects/randstadt-intervention/card.jpg',
    hero: 'assets/projects/randstadt-intervention/hero.jpg',
    stripA: 'assets/projects/randstadt-intervention/a.jpg',
    stripB: 'assets/projects/randstadt-intervention/b.jpg',
    kicker: { de: 'EGD1 · Installation 1:1', en: 'EGD1 · 1:1 installation' },
    summary: {
      de: 'Eine ortsspezifische, performative Rauminstallation im Maßstab 1:1. Mit einfachen Mitteln wird ein bestehender Weg in der Randstadt von Wismar verdichtet und neu gelesen: Ein Folientunnel bündelt Bewegung und Wahrnehmung, führt von der Weite in die Enge — und öffnet sich am Ende in einen natürlich gewachsenen Raum.',
      en: 'A site-specific, performative installation at full scale. With simple means, an existing path on the edge of Wismar is condensed and re-read: a tunnel of foil gathers movement and perception, leading from openness into compression — and opening, at its end, into a space shaped by nature.',
    },
    bodyP1: {
      de: 'Ein klar gefasster Weg in der Randstadt sollte räumlich interpretiert und intensiviert werden. Mit einfachen Materialien entstand ein gezielter Eingriff, der den Übergang zwischen Offenheit und Enge bewusst inszeniert. Der Weg führt aus dem offenen Stadtraum in einen zunehmend verdichteten Tunnel, der die Bewegung visuell und atmosphärisch bündelt.',
      en: 'A clearly framed path on the edge of the city was to be interpreted and intensified in spatial terms. With simple materials, a precise intervention stages the shift between openness and constriction. The route leads from open urban space into an increasingly dense tunnel that gathers movement, visually and atmospherically.',
    },
    bodyP2: {
      de: 'Am Ende öffnet sich die Struktur in einen natürlich geformten Raum unter einem dichten Blätterdach. Der Wechsel zwischen künstlichem Eingriff und bestehender Natur schärft die Wahrnehmung des Ortes und macht den Weg selbst zum räumlichen Erlebnis.',
      en: 'At its end the structure opens into a space shaped by nature, beneath a dense canopy of leaves. The shift between artificial intervention and existing nature sharpens the perception of the place and turns the path itself into a spatial experience.',
    },
    pull: {
      de: 'Der Eingriff verändert nicht den Ort, sondern die Art, ihn zu durchschreiten.',
      en: 'The intervention does not change the place — it changes the way you move through it.',
    },
    capText: {
      de: 'Folientunnel entlang eines winterlichen Randstadt-Wegs: von der Weite in die Enge und zurück ins Freie unter dem Blätterdach.',
      en: 'A foil tunnel along a wintry edge-city path: from openness into compression and back into the open beneath the leaves.',
    },
    process: {
      de: ['Ortsanalyse eines gefassten Wegs in der Randstadt', 'Eingriff mit einfachen Materialien (Folie)', 'Verdichtung von Bewegung und Wahrnehmung', '1:1-Aufbau und performative Durchwegung'],
      en: ['Site analysis of a framed edge-city path', 'Intervention with simple materials (foil)', 'Condensing movement and perception', 'Full-scale build and performative walk-through'],
    },
    role: { de: 'Teamarbeit', en: 'Team project' },
  },
  {
    id: 'raum-struktur-huelle',
    t: { de: 'Raum – Struktur – Hülle', en: 'Space – Structure – Skin' },
    location: 'Wismar · Randstadt', year: '2025',
    semester: { de: '1. Semester · WS 2025/26', en: '1st semester · winter 2025/26' },
    tag: { de: 'Entwurf · Bestand', en: 'Design · Existing fabric' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/projects/raum-struktur-huelle/card.jpg',
    hero: 'assets/projects/raum-struktur-huelle/hero.jpg',
    stripA: 'assets/projects/raum-struktur-huelle/a.jpg',
    stripB: 'assets/projects/raum-struktur-huelle/b.jpg',
    kicker: { de: 'EGD1 · Entwurf im Bestand', en: 'EGD1 · Intervention in context' },
    summary: {
      de: 'Ein additiver Eingriff in ein Wohnensemble aus Plattenbauten: eine leichte, parasitäre Struktur schreibt sich in die strenge Geometrie des Bestands ein. Raum, tragende Struktur und Hülle werden als voneinander abhängige Ebenen verstanden, aus deren Zusammenspiel eine neue architektonische Ordnung entsteht.',
      en: 'An additive intervention into a housing ensemble of prefabricated slabs: a light, parasitic structure inscribes itself into the strict geometry of the existing fabric. Space, load-bearing structure and skin are read as interdependent layers whose interplay gives rise to a new architectural order.',
    },
    bodyP1: {
      de: 'Ausgangspunkt war ein Wohnensemble aus Plattenbauten mit strikter Geometrie und repetitiven Fassadenlinien in einer Randstadtsituation. Über die vorhandenen Baukörper legt der Entwurf eine leichte, lineare Konstruktion, die diese miteinander verbindet. Über Brücken werden die Dächer erschlossen und zu einer gemeinschaftlich nutzbaren Fläche zusammengeführt; eine zusätzliche Überdachung schafft geschützte Bereiche.',
      en: 'The starting point was a housing ensemble of prefabricated slabs with strict geometry and repetitive façade lines, set on the edge of the city. Over the existing volumes the design lays a light, linear construction that links them together. Bridges open up the roofs and join them into a shared surface; an added canopy creates sheltered zones.',
    },
    bodyP2: {
      de: 'Durch die eng gesetzten, stabartigen Elemente entstehen unterschiedlich ausgeprägte Zwischenräume mit wechselnden Blickbeziehungen, Offenheiten und Aufenthaltszonen. Die Struktur übernimmt mehrere Rollen zugleich: Wegesystem, Ort der Begegnung, sozialer Raum — und eröffnet neue Möglichkeiten der Vernetzung im bestehenden Wohngefüge.',
      en: 'The closely set, rod-like elements create in-between spaces of varying character, with shifting views, degrees of openness and places to stay. The structure takes on several roles at once: a system of paths, a place of encounter, a social space — opening new connections within the existing fabric.',
    },
    pull: {
      de: 'Die Struktur ist Weg, Treffpunkt und Hülle zugleich — sie verbindet, was nebeneinander stand.',
      en: 'The structure is path, meeting point and skin at once — it connects what merely stood side by side.',
    },
    capText: {
      de: 'Leichte, stabartige Struktur über dem Plattenbau-Bestand: Brücken erschließen die Dächer zu einer gemeinschaftlichen Fläche. Modell und Detail.',
      en: 'A light, rod-like structure above the prefab ensemble: bridges open the roofs into a shared surface. Model and detail.',
    },
    process: {
      de: ['Analyse der Plattenbau-Geometrie und Randstadtsituation', 'Additive, parasitäre Leichtstruktur', 'Brücken und Dacherschließung als Gemeinschaftsfläche', 'Modellstudien zu Zwischenraum und Blickbeziehung'],
      en: ['Analysis of the prefab geometry and edge-city site', 'Additive, parasitic light structure', 'Bridges and roof access as shared space', 'Model studies of in-between space and views'],
    },
    role: { de: 'Gruppenarbeit', en: 'Group project' },
  },
  {
    id: 'masse-und-hohlraum',
    t: { de: 'Masse und Hohlraum', en: 'Mass and Void' },
    location: 'Wismar', year: '2025',
    semester: { de: '1. Semester · WS 2025/26', en: '1st semester · winter 2025/26' },
    tag: { de: 'Modell · Licht', en: 'Model · Light' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/projects/masse-und-hohlraum/card.jpg',
    hero: 'assets/projects/masse-und-hohlraum/hero.jpg',
    stripA: 'assets/projects/masse-und-hohlraum/a.jpg',
    stripB: 'assets/projects/masse-und-hohlraum/b.jpg',
    kicker: { de: 'EGD1 · Raumexperiment', en: 'EGD1 · Spatial experiment' },
    summary: {
      de: 'Eine Untersuchung über das Verhältnis von Volumen und Leere. Raum wird nicht als Nebenprodukt verstanden, sondern als aktives Element, das durch Masse gefasst und erlebbar wird. Über Wachs- und Betongüsse entstehen Modelle, die ausschließlich den Hohlraum sichtbar machen — und das Licht zum eigentlichen Baustoff erklären.',
      en: 'A study of volume and emptiness. Space is treated not as a by-product but as an active element, defined and made tangible by mass. Through wax and concrete casts, the project produces models that show only the void — and make light the true material.',
    },
    bodyP1: {
      de: 'Zur Untersuchung wurden bestehende Buchkörper als Material genutzt. Durch das Ausschneiden räumlicher Abfolgen und das Ausgießen der Negativräume mit Wachs entstanden Modelle, die nur den Hohlraum zeigten. So ließen sich Raumwirkungen losgelöst von Fassade und Volumen analysieren — Lichtführung, Transparenz und Überlagerung als zentrale Entwurfsparameter.',
      en: 'Existing book bodies were used as raw material. By cutting away spatial sequences and casting the resulting voids in wax, the work produced models that showed only the hollow space. This made it possible to analyse spatial effects detached from façade and volume — light, transparency and overlap as the core design parameters.',
    },
    bodyP2: {
      de: 'Auf dieser Basis entstand eine räumliche Struktur, in der das Licht Orientierung und Abfolge bestimmt. Die Realisierung erfolgte als Betonguss in Erde, im Verfahren am Glockenguss orientiert. Nach dem Aushärten blieb ein klar definierter Innenraum zurück, der über ein Oberlicht und gezielt gesetzte Öffnungen belichtet wird — die Lichtführung macht den Weg durch die Struktur erfahrbar.',
      en: 'From this grew a spatial structure in which light governs orientation and sequence. It was realised as a concrete cast in earth, a process borrowed from bell-casting. Once set, a clearly defined interior remained, lit through a skylight and carefully placed openings — the play of light makes the path through the structure tangible.',
    },
    pull: {
      de: 'Nicht die Masse war das Thema, sondern das, was sie umschließt.',
      en: 'The subject was never the mass, but what it encloses.',
    },
    capText: {
      de: 'Negativräume in Wachs und Beton gegossen, im Verfahren des Glockengusses; Oberlicht und Öffnungen führen das Licht durch den Innenraum.',
      en: 'Voids cast in wax and concrete, after the technique of bell-casting; a skylight and openings draw light through the interior.',
    },
    process: {
      de: ['Buchkörper als Material — Ausschneiden räumlicher Abfolgen', 'Negativräume in Wachs ausgegossen', 'Betonguss in Erde (analog Glockenguss)', 'Belichtung über Oberlicht und gesetzte Öffnungen'],
      en: ['Book bodies as material — cutting spatial sequences', 'Voids cast in wax', 'Concrete cast in earth (after bell-casting)', 'Lighting through skylight and placed openings'],
    },
    role: { de: 'Gruppenarbeit', en: 'Group project' },
  },
  {
    id: 'zu-wasser-lassen',
    t: { de: 'Zu Wasser lassen — Ein Boot aus Karton', en: 'Set Afloat — A Boat from Cardboard' },
    location: 'Wismar · Wendorf', year: '2025',
    semester: { de: '1. Semester · WS 2025/26', en: '1st semester · winter 2025/26' },
    tag: { de: 'Stegreif · Modellbau', en: 'Workshop · Model-making' },
    status: { de: 'Gebaut', en: 'Built' },
    img: 'assets/projects/zu-wasser-lassen/card.jpg',
    hero: 'assets/projects/zu-wasser-lassen/hero.jpg',
    stripA: 'assets/projects/zu-wasser-lassen/a.jpg',
    stripB: 'assets/projects/zu-wasser-lassen/b.jpg',
    kicker: { de: 'EGD1 · Einführungsstegreif', en: 'EGD1 · Opening workshop' },
    summary: {
      de: 'Ein viertägiger Stegreif zum Auftakt des Studiums: Aus Karton, Pappmaché und Farbe sollte ein schwimmfähiges Boot entstehen — Form als unmittelbares Ergebnis konstruktiver Logik. Zwischen Material, Auftrieb und Hydrodynamik führte der Weg vom 1:20-Modell bis zum 1:1-Boot und endete in einer Regatta am Strand von Wendorf.',
      en: 'A four-day opening workshop: a buoyant boat made only from cardboard, papier-mâché and paint — form as the direct result of structural logic. Working between material, buoyancy and hydrodynamics, the project moved from a 1:20 model to a full-size boat and ended in a regatta on the beach at Wendorf.',
    },
    bodyP1: {
      de: 'Am Anfang stand kein Entwurf, sondern eine Frage des Materials: Wie trägt eine Schicht aus Karton und Pappmaché ein Gewicht über Wasser? In schnellen Papiermodellen im Maßstab 1:20 wurden Form, Volumen und Stabilität getestet und Schritt für Schritt weiterentwickelt — jede Iteration eine Antwort auf die vorige.',
      en: 'It did not begin with a design but with a question of material: how does a shell of cardboard and papier-mâché carry weight across water? Quick 1:20 paper models tested form, volume and stability and developed them step by step — each iteration an answer to the last.',
    },
    bodyP2: {
      de: 'Aus den Versuchen wuchs ein Rumpf, der hochskaliert und schließlich im Maßstab 1:1 gebaut wurde. Der Prozess verband konstruktive Logik mit gestalterischem Anspruch und mündete in einem funktionsfähigen Objekt — auf die Probe gestellt bei einer Regatta am Strand von Wendorf.',
      en: 'From these experiments grew a hull that was scaled up and finally built at full size. The process tied constructive logic to a design ambition and led to a working object — put to the test in a regatta on the beach at Wendorf.',
    },
    pull: {
      de: 'Die Form war kein Bild, sondern die Folge dessen, was das Material tragen konnte.',
      en: 'The form was never an image — it was the consequence of what the material could carry.',
    },
    capText: {
      de: 'Vom Papiermodell zum 1:1-Boot: Konstruktion, Probefahrt und Regatta am Strand von Wendorf.',
      en: 'From paper model to full-size boat: construction, trial and regatta on the beach at Wendorf.',
    },
    process: {
      de: ['Papiermodelle 1:20 — Form, Volumen, Stabilität', 'Iterative Tests von Auftrieb und Hydrodynamik', 'Hochskalierung und Bau im Maßstab 1:1', 'Regatta am Strand von Wendorf'],
      en: ['1:20 paper models — form, volume, stability', 'Iterative tests of buoyancy and hydrodynamics', 'Scaling up and building at full size', 'Regatta on the beach at Wendorf'],
    },
    role: { de: 'Teamarbeit', en: 'Team project' },
  },
  {
    id: 'weitere-arbeiten',
    t: { de: 'Grundlagen — Collage, Geometrie, Freihand', en: 'Foundations — Collage, Geometry, Freehand' },
    location: 'Wismar', year: '2025',
    semester: { de: '1. Semester · WS 2025/26', en: '1st semester · winter 2025/26' },
    tag: { de: 'Grundlagen · Darstellung', en: 'Foundations · Representation' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/projects/weitere-arbeiten/card.jpg',
    hero: 'assets/projects/weitere-arbeiten/hero.jpg',
    stripA: 'assets/projects/weitere-arbeiten/a.jpg',
    stripB: 'assets/projects/weitere-arbeiten/b.jpg',
    kicker: { de: 'EGD1 · Digitale Grundlagen · Geometrie · Freihand', en: 'EGD1 · Digital foundations · Geometry · Freehand' },
    summary: {
      de: 'Begleitende Arbeiten aus den Grundlagenmodulen: eine digitale Collage über die Schwelle zwischen Alltag und Freiheit, geometrisch-konstruktive Darstellungen und Freihandzeichnungen. Drei Übungen im Darstellen — vom freien Bild über die exakte Konstruktion bis zur Hand.',
      en: 'Accompanying work from the foundation modules: a digital collage on the threshold between everyday life and freedom, geometric construction drawings, and freehand studies. Three exercises in representation — from the free image to exact construction to the hand.',
    },
    bodyP1: {
      de: 'Die Collage „Tor zur Freiheit" thematisiert die Schwelle zwischen der „Gefangenschaft" im Alltag und der Freiheit. Der Protagonist steht am Übergang eines entleerten städtischen Umfelds hin zu einem idealisierten, immateriellen Raum, der durch das helle Tor sichtbar wird — ein Ort, den es nur auf dem Papier gibt. Das Tor wird zur Schnittstelle zwischen gelebter Realität und möglicher Zukunft.',
      en: 'The collage "Gate to Freedom" takes up the threshold between the "captivity" of everyday life and freedom. The figure stands at the passage from an emptied urban setting toward an idealised, immaterial space made visible by the bright gate — a place that exists only on paper. The gate becomes the interface between lived reality and a possible future.',
    },
    bodyP2: {
      de: 'Daneben stehen Arbeiten aus dem Geometrischen Darstellen und dem Freihandzeichnen: perspektivische Konstruktionen, Innenraumstudien und Zeichnungen organischer Formen. Sie bilden das handwerkliche Fundament des Semesters — das Sehen, Konstruieren und Darstellen, auf dem die Entwürfe aufbauen.',
      en: 'Alongside it stand works from descriptive geometry and freehand drawing: perspective constructions, interior studies and drawings of organic forms. They form the craft foundation of the semester — the seeing, constructing and representing on which the designs are built.',
    },
    pull: {
      de: 'Das Tor existiert nur auf dem Papier — und genau dort beginnt der Entwurf.',
      en: 'The gate exists only on paper — and that is exactly where design begins.',
    },
    capText: {
      de: 'Collage „Tor zur Freiheit", Freihandzeichnungen organischer Formen und perspektivische Konstruktionen aus den Grundlagenmodulen.',
      en: 'The collage "Gate to Freedom", freehand studies of organic forms, and perspective constructions from the foundation modules.',
    },
    process: {
      de: ['Digitale Collage „Tor zur Freiheit"', 'Perspektivische Konstruktion (Geometrisches Darstellen)', 'Innenraum- und Perspektivstudien', 'Freihandzeichnen organischer Formen'],
      en: ['Digital collage "Gate to Freedom"', 'Perspective construction (descriptive geometry)', 'Interior and perspective studies', 'Freehand drawing of organic forms'],
    },
    role: { de: 'Einzelarbeit', en: 'Solo project' },
  },
];

// Helper to localise: returns object's de/en or just the value if not bilingual.
window.L = (v, lang) => (v && typeof v === 'object' && v[lang] != null) ? v[lang] : v;

const CV = {
  education: [
    { y: '2025 — heute',
      what: { de: 'B.A. Architektur', en: 'B.A. Architecture' },
      where: { de: 'Hochschule Wismar', en: 'Hochschule Wismar, Germany' },
      detail: { de: 'Architekturstudium seit dem Wintersemester 2025/26; aktuell im ersten Studienjahr (2. Semester).', en: 'Architecture studies since winter semester 2025/26; currently first year, second semester.' },
    },
    { y: '2023 — 2025',
      what: { de: 'Ausbildung zum Zimmerer', en: 'Apprenticeship as a carpenter (Zimmerer)' },
      where: { de: 'Hamburg', en: 'Hamburg, Germany' },
      detail: { de: 'Dreijährige Ausbildung im Holzbau, Gesellenabschluss im Juli 2025 — die Grundlage meines materialnahen Zugangs zur Architektur.', en: 'Three-year training in timber construction, journeyman qualification in July 2025 — the foundation of my material-led approach to architecture.' },
    },
    { y: '2015 — 2023',
      what: { de: 'Allgemeine Hochschulreife (Abitur)', en: 'Abitur (university entrance qualification)' },
      where: { de: 'Gymnasium Eppendorf, Hamburg', en: 'Gymnasium Eppendorf, Hamburg' },
      detail: { de: '', en: '' },
    },
  ],
  skills: {
    de: ['Zimmererhandwerk & Holzbau', 'Teamfähigkeit', 'Lösungsorientierung', 'Zuverlässigkeit', 'Kritikfähigkeit', 'Selbstreflexion'],
    en: ['Carpentry & timber construction', 'Teamwork', 'Solution-oriented thinking', 'Reliability', 'Openness to criticism', 'Self-reflection'],
  },
  languages: [
    { l: { de: 'Deutsch', en: 'German' }, level: { de: 'Muttersprache', en: 'Native' } },
    { l: { de: 'Englisch', en: 'English' }, level: { de: 'Gute Kenntnisse', en: 'Good working knowledge' } },
  ],
  interests: {
    de: ['Handball', 'Schach', 'Calisthenics', 'Künstlerische Arbeiten'],
    en: ['Handball', 'Chess', 'Calisthenics', 'Artistic work'],
  },
  engagement: {
    de: 'Volleyball-Team Hamburg — Erarbeitung eines Turnierkonzepts für den Verein.',
    en: 'Volleyball team in Hamburg — developed a tournament concept for the club.',
  },
};

window.PROJECTS = PROJECTS;
window.CV = CV;
