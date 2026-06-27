const PROJECTS = [
  {
    id: "siena",
    t: { de: "Siena \xB7 Digitaler Stadtf\xFChrer", en: "Siena \xB7 Digital City Guide" },
    location: "Siena, Italien",
    year: "2026",
    semester: { de: "2. Semester \xB7 SoSe 2026", en: "2nd semester \xB7 summer 2026" },
    tag: { de: "Web-App \xB7 Stadtf\xFChrer", en: "Web app \xB7 City guide" },
    status: { de: "Live", en: "Live" },
    img: "assets/projects/siena/card.jpg",
    hero: "assets/projects/siena/hero.jpg",
    heroRatio: "3/2",
    kicker: { de: "WPM Stadt + Raum \xB7 Digitale Stadtanalyse", en: "Elective Urban Space \xB7 Digital city analysis" },
    liveUrl: "https://sienastadtfuehrer.de",
    embed: true,
    summary: {
      de: "Siena ist ein digitaler, ortsbezogener Stadtf\xFChrer f\xFCr die Altstadt von Siena, gebaut als Web-App (PWA) im Wahlpflichtmodul Stadt + Raum. Aus der Stadtanalyse wird ein begehbarer Rundgang: eine interaktive Karte, Stationen mit Text, Bild und Audio, Laufwege zwischen den Orten und eine Live-Ortung. Der Zugang l\xE4uft \xFCber eine Visitenkarte aus Siebdruckpappe mit lasergraviertem QR-Code.",
      en: "Siena is a digital, location-aware city guide for the old town of Siena, built as a web app (PWA) in the elective module Urban Space. The urban analysis becomes a walkable tour: an interactive map, stations with text, image and audio, walking routes between places and live positioning. Access runs through a business card of screen-print board with a laser-engraved QR code."
    },
    bodyP1: {
      de: "Ausgangspunkt war eine Analyse des Stadtraums von Siena: seine Pl\xE4tze, Wege und Blickbeziehungen, von der muschelf\xF6rmigen Piazza del Campo bis zum Dom. Aus dieser Lesart der Stadt wurde ein digitaler Rundgang. Jede Station verbindet Ort und Inhalt: ein Foto, ein kurzer Text und eine Audiospur f\xFChren durch Geschichte und Raum, w\xE4hrend die Karte zeigt, wo man steht und wie weit es zur n\xE4chsten Station ist.",
      en: "The starting point was an analysis of Siena's urban space: its squares, routes and sightlines, from the shell-shaped Piazza del Campo to the cathedral. From this reading of the city grew a digital tour. Each station ties place to content: a photo, a short text and an audio track lead through history and space, while the map shows where you stand and how far it is to the next stop."
    },
    bodyP2: {
      de: "Technisch ist Siena eine progressive Web-App: sie l\xE4uft ohne Installation im Browser, funktioniert auch offline, ist f\xFCr das Smartphone gebaut und blendet \xFCber eine Live-Ortung die eigene Position in die Karte ein. Statt einer gedruckten Brosch\xFCre \xF6ffnet eine kleine Visitenkarte aus Siebdruckpappe mit lasergraviertem QR-Code den F\xFChrer, der Eingriff bleibt leicht, der Inhalt w\xE4chst weiter. Die Seite ist unter sienastadtfuehrer.de live.",
      en: "Technically Siena is a progressive web app: it runs in the browser without installation, works offline, is built for the phone and blends your own position into the map through live positioning. Instead of a printed brochure, a small business card of screen-print board with a laser-engraved QR code opens the guide; the intervention stays light, the content keeps growing. The site is live at sienastadtfuehrer.de."
    },
    pull: {
      de: "La citt\xE0 \xE8 un libro. Leggerla \xE8 gi\xE0 viaggiare.",
      en: "La citt\xE0 \xE8 un libro. Leggerla \xE8 gi\xE0 viaggiare."
    },
    capText: {
      de: "Die Visitenkarten aus Siebdruckpappe mit lasergraviertem QR-Code als Zugang sowie Screens des digitalen Stadtf\xFChrers: Start, interaktive Karte, Station und Live-Ortung. Gruppenarbeit mit Philipp Tomschin.",
      en: "The screen-print-board business cards with a laser-engraved QR code as the entry point, alongside screens of the digital city guide: start, interactive map, station and live positioning. A group project with Philipp Tomschin."
    },
    process: {
      de: ["Stadtanalyse von Siena \xB7 R\xE4ume, Wege, Orte", "Inhalte je Station \xB7 Text, Bild und Audio", "Web-App (PWA) \xB7 Karte, Live-Ortung, Offline", "Zugang \xFCber eine Visitenkarte aus Siebdruckpappe mit lasergraviertem QR-Code"],
      en: ["Urban analysis of Siena \xB7 spaces, routes, places", "Content per station \xB7 text, image and audio", "Web app (PWA) \xB7 map, live positioning, offline", "Access via a screen-print-board card with a laser-engraved QR code"]
    },
    role: { de: "Gruppenarbeit", en: "Group project" },
    galleryDark: true,
    gallery: [
      { src: "assets/projects/siena/g1.jpg", r: "210/297", lbl: { de: "Konzept \xB7 eine Stadt liest sich wie ein Buch", en: "Concept \xB7 a city reads like a book" } },
      { src: "assets/projects/siena/g2.jpg", r: "210/297", lbl: { de: "Karte \xB7 eine handgezeichnete Route durch Siena", en: "Map \xB7 a hand-drawn route through Siena" } },
      { src: "assets/projects/siena/g3.jpg", r: "210/297", lbl: { de: "Funktionen \xB7 Smart-Track, Inhalte, offline", en: "Features \xB7 smart-track, content, offline" } },
      { src: "assets/projects/siena/g4.jpg", r: "210/297", lbl: { de: "Stationen im Detail \xB7 Lesart der Schl\xFCsselorte", en: "Stations in detail \xB7 reading the key places" } },
      { src: "assets/projects/siena/g5.jpg", r: "210/297", lbl: { de: "Visitenkarten \xB7 vom Stadtraum direkt zur Webseite", en: "Business cards \xB7 from the city to the website" } }
    ]
  },
  {
    id: "lichtfaenger",
    t: { de: "Lichtf\xE4nger", en: "Lichtf\xE4nger" },
    location: "Wismar \xB7 Dachterrasse Haus 7",
    year: "2026",
    semester: { de: "2. Semester \xB7 SoSe 2026", en: "2nd semester \xB7 summer 2026" },
    tag: { de: "Installation \xB7 Licht", en: "Installation \xB7 Light" },
    status: { de: "Gebaut", en: "Built" },
    img: "assets/projects/lichtfaenger/card.jpg",
    hero: "assets/projects/lichtfaenger/hero.jpg",
    heroRatio: "3/2",
    kicker: { de: "EGD II \xB7 A03 \xB7 Szenografische Atmosph\xE4re", en: "EGD II \xB7 A03 \xB7 Scenographic Atmosphere" },
    summary: {
      de: "Lichtf\xE4nger ist ein leichter, r\xFCckbaubarer Eingriff auf der Dachterrasse von Haus 7. Aus zwei textilen Ideen, einem gewebten Lichtdach (VELUM) und einem Vorhang (VORTEX), fiel der Fokus auf die Terrasse, der Vorhang wurde verworfen. In der Umsetzung ersetzten schmale Reflektoren die T\xFCcher: an Spannseilen aufgeh\xE4ngt, fangen sie Himmel und Sonne ein und werfen ein wanderndes, sich st\xE4ndig ver\xE4nderndes Licht \xFCber den Ort.",
      en: "Lichtf\xE4nger is a light, reversible intervention on the roof terrace of Haus 7. From two textile ideas, a woven canopy of light (VELUM) and a curtain (VORTEX), the focus fell on the terrace and the curtain was discarded. In realisation, slender reflectors replaced the cloths: hung on tensioned cables, they catch sky and sun and cast a wandering, ever-changing light across the place."
    },
    bodyP1: {
      de: "Zu Beginn standen zwei Ideen aus textilem Material: VELUM, ein gewebtes Lichtdach \xFCber der Dachterrasse, und VORTEX, ein Vorhang, der die Bewegung zwischen den Geb\xE4uden fasst. Wir entschieden uns f\xFCr die Dachterrasse und verwarfen den Vorhang. Die Anordnung der Elemente leitet sich aus einer Heatmap der Bewegung ab: Wo sich die Menschen am meisten aufhalten, verdichtet sich der Eingriff.",
      en: "At the outset stood two ideas in textile material: VELUM, a woven canopy of light above the roof terrace, and VORTEX, a curtain gathering the movement between the buildings. We focused on the roof terrace and discarded the curtain. The arrangement of the elements is derived from a heatmap of movement: where people gather most, the intervention grows denser."
    },
    bodyP2: {
      de: "In der Umsetzung ersetzten wir die T\xFCcher schlie\xDFlich durch schmale Reflektoren. An Spannseilen aufgeh\xE4ngt, fangen sie Himmel und Sonnenlicht ein und werfen es als wanderndes Licht \xFCber die Terrasse. Aus einem gewebten Lichtdach wurde so ein Feld aus beweglichen Spiegeln, ein Eingriff, der nichts hinzuf\xFCgt au\xDFer Licht und es mit jeder Tageszeit neu erz\xE4hlt.",
      en: "In realisation we finally replaced the cloths with slender reflectors. Hung on tensioned cables, they catch sky and sunlight and cast it as a wandering light across the terrace. The woven canopy of light became a field of moving mirrors, an intervention that adds nothing but light and retells it with every hour of the day."
    },
    pull: {
      de: "Ein Eingriff, der nichts hinzuf\xFCgt au\xDFer Licht.",
      en: "An intervention that adds nothing but light."
    },
    capText: {
      de: "Von der Vision eines gewebten Lichtdachs \xFCber die Herleitung aus der Bewegung bis zu den fertigen Reflektoren, die Himmel und Sonne \xFCber die Dachterrasse werfen. Gruppenarbeit mit Philipp Tomschin, Kai-Lars Ehrich und Richard Muth.",
      en: "From the vision of a woven canopy of light, through the derivation from movement, to the finished reflectors casting sky and sun across the roof terrace. A group project with Philipp Tomschin, Kai-Lars Ehrich and Richard Muth."
    },
    process: {
      de: ["Zwei Ideen aus Textil \xB7 VELUM (Lichtdach) und VORTEX (Vorhang)", "Fokus auf die Dachterrasse, der Vorhang wird verworfen", "Anordnung aus einer Heatmap der Bewegung", "T\xFCcher werden zu Reflektoren \xB7 Probeh\xE4ngung \xFCber der Terrasse"],
      en: ["Two textile ideas \xB7 VELUM (canopy) and VORTEX (curtain)", "Focus on the roof terrace, the curtain is discarded", "Layout derived from a heatmap of movement", "Cloths become reflectors \xB7 trial hanging above the terrace"]
    },
    role: { de: "Gruppenarbeit", en: "Group project" },
    gallery: [
      { src: "assets/projects/lichtfaenger/g2.jpg", r: "4/3", lbl: { de: "Die Dachterrasse von Haus 7 \xB7 der reale Ort des Eingriffs", en: "The roof terrace of Haus 7 \xB7 the real site of the intervention" } },
      { src: "assets/projects/lichtfaenger/g1.jpg", r: "4/3", lbl: { de: "Erste Versuche \xB7 Licht durch lichtdurchl\xE4ssiges, textiles Material", en: "First trials \xB7 light through translucent textile material" } },
      { src: "assets/projects/lichtfaenger/g3.jpg", r: "3/2", wide: true, fit: "contain", bg: "#ffffff", lbl: { de: "Grundriss und Herleitung \xB7 die Anordnung folgt einer Heatmap der Bewegung", en: "Plan and derivation \xB7 the layout follows a heatmap of movement" } },
      { src: "assets/projects/lichtfaenger/g4.jpg", r: "16/9", wide: true, fit: "contain", bg: "#0b0b0b", lbl: { de: "Aus den T\xFCchern werden schmale Reflektoren \xB7 eine wandernde Linie", en: "The cloths become slender reflectors \xB7 a wandering line" } },
      { src: "assets/projects/lichtfaenger/g5.jpg", r: "2/3", lbl: { de: "Der Reflektor f\xE4ngt Himmel und Sonne", en: "The reflector catches sky and sun" } },
      { src: "assets/projects/lichtfaenger/g6.jpg", r: "2/3", lbl: { de: "Die Reflektoren \xFCber der Terrasse", en: "The reflectors above the terrace" } }
    ]
  },
  {
    id: "spatialsound",
    t: { de: "Scenographic Space \u2014 Klang wird Raum", en: "Scenographic Space \u2014 Sound Becomes Space" },
    location: "Wismar",
    year: "2026",
    semester: { de: "2. Semester \xB7 SoSe 2026", en: "2nd semester \xB7 summer 2026" },
    tag: { de: "Forschung \xB7 Parametrik", en: "Research \xB7 Parametric" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/projects/spatial-sound/card.jpg",
    hero: "assets/projects/spatial-sound/hero.jpg",
    kicker: { de: "EGD II \xB7 A02 \xB7 Architektur aus Bewegung", en: "EGD II \xB7 A02 \xB7 Architecture from Movement" },
    summary: {
      de: "Wie klingt ein Raum, und wie formt Klang Raum? Scenographic Space \xFCbersetzt Klang in Architektur: Aus Feldaufnahmen werden \xFCber Analyse, psychoakustische Interpretation und parametrische Generierung r\xE4umliche Sequenzen, die Bewegung, Zeit und Atmosph\xE4re unmittelbar erfahrbar machen.",
      en: "How does a space sound, and how does sound shape space? Scenographic Space translates sound into architecture: from field recordings, through analysis, psychoacoustic interpretation and parametric generation, spatial sequences emerge that make movement, time and atmosphere directly tangible."
    },
    bodyP1: {
      de: "Der Prozess folgt sechs Schritten: Klangaufnahme im Feld, Analyse \xFCber Spektrogramme (Python), psychoakustische Interpretation der emotionalen Wirkung, Mapping in Geometrie, parametrische Raumgenerierung (Grasshopper, Blender) und schlie\xDFlich Akustiksimulation und Visualisierung. Klang wird so nicht illustriert, sondern als Entwurfsmaterial gelesen.",
      en: "The process follows six steps: field recording, analysis through spectrograms (Python), psychoacoustic interpretation of emotional effect, mapping into geometry, parametric space generation (Grasshopper, Blender), and finally acoustic simulation and visualisation. Sound is not illustrated but read as design material."
    },
    bodyP2: {
      de: "Mein eigener Raum \xFCbersetzt unruhige, vielschichtige Klangstrukturen in eine diskontinuierliche Raumorganisation. Fragmentierte akustische Impulse (kurze, abgebrochene T\xF6ne, wechselnde Frequenzen) werden nicht als lineare Bewegung verstanden, sondern als System aus Versatz, Bruch und \xDCberlagerung. Raumkanten sind keine festen Grenzen, sondern instabile \xDCberg\xE4nge; der K\xF6rper findet keine klare Orientierung und wird aktiv gefordert.",
      en: "My own space translates restless, layered sound structures into a discontinuous spatial organisation. Fragmented acoustic impulses (short, broken tones, shifting frequencies) are read not as linear movement but as a system of offset, rupture and overlap. Room edges are not fixed boundaries but unstable transitions; the body finds no clear orientation and is actively challenged."
    },
    pull: {
      de: "Klang wird nicht illustriert, sondern zum Material des Raums.",
      en: "Sound is not illustrated but becomes the material of space."
    },
    capText: {
      de: "Modelle der klanggenerierten R\xE4ume mit Ma\xDFstabsfigur: aus Frequenz, Rhythmus und Dichte werden Schwellen, Engstellen und \xD6ffnungen. Gruppenarbeit mit Philipp Tomschin, Kai-Lars Ehrich und Richard Muth.",
      en: "Models of the sound-generated spaces with scale figure: frequency, rhythm and density become thresholds, narrows and openings. A group project with Philipp Tomschin, Kai-Lars Ehrich and Richard Muth."
    },
    process: {
      de: ["Feldaufnahmen \xB7 Klang im Raum", "Spektrogramm-Analyse (Python)", "Psychoakustisches Mapping in Geometrie", "Parametrische Raumgenerierung & Akustiksimulation"],
      en: ["Field recordings \xB7 sound in space", "Spectrogram analysis (Python)", "Psychoacoustic mapping into geometry", "Parametric space generation & acoustic simulation"]
    },
    role: { de: "Gruppenarbeit", en: "Group project" },
    gallery: [
      { src: "assets/projects/spatial-sound/g1.jpg", r: "2/1", wide: true, lbl: { de: "Analyse \xB7 Spektrogramm der Klangaufnahme", en: "Analysis \xB7 spectrogram of the field recording" } },
      { src: "assets/projects/spatial-sound/g2.jpg", r: "1/1", lbl: { de: "Klang in Materie \xB7 Zymatik", en: "Sound in matter \xB7 cymatics" } },
      { src: "assets/projects/spatial-sound/g3.jpg", r: "1/1", lbl: { de: "Mein Raum \xB7 die fragmentierte wei\xDFe Struktur", en: "My space \xB7 the fragmented white structure" } },
      { src: "assets/projects/spatial-sound/g4.jpg", r: "16/9", wide: true, lbl: { de: "Klanggeneriertes Gruppenmodell", en: "Sound-generated group model" } }
    ]
  },
  {
    id: "avatar",
    t: { de: "Architectural Avatar", en: "Architectural Avatar" },
    location: "Wismar",
    year: "2026",
    semester: { de: "2. Semester \xB7 SoSe 2026", en: "2nd semester \xB7 summer 2026" },
    tag: { de: "Studie \xB7 Figur", en: "Study \xB7 Figure" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/projects/avatar/card.jpg",
    hero: "assets/projects/avatar/hero.jpg",
    kicker: { de: "EGD II \xB7 A01", en: "EGD II \xB7 A01" },
    summary: {
      de: "Architectural Avatar macht den eigenen K\xF6rper zum architektonischen Protagonisten. Aus fotografischen Haltungsstudien (zeigen, fotografieren, innehalten) entsteht eine abstrahierte wei\xDFe Figur, ein Avatar, der als Ma\xDFstabsfigur in reale Situationen gesetzt wird: auf den Wohnweg, in den herbstlichen Park, in den H\xF6rsaal. Der K\xF6rper wird zum Werkzeug, r\xE4umliche Wirkung zu erproben.",
      en: "Architectural Avatar turns the body itself into an architectural protagonist. From photographic posture studies (pointing, photographing, pausing), an abstracted white figure emerges, an avatar, set as a scale figure into real situations: a residential path, an autumn park, a lecture hall. The body becomes a tool for testing spatial effect."
    },
    bodyP1: {
      de: "Ausgangspunkt ist der eigene K\xF6rper, in unterschiedlichen Haltungen fotografiert: zeigen, fotografieren, stehen, innehalten. Aus diesen Aufnahmen entsteht eine abstrahierte, reduzierte wei\xDFe Figur: ein Avatar, der den Menschen nicht abbildet, sondern als Stellvertreter und Ma\xDF im Raum lesbar macht.",
      en: "The starting point is the body itself, photographed in different postures: pointing, photographing, standing, pausing. From these images an abstracted, reduced white figure emerges: an avatar that does not depict the person but stands in for them, legible as a measure within space."
    },
    bodyP2: {
      de: 'Als Figur im Modellma\xDFstab wird der Avatar in wechselnde Situationen gesetzt: auf den Backsteinweg vor dem Wohnhaus, in den herbstlichen Park, in dem ihn sein Urheber selbst fotografiert, und in den H\xF6rsaal. In der \u201EKonstellation" ordnen sich kleine Figuren auf einer Dartscheibe zu einem Ma\xDFstabsfeld. Jede Situation pr\xFCft ein anderes Verh\xE4ltnis von Figur und Raum: N\xE4he und Distanz, Ma\xDFstab und Kontext.',
      en: 'As a model-scale figure the avatar is placed into changing situations: the brick path before the housing block, the autumn park where its own maker photographs it, and the lecture hall. In the "constellation", small figures arrange themselves on a dartboard into a field of scale. Each situation tests another relationship between figure and space: nearness and distance, scale and context.'
    },
    pull: {
      de: "Der Avatar bildet den Menschen nicht ab, sondern macht ihn als Ma\xDF des Raums lesbar.",
      en: "The avatar does not depict the person but makes them legible as the measure of space."
    },
    capText: {
      de: "Der Avatar in realen Situationen (Wohnweg, herbstlicher Park, H\xF6rsaal) und die fotografischen Haltungsstudien, aus denen die Figur entstand.",
      en: "The avatar in real situations (a residential path, an autumn park, a lecture hall) and the photographic posture studies from which the figure emerged."
    },
    process: {
      de: ["Fotografische Haltungsstudien des eigenen K\xF6rpers", "Abstraktion zur wei\xDFen Avatar-Figur", "Figur im Modellma\xDFstab, in reale Szenen gesetzt", "Konstellation \xB7 Ma\xDFstabsfeld auf der Dartscheibe"],
      en: ["Photographic posture studies of the body", "Abstraction into the white avatar figure", "Model-scale figure placed into real scenes", "Constellation \xB7 a field of scale on the dartboard"]
    },
    role: { de: "Einzelarbeit", en: "Solo project" },
    gallery: [
      { src: "assets/projects/avatar/g1.jpg", r: "16/9", wide: true, lbl: { de: "Der Avatar im H\xF6rsaal", en: "The avatar in the lecture hall" } },
      { src: "assets/projects/avatar/g2.jpg", r: "3/4", lbl: { de: "Der Avatar im Wohngebiet", en: "The avatar in a residential setting" } },
      { src: "assets/projects/avatar/g3.jpg", r: "3/4", lbl: { de: "Haltungsstudie \xB7 der fotografierte K\xF6rper", en: "Posture study \xB7 the photographed body" } }
    ]
  },
  {
    id: "edge-hafencity",
    t: { de: "EDGE HafenCity \xB7 Geb\xE4udeanalyse", en: "EDGE HafenCity \xB7 Building Analysis" },
    location: "Hamburg \xB7 HafenCity",
    year: "2025",
    semester: { de: "1. Semester \xB7 WS 2025/26", en: "1st semester \xB7 winter 2025/26" },
    tag: { de: "Analyse \xB7 B\xFCrobau", en: "Analysis \xB7 Office building" },
    status: { de: "Analyse", en: "Analysis" },
    img: "assets/projects/edge-hafencity/card.jpg",
    hero: "assets/projects/edge-hafencity/hero.jpg",
    heroRatio: "16/9",
    kicker: { de: "Zeitgen\xF6ssische Architektur \xB7 Geb\xE4udeanalyse", en: "Contemporary Architecture \xB7 Building analysis" },
    liveUrl: "assets/projects/edge-hafencity/analyse.pdf",
    linkLabel: { de: "Analyse als PDF lesen \u2197", en: "Read the full analysis (PDF) \u2197" },
    article: [
      { p: { de: "Das B\xFCrogeb\xE4ude EDGE HafenCity befindet sich in der Hamburger HafenCity und ist Teil eines der gr\xF6\xDFten innerst\xE4dtischen Stadtentwicklungsprojekte Europas. Es steht exemplarisch f\xFCr zeitgen\xF6ssische B\xFCroarchitektur, die innerhalb eines stark gesteuerten st\xE4dtebaulichen Rahmens entsteht und hohe Anspr\xFCche an Nachhaltigkeit, Flexibilit\xE4t und Zukunftsf\xE4higkeit formuliert. Gleichzeitig wirft das Projekt grundlegende Fragen auf, sowohl in Bezug auf den tats\xE4chlichen \xF6kologischen Mehrwert als auch auf die langfristige Relevanz klassischer B\xFCrogeb\xE4ude in einer sich ver\xE4ndernden Arbeitswelt.", en: "The EDGE HafenCity office building sits in Hamburg's HafenCity and forms part of one of Europe's largest inner-city development projects. It stands as an example of contemporary office architecture that emerges within a strongly steered urban framework and makes high demands on sustainability, flexibility and future viability. At the same time the project raises fundamental questions, both about its actual ecological value and about the long-term relevance of classic office buildings in a changing world of work." } },
      { img: "assets/projects/edge-hafencity/g1.jpg", r: "3/2", cap: { de: "Die HafenCity, eines der gr\xF6\xDFten innerst\xE4dtischen Stadtentwicklungsprojekte Europas.", en: "The HafenCity, one of Europe's largest inner-city development projects." } },
      { h: { de: "Historischer Kontext: Hamburg als Hafenstadt", en: "Historical context: Hamburg as a port city" } },
      { p: { de: "Hamburg ist historisch eng mit dem Hafen verbunden, der \xFCber Jahrhunderte das wirtschaftliche R\xFCckgrat der Stadt bildete und ihre r\xE4umliche Struktur pr\xE4gte. Die innerst\xE4dtischen Hafenbereiche waren bis ins fr\xFChe 20. Jahrhundert funktional organisiert und dienten mit Speicherbauten, Kais und Hafenbecken prim\xE4r dem Warenumschlag, getrennt vom allt\xE4glichen st\xE4dtischen Leben.", en: "Hamburg is historically bound to its harbour, which for centuries formed the economic backbone of the city and shaped its spatial structure. Into the early twentieth century the inner-city port areas were functionally organised and served, with warehouses, quays and basins, primarily the handling of goods, kept apart from everyday urban life." } },
      { p: { de: "Mit der Einf\xFChrung der Containerlogistik in der zweiten H\xE4lfte des 20. Jahrhunderts verlagerte sich der Hafenbetrieb stromabw\xE4rts. Die innenstadtnahen Hafenfl\xE4chen verloren ihre Funktion und wurden zu zentral gelegenen, infrastrukturell gepr\xE4gten Brachen, dem Ausgangspunkt einer postindustriellen Stadtentwicklung.", en: "With the arrival of container logistics in the second half of the twentieth century, port operations moved downstream. The harbour areas near the city centre lost their function and became centrally located, infrastructurally marked wastelands, the starting point of a post-industrial urban development." } },
      { img: "assets/projects/edge-hafencity/g6.jpg", r: "3/2", cap: { de: "Der Hamburger Hafen um 1888, das wirtschaftliche R\xFCckgrat der Stadt.", en: "The Port of Hamburg around 1888, the economic backbone of the city." } },
      { h: { de: "Die HafenCity als st\xE4dtebauliches Gro\xDFprojekt", en: "The HafenCity as an urban megaproject" } },
      { p: { de: "Die HafenCity Hamburg ist eines der gr\xF6\xDFten innerst\xE4dtischen Stadtentwicklungsprojekte Europas und entstand vor dem Hintergrund des strukturellen Wandels des Hamburger Hafens. Mit der Verlagerung des Hafenbetriebs stromabw\xE4rts verloren gro\xDFe, innenstadtnahe Hafenfl\xE4chen ihre urspr\xFCngliche Funktion und bildeten die Grundlage f\xFCr die Entwicklung eines neuen urbanen Stadtteils.", en: "The HafenCity Hamburg is one of Europe's largest inner-city development projects and arose against the backdrop of the structural change of the Port of Hamburg. As port operations moved downstream, large harbour areas near the centre lost their original function and became the basis for the development of a new urban district." } },
      { p: { de: "Ziel der HafenCity ist nicht die Entwicklung eines isolierten Quartiers, sondern die strukturelle Erweiterung der Hamburger Innenstadt. Arbeiten, Wohnen, Kultur, Bildung und Freizeit sollen bewusst miteinander kombiniert werden, um eine dauerhafte Nutzung \xFCber den Tagesverlauf hinweg zu erm\xF6glichen. Nutzungsmischung und urbane Dichte bilden dabei zentrale Leitmotive.", en: "The aim of the HafenCity is not an isolated quarter but the structural extension of Hamburg's inner city. Work, living, culture, education and leisure are deliberately combined to allow a lasting use across the course of the day. A mix of uses and urban density are the central leitmotifs." } },
      { p: { de: "Die Entwicklung erfolgt auf Grundlage eines \xFCbergeordneten Masterplans, der Baufluchten, Geb\xE4udeh\xF6hen, Nutzungsverteilungen und Freiraumstrukturen festlegt. Dieser steuernde Ansatz sorgt f\xFCr st\xE4dtebauliche Ordnung, schr\xE4nkt jedoch den gestalterischen Spielraum einzelner Projekte ein. Architektur wird weniger als individuelles Statement verstanden, sondern als Teil eines funktionierenden Gesamtsystems.", en: "Development follows an overarching masterplan that fixes building lines, heights, the distribution of uses and the structure of open space. This steering approach creates urban order, yet it limits the design freedom of individual projects. Architecture is understood less as an individual statement than as part of a functioning whole." } },
      { p: { de: "Ein pr\xE4gendes Merkmal der HafenCity ist der Umgang mit dem Hochwasserschutz. Anstelle klassischer Deichanlagen wird das Warften-Prinzip angewendet: Geb\xE4ude stehen auf erh\xF6hten Sockelzonen, w\xE4hrend Stra\xDFen und Pl\xE4tze im Hochwasserfall kontrolliert \xFCberflutet werden k\xF6nnen. Hochwasserschutz wird damit integraler Bestandteil des St\xE4dtebaus.", en: "A defining feature of the HafenCity is its handling of flood protection. Instead of classic dikes it applies the Warften principle: buildings stand on raised plinths, while streets and squares can be flooded in a controlled way during high water. Flood protection thus becomes an integral part of the urban design." } },
      { p: { de: "Trotz ihres hohen planerischen Anspruchs ist die HafenCity nicht frei von Kritik. Begrenzte soziale Durchmischung und die teilweise kontrollierte Wirkung \xF6ffentlicher R\xE4ume werden diskutiert. Die HafenCity kann als st\xE4dtebauliches Labor verstanden werden, das Potenziale und Grenzen masterplangef\xFChrter Stadtentwicklung sichtbar macht.", en: "Despite its high planning ambition, the HafenCity is not free of criticism. A limited social mix and the partly controlled character of its public spaces are subjects of debate. The HafenCity can be read as an urban laboratory that makes visible both the potentials and the limits of masterplan-led development." } },
      { h: { de: "EDGE HafenCity im st\xE4dtebaulichen Kontext", en: "EDGE HafenCity in its urban context" } },
      { p: { de: "Das EDGE HafenCity ist fest in das masterplangef\xFChrte System der HafenCity eingebunden. Seine Architektur folgt klaren planerischen Vorgaben zu Baufluchten, H\xF6hen und Sockelzonen und ist weniger als freier Entwurf denn als funktionale Reaktion auf diesen Rahmen zu verstehen.", en: "EDGE HafenCity is firmly embedded in the masterplan-led system of the HafenCity. Its architecture follows clear planning specifications for building lines, heights and plinths and is to be understood less as a free design than as a functional response to that frame." } },
      { img: "assets/projects/edge-hafencity/g2.jpg", r: "3/2", cap: { de: "EDGE HafenCity von HENN, ein gestaffelter Bauk\xF6rper im Quartier.", en: "EDGE HafenCity by HENN, a stepped volume within the block." } },
      { p: { de: "Der Bauk\xF6rper ordnet sich in die Blockstruktur des Quartiers ein und wird durch Staffelungen gegliedert, ohne seine Gro\xDFma\xDFst\xE4blichkeit vollst\xE4ndig aufzul\xF6sen. Besonders pr\xE4gend ist die erh\xF6hte Sockelzone infolge des Warften-Prinzips, die funktional notwendig ist, jedoch Distanz zum \xF6ffentlichen Raum schafft und die Belebung des Erdgeschosses begrenzt.", en: "The volume fits into the block structure of the quarter and is articulated through setbacks, without fully dissolving its large scale. Particularly formative is the raised plinth that follows from the Warften principle: functionally necessary, yet creating distance from the public realm and limiting the activity of the ground floor." } },
      { p: { de: "Insgesamt fungiert das Geb\xE4ude als ordnender Baustein innerhalb der HafenCity, bleibt jedoch in seiner stadtr\xE4umlichen Wirkung zur\xFCckhaltend und wirft Fragen nach der urbanen Qualit\xE4t gro\xDFma\xDFst\xE4blicher B\xFCrogeb\xE4ude in stark regulierten Entwicklungsprojekten auf.", en: "Overall the building works as an ordering element within the HafenCity, yet stays reserved in its urban presence and raises questions about the urban quality of large-scale office buildings in heavily regulated development projects." } },
      { h: { de: "Architekten und architektonische Haltung", en: "Architects and architectural stance" } },
      { p: { de: "Entworfen wurde das Geb\xE4ude vom international t\xE4tigen Architekturb\xFCro HENN, das sich auf komplexe Gro\xDFprojekte, insbesondere B\xFCro-, Forschungs- und Bildungsbauten, spezialisiert hat. Die Architektur von HENN ist rational, systemisch und stark nutzungsorientiert. Geb\xE4ude werden als funktionale Systeme verstanden, in denen Organisation, Technik und Nutzung im Vordergrund stehen. Diese Haltung zeigt sich deutlich im EDGE HafenCity. Der Bauk\xF6rper ist gro\xDFma\xDFst\xE4blich organisiert, wird jedoch durch Staffelungen und R\xFCckspr\xFCnge gegliedert. Formal bleibt die Architektur bewusst zur\xFCckhaltend und verzichtet auf expressive Gesten.", en: "The building was designed by the international practice HENN, which specialises in complex large projects, in particular office, research and educational buildings. HENN's architecture is rational, systemic and strongly use-oriented. Buildings are understood as functional systems in which organisation, technology and use come first. This stance is clearly visible in EDGE HafenCity. The volume is organised at a large scale, yet articulated through setbacks and recesses. Formally the architecture stays deliberately reserved and avoids expressive gestures." } },
      { h: { de: "Fassade, Konstruktion und Nutzung", en: "Facade, construction and use" } },
      { p: { de: "Die Fassade ist als hochtransparente Glasfassade mit klar definiertem Raster ausgebildet. Vertikale und horizontale Profile \xFCbernehmen konstruktive, energetische und gestalterische Funktionen. Gro\xDFformatige Fenster sorgen f\xFCr Tageslichtversorgung und visuelle Durchl\xE4ssigkeit zwischen Innenraum und Stadtraum.", en: "The facade is built as a highly transparent glass facade with a clearly defined grid. Vertical and horizontal profiles take on structural, energetic and formal functions. Large-format windows provide daylight and a visual permeability between interior and city." } },
      { img: "assets/projects/edge-hafencity/g4.jpg", r: "4/3", cap: { de: "Die hochtransparente Rasterfassade aus Glas.", en: "The highly transparent glass grid facade." } },
      { p: { de: "Die Tragstruktur basiert auf einem regelm\xE4\xDFigen Stahlbeton-St\xFCtzenraster, das flexible Grundrisse und unterschiedliche B\xFCrotypologien erm\xF6glicht. Zentrale Erschlie\xDFungskerne b\xFCndeln Aufz\xFCge, Treppen und Technik. Die Nutzung ist auf moderne Arbeitswelten ausgelegt und soll langfristige Anpassungsf\xE4higkeit gew\xE4hrleisten.", en: "The load-bearing structure is based on a regular reinforced-concrete column grid that allows flexible floor plans and different office typologies. Central cores bundle lifts, stairs and services. The use is geared to modern work worlds and is meant to ensure long-term adaptability." } },
      { img: "assets/projects/edge-hafencity/g3.jpg", r: "4/3", cap: { de: "Innenhof und Erschlie\xDFung, ausgelegt auf moderne Arbeitswelten.", en: "Atrium and circulation, geared to modern work worlds." } },
      { h: { de: "Kritische Betrachtung: Nachhaltigkeit und Greenwashing", en: "A critical view: sustainability and greenwashing" } },
      { p: { de: "Trotz der hohen technischen Qualit\xE4t erscheint das Nachhaltigkeitsversprechen des EDGE HafenCity kritisch hinterfragbar. Das Geb\xE4ude basiert auf einem klassischen Stahlbeton-Skelettbau, dessen Herstellung mit erheblichen CO\u2082-Emissionen verbunden ist. Auch bei optimiertem Betrieb bleibt der \xF6kologische Fu\xDFabdruck der Konstruktion problematisch.", en: "Despite its high technical quality, the sustainability promise of EDGE HafenCity is open to critical question. The building rests on a classic reinforced-concrete skeleton whose production involves considerable CO\u2082 emissions. Even in optimised operation, the ecological footprint of the construction remains problematic." } },
      { p: { de: "In diesem Zusammenhang l\xE4sst sich von Greenwashing sprechen: Nachhaltigkeit wird vor allem \xFCber Kennzahlen, Zertifikate und Marketing kommuniziert, w\xE4hrend Fragen nach Materialit\xE4t, grauer Energie und Ressourcenschonung in den Hintergrund treten. Ein Betonbau kann, trotz effizienter Geb\xE4udetechnik, nur bedingt als klimaneutral gelten.", en: "In this context one can speak of greenwashing: sustainability is communicated above all through metrics, certificates and marketing, while questions of materiality, embodied energy and the careful use of resources recede into the background. A concrete building, despite efficient building services, can only ever be considered climate-neutral to a limited degree." } },
      { img: "assets/projects/edge-hafencity/g5.jpg", r: "3/2", cap: { de: "Nachhaltigkeit, vor allem \xFCber Zertifikate und Kennzahlen kommuniziert.", en: "Sustainability, communicated above all through certificates and metrics." } },
      { q: { de: "Nachhaltigkeit wird zertifiziert, nicht konstruiert.", en: "Sustainability gets certified, not constructed." } },
      { h: { de: "B\xFCroarchitektur nach Corona: ein \xFCberholtes Modell?", en: "Office architecture after Corona: an outdated model?" } },
      { p: { de: "Die ver\xE4nderte Rolle von B\xFCrogeb\xE4uden seit der Corona-Pandemie versch\xE4rft diese Problematik. Viele Arbeitsprozesse haben sich dauerhaft ins Homeoffice oder in hybride Modelle verlagert. Klassische B\xFCrofl\xE4chen sind weniger gefragt als noch vor wenigen Jahren. Das EDGE HafenCity steht teilweise leer, was die Frage nach der langfristigen Sinnhaftigkeit solcher Gro\xDFprojekte verst\xE4rkt.", en: "The changed role of office buildings since the Corona pandemic sharpens this problem. Many work processes have shifted permanently to home office or to hybrid models. Classic office space is less in demand than only a few years ago. EDGE HafenCity stands partly empty, which strengthens the question of the long-term sense of such large projects." } },
      { p: { de: "Ein Geb\xE4ude, das auf maximale B\xFCrofl\xE4chenoptimierung ausgelegt ist, wirkt in diesem Kontext aus der Zeit gefallen. Die Flexibilit\xE4t der Grundrisse kann diese strukturelle Ver\xE4nderung nur begrenzt auffangen. Nachhaltigkeit m\xFCsste hier auch programmatisch gedacht werden, etwa durch st\xE4rkere Nutzungsdurchmischung oder Umnutzbarkeit.", en: "A building designed for maximum optimisation of office space appears, in this context, out of its time. The flexibility of the floor plans can absorb this structural change only to a limited extent. Sustainability would have to be thought of here programmatically as well, for instance through a stronger mix of uses or the capacity for conversion." } },
      { h: { de: "Fazit", en: "Conclusion" } },
      { p: { de: "Das EDGE HafenCity ist ein pr\xE4zise geplantes, technisch hochwertiges B\xFCrogeb\xE4ude, das den st\xE4dtebaulichen Vorgaben der HafenCity konsequent folgt. Es steht f\xFCr eine Architektur, die innerhalb eines stark gesteuerten Systems funktioniert und funktionale Klarheit in den Vordergrund stellt. Gleichzeitig offenbart das Projekt zentrale Schw\xE4chen. Das Nachhaltigkeitsversprechen wirkt angesichts der konstruktiven Realit\xE4t und der aktuellen Nutzungssituation nur bedingt \xFCberzeugend. In einer Zeit grundlegenden Wandels der B\xFCroarbeit erscheint der gro\xDFma\xDFst\xE4bliche Betonbau eher als Symptom vergangener Planungslogiken, weniger als zukunftsweisendes Modell.", en: "EDGE HafenCity is a precisely planned, technically high-quality office building that follows the urban specifications of the HafenCity with consistency. It stands for an architecture that works within a strongly steered system and puts functional clarity in the foreground. At the same time the project reveals central weaknesses. Its sustainability promise is only partly convincing in the light of the constructive reality and the current situation of use. In a time of fundamental change in office work, the large-scale concrete building appears more as a symptom of past planning logics than as a model that points to the future." } },
      { p: { de: "Das Geb\xE4ude zeigt, dass Umnutzbarkeit ein zentraler Aspekt zuk\xFCnftiger Gro\xDFprojektplanung sein sollte.", en: "The building shows that the capacity for conversion should be a central aspect of planning future large projects." } }
    ],
    summary: {
      de: "Eine kritische Analyse des B\xFCrogeb\xE4udes EDGE HafenCity in Hamburg (HENN, 2024). Sie liest das Geb\xE4ude zwischen Transformation, Nachhaltigkeitsversprechen und Realit\xE4t: eingebunden in die masterplangef\xFChrte HafenCity, rational und nutzungsorientiert von HENN entworfen, mit hochtransparenter Rasterfassade und flexiblen B\xFCrowelten. Am Ende steht die Frage nach dem \xF6kologischen Mehrwert eines klassischen Betonbaus und nach der Relevanz solcher B\xFCrogeb\xE4ude in einer sich ver\xE4ndernden Arbeitswelt.",
      en: "A critical analysis of the EDGE HafenCity office building in Hamburg (HENN, 2024). It reads the building between transformation, sustainability promise and reality: embedded in the masterplan-led HafenCity, designed by HENN as rational and use-oriented, with a highly transparent grid facade and flexible work worlds. In the end it asks about the ecological value of a classic concrete building and the relevance of such offices in a changing world of work."
    },
    bodyP1: {
      de: "Ausgangspunkt ist der st\xE4dtebauliche Kontext. Die HafenCity ist eines der gr\xF6\xDFten innerst\xE4dtischen Stadtentwicklungsprojekte Europas, entstanden aus dem Strukturwandel des Hamburger Hafens. Ein \xFCbergeordneter Masterplan steuert Baufluchten, H\xF6hen und Nutzungen; Architektur wird weniger als Einzelstatement verstanden, sondern als Teil eines funktionierenden Gesamtsystems. \xDCber das Warften-Prinzip sch\xFCtzt sich das Quartier vor Hochwasser. Das EDGE HafenCity ordnet sich diesem Rahmen unter: ein gestaffelter Bauk\xF6rper auf erh\xF6hter Sockelzone, die zwar funktional notwendig ist, aber Distanz zum \xF6ffentlichen Raum schafft und das Erdgeschoss kaum belebt.",
      en: "The starting point is the urban context. The HafenCity is one of Europe's largest inner-city development projects, born of the structural change of the Port of Hamburg. An overarching masterplan governs building lines, heights and uses; architecture is read less as an individual statement than as part of a functioning whole. The quarter protects itself from flooding through the Warften principle of raised plinths. EDGE HafenCity submits to this frame: a stepped volume on a raised base that is functionally necessary, yet keeps its distance from the public realm and barely activates the ground floor."
    },
    bodyP2: {
      de: "Das Geb\xE4ude stammt vom B\xFCro HENN, dessen Architektur rational, systemisch und nutzungsorientiert ist: ein gleichm\xE4\xDFiges Stahlbeton-St\xFCtzenraster f\xFCr flexible Grundrisse, zentrale Erschlie\xDFungskerne und eine hochtransparente Glasfassade mit klarem Raster. So entstehen anpassbare B\xFCrowelten, deren Modell sich nach Corona allerdings hinterfragen l\xE4sst. Der kritischste Punkt ist das Nachhaltigkeitsversprechen: Es wird vor allem \xFCber Zertifikate, Kennzahlen und Marketing kommuniziert, w\xE4hrend Materialit\xE4t und graue Energie in den Hintergrund treten. Ein Stahlbetonbau bleibt in seiner Herstellung CO\u2082-intensiv, auch bei effizienter Geb\xE4udetechnik. Die vollst\xE4ndige Analyse ist als PDF verlinkt.",
      en: "The building comes from HENN, whose architecture is rational, systemic and use-oriented: a regular reinforced-concrete column grid for flexible floor plans, central circulation cores and a highly transparent glass facade with a clear grid. The result is adaptable work worlds whose model has become questionable after Corona. The most critical point is the sustainability promise: it is communicated above all through certificates, metrics and marketing, while materiality and embodied energy recede into the background. A reinforced-concrete building stays CO\u2082-intensive in its production, even with efficient building services. The full analysis is linked as a PDF."
    },
    pull: {
      de: "Nachhaltigkeit wird zertifiziert, nicht konstruiert.",
      en: "Sustainability gets certified, not constructed."
    },
    capText: {
      de: "Vom Luftbild der HafenCity \xFCber das Geb\xE4ude von HENN, seinen Innenhof und die Rasterfassade bis zu den Nachhaltigkeitszertifikaten und dem historischen Hafen. Einzelarbeit, vollst\xE4ndige Analyse als PDF verlinkt.",
      en: "From the aerial of the HafenCity, through HENN's building, its atrium and the grid facade, to the sustainability certificates and the historical harbour. A solo project; the full analysis is linked as a PDF."
    },
    process: {
      de: ["St\xE4dtebaulicher Kontext \xB7 HafenCity-Masterplan", "Das Geb\xE4ude \xB7 HENN, Haltung und Bauk\xF6rper", "Fassade, Konstruktion und Arbeitswelten", "Kritik \xB7 Nachhaltigkeit und Greenwashing"],
      en: ["Urban context \xB7 the HafenCity masterplan", "The building \xB7 HENN, stance and volume", "Facade, construction and work worlds", "Critique \xB7 sustainability and greenwashing"]
    },
    role: { de: "Einzelarbeit", en: "Solo project" },
    gallery: [
      { src: "assets/projects/edge-hafencity/g1.jpg", r: "3/2", wide: true, lbl: { de: "Die HafenCity, masterplangef\xFChrtes Gro\xDFprojekt am Wasser", en: "The HafenCity, a masterplan-led megaproject on the water" } },
      { src: "assets/projects/edge-hafencity/g2.jpg", r: "3/2", wide: true, lbl: { de: "EDGE HafenCity von HENN, gestaffelter Bauk\xF6rper im Quartier", en: "EDGE HafenCity by HENN, a stepped volume within the block" } },
      { src: "assets/projects/edge-hafencity/g3.jpg", r: "4/3", lbl: { de: "Innenhof und Erschlie\xDFung \xB7 moderne Arbeitswelten", en: "Atrium and circulation \xB7 modern work worlds" } },
      { src: "assets/projects/edge-hafencity/g4.jpg", r: "4/3", lbl: { de: "Hochtransparente Rasterfassade aus Glas", en: "A highly transparent glass grid facade" } },
      { src: "assets/projects/edge-hafencity/g5.jpg", r: "3/2", lbl: { de: "Nachhaltigkeit \xFCber Zertifikate und Kennzahlen", en: "Sustainability via certificates and metrics" } },
      { src: "assets/projects/edge-hafencity/g6.jpg", r: "3/2", lbl: { de: "Hamburg als Hafenstadt, der historische Kontext (1888)", en: "Hamburg as a port city, the historical context (1888)" } }
    ]
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
    kicker: { de: "EGD1 \xB7 Raumanalyse", en: "EGD1 \xB7 Spatial analysis" },
    summary: {
      de: "Eine Untersuchung \xFCber das Verh\xE4ltnis von Innen und Au\xDFen im st\xE4dtischen Raum. K\xF6nnen Stra\xDFen und Pl\xE4tze als Innenr\xE4ume der Stadt verstanden werden, gefasst durch Fassaden, Vegetation, Licht und Bewegung? Fotografie und K\xF6rper im Stadtraum werden zur Methode, um Grenzen, \xDCberg\xE4nge und Atmosph\xE4ren lesbar zu machen.",
      en: "A study of the relationship between inside and outside in the urban realm. Can streets and squares be read as interiors of the city, held by fa\xE7ades, vegetation, light and movement? Photography and the body in space become a method for making boundaries, thresholds and atmospheres legible."
    },
    bodyP1: {
      de: "Ausgangspunkt war die Frage, wie Stra\xDFen und Pl\xE4tze r\xE4umlich wirken und inwiefern sie als Innenr\xE4ume der Stadt verstanden werden k\xF6nnen, die durch Fassaden, Vegetation, Licht und Bewegung gefasst sind. Anhand textlicher und konzeptioneller Untersuchungen habe ich analysiert, wo diese R\xE4ume enden und wie sie sich nach au\xDFen \xF6ffnen: zur Landschaft, zum Himmel und zur Weite.",
      en: "The starting point was how streets and squares act spatially, and how far they can be understood as interiors of the city, framed by fa\xE7ades, vegetation, light and movement. Through textual and conceptual study I traced where these rooms end and how they open outward: toward the landscape, the sky and the distance."
    },
    bodyP2: {
      de: "Dabei zeigte sich, dass Innen und Au\xDFen keine Gegens\xE4tze sind, sondern sich gegenseitig bedingen: Begrenzung schafft Orientierung und Spannung, \xD6ffnung erm\xF6glicht Verbindung und Ausdehnung. Das Projekt sch\xE4rfte mein Verst\xE4ndnis f\xFCr r\xE4umliche \xDCberg\xE4nge und f\xFCr Architektur als Zusammenspiel von Schutz und Offenheit.",
      en: "What emerged was that inside and outside are not opposites but conditions of one another: enclosure creates orientation and tension, opening allows connection and extension. The project sharpened my sense for spatial thresholds and for architecture as an interplay of shelter and openness."
    },
    pull: {
      de: "Innen und Au\xDFen sind keine Gegens\xE4tze, sondern bedingen einander.",
      en: "Inside and outside are not opposites; each makes the other possible."
    },
    capText: {
      de: "Inszenierte Fotografien nach Jeff Wall (der K\xF6rper im Stadtraum, im Herbstlicht) und die Fotomontage der Fassade als Wand des Innenraums Stadt.",
      en: "Staged photographs after Jeff Wall (the body in the city, in autumn light) and the photomontage of the fa\xE7ade as the wall of the city interior."
    },
    process: {
      de: ["Textliche und konzeptionelle Raumanalyse", "Inszenierte Fotografien nach Jeff Wall", "Der K\xF6rper als r\xE4umliches Ma\xDF im Stadtraum", "Stadtplan-Kartierung von Grenzen und \xD6ffnungen"],
      en: ["Textual and conceptual spatial analysis", "Staged photographs after Jeff Wall", "The body as a spatial measure in the city", "Urban mapping of edges and openings"]
    },
    role: { de: "Einzelarbeit", en: "Solo project" },
    gallery: [
      { src: "assets/projects/genius-loci/g1.jpg", r: "16/9", wide: true, lbl: { de: "Inszenierter Moment im Stadtraum \xB7 nach Jeff Wall", en: "A staged moment in the city \xB7 after Jeff Wall" } },
      { src: "assets/projects/genius-loci/g2.jpg", r: "3/2", lbl: { de: "Alltagsgeste \xB7 der K\xF6rper im Park", en: "An everyday gesture \xB7 the body in the park" } },
      { src: "assets/projects/genius-loci/g3.jpg", r: "3/2", lbl: { de: "Innehalten im Abendlicht", en: "A pause in evening light" } },
      { src: "assets/projects/genius-loci/g4.jpg", r: "16/9", wide: true, lbl: { de: "Fotomontage \xB7 die Fassade als Wand des Stadtraums", en: "Photomontage \xB7 the fa\xE7ade as the wall of urban space" } }
    ]
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
    kicker: { de: "EGD1 \xB7 Installation 1:1", en: "EGD1 \xB7 1:1 installation" },
    summary: {
      de: "Eine ortsspezifische, performative Rauminstallation im Ma\xDFstab 1:1. Mit einfachen Mitteln wird ein bestehender Weg in der Randstadt von Wismar verdichtet und neu gelesen: Ein Folientunnel b\xFCndelt Bewegung und Wahrnehmung, f\xFChrt von der Weite in die Enge und \xF6ffnet sich am Ende in einen nat\xFCrlich gewachsenen Raum.",
      en: "A site-specific, performative installation at full scale. With simple means, an existing path on the edge of Wismar is condensed and re-read: a tunnel of foil gathers movement and perception, leading from openness into compression and opening, at its end, into a space shaped by nature."
    },
    bodyP1: {
      de: "Ein klar gefasster Weg in der Randstadt sollte r\xE4umlich interpretiert und intensiviert werden. Mit einfachen Mitteln (transluzenter Folie auf Holzpf\xE4hlen) entstand ein gezielter Eingriff, der den \xDCbergang zwischen Offenheit und Enge bewusst inszeniert. Der Weg f\xFChrt aus dem offenen Stadtraum in einen zunehmend verdichteten Tunnel, der die Bewegung visuell und atmosph\xE4risch b\xFCndelt.",
      en: "A clearly framed path on the edge of the city was to be interpreted and intensified in spatial terms. With simple means (translucent sheeting on timber posts) a precise intervention stages the shift between openness and constriction. The route leads from open urban space into an increasingly dense tunnel that gathers movement, visually and atmospherically."
    },
    bodyP2: {
      de: "Am Ende \xF6ffnet sich die Struktur in einen nat\xFCrlich geformten Raum unter einem dichten Bl\xE4tterdach. Der Wechsel zwischen k\xFCnstlichem Eingriff und bestehender Natur sch\xE4rft die Wahrnehmung des Ortes und macht den Weg selbst zum r\xE4umlichen Erlebnis.",
      en: "At its end the structure opens into a space shaped by nature, beneath a dense canopy of leaves. The shift between artificial intervention and existing nature sharpens the perception of the place and turns the path itself into a spatial experience."
    },
    pull: {
      de: "Der Eingriff ver\xE4ndert nicht den Ort, sondern die Art, ihn zu durchschreiten.",
      en: "The intervention does not change the place but the way you move through it."
    },
    capText: {
      de: "Folientunnel entlang eines winterlichen Randstadt-Wegs: von der Weite in die Enge und zur\xFCck ins Freie unter dem Ge\xE4st.",
      en: "A foil tunnel along a wintry edge-city path: from openness into compression and back into the open beneath the bare branches."
    },
    process: {
      de: ["Ortsanalyse eines gefassten Wegs in der Randstadt", "Eingriff mit transluzenter Folie auf Holzpf\xE4hlen", "Verdichtung von Bewegung und Wahrnehmung", "1:1-Aufbau und performative Durchwegung"],
      en: ["Site analysis of a framed edge-city path", "Intervention with translucent sheeting on timber posts", "Condensing movement and perception", "Full-scale build and performative walk-through"]
    },
    role: { de: "Teamarbeit", en: "Team project" },
    gallery: [
      { src: "assets/projects/randstadt-intervention/g1.jpg", r: "3/4", lbl: { de: "Ann\xE4herung \xB7 der gefasste Weg", en: "Approach \xB7 the framed path" } },
      { src: "assets/projects/randstadt-intervention/g2.jpg", r: "3/4", lbl: { de: "Durchwegung", en: "Passing through" } },
      { src: "assets/projects/randstadt-intervention/g3.jpg", r: "2/1", wide: true, lbl: { de: "Der Eingriff im winterlichen Ort", en: "The intervention in its winter setting" } }
    ]
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
    kicker: { de: "EGD1 \xB7 Entwurf im Bestand", en: "EGD1 \xB7 Intervention in context" },
    summary: {
      de: "Ein additiver Eingriff in ein Wohnensemble aus Plattenbauten: eine leichte, parasit\xE4re Struktur schreibt sich in die strenge Geometrie des Bestands ein. Raum, tragende Struktur und H\xFClle werden als voneinander abh\xE4ngige Ebenen verstanden, aus deren Zusammenspiel eine neue architektonische Ordnung entsteht.",
      en: "An additive intervention into a housing ensemble of prefabricated slabs: a light, parasitic structure inscribes itself into the strict geometry of the existing fabric. Space, load-bearing structure and skin are read as interdependent layers whose interplay gives rise to a new architectural order."
    },
    bodyP1: {
      de: "Ausgangspunkt war ein Wohnensemble aus Plattenbauten mit strikter Geometrie und repetitiven Fassadenlinien in einer Randstadtsituation. \xDCber die vorhandenen Bauk\xF6rper legt der Entwurf eine leichte, lineare Konstruktion, die diese miteinander verbindet. \xDCber verspannte Br\xFCcken werden die D\xE4cher erschlossen und zu einer gemeinschaftlich nutzbaren Fl\xE4che zusammengef\xFChrt; eine zus\xE4tzliche \xDCberdachung aus stabartigen Elementen schafft gesch\xFCtzte Bereiche.",
      en: "The starting point was a housing ensemble of prefabricated slabs with strict geometry and repetitive fa\xE7ade lines, set on the edge of the city. Over the existing volumes the design lays a light, linear construction that links them together. Cable-stayed bridges open up the roofs and join them into a shared surface; an added canopy of rod-like elements creates sheltered zones."
    },
    bodyP2: {
      de: "Die eng gesetzten, stabartigen Elemente erzeugen Zwischenr\xE4ume mit wechselnden Blickbeziehungen und Offenheiten; ihnen gegen\xFCber stehen geordnete, fl\xE4chige Module: H\xFClle und Struktur als zwei Sprachen desselben Systems. So \xFCbernimmt die Struktur mehrere Rollen zugleich: Wegesystem, Ort der Begegnung, sozialer Raum und er\xF6ffnet neue M\xF6glichkeiten der Vernetzung im bestehenden Wohngef\xFCge.",
      en: "The closely set, rod-like elements create in-between spaces with shifting views and degrees of openness; set against them stand ordered, planar modules: skin and structure as two registers of the same system. The structure thus takes on several roles at once: a system of paths, a place of encounter, a social space, opening new connections within the existing fabric."
    },
    pull: {
      de: "Die Struktur ist Weg, Treffpunkt und H\xFClle zugleich; sie verbindet, was nebeneinander stand.",
      en: "The structure is path, meeting point and skin at once; it connects what merely stood side by side."
    },
    capText: {
      de: "Leichtes Stabwerk \xFCber dem Plattenbau-Bestand: das stochastische Stabfeld und die geordneten Module, Br\xFCcken erschlie\xDFen die D\xE4cher zur gemeinschaftlichen Fl\xE4che. Modell und Photomontage. Gruppenarbeit mit Philipp Tomschin, Kai-Lars Ehrich und Richard Muth.",
      en: "A light rod structure above the prefab ensemble: the stochastic rod field and the ordered modules; bridges open the roofs into a shared surface. Model and photomontage. A group project with Philipp Tomschin, Kai-Lars Ehrich and Richard Muth."
    },
    process: {
      de: ["Analyse der Plattenbau-Geometrie und Randstadtsituation", "Additive, parasit\xE4re Leichtstruktur", "Verspannte Br\xFCcken erschlie\xDFen die D\xE4cher", "Modell und Photomontage \xFCber dem Bestandsfoto"],
      en: ["Analysis of the prefab geometry and edge-city site", "Additive, parasitic light structure", "Cable-stayed bridges open up the roofs", "Model and photomontage over the site photograph"]
    },
    role: { de: "Gruppenarbeit", en: "Group project" },
    gallery: [
      { src: "assets/projects/raum-struktur-huelle/g1.jpg", r: "16/9", wide: true, lbl: { de: "Modell \xB7 Stabwerk \xFCber dem Plattenbau-Ensemble", en: "Model \xB7 rod structure spanning the prefab ensemble" } },
      { src: "assets/projects/raum-struktur-huelle/g2.jpg", r: "1/1", lbl: { de: "Das stochastische Stabfeld", en: "The stochastic rod field" } },
      { src: "assets/projects/raum-struktur-huelle/g3.jpg", r: "1/1", lbl: { de: "Die geordnete Modulstruktur", en: "The ordered modular structure" } },
      { src: "assets/projects/raum-struktur-huelle/g4.jpg", r: "16/9", wide: true, lbl: { de: "Der Bestand \xB7 Plattenbau-Hof in der Randstadt", en: "The existing fabric \xB7 prefab courtyard on the city edge" } }
    ]
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
    kicker: { de: "EGD1 \xB7 Raumexperiment", en: "EGD1 \xB7 Spatial experiment" },
    summary: {
      de: "Eine Untersuchung \xFCber das Verh\xE4ltnis von Volumen und Leere. Raum wird nicht als Nebenprodukt verstanden, sondern als aktives Element, das durch Masse gefasst und erlebbar wird. \xDCber Wachs- und Betong\xFCsse entstehen Modelle, die ausschlie\xDFlich den Hohlraum sichtbar machen und das Licht zum eigentlichen Baustoff erkl\xE4ren.",
      en: "A study of volume and emptiness. Space is treated not as a by-product but as an active element, defined and made tangible by mass. Through wax and concrete casts, the project produces models that show only the void and make light the true material."
    },
    bodyP1: {
      de: "Ausgangspunkt waren markante Zugangssituationen im Wismarer Stadtraum, aus denen zun\xE4chst abstrakte Konzepte f\xFCr Sequenz, \xDCbergang und r\xE4umliche Verdichtung entstanden. Zur Untersuchung wurden bestehende Buchk\xF6rper als Material genutzt: Durch das Ausschneiden r\xE4umlicher Abfolgen und das Ausgie\xDFen der Negativr\xE4ume mit Wachs entstanden Modelle, die nur den Hohlraum zeigten. So lie\xDFen sich Raumwirkungen losgel\xF6st von Fassade und Volumen analysieren: Lichtf\xFChrung, Transparenz und \xDCberlagerung als zentrale Entwurfsparameter.",
      en: "The starting point was a set of distinctive threshold situations in Wismar's urban fabric, from which abstract concepts of sequence, transition and spatial compression first emerged. Existing book bodies then served as raw material: by cutting away spatial sequences and casting the resulting voids in wax, the work produced models that showed only the hollow space. This made it possible to analyse spatial effects detached from fa\xE7ade and volume: light, transparency and overlap as the core design parameters."
    },
    bodyP2: {
      de: "Auf dieser Basis entstand eine r\xE4umliche Struktur, in der das Licht Orientierung und Abfolge bestimmt. Die Realisierung erfolgte als Betonguss in Erde, im Verfahren am Glockenguss orientiert. Nach dem Aush\xE4rten blieb ein klar definierter Innenraum zur\xFCck, der \xFCber ein Oberlicht und gezielt gesetzte \xD6ffnungen belichtet wird; die Lichtf\xFChrung macht den Weg durch die Struktur erfahrbar.",
      en: "From this grew a spatial structure in which light governs orientation and sequence. It was realised as a concrete cast in earth, a process borrowed from bell-casting. Once set, a clearly defined interior remained, lit through a skylight and carefully placed openings; the play of light makes the path through the structure tangible."
    },
    pull: {
      de: "Nicht die Masse war das Thema, sondern das, was sie umschlie\xDFt.",
      en: "The subject was never the mass, but what it encloses."
    },
    capText: {
      de: "Negativr\xE4ume in Wachs und Beton gegossen, im Verfahren des Glockengusses; Oberlicht und \xD6ffnungen f\xFChren das Licht durch den Innenraum. Gruppenarbeit mit Philipp Tomschin, Kai-Lars Ehrich und Richard Muth.",
      en: "Voids cast in wax and concrete, after the technique of bell-casting; a skylight and openings draw light through the interior. A group project with Philipp Tomschin, Kai-Lars Ehrich and Richard Muth."
    },
    process: {
      de: ["Buchk\xF6rper als Material \xB7 Ausschneiden r\xE4umlicher Abfolgen", "Negativr\xE4ume in Wachs ausgegossen", "Betonguss in Erde (analog Glockenguss)", "Belichtung \xFCber Oberlicht und gesetzte \xD6ffnungen"],
      en: ["Book bodies as material \xB7 cutting spatial sequences", "Voids cast in wax", "Concrete cast in earth (after bell-casting)", "Lighting through skylight and placed openings"]
    },
    role: { de: "Gruppenarbeit", en: "Group project" },
    gallery: [
      { src: "assets/projects/masse-und-hohlraum/g1.jpg", r: "2/1", wide: true, lbl: { de: "Betonguss in Erde \xB7 die Negativform im Sand", en: "Concrete cast in earth \xB7 the formwork in sand" } },
      { src: "assets/projects/masse-und-hohlraum/g2.jpg", r: "1/1", lbl: { de: "Ma\xDFstabsfigur im Hohlraum", en: "Scale figure within the void" } },
      { src: "assets/projects/masse-und-hohlraum/g3.jpg", r: "1/1", lbl: { de: "Geometrie des Hohlraums", en: "Geometry of the void" } },
      { src: "assets/projects/masse-und-hohlraum/g4.jpg", r: "16/9", wide: true, lbl: { de: "Lichtf\xFChrung durch gesetzte \xD6ffnungen", en: "Light drawn through placed openings" } }
    ]
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
    heroRatio: "3/2",
    kicker: { de: "EGD1 \xB7 Einf\xFChrungsstegreif", en: "EGD1 \xB7 Opening workshop" },
    summary: {
      de: "Ein viert\xE4giger Stegreif zum Auftakt des Studiums: Aus Karton, Pappmach\xE9 und Farbe sollte ein schwimmf\xE4higes Boot entstehen, Form als unmittelbares Ergebnis konstruktiver Logik. Zwischen Material, Auftrieb und Hydrodynamik f\xFChrte der Weg vom 1:20-Modell bis zum 1:1-Boot und endete in einer Regatta am Strand von Wendorf.",
      en: "A four-day opening workshop: a buoyant boat made only from cardboard, papier-m\xE2ch\xE9 and paint, form as the direct result of structural logic. Working between material, buoyancy and hydrodynamics, the project moved from a 1:20 model to a full-size boat and ended in a regatta on the beach at Wendorf."
    },
    bodyP1: {
      de: "Am Anfang stand kein Entwurf, sondern eine Frage des Materials: Wie tr\xE4gt eine Schicht aus Karton und Pappmach\xE9 ein Gewicht \xFCber Wasser? In schnellen Papiermodellen im Ma\xDFstab 1:20 wurden Form, Volumen und Stabilit\xE4t getestet und Schritt f\xFCr Schritt weiterentwickelt, jede Iteration eine Antwort auf die vorige.",
      en: "It did not begin with a design but with a question of material: how does a shell of cardboard and papier-m\xE2ch\xE9 carry weight across water? Quick 1:20 paper models tested form, volume and stability and developed them step by step, each iteration an answer to the last."
    },
    bodyP2: {
      de: "Aus den Versuchen wuchs ein Rumpf, der hochskaliert und schlie\xDFlich im Ma\xDFstab 1:1 gebaut wurde. Der Prozess verband konstruktive Logik mit gestalterischem Anspruch und m\xFCndete in einem funktionsf\xE4higen Objekt, auf die Probe gestellt bei einer Regatta am Strand von Wendorf.",
      en: "From these experiments grew a hull that was scaled up and finally built at full size. The process tied constructive logic to a design ambition and led to a working object, put to the test in a regatta on the beach at Wendorf."
    },
    pull: {
      de: "Die Form war kein Bild, sondern die Folge dessen, was das Material tragen konnte.",
      en: "The form was never an image but the consequence of what the material could carry."
    },
    capText: {
      de: "Vom Papiermodell zum 1:1-Boot: Konstruktion, Probefahrt und Regatta am Strand von Wendorf.",
      en: "From paper model to full-size boat: construction, trial and regatta on the beach at Wendorf."
    },
    process: {
      de: ["Papiermodelle 1:20 \xB7 Form, Volumen, Stabilit\xE4t", "Iterative Tests von Auftrieb und Hydrodynamik", "Hochskalierung und Bau im Ma\xDFstab 1:1", "Regatta am Strand von Wendorf"],
      en: ["1:20 paper models \xB7 form, volume, stability", "Iterative tests of buoyancy and hydrodynamics", "Scaling up and building at full size", "Regatta on the beach at Wendorf"]
    },
    role: { de: "Teamarbeit", en: "Team project" },
    gallery: [
      { src: "assets/projects/zu-wasser-lassen/g1.jpg", r: "1/1", lbl: { de: "Konzept \xB7 Skizzenmodell 1:20", en: "Concept \xB7 1:20 sketch model" } },
      { src: "assets/projects/zu-wasser-lassen/g2.jpg", r: "1/1", lbl: { de: "Rumpfgerippe aus Pappe", en: "Cardboard rib frame of the hull" } },
      { src: "assets/projects/zu-wasser-lassen/g3.jpg", r: "16/9", wide: true, lbl: { de: "Das fertige Modell vor dem 1:1-Bau", en: "The finished model before the full-scale build" } },
      { src: "assets/projects/zu-wasser-lassen/g4.jpg", r: "1/1", lbl: { de: "Detail \xB7 Rumpf aus Pappe", en: "Detail \xB7 the cardboard hull" } },
      { src: "assets/projects/zu-wasser-lassen/g5.jpg", r: "1/1", lbl: { de: "Regatta am Strand von Wendorf \xB7 das Wappen voraus", en: "Regatta on the beach at Wendorf \xB7 the crest leads the way" } }
    ]
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
    heroRatio: "3/2",
    kicker: { de: "EGD1 \xB7 Digitale Grundlagen \xB7 Geometrie \xB7 Freihand", en: "EGD1 \xB7 Digital foundations \xB7 Geometry \xB7 Freehand" },
    summary: {
      de: "Begleitende Arbeiten aus den Grundlagenmodulen: eine digitale Collage \xFCber die Schwelle zwischen Alltag und Freiheit, geometrisch-konstruktive Darstellungen und Freihandzeichnungen. Drei \xDCbungen im Darstellen: vom freien Bild \xFCber die exakte Konstruktion bis zur Hand.",
      en: "Accompanying work from the foundation modules: a digital collage on the threshold between everyday life and freedom, geometric construction drawings, and freehand studies. Three exercises in representation: from the free image to exact construction to the hand."
    },
    bodyP1: {
      de: 'Die Collage \u201ETor zur Freiheit" thematisiert die Schwelle zwischen der \u201EGefangenschaft" im Alltag und der Freiheit. Der Protagonist steht am \xDCbergang eines entleerten st\xE4dtischen Umfelds hin zu einem idealisierten, immateriellen Raum, der durch das helle Tor sichtbar wird, ein Ort, den es nur auf dem Papier gibt. Das Tor wird zur Schnittstelle zwischen gelebter Realit\xE4t und m\xF6glicher Zukunft.',
      en: 'The collage "Gate to Freedom" takes up the threshold between the "captivity" of everyday life and freedom. The figure stands at the passage from an emptied urban setting toward an idealised, immaterial space made visible by the bright gate, a place that exists only on paper. The gate becomes the interface between lived reality and a possible future.'
    },
    bodyP2: {
      de: "Daneben stehen Arbeiten aus dem Geometrischen Darstellen und dem Freihandzeichnen. Im Geometrischen Darstellen entstehen exakte Innenraumperspektiven mit Fluchtpunkten sowie konstruierte Membran- und Seilformen; im Freihandzeichnen Studien von Muscheln, Schnecken und einem barocken Kirchenm\xF6bel. Sie bilden das handwerkliche Fundament des Semesters: das Sehen, Konstruieren und Darstellen, auf dem die Entw\xFCrfe aufbauen.",
      en: "Alongside it stand works from descriptive geometry and freehand drawing. Descriptive geometry produces exact interior perspectives with vanishing points and constructed membrane and cable forms; freehand drawing yields studies of shells, snails and a baroque church furnishing. Together they form the craft foundation of the semester: the seeing, constructing and representing on which the designs are built."
    },
    pull: {
      de: "Das Tor existiert nur auf dem Papier, und genau dort beginnt der Entwurf.",
      en: "The gate exists only on paper, and that is exactly where design begins."
    },
    capText: {
      de: 'Collage \u201ETor zur Freiheit" sowie Arbeiten aus Geometrischem Darstellen und Freihandzeichnen: das gestalterische Fundament des ersten Semesters.',
      en: 'The collage "Gate to Freedom" together with works from descriptive geometry and freehand drawing: the design foundation of the first semester.'
    },
    process: {
      de: ['Digitale Collage \u201ETor zur Freiheit"', "Innenraumperspektiven mit Fluchtpunkten", "Konstruierte Membran- und Seilformen", "Freihandstudien: Muscheln, Schnecken, barockes Ornament"],
      en: ['Digital collage "Gate to Freedom"', "Interior perspectives with vanishing points", "Constructed membrane and cable forms", "Freehand studies: shells, snails, baroque ornament"]
    },
    role: { de: "Einzelarbeit", en: "Solo project" },
    gallery: [
      { src: "assets/projects/weitere-arbeiten/g1.jpg", r: "1/1", lbl: { de: "Freihand \xB7 Muschelstudie", en: "Freehand \xB7 Shell study" } },
      { src: "assets/projects/weitere-arbeiten/g2.jpg", r: "1/1", lbl: { de: "Freihand \xB7 Barockes Ornament", en: "Freehand \xB7 Baroque ornament" } },
      { src: "assets/projects/weitere-arbeiten/g3.jpg", r: "2/1", wide: true, lbl: { de: "Geometrisches Darstellen \xB7 Innenraumperspektive", en: "Descriptive geometry \xB7 Interior perspective" } },
      { src: "assets/projects/weitere-arbeiten/g4.jpg", r: "2/1", wide: true, lbl: { de: "Geometrisches Darstellen \xB7 Membrankonstruktion", en: "Descriptive geometry \xB7 Membrane construction" } }
    ]
  }
];
window.L = (v, lang) => v && typeof v === "object" && v[lang] != null ? v[lang] : v;
const CV = {
  education: [
    {
      y: "2025\u2013heute",
      what: { de: "B.A. Architektur", en: "B.A. Architecture" },
      where: { de: "Hochschule Wismar", en: "Hochschule Wismar, Germany" },
      detail: { de: "Architekturstudium seit dem Wintersemester 2025/26; aktuell im ersten Studienjahr (2. Semester).", en: "Architecture studies since winter semester 2025/26; currently first year, second semester." }
    },
    {
      y: "2023\u20132025",
      what: { de: "Ausbildung zum Zimmerer", en: "Apprenticeship as a carpenter (Zimmerer)" },
      where: { de: "Hamburg", en: "Hamburg, Germany" },
      detail: { de: "Dreij\xE4hrige Ausbildung im Holzbau, Gesellenabschluss im Juli 2025, die Grundlage meines materialnahen Zugangs zur Architektur.", en: "Three-year training in timber construction, journeyman qualification in July 2025, the foundation of my material-led approach to architecture." }
    },
    {
      y: "2015\u20132023",
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
    de: "Volleyball-Team Hamburg: Erarbeitung eines Turnierkonzepts f\xFCr den Verein.",
    en: "Volleyball team in Hamburg: developed a tournament concept for the club."
  }
};
window.PROJECTS = PROJECTS;
window.CV = CV;
