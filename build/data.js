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
    id: "kanal",
    t: { de: "Kanalhaus \u2014 Drei H\xE4user am Wallensteingraben", en: "Kanalhaus \u2014 Three Houses on the Wallensteingraben" },
    location: "Wismar",
    year: "2026",
    semester: { de: "1. Semester", en: "1st semester" },
    tag: { de: "Wohnungsbau", en: "Housing" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/photo-placeholder-cool.svg",
    kicker: { de: "Wohnstudio \xB7 Prof. Lindner", en: "Housing studio \xB7 Prof. Lindner" },
    summary: {
      de: "Drei schmale Reihenh\xE4user entlang eines verwilderten Kanals in der Wismarer Innenstadt. Die Aufgabe verlangte Dichte; meine Antwort war, das Erdgeschoss anzuheben, das Ufer dem Schilf zu \xFCberlassen und die K\xFCche dort zu platzieren, wo der Weg auf das Wasser trifft.",
      en: "Three narrow row-houses placed along an overgrown canal in central Wismar. The brief asked for density; my answer was to lift the ground floor, leave the canal edge to the reeds, and put the kitchen where the path meets the water."
    },
    process: {
      de: ["Sechs Ortsbegehungen \xFCber vier Wochen", "St\xE4dtebauliche Diagramme im Quartiersma\xDFstab", "Grundrissstudien 1:200", "Atmosph\xE4rische Innencollagen auf Transparentpapier"],
      en: ["Site walks, six visits over four weeks", "Block-scale urban diagrams", "Plan studies at 1:200", "Interior atmosphere collages on tracing paper"]
    },
    role: { de: "Alleinige Autorenschaft", en: "Sole author" }
  },
  {
    id: "fischmarkt",
    t: { de: "Fischmarkt-Umnutzung \u2014 Ein neues Dach \xFCber einer alten Halle", en: "Fischmarkt Reuse \u2014 A New Roof Over an Old Hall" },
    location: "Wismar",
    year: "2025",
    semester: { de: "Grundlagen", en: "Foundations" },
    tag: { de: "Umnutzung", en: "Adaptive reuse" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/photo-placeholder-stone.svg",
    kicker: { de: "Grundlagenstudio \xB7 Prof. Brandt", en: "Foundations studio \xB7 Prof. Brandt" },
    summary: {
      de: "Eine spekulative Neueindeckung der stillgelegten Fischhalle am Hafen. Der Entwurf erh\xE4lt die Backsteinau\xDFenw\xE4nde, entfernt die maroden Binder und ersetzt sie durch ein langsam ansteigendes Brettschichtholzgew\xF6lbe \u2014 tags\xFCber Markt, nachts \xFCberdachter Platz.",
      en: "A speculative re-roofing of the disused fish hall on the harbour. The proposal keeps the brick perimeter, removes the failing trusses, and replaces them with a slow-rising glulam vault \u2014 a market by day, a covered square by night."
    },
    process: {
      de: ["Photogrammetrische Aufnahme der Backsteinw\xE4nde", "Tragwerksstudien in BSP und Brettschichtholz", "Schnittmodell 1:100 (Pappe, Messingnadeln)"],
      en: ["Photogrammetric survey of the existing brick walls", "Structural studies in CLT and glulam", "Section model at 1:100 (cardboard, brass pins)"]
    },
    role: { de: "Alleinige Autorenschaft", en: "Sole author" }
  },
  {
    id: "altstadt",
    t: { de: "Altstadt-Schwelle \u2014 Kartierung einer verschwindenden Kante", en: "Altstadt Threshold \u2014 Mapping a Disappearing Edge" },
    location: "Wismar",
    year: "2025",
    semester: { de: "Grundlagen", en: "Foundations" },
    tag: { de: "Stadtforschung", en: "Urban research" },
    status: { de: "Forschung", en: "Research" },
    img: "assets/photo-placeholder-warm.svg",
    kicker: { de: "Seminar Stadtanalyse", en: "Urban analysis seminar" },
    summary: {
      de: "Eine zeichnerische Untersuchung der Naht zwischen mittelalterlicher Altstadt und Nachkriegssiedlung. Sechs Wochen, zw\xF6lf Spazierg\xE4nge, hundertvierzig Fotografien und eine einzige vier Meter lange Tuschezeichnung, die zur Abschlusspr\xE4sentation des Seminars wurde.",
      en: "A drawing-based survey of the seam between the medieval old town and the post-war housing district. Six weeks, twelve walks, a hundred and forty photographs, and a single 4-metre-long ink elevation that became the seminar\u2019s closing presentation."
    },
    process: {
      de: ["T\xE4gliche Fotografien an festen Standpunkten", "Handgezeichnete Ansicht, Tusche auf Papier, 4 m", "Vergleichende Schwarzpl\xE4ne \xFCber vier Jahrhunderte"],
      en: ["Daily photographs at fixed points", "Hand-drawn elevation, ink on paper, 4 m", "Comparative figure-ground over four centuries"]
    },
    role: { de: "Alleinige Autorenschaft \xB7 Seminarfinalist", en: "Sole author \xB7 seminar finalist" }
  },
  {
    id: "shedhouse",
    t: { de: "Schuppenhaus \u2014 Ein Haus aus zwei Schuppen", en: "Shed House \u2014 A House Made of Two Sheds" },
    location: { de: "L\xFCbeck (hypothetisch)", en: "L\xFCbeck (hypothetical)" },
    year: "2025",
    semester: { de: "Grundlagen", en: "Foundations" },
    tag: { de: "Wohnungsbau", en: "Housing" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/photo-placeholder-cool.svg",
    kicker: { de: "Grundlagenstudio", en: "Foundations studio" },
    summary: {
      de: "Eine \xDCbung im ersten Semester: ein Haus aus zwei vorhandenen landwirtschaftlichen Schuppen entwerfen. Der Entwurf schiebt einen Schuppen in den anderen, um einen hohen zentralen Raum zu schaffen, mit Schlafnischen unter dem niedrigeren Dach.",
      en: "A first-semester exercise: design a house from two pre-existing agricultural sheds. The proposal slides one shed inside the other to make a tall central room, with sleeping pockets tucked under the lower roof."
    },
    process: {
      de: ["Volumenstudien aus Karton", "Grundrisse und Schnitte 1:50", "Abschluss-Fotocollage in Schwarz, Wei\xDF und Eisenrot"],
      en: ["Cardboard volumetric studies", "Plans and sections at 1:50", "Final photo-collage in black, white and oxide red"]
    },
    role: { de: "Alleinige Autorenschaft", en: "Sole author" }
  },
  {
    id: "chair",
    t: { de: "Ein Stuhl, der vorgibt, eine Wand zu sein", en: "A Chair Pretending to be a Wall" },
    location: "Wismar",
    year: "2025",
    semester: { de: "Grundlagen", en: "Foundations" },
    tag: { de: "Objekt \xB7 M\xF6bel", en: "Object \xB7 Furniture" },
    status: { de: "Studio", en: "Studio" },
    img: "assets/photo-placeholder-stone.svg",
    kicker: { de: "Grundlagen Entwurf \xB7 \xDCbung", en: "Design fundamentals exercise" },
    summary: {
      de: "Eine zweiw\xF6chige Objekt\xFCbung. Aufgabe: ein Stuhl, der unbenutzt als Wand erscheint. Aus Kiefer und Stahlstab, mit einem Scharnier, das die Lehne in eine 80mm tiefe Tafel klappt.",
      en: "A two-week object exercise. The brief: design a chair that, when not in use, reads as a wall. Built in pine and steel rod, hinged so its back folds flat into a 80mm-deep panel."
    },
    process: {
      de: ["Acht Studienmodelle aus Schaumkarton", "Mock-up 1:1 in Kiefer und Stahl", "Scharnierdetail 1:1, gezeichnet und gebaut"],
      en: ["Eight study models in foamboard", "1:1 mock-up in pine and steel", "Hinge detail at 1:1, drawn and built"]
    },
    role: { de: "Alleinige Autorenschaft", en: "Sole author" }
  },
  {
    id: "bauhutte",
    t: { de: "Bauh\xFCtten-Notizen \u2014 Zeichnungen von der Baustelle", en: "Bauh\xFCtte Notes \u2014 Drawings from the Site" },
    location: "Stralsund",
    year: "2024",
    semester: { de: "Vor dem Studium \xB7 Praktikum", en: "Pre-university internship" },
    tag: { de: "Bauforschung", en: "Site research" },
    status: { de: "Praktikum", en: "Internship" },
    img: "assets/photo-placeholder-warm.svg",
    kicker: { de: "Sechsw\xF6chiges Praktikum \xB7 Mauerwerksrestaurierung", en: "Six-week internship \xB7 masonry restoration" },
    summary: {
      de: "Ein Praktikum bei der Restaurierung eines Backsteingiebels in Stralsund, im Sommer vor Studienbeginn. T\xE4glich dokumentiert in einem einzigen Skizzenbuch \u2014 sechzig Seiten M\xF6rtelmischungen, Ziegelschichten und die langsame Arbeit, das wieder einzusetzen, was die Zeit gelockert hat.",
      en: "A working internship on the restoration of a brick gable in Stralsund, undertaken in the summer before university. Documented daily in a single sketchbook \u2014 sixty pages of mortar mixes, brick courses, and the slow work of replacing what time has loosened."
    },
    process: {
      de: ["Skizzenbuch \xB7 Tusche und Bleistift, 60 Seiten", "Typologie der M\xF6rtelfugen, handgezeichnet", "W\xF6chentliche fotografische Dokumentation"],
      en: ["Sketchbook \xB7 ink and pencil, 60 pages", "Mortar joint typology, hand-drawn", "Photographic record, weekly"]
    },
    role: { de: "Praktikant \xB7 Zeichnung & Dokumentation", en: "Intern \xB7 drawing & documentation" }
  },
  {
    id: "gartenhaus",
    t: { de: "Gartenhaus \u2014 Ein Gew\xE4chshaus f\xFCr eine Tante", en: "Gartenhaus \u2014 A Greenhouse for an Aunt" },
    location: "Schwerin",
    year: "2024",
    semester: { de: "Vor dem Studium", en: "Pre-university" },
    tag: { de: "Gebaut", en: "Built" },
    status: { de: "Gebaut", en: "Built" },
    img: "assets/photo-placeholder-cool.svg",
    kicker: { de: "Privater Auftrag", en: "Personal commission" },
    summary: {
      de: "Ein kleines Gew\xE4chshaus, in zwei Sommern mit meiner Tante gebaut, vor dem Studium. L\xE4rchenrahmen, Polycarbonatdach, gebrauchte Fenster aus einem abgerissenen Bauernhof. Mein erstes Mal, dass etwas, das ich gezeichnet hatte, tats\xE4chlich gebaut wurde.",
      en: "A small greenhouse built with my aunt over two summers, before architecture school. Larch frame, polycarbonate roof, second-hand windows from a demolished farm. My first time drawing something that was actually constructed."
    },
    process: {
      de: ["Skizzen auf Millimeterpapier", "Werkpl\xE4ne 1:20 von Hand", "Gebaut an Wochenenden, Juni\u2013August 2024"],
      en: ["Sketches on graph paper", "Hand-drawn working drawings at 1:20", "Built on weekends, June\u2013August 2024"]
    },
    role: { de: "Entwurf \xB7 Mitbau", en: "Designer \xB7 co-builder" }
  },
  {
    id: "venice2024",
    t: { de: "Architekturbiennale Venedig \u2014 Feldnotizen", en: "Venice Biennale \u2014 Field Notes" },
    location: { de: "Venedig", en: "Venice" },
    year: "2024",
    semester: { de: "Selbstorganisierte Reise", en: "Independent travel" },
    tag: { de: "Reiseforschung", en: "Travel research" },
    status: { de: "Forschung", en: "Research" },
    img: "assets/photo-placeholder-stone.svg",
    kicker: { de: "F\xFCnf Tage \xB7 selbst finanziert", en: "Five days \xB7 self-funded" },
    summary: {
      de: "Eine selbstorganisierte Studienreise zur Architekturbiennale, vor Studienbeginn. Das Notizbuch dieser f\xFCnf Tage wurde zur Schreibprobe, die ich meiner Bewerbung in Wismar beilegte.",
      en: "A self-organised study trip to the Architecture Biennale, before starting university. The notebook produced over those five days became the writing sample I included with my application to Wismar."
    },
    process: {
      de: ["T\xE4gliche Eintr\xE4ge \xB7 5 Notizb\xFCcher", "Nachzeichnungen ausgew\xE4hlter Pavillons", "Fotografische Aufzeichnung, von Hand entwickelte Kontaktb\xF6gen"],
      en: ["Daily entries \xB7 5 notebooks", "Plan re-drawings of selected pavilions", "Photographic record, hand-developed contact sheets"]
    },
    role: { de: "Alleinige Autorenschaft", en: "Sole author" }
  },
  {
    id: "modelmaking",
    t: { de: "Ein Jahr Modelle \u2014 Arbeitsstudien", en: "A Year of Models \u2014 Working Studies" },
    location: "Wismar",
    year: "2025\u20132026",
    semester: { de: "Laufend", en: "Ongoing" },
    tag: { de: "Modelle", en: "Models" },
    status: { de: "Laufend", en: "Ongoing" },
    img: "assets/photo-placeholder-warm.svg",
    kicker: { de: "Modellbau-Archiv", en: "Model-making record" },
    summary: {
      de: "Eine fortlaufende Aufzeichnung jedes Arbeitsmodells, das in den ersten drei Semestern entstanden ist. Karton, Lindenholz, Gips, Schaumkarton, gelegentlich Messing. Fotografiert im selben Nordlicht, auf demselben grauen Papier.",
      en: "A running record of every working model made during the first three semesters. Cardboard, basswood, plaster, foamboard, occasional brass. Photographed in the same north light, on the same grey paper."
    },
    process: {
      de: ["Bislang zweiundvierzig Modelle", "Durchgehend gleicher Fotografie-Aufbau", "Indexiert nach Projekt und Ma\xDFstab"],
      en: ["Forty-two models to date", "Same photographic setup throughout", "Indexed by project and scale"]
    },
    role: { de: "Pers\xF6nliche Praxis", en: "Personal practice" }
  },
  {
    id: "analoguephoto",
    t: { de: "Analoge Fotografien gew\xF6hnlicher Geb\xE4ude", en: "Analogue Photographs of Ordinary Buildings" },
    location: "Mecklenburg-Vorpommern",
    year: "2024\u20132026",
    semester: { de: "Laufend", en: "Ongoing" },
    tag: { de: "Fotografie", en: "Photography" },
    status: { de: "Laufend", en: "Ongoing" },
    img: "assets/photo-placeholder-cool.svg",
    kicker: { de: "Pers\xF6nliche Serie \xB7 Mamiya RB67", en: "Personal series \xB7 Mamiya RB67" },
    summary: {
      de: "Eine fortlaufende fotografische Serie unspektakul\xE4rer Nachkriegsbauten in der Region. Aufgenommen auf Mittelformat-Schwarzwei\xDFfilm. Achtzehn Filme, selbst entwickelt, kontaktkopiert.",
      en: "A long-running photographic series of unremarkable post-war buildings across the region. Shot on medium-format black-and-white film. Eighteen rolls, self-developed, contact-printed."
    },
    process: {
      de: ["Mamiya RB67 \xB7 Ilford HP5", "In Caffenol selbst entwickelt", "Kontaktb\xF6gen im Studio aufgeh\xE4ngt"],
      en: ["Mamiya RB67 \xB7 Ilford HP5", "Hand-developed in caffenol", "Contact sheets pinned in studio"]
    },
    role: { de: "Pers\xF6nliche Praxis", en: "Personal practice" }
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
