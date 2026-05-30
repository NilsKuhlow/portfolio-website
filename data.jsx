// data.jsx — bilingual content. p.t / p.summary / p.kicker etc are objects { de, en }.

const PROJECTS = [
  {
    id: 'spatialsound',
    t: { de: 'Scenographic Space — Klang wird Raum', en: 'Scenographic Space — Sound Becomes Space' },
    location: 'Wismar', year: '2026',
    semester: { de: '2. Semester · SoSe 2026', en: '2nd semester · summer 2026' },
    tag: { de: 'Forschung · Parametrik', en: 'Research · Parametric' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/projects/spatial-sound/card.jpg',
    hero: 'assets/projects/spatial-sound/hero.jpg',
    kicker: { de: 'EGD II · A02 · Architektur aus Bewegung', en: 'EGD II · A02 · Architecture from Movement' },
    summary: {
      de: 'Wie klingt ein Raum — und wie formt Klang Raum? Scenographic Space übersetzt Klang in Architektur: Aus Feldaufnahmen werden über Analyse, psychoakustische Interpretation und parametrische Generierung räumliche Sequenzen, die Bewegung, Zeit und Atmosphäre unmittelbar erfahrbar machen.',
      en: 'How does a space sound — and how does sound shape space? Scenographic Space translates sound into architecture: from field recordings, through analysis, psychoacoustic interpretation and parametric generation, spatial sequences emerge that make movement, time and atmosphere directly tangible.',
    },
    bodyP1: {
      de: 'Der Prozess folgt sechs Schritten: Klangaufnahme im Feld, Analyse über Spektrogramme (Python), psychoakustische Interpretation der emotionalen Wirkung, Mapping in Geometrie, parametrische Raumgenerierung (Grasshopper, Blender) und schließlich Akustiksimulation und Visualisierung. Klang wird so nicht illustriert, sondern als Entwurfsmaterial gelesen.',
      en: 'The process follows six steps: field recording, analysis through spectrograms (Python), psychoacoustic interpretation of emotional effect, mapping into geometry, parametric space generation (Grasshopper, Blender), and finally acoustic simulation and visualisation. Sound is not illustrated but read as design material.',
    },
    bodyP2: {
      de: 'Mein eigener Raum übersetzt unruhige, vielschichtige Klangstrukturen in eine diskontinuierliche Raumorganisation. Fragmentierte akustische Impulse — kurze, abgebrochene Töne, wechselnde Frequenzen — werden nicht als lineare Bewegung verstanden, sondern als System aus Versatz, Bruch und Überlagerung. Raumkanten sind keine festen Grenzen, sondern instabile Übergänge; der Körper findet keine klare Orientierung und wird aktiv gefordert.',
      en: 'My own space translates restless, layered sound structures into a discontinuous spatial organisation. Fragmented acoustic impulses — short, broken tones, shifting frequencies — are read not as linear movement but as a system of offset, rupture and overlap. Room edges are not fixed boundaries but unstable transitions; the body finds no clear orientation and is actively challenged.',
    },
    pull: {
      de: 'Klang wird nicht illustriert — er wird zum Material des Raums.',
      en: 'Sound is not illustrated — it becomes the material of space.',
    },
    capText: {
      de: 'Modelle der klanggenerierten Räume mit Maßstabsfigur: aus Frequenz, Rhythmus und Dichte werden Schwellen, Engstellen und Öffnungen. Gruppenarbeit mit Kai-Lars Ehrich, Richard Muth und Philipp Tomschin.',
      en: 'Models of the sound-generated spaces with scale figure: frequency, rhythm and density become thresholds, narrows and openings. A group project with Kai-Lars Ehrich, Richard Muth and Philipp Tomschin.',
    },
    process: {
      de: ['Feldaufnahmen · Klang im Raum', 'Spektrogramm-Analyse (Python)', 'Psychoakustisches Mapping in Geometrie', 'Parametrische Raumgenerierung & Akustiksimulation'],
      en: ['Field recordings · sound in space', 'Spectrogram analysis (Python)', 'Psychoacoustic mapping into geometry', 'Parametric space generation & acoustic simulation'],
    },
    role: { de: 'Gruppenarbeit', en: 'Group project' },
    gallery: [
      { src: 'assets/projects/spatial-sound/g1.jpg', r: '2/1', wide: true, lbl: { de: 'Analyse · Spektrogramm der Klangaufnahme', en: 'Analysis · spectrogram of the field recording' } },
      { src: 'assets/projects/spatial-sound/g2.jpg', r: '1/1', lbl: { de: 'Klang in Materie · Zymatik', en: 'Sound in matter · cymatics' } },
      { src: 'assets/projects/spatial-sound/g3.jpg', r: '1/1', lbl: { de: 'Mein Raum · die fragmentierte weiße Struktur', en: 'My space · the fragmented white structure' } },
      { src: 'assets/projects/spatial-sound/g4.jpg', r: '16/9', wide: true, lbl: { de: 'Klanggeneriertes Gruppenmodell', en: 'Sound-generated group model' } },
    ],
  },
  {
    id: 'avatar',
    t: { de: 'Architectural Avatar', en: 'Architectural Avatar' },
    location: 'Wismar', year: '2026',
    semester: { de: '2. Semester · SoSe 2026', en: '2nd semester · summer 2026' },
    tag: { de: 'Studie · Figur', en: 'Study · Figure' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/projects/avatar/card.jpg',
    hero: 'assets/projects/avatar/hero.jpg',
    heroFull: true,
    kicker: { de: 'EGD II · A01', en: 'EGD II · A01' },
    summary: {
      de: 'Architectural Avatar macht den eigenen Körper zum architektonischen Protagonisten. Aus fotografischen Haltungsstudien — zeigen, fotografieren, innehalten — entsteht eine abstrahierte weiße Figur, ein Avatar, der als Maßstabsfigur in reale Situationen gesetzt wird: auf den Wohnweg, in den herbstlichen Park, in den Hörsaal. Der Körper wird zum Werkzeug, räumliche Wirkung zu erproben.',
      en: 'Architectural Avatar turns the body itself into an architectural protagonist. From photographic posture studies — pointing, photographing, pausing — an abstracted white figure emerges, an avatar, set as a scale figure into real situations: a residential path, an autumn park, a lecture hall. The body becomes a tool for testing spatial effect.',
    },
    bodyP1: {
      de: 'Ausgangspunkt ist der eigene Körper, in unterschiedlichen Haltungen fotografiert — zeigen, fotografieren, stehen, innehalten. Aus diesen Aufnahmen entsteht eine abstrahierte, reduzierte weiße Figur: ein Avatar, der den Menschen nicht abbildet, sondern als Stellvertreter und Maß im Raum lesbar macht.',
      en: 'The starting point is the body itself, photographed in different postures — pointing, photographing, standing, pausing. From these images an abstracted, reduced white figure emerges: an avatar that does not depict the person but stands in for them, legible as a measure within space.',
    },
    bodyP2: {
      de: 'Als Figur im Modellmaßstab wird der Avatar in wechselnde Situationen gesetzt — auf den Backsteinweg vor dem Wohnhaus, in den herbstlichen Park, in dem ihn sein Urheber selbst fotografiert, und in den Hörsaal. In der „Konstellation" ordnen sich kleine Figuren auf einer Dartscheibe zu einem Maßstabsfeld. Jede Situation prüft ein anderes Verhältnis von Figur und Raum: Nähe und Distanz, Maßstab und Kontext.',
      en: 'As a model-scale figure the avatar is placed into changing situations — the brick path before the housing block, the autumn park where its own maker photographs it, and the lecture hall. In the "constellation", small figures arrange themselves on a dartboard into a field of scale. Each situation tests another relationship between figure and space: nearness and distance, scale and context.',
    },
    pull: {
      de: 'Der Avatar bildet den Menschen nicht ab — er macht ihn als Maß des Raums lesbar.',
      en: 'The avatar does not depict the person — it makes them legible as the measure of space.',
    },
    capText: {
      de: 'Der Avatar in realen Situationen — Wohnweg, herbstlicher Park, Hörsaal — und die fotografischen Haltungsstudien, aus denen die Figur entstand.',
      en: 'The avatar in real situations — a residential path, an autumn park, a lecture hall — and the photographic posture studies from which the figure emerged.',
    },
    process: {
      de: ['Fotografische Haltungsstudien des eigenen Körpers', 'Abstraktion zur weißen Avatar-Figur', 'Figur im Modellmaßstab, in reale Szenen gesetzt', 'Konstellation · Maßstabsfeld auf der Dartscheibe'],
      en: ['Photographic posture studies of the body', 'Abstraction into the white avatar figure', 'Model-scale figure placed into real scenes', 'Constellation · a field of scale on the dartboard'],
    },
    role: { de: 'Einzelarbeit', en: 'Solo project' },
    gallery: [
      { src: 'assets/projects/avatar/g1.jpg', r: '16/9', wide: true, lbl: { de: 'Konstellation · Maßstabsfiguren auf der Dartscheibe', en: 'Constellation · scale figures on the dartboard' } },
      { src: 'assets/projects/avatar/g2.jpg', r: '3/4', lbl: { de: 'Haltungsstudie · Zeigen', en: 'Posture study · pointing' } },
      { src: 'assets/projects/avatar/g3.jpg', r: '3/4', lbl: { de: 'Haltungsstudie · Fotografieren', en: 'Posture study · photographing' } },
      { src: 'assets/projects/avatar/g4.jpg', r: '16/9', wide: true, lbl: { de: 'Der Avatar im Hörsaal', en: 'The avatar in the lecture hall' } },
    ],
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
      de: 'Fotografische Körperstudien, Stadtplan-Kartierung und perspektivische Zeichnungen: der Stadtraum als Innenraum, gelesen durch Grenzen, Bewegung und Licht.',
      en: 'Photographic body studies, an urban mapping plan and perspective drawings: the city read as interior — through edges, movement and light.',
    },
    process: {
      de: ['Textliche und konzeptionelle Raumanalyse', 'Perspektivische Handzeichnungen im Stadtraum', 'Fotografische Körperstudien im Herbstlicht', 'Stadtplan-Kartierung von Grenzen und Öffnungen'],
      en: ['Textual and conceptual spatial analysis', 'Perspective hand-drawings in the urban realm', 'Photographic body studies in autumn light', 'Urban mapping of edges and openings'],
    },
    role: { de: 'Einzelarbeit', en: 'Solo project' },
    gallery: [
      { src: 'assets/projects/genius-loci/g1.jpg', r: '2/1', wide: true, lbl: { de: 'Kartierung · Grenzen, Öffnungen, Blickachsen', en: 'Mapping · edges, openings, sightlines' } },
      { src: 'assets/projects/genius-loci/g2.jpg', r: '3/4', lbl: { de: 'Perspektivische Handzeichnungen', en: 'Perspective hand-drawings' } },
      { src: 'assets/projects/genius-loci/g3.jpg', r: '3/4', lbl: { de: 'Die Bushaltestelle als Innenraum der Stadt', en: 'The bus shelter as an interior of the city' } },
      { src: 'assets/projects/genius-loci/g4.jpg', r: '16/9', wide: true, lbl: { de: 'Körper als räumliches Maß', en: 'The body as a spatial measure' } },
    ],
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
    heroFull: true,
    kicker: { de: 'EGD1 · Installation 1:1', en: 'EGD1 · 1:1 installation' },
    summary: {
      de: 'Eine ortsspezifische, performative Rauminstallation im Maßstab 1:1. Mit einfachen Mitteln wird ein bestehender Weg in der Randstadt von Wismar verdichtet und neu gelesen: Ein Folientunnel bündelt Bewegung und Wahrnehmung, führt von der Weite in die Enge — und öffnet sich am Ende in einen natürlich gewachsenen Raum.',
      en: 'A site-specific, performative installation at full scale. With simple means, an existing path on the edge of Wismar is condensed and re-read: a tunnel of foil gathers movement and perception, leading from openness into compression — and opening, at its end, into a space shaped by nature.',
    },
    bodyP1: {
      de: 'Ein klar gefasster Weg in der Randstadt sollte räumlich interpretiert und intensiviert werden. Mit einfachen Mitteln — transluzenter Folie auf Holzpfählen — entstand ein gezielter Eingriff, der den Übergang zwischen Offenheit und Enge bewusst inszeniert. Der Weg führt aus dem offenen Stadtraum in einen zunehmend verdichteten Tunnel, der die Bewegung visuell und atmosphärisch bündelt.',
      en: 'A clearly framed path on the edge of the city was to be interpreted and intensified in spatial terms. With simple means — translucent sheeting on timber posts — a precise intervention stages the shift between openness and constriction. The route leads from open urban space into an increasingly dense tunnel that gathers movement, visually and atmospherically.',
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
      de: 'Folientunnel entlang eines winterlichen Randstadt-Wegs: von der Weite in die Enge und zurück ins Freie unter dem Geäst.',
      en: 'A foil tunnel along a wintry edge-city path: from openness into compression and back into the open beneath the bare branches.',
    },
    process: {
      de: ['Ortsanalyse eines gefassten Wegs in der Randstadt', 'Eingriff mit transluzenter Folie auf Holzpfählen', 'Verdichtung von Bewegung und Wahrnehmung', '1:1-Aufbau und performative Durchwegung'],
      en: ['Site analysis of a framed edge-city path', 'Intervention with translucent sheeting on timber posts', 'Condensing movement and perception', 'Full-scale build and performative walk-through'],
    },
    role: { de: 'Teamarbeit', en: 'Team project' },
    gallery: [
      { src: 'assets/projects/randstadt-intervention/g1.jpg', r: '3/4', lbl: { de: 'Annäherung · der gefasste Weg', en: 'Approach · the framed path' } },
      { src: 'assets/projects/randstadt-intervention/g2.jpg', r: '3/4', lbl: { de: 'Durchwegung', en: 'Passing through' } },
      { src: 'assets/projects/randstadt-intervention/g3.jpg', r: '2/1', wide: true, lbl: { de: 'Der Eingriff im winterlichen Ort', en: 'The intervention in its winter setting' } },
    ],
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
    heroFull: true,
    kicker: { de: 'EGD1 · Entwurf im Bestand', en: 'EGD1 · Intervention in context' },
    summary: {
      de: 'Ein additiver Eingriff in ein Wohnensemble aus Plattenbauten: eine leichte, parasitäre Struktur schreibt sich in die strenge Geometrie des Bestands ein. Raum, tragende Struktur und Hülle werden als voneinander abhängige Ebenen verstanden, aus deren Zusammenspiel eine neue architektonische Ordnung entsteht.',
      en: 'An additive intervention into a housing ensemble of prefabricated slabs: a light, parasitic structure inscribes itself into the strict geometry of the existing fabric. Space, load-bearing structure and skin are read as interdependent layers whose interplay gives rise to a new architectural order.',
    },
    bodyP1: {
      de: 'Ausgangspunkt war ein Wohnensemble aus Plattenbauten mit strikter Geometrie und repetitiven Fassadenlinien in einer Randstadtsituation. Über die vorhandenen Baukörper legt der Entwurf eine leichte, lineare Konstruktion, die diese miteinander verbindet. Über verspannte Brücken werden die Dächer erschlossen und zu einer gemeinschaftlich nutzbaren Fläche zusammengeführt; eine zusätzliche Überdachung aus stabartigen Elementen schafft geschützte Bereiche.',
      en: 'The starting point was a housing ensemble of prefabricated slabs with strict geometry and repetitive façade lines, set on the edge of the city. Over the existing volumes the design lays a light, linear construction that links them together. Cable-stayed bridges open up the roofs and join them into a shared surface; an added canopy of rod-like elements creates sheltered zones.',
    },
    bodyP2: {
      de: 'Die eng gesetzten, stabartigen Elemente erzeugen Zwischenräume mit wechselnden Blickbeziehungen und Offenheiten; ihnen gegenüber stehen geordnete, flächige Module — Hülle und Struktur als zwei Sprachen desselben Systems. So übernimmt die Struktur mehrere Rollen zugleich: Wegesystem, Ort der Begegnung, sozialer Raum — und eröffnet neue Möglichkeiten der Vernetzung im bestehenden Wohngefüge.',
      en: 'The closely set, rod-like elements create in-between spaces with shifting views and degrees of openness; set against them stand ordered, planar modules — skin and structure as two registers of the same system. The structure thus takes on several roles at once: a system of paths, a place of encounter, a social space — opening new connections within the existing fabric.',
    },
    pull: {
      de: 'Die Struktur ist Weg, Treffpunkt und Hülle zugleich — sie verbindet, was nebeneinander stand.',
      en: 'The structure is path, meeting point and skin at once — it connects what merely stood side by side.',
    },
    capText: {
      de: 'Leichtes Stabwerk über dem Plattenbau-Bestand: das stochastische Stabfeld und die geordneten Module, Brücken erschließen die Dächer zur gemeinschaftlichen Fläche. Modell und Photomontage.',
      en: 'A light rod structure above the prefab ensemble: the stochastic rod field and the ordered modules; bridges open the roofs into a shared surface. Model and photomontage.',
    },
    process: {
      de: ['Analyse der Plattenbau-Geometrie und Randstadtsituation', 'Additive, parasitäre Leichtstruktur', 'Verspannte Brücken erschließen die Dächer', 'Modell und Photomontage über dem Bestandsfoto'],
      en: ['Analysis of the prefab geometry and edge-city site', 'Additive, parasitic light structure', 'Cable-stayed bridges open up the roofs', 'Model and photomontage over the site photograph'],
    },
    role: { de: 'Gruppenarbeit', en: 'Group project' },
    gallery: [
      { src: 'assets/projects/raum-struktur-huelle/g1.jpg', r: '16/9', wide: true, lbl: { de: 'Modell · Stabwerk über dem Plattenbau-Ensemble', en: 'Model · rod structure spanning the prefab ensemble' } },
      { src: 'assets/projects/raum-struktur-huelle/g2.jpg', r: '1/1', lbl: { de: 'Das stochastische Stabfeld', en: 'The stochastic rod field' } },
      { src: 'assets/projects/raum-struktur-huelle/g3.jpg', r: '1/1', lbl: { de: 'Die geordnete Modulstruktur', en: 'The ordered modular structure' } },
      { src: 'assets/projects/raum-struktur-huelle/g4.jpg', r: '16/9', wide: true, lbl: { de: 'Der Bestand · Plattenbau-Hof in der Randstadt', en: 'The existing fabric · prefab courtyard on the city edge' } },
    ],
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
    heroFull: true,
    kicker: { de: 'EGD1 · Raumexperiment', en: 'EGD1 · Spatial experiment' },
    summary: {
      de: 'Eine Untersuchung über das Verhältnis von Volumen und Leere. Raum wird nicht als Nebenprodukt verstanden, sondern als aktives Element, das durch Masse gefasst und erlebbar wird. Über Wachs- und Betongüsse entstehen Modelle, die ausschließlich den Hohlraum sichtbar machen — und das Licht zum eigentlichen Baustoff erklären.',
      en: 'A study of volume and emptiness. Space is treated not as a by-product but as an active element, defined and made tangible by mass. Through wax and concrete casts, the project produces models that show only the void — and make light the true material.',
    },
    bodyP1: {
      de: 'Ausgangspunkt waren markante Zugangssituationen im Wismarer Stadtraum, aus denen zunächst abstrakte Konzepte für Sequenz, Übergang und räumliche Verdichtung entstanden. Zur Untersuchung wurden bestehende Buchkörper als Material genutzt: Durch das Ausschneiden räumlicher Abfolgen und das Ausgießen der Negativräume mit Wachs entstanden Modelle, die nur den Hohlraum zeigten. So ließen sich Raumwirkungen losgelöst von Fassade und Volumen analysieren — Lichtführung, Transparenz und Überlagerung als zentrale Entwurfsparameter.',
      en: 'The starting point was a set of distinctive threshold situations in Wismar\'s urban fabric, from which abstract concepts of sequence, transition and spatial compression first emerged. Existing book bodies then served as raw material: by cutting away spatial sequences and casting the resulting voids in wax, the work produced models that showed only the hollow space. This made it possible to analyse spatial effects detached from façade and volume — light, transparency and overlap as the core design parameters.',
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
    gallery: [
      { src: 'assets/projects/masse-und-hohlraum/g1.jpg', r: '2/1', wide: true, lbl: { de: 'Betonguss in Erde · die Negativform im Sand', en: 'Concrete cast in earth · the formwork in sand' } },
      { src: 'assets/projects/masse-und-hohlraum/g2.jpg', r: '1/1', lbl: { de: 'Maßstabsfigur im Hohlraum', en: 'Scale figure within the void' } },
      { src: 'assets/projects/masse-und-hohlraum/g3.jpg', r: '1/1', lbl: { de: 'Geometrie des Hohlraums', en: 'Geometry of the void' } },
      { src: 'assets/projects/masse-und-hohlraum/g4.jpg', r: '16/9', wide: true, lbl: { de: 'Lichtführung durch gesetzte Öffnungen', en: 'Light drawn through placed openings' } },
    ],
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
    heroRatio: '3/2', heroFull: true,
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
    gallery: [
      { src: 'assets/projects/zu-wasser-lassen/g1.jpg', r: '1/1', lbl: { de: 'Konzept · Skizzenmodell 1:20', en: 'Concept · 1:20 sketch model' } },
      { src: 'assets/projects/zu-wasser-lassen/g2.jpg', r: '1/1', lbl: { de: 'Rumpfgerippe aus Pappe', en: 'Cardboard rib frame of the hull' } },
      { src: 'assets/projects/zu-wasser-lassen/g3.jpg', r: '16/9', wide: true, lbl: { de: 'Das fertige Modell vor dem 1:1-Bau', en: 'The finished model before the full-scale build' } },
      { src: 'assets/projects/zu-wasser-lassen/g4.jpg', r: '1/1', lbl: { de: 'Konstruktion · Fügung und Auftrieb', en: 'Construction · joints and buoyancy' } },
      { src: 'assets/projects/zu-wasser-lassen/g5.jpg', r: '1/1', lbl: { de: 'Regatta am Strand von Wendorf · das Wappen voraus', en: 'Regatta on the beach at Wendorf · the crest leads the way' } },
    ],
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
    heroRatio: '3/2', heroFull: true,
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
      de: 'Daneben stehen Arbeiten aus dem Geometrischen Darstellen und dem Freihandzeichnen. Im Geometrischen Darstellen entstehen exakte Innenraumperspektiven mit Fluchtpunkten sowie konstruierte Membran- und Seilformen; im Freihandzeichnen Studien von Muscheln, Schnecken und einem barocken Kirchenmöbel. Sie bilden das handwerkliche Fundament des Semesters — das Sehen, Konstruieren und Darstellen, auf dem die Entwürfe aufbauen.',
      en: 'Alongside it stand works from descriptive geometry and freehand drawing. Descriptive geometry produces exact interior perspectives with vanishing points and constructed membrane and cable forms; freehand drawing yields studies of shells, snails and a baroque church furnishing. Together they form the craft foundation of the semester — the seeing, constructing and representing on which the designs are built.',
    },
    pull: {
      de: 'Das Tor existiert nur auf dem Papier — und genau dort beginnt der Entwurf.',
      en: 'The gate exists only on paper — and that is exactly where design begins.',
    },
    capText: {
      de: 'Collage „Tor zur Freiheit" sowie Arbeiten aus Geometrischem Darstellen und Freihandzeichnen — das gestalterische Fundament des ersten Semesters.',
      en: 'The collage "Gate to Freedom" together with works from descriptive geometry and freehand drawing — the design foundation of the first semester.',
    },
    process: {
      de: ['Digitale Collage „Tor zur Freiheit"', 'Innenraumperspektiven mit Fluchtpunkten', 'Konstruierte Membran- und Seilformen', 'Freihandstudien: Muscheln, Schnecken, barockes Ornament'],
      en: ['Digital collage "Gate to Freedom"', 'Interior perspectives with vanishing points', 'Constructed membrane and cable forms', 'Freehand studies: shells, snails, baroque ornament'],
    },
    role: { de: 'Einzelarbeit', en: 'Solo project' },
    gallery: [
      { src: 'assets/projects/weitere-arbeiten/g1.jpg', r: '1/1', lbl: { de: 'Freihand · Muschelstudie', en: 'Freehand · Shell study' } },
      { src: 'assets/projects/weitere-arbeiten/g2.jpg', r: '1/1', lbl: { de: 'Freihand · Barockes Ornament', en: 'Freehand · Baroque ornament' } },
      { src: 'assets/projects/weitere-arbeiten/g3.jpg', r: '2/1', wide: true, lbl: { de: 'Geometrisches Darstellen · Innenraumperspektive', en: 'Descriptive geometry · Interior perspective' } },
      { src: 'assets/projects/weitere-arbeiten/g4.jpg', r: '2/1', wide: true, lbl: { de: 'Geometrisches Darstellen · Membrankonstruktion', en: 'Descriptive geometry · Membrane construction' } },
    ],
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
