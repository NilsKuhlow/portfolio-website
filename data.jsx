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
    id: 'kanal',
    t: { de: 'Kanalhaus — Drei Häuser am Wallensteingraben', en: 'Kanalhaus — Three Houses on the Wallensteingraben' },
    location: 'Wismar', year: '2026',
    semester: { de: '1. Semester', en: '1st semester' },
    tag: { de: 'Wohnungsbau', en: 'Housing' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/photo-placeholder-cool.svg',
    kicker: { de: 'Wohnstudio · Prof. Lindner', en: 'Housing studio · Prof. Lindner' },
    summary: {
      de: 'Drei schmale Reihenhäuser entlang eines verwilderten Kanals in der Wismarer Innenstadt. Die Aufgabe verlangte Dichte; meine Antwort war, das Erdgeschoss anzuheben, das Ufer dem Schilf zu überlassen und die Küche dort zu platzieren, wo der Weg auf das Wasser trifft.',
      en: 'Three narrow row-houses placed along an overgrown canal in central Wismar. The brief asked for density; my answer was to lift the ground floor, leave the canal edge to the reeds, and put the kitchen where the path meets the water.',
    },
    process: {
      de: ['Sechs Ortsbegehungen über vier Wochen', 'Städtebauliche Diagramme im Quartiersmaßstab', 'Grundrissstudien 1:200', 'Atmosphärische Innencollagen auf Transparentpapier'],
      en: ['Site walks, six visits over four weeks', 'Block-scale urban diagrams', 'Plan studies at 1:200', 'Interior atmosphere collages on tracing paper'],
    },
    role: { de: 'Alleinige Autorenschaft', en: 'Sole author' },
  },
  {
    id: 'fischmarkt',
    t: { de: 'Fischmarkt-Umnutzung — Ein neues Dach über einer alten Halle', en: 'Fischmarkt Reuse — A New Roof Over an Old Hall' },
    location: 'Wismar', year: '2025',
    semester: { de: 'Grundlagen', en: 'Foundations' },
    tag: { de: 'Umnutzung', en: 'Adaptive reuse' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/photo-placeholder-stone.svg',
    kicker: { de: 'Grundlagenstudio · Prof. Brandt', en: 'Foundations studio · Prof. Brandt' },
    summary: {
      de: 'Eine spekulative Neueindeckung der stillgelegten Fischhalle am Hafen. Der Entwurf erhält die Backsteinaußenwände, entfernt die maroden Binder und ersetzt sie durch ein langsam ansteigendes Brettschichtholzgewölbe — tagsüber Markt, nachts überdachter Platz.',
      en: 'A speculative re-roofing of the disused fish hall on the harbour. The proposal keeps the brick perimeter, removes the failing trusses, and replaces them with a slow-rising glulam vault — a market by day, a covered square by night.',
    },
    process: {
      de: ['Photogrammetrische Aufnahme der Backsteinwände', 'Tragwerksstudien in BSP und Brettschichtholz', 'Schnittmodell 1:100 (Pappe, Messingnadeln)'],
      en: ['Photogrammetric survey of the existing brick walls', 'Structural studies in CLT and glulam', 'Section model at 1:100 (cardboard, brass pins)'],
    },
    role: { de: 'Alleinige Autorenschaft', en: 'Sole author' },
  },
  {
    id: 'altstadt',
    t: { de: 'Altstadt-Schwelle — Kartierung einer verschwindenden Kante', en: 'Altstadt Threshold — Mapping a Disappearing Edge' },
    location: 'Wismar', year: '2025',
    semester: { de: 'Grundlagen', en: 'Foundations' },
    tag: { de: 'Stadtforschung', en: 'Urban research' },
    status: { de: 'Forschung', en: 'Research' },
    img: 'assets/photo-placeholder-warm.svg',
    kicker: { de: 'Seminar Stadtanalyse', en: 'Urban analysis seminar' },
    summary: {
      de: 'Eine zeichnerische Untersuchung der Naht zwischen mittelalterlicher Altstadt und Nachkriegssiedlung. Sechs Wochen, zwölf Spaziergänge, hundertvierzig Fotografien und eine einzige vier Meter lange Tuschezeichnung, die zur Abschlusspräsentation des Seminars wurde.',
      en: 'A drawing-based survey of the seam between the medieval old town and the post-war housing district. Six weeks, twelve walks, a hundred and forty photographs, and a single 4-metre-long ink elevation that became the seminar\u2019s closing presentation.',
    },
    process: {
      de: ['Tägliche Fotografien an festen Standpunkten', 'Handgezeichnete Ansicht, Tusche auf Papier, 4 m', 'Vergleichende Schwarzpläne über vier Jahrhunderte'],
      en: ['Daily photographs at fixed points', 'Hand-drawn elevation, ink on paper, 4 m', 'Comparative figure-ground over four centuries'],
    },
    role: { de: 'Alleinige Autorenschaft · Seminarfinalist', en: 'Sole author · seminar finalist' },
  },
  {
    id: 'shedhouse',
    t: { de: 'Schuppenhaus — Ein Haus aus zwei Schuppen', en: 'Shed House — A House Made of Two Sheds' },
    location: { de: 'Lübeck (hypothetisch)', en: 'Lübeck (hypothetical)' }, year: '2025',
    semester: { de: 'Grundlagen', en: 'Foundations' },
    tag: { de: 'Wohnungsbau', en: 'Housing' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/photo-placeholder-cool.svg',
    kicker: { de: 'Grundlagenstudio', en: 'Foundations studio' },
    summary: {
      de: 'Eine Übung im ersten Semester: ein Haus aus zwei vorhandenen landwirtschaftlichen Schuppen entwerfen. Der Entwurf schiebt einen Schuppen in den anderen, um einen hohen zentralen Raum zu schaffen, mit Schlafnischen unter dem niedrigeren Dach.',
      en: 'A first-semester exercise: design a house from two pre-existing agricultural sheds. The proposal slides one shed inside the other to make a tall central room, with sleeping pockets tucked under the lower roof.',
    },
    process: {
      de: ['Volumenstudien aus Karton', 'Grundrisse und Schnitte 1:50', 'Abschluss-Fotocollage in Schwarz, Weiß und Eisenrot'],
      en: ['Cardboard volumetric studies', 'Plans and sections at 1:50', 'Final photo-collage in black, white and oxide red'],
    },
    role: { de: 'Alleinige Autorenschaft', en: 'Sole author' },
  },
  {
    id: 'chair',
    t: { de: 'Ein Stuhl, der vorgibt, eine Wand zu sein', en: 'A Chair Pretending to be a Wall' },
    location: 'Wismar', year: '2025',
    semester: { de: 'Grundlagen', en: 'Foundations' },
    tag: { de: 'Objekt · Möbel', en: 'Object · Furniture' },
    status: { de: 'Studio', en: 'Studio' },
    img: 'assets/photo-placeholder-stone.svg',
    kicker: { de: 'Grundlagen Entwurf · Übung', en: 'Design fundamentals exercise' },
    summary: {
      de: 'Eine zweiwöchige Objektübung. Aufgabe: ein Stuhl, der unbenutzt als Wand erscheint. Aus Kiefer und Stahlstab, mit einem Scharnier, das die Lehne in eine 80mm tiefe Tafel klappt.',
      en: 'A two-week object exercise. The brief: design a chair that, when not in use, reads as a wall. Built in pine and steel rod, hinged so its back folds flat into a 80mm-deep panel.',
    },
    process: {
      de: ['Acht Studienmodelle aus Schaumkarton', 'Mock-up 1:1 in Kiefer und Stahl', 'Scharnierdetail 1:1, gezeichnet und gebaut'],
      en: ['Eight study models in foamboard', '1:1 mock-up in pine and steel', 'Hinge detail at 1:1, drawn and built'],
    },
    role: { de: 'Alleinige Autorenschaft', en: 'Sole author' },
  },
  {
    id: 'bauhutte',
    t: { de: 'Bauhütten-Notizen — Zeichnungen von der Baustelle', en: 'Bauhütte Notes — Drawings from the Site' },
    location: 'Stralsund', year: '2024',
    semester: { de: 'Vor dem Studium · Praktikum', en: 'Pre-university internship' },
    tag: { de: 'Bauforschung', en: 'Site research' },
    status: { de: 'Praktikum', en: 'Internship' },
    img: 'assets/photo-placeholder-warm.svg',
    kicker: { de: 'Sechswöchiges Praktikum · Mauerwerksrestaurierung', en: 'Six-week internship · masonry restoration' },
    summary: {
      de: 'Ein Praktikum bei der Restaurierung eines Backsteingiebels in Stralsund, im Sommer vor Studienbeginn. Täglich dokumentiert in einem einzigen Skizzenbuch — sechzig Seiten Mörtelmischungen, Ziegelschichten und die langsame Arbeit, das wieder einzusetzen, was die Zeit gelockert hat.',
      en: 'A working internship on the restoration of a brick gable in Stralsund, undertaken in the summer before university. Documented daily in a single sketchbook — sixty pages of mortar mixes, brick courses, and the slow work of replacing what time has loosened.',
    },
    process: {
      de: ['Skizzenbuch · Tusche und Bleistift, 60 Seiten', 'Typologie der Mörtelfugen, handgezeichnet', 'Wöchentliche fotografische Dokumentation'],
      en: ['Sketchbook · ink and pencil, 60 pages', 'Mortar joint typology, hand-drawn', 'Photographic record, weekly'],
    },
    role: { de: 'Praktikant · Zeichnung & Dokumentation', en: 'Intern · drawing & documentation' },
  },
  {
    id: 'gartenhaus',
    t: { de: 'Gartenhaus — Ein Gewächshaus für eine Tante', en: 'Gartenhaus — A Greenhouse for an Aunt' },
    location: 'Schwerin', year: '2024',
    semester: { de: 'Vor dem Studium', en: 'Pre-university' },
    tag: { de: 'Gebaut', en: 'Built' },
    status: { de: 'Gebaut', en: 'Built' },
    img: 'assets/photo-placeholder-cool.svg',
    kicker: { de: 'Privater Auftrag', en: 'Personal commission' },
    summary: {
      de: 'Ein kleines Gewächshaus, in zwei Sommern mit meiner Tante gebaut, vor dem Studium. Lärchenrahmen, Polycarbonatdach, gebrauchte Fenster aus einem abgerissenen Bauernhof. Mein erstes Mal, dass etwas, das ich gezeichnet hatte, tatsächlich gebaut wurde.',
      en: 'A small greenhouse built with my aunt over two summers, before architecture school. Larch frame, polycarbonate roof, second-hand windows from a demolished farm. My first time drawing something that was actually constructed.',
    },
    process: {
      de: ['Skizzen auf Millimeterpapier', 'Werkpläne 1:20 von Hand', 'Gebaut an Wochenenden, Juni\u2013August 2024'],
      en: ['Sketches on graph paper', 'Hand-drawn working drawings at 1:20', 'Built on weekends, June\u2013August 2024'],
    },
    role: { de: 'Entwurf · Mitbau', en: 'Designer · co-builder' },
  },
  {
    id: 'venice2024',
    t: { de: 'Architekturbiennale Venedig — Feldnotizen', en: 'Venice Biennale — Field Notes' },
    location: { de: 'Venedig', en: 'Venice' }, year: '2024',
    semester: { de: 'Selbstorganisierte Reise', en: 'Independent travel' },
    tag: { de: 'Reiseforschung', en: 'Travel research' },
    status: { de: 'Forschung', en: 'Research' },
    img: 'assets/photo-placeholder-stone.svg',
    kicker: { de: 'Fünf Tage · selbst finanziert', en: 'Five days · self-funded' },
    summary: {
      de: 'Eine selbstorganisierte Studienreise zur Architekturbiennale, vor Studienbeginn. Das Notizbuch dieser fünf Tage wurde zur Schreibprobe, die ich meiner Bewerbung in Wismar beilegte.',
      en: 'A self-organised study trip to the Architecture Biennale, before starting university. The notebook produced over those five days became the writing sample I included with my application to Wismar.',
    },
    process: {
      de: ['Tägliche Einträge · 5 Notizbücher', 'Nachzeichnungen ausgewählter Pavillons', 'Fotografische Aufzeichnung, von Hand entwickelte Kontaktbögen'],
      en: ['Daily entries · 5 notebooks', 'Plan re-drawings of selected pavilions', 'Photographic record, hand-developed contact sheets'],
    },
    role: { de: 'Alleinige Autorenschaft', en: 'Sole author' },
  },
  {
    id: 'modelmaking',
    t: { de: 'Ein Jahr Modelle — Arbeitsstudien', en: 'A Year of Models — Working Studies' },
    location: 'Wismar', year: '2025–2026',
    semester: { de: 'Laufend', en: 'Ongoing' },
    tag: { de: 'Modelle', en: 'Models' },
    status: { de: 'Laufend', en: 'Ongoing' },
    img: 'assets/photo-placeholder-warm.svg',
    kicker: { de: 'Modellbau-Archiv', en: 'Model-making record' },
    summary: {
      de: 'Eine fortlaufende Aufzeichnung jedes Arbeitsmodells, das in den ersten drei Semestern entstanden ist. Karton, Lindenholz, Gips, Schaumkarton, gelegentlich Messing. Fotografiert im selben Nordlicht, auf demselben grauen Papier.',
      en: 'A running record of every working model made during the first three semesters. Cardboard, basswood, plaster, foamboard, occasional brass. Photographed in the same north light, on the same grey paper.',
    },
    process: {
      de: ['Bislang zweiundvierzig Modelle', 'Durchgehend gleicher Fotografie-Aufbau', 'Indexiert nach Projekt und Maßstab'],
      en: ['Forty-two models to date', 'Same photographic setup throughout', 'Indexed by project and scale'],
    },
    role: { de: 'Persönliche Praxis', en: 'Personal practice' },
  },
  {
    id: 'analoguephoto',
    t: { de: 'Analoge Fotografien gewöhnlicher Gebäude', en: 'Analogue Photographs of Ordinary Buildings' },
    location: 'Mecklenburg-Vorpommern', year: '2024–2026',
    semester: { de: 'Laufend', en: 'Ongoing' },
    tag: { de: 'Fotografie', en: 'Photography' },
    status: { de: 'Laufend', en: 'Ongoing' },
    img: 'assets/photo-placeholder-cool.svg',
    kicker: { de: 'Persönliche Serie · Mamiya RB67', en: 'Personal series · Mamiya RB67' },
    summary: {
      de: 'Eine fortlaufende fotografische Serie unspektakulärer Nachkriegsbauten in der Region. Aufgenommen auf Mittelformat-Schwarzweißfilm. Achtzehn Filme, selbst entwickelt, kontaktkopiert.',
      en: 'A long-running photographic series of unremarkable post-war buildings across the region. Shot on medium-format black-and-white film. Eighteen rolls, self-developed, contact-printed.',
    },
    process: {
      de: ['Mamiya RB67 · Ilford HP5', 'In Caffenol selbst entwickelt', 'Kontaktbögen im Studio aufgehängt'],
      en: ['Mamiya RB67 · Ilford HP5', 'Hand-developed in caffenol', 'Contact sheets pinned in studio'],
    },
    role: { de: 'Persönliche Praxis', en: 'Personal practice' },
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
