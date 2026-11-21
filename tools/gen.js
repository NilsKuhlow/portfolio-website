// Erzeugt alle HTML-Seiten von nilskuhlow.com aus den Daten unten.
// Aufruf im Repo-Ordner:  node tools/gen.js
// Danach die geänderten HTML-Dateien prüfen und committen. Seiten nie von Hand ändern, sonst überschreibt der nächste Lauf das.
const fs = require('fs'), path = require('path');
const ROOT = process.argv[2] || path.join(__dirname, '..');

function dims(file) {
  const b = fs.readFileSync(path.join(ROOT, file));
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const m = b[i + 1], len = b.readUInt16BE(i + 2);
    if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    i += 2 + len;
  }
  throw new Error('no dims ' + file);
}

const SHOW_TEXTE = false;
const TEAM ='mit Philipp Tomschin, Kai-Lars Ehrich und Richard Muth';
const KUA = 'Lehrgebiet Gunda Förster';
const P = [
  { id: 'fluss', dir: 'fluss', t: 'Fluss', year: '2026', sub: 'Kunst und Architektur · Licht, Projektion, Fotografie',
    meta: '3. Semester · WS 2026/27 · Kunst und Architektur · ' + KUA,
    text: ['Was bleibt stehen, wenn alles weiterläuft? Weiße Striche ziehen ohne Pause über eine Wand, ein Mensch bleibt davor stehen.', 'Bei 0,4 und 0,8 Sekunden Belichtung werden aus den Strichen Linien. Der Körper bleibt fast still und verschwimmt trotzdem mit der Bewegung. Licht kann man nicht festhalten, die Kamera zeigt nur, wo es gewesen ist.'],
    imgs: [['hero.jpg', 'Fluss · 0,4 s Belichtung'], ['g1.jpg', 'Die Projektion ohne Körper'], ['g2.jpg', 'Stillstand in der Bewegung'], ['g3.jpg', '0,8 s Belichtung · die Linien werden länger'], ['g4.jpg', 'Einzelbild der Projektion']] },
  { id: 'loslassen', dir: 'loslassen', t: 'Loslassen', year: '2026', sub: 'Kunst und Architektur · Element Wasser, Fotoserie',
    meta: '3. Semester · WS 2026/27 · Kunst und Architektur · ' + KUA,
    desc: 'Was halte ich fest, das längst schmelzen möchte? Ein Text und eine Fotoserie über das Loslassen: Blumen im Eis, 19 Stunden.',
    lead: ['g1.jpg', 'Loslassen III'],
    free: {
      lead: ['g1.jpg', 'Loslassen III'],
      side: [['hero.jpg', 'Loslassen I'], ['g4.jpg', 'Die Blumen vor dem Einfrieren']],
      after: [['g3.jpg', 'Aufbau · Kamera, Licht, Intervall'], ['g2.jpg', 'Loslassen II']],
    },
    // (alt) Text in Abschnitte, jeder neben seinem Bild
    story: [
      { img: ['g1.jpg', 'Loslassen III'], n: 1 },
      { img: ['hero.jpg', 'Loslassen I'], n: 2 },
      { img: ['g4.jpg', 'Die Blumen vor dem Einfrieren'], n: 1 },
      { img: ['g3.jpg', 'Aufbau · Kamera, Licht, Intervall'], n: 1 },
      { img: ['g2.jpg', 'Loslassen II'], n: 2 },
    ],
    essay: [
      'Was halte ich fest, das längst schmelzen möchte?',
      'Im September 1879 stirbt Camille Monet. Ihr Mann malt sie auf dem Totenbett, in Blau und Grau, als wolle er noch einen Moment länger bei ihr bleiben. Der Winter darauf ist bitterkalt, und die Seine friert zu. Im Januar bricht das Eis. Monet stellt seine Staffelei an das Ufer und malt die treibenden Schollen. Er malt das Schmelzen. Ich glaube, er malt das Loslassen.',
      'Heraklit sagt, man kann nicht zweimal in denselben Fluss steigen. Das Wasser fließt immer weiter und hält nicht an. Nur wenn es friert, steht es still. Eis ist Wasser, das festgehalten wird. Aber auch Eis hält nicht für immer.',
      'Auch ich habe versucht, einen Moment einzufrieren. Ich habe einen Strauß Blumen in Eis eingeschlossen. Rot, gelb, violett, hinter einer milchigen Wand. Das Eis hat die Blumen festgehalten und ihre Schönheit bewahrt. Dann habe ich losgelassen. Ich habe den Eisblock mitten in mein Wohnzimmer gestellt. 19 Stunden. 19 Stunden hat es gedauert, bis die Blumen aus ihrem Zeitgefängnis befreit waren. Der Eisblock war ein Fluss, der still zu stehen schien und dann wieder anfing zu fließen.',
      'Während das Eis geschmolzen ist, habe ich fotografiert. Roland Barthes beschreibt die Fotografie mit vier Wörtern: Es-ist-so-gewesen. Die Kamera tut, was das Eis tut. Sie versucht, den Moment festzuhalten. Aber auch die Bilder, die ich dabei gemacht habe, werden irgendwann nicht mehr sein und im Fluss der Zeit untergehen. Denn nichts ist für immer.',
      'Doch Loslassen ist nicht nur Verlust. Wer zu fest festhält, verliert sich selbst. Wer nichts festhält, nicht einmal den eigenen Willen, wird frei. Meister Eckhart nennt diese Haltung *gelâzenheit*: der Zustand dessen, der gelassen hat. Auch meine Blumen waren erst frei, als das Eis sie gelassen hatte.',
      'Monet steht am Ufer und sieht dem Eis zu, wie es geht. In diesen 19 Stunden habe ich dasselbe getan. Ich habe die Blumen nicht festgehalten. Ich bin bei ihnen geblieben, während sie gingen.',
    ],
    imgs: [] },
  { id: 'staedtebau-2', dir: 'staedtebau-2', t: 'Grünraum³', year: '2026', sub: 'Städtebau + Gebäudelehre II · Freiraum, Pinneberg',
    meta: '3. Semester · WS 2026/27 · Städtebau + Gebäudelehre II, Step I · mit Lea Hamel, Melia Schulz und Kai Ehrich',
    text: ['Ein städtebaulicher Entwurf in Pinneberg: Baufelder, Wege und Wasser werden zu einem neuen Quartier mit Marktplatz und grünen Innenhöfen geordnet.', 'Der Freiraum ist dabei nicht Restfläche, sondern Gerüst des Entwurfs, bis hin zu einem standortgerechten Pflanzschema.'],
    imgs: [['hero.jpg', 'Lageplan'], ['g1.jpg', 'Freiraum · Collage'], ['g2.jpg', 'Der Marktplatz'], ['g3.jpg', 'Innenhof mit Gemeinschaftsgärten'], ['g4.jpg', 'Arbeitsmodell'], ['g6.jpg', 'Pflanzung · standortgerecht und heimisch']] },
  { id: 'staedtebau-1', dir: 'staedtebau-1', t: 'Ein stiller Hochpunkt', year: '2026', sub: 'Städtebau + Gebäudelehre I · Modell',
    meta: '2. Semester · SoSe 2026 · Städtebau + Gebäudelehre I · mit Kai Ehrich, Philipp Tomschin, Jerome Gilbert und Richard Muth',
    text: ['Aus der Analyse des Stadtgefüges, mit Schwarzplan, Nolli-Plan und Palimpsest, entstand die Suche nach einer Lücke. Sie wird mit einem Hochpunkt besetzt, der sich nicht aufdrängt.', 'Das Modell im Maßstab 1:100 schichtet rot gebeizte Holzblöcke und gegossene Elemente zu zwei Türmen, die eine Mitte freilassen.'],
    imgs: [['hero.jpg', 'Modell 1:100 · Holz, rot gebeizt, und Guss'], ['g1.jpg', 'Modell 1:100 · Rückseite'], ['g2.jpg', 'Stadtmodell']] },
  { id: 'lichtfaenger', dir: 'lichtfaenger', t: 'Lichtfänger', year: '2026', sub: 'Installation · Licht, Wismar',
    meta: '2. Semester · SoSe 2026 · EGD II · gebaut · ' + TEAM,
    text: ['Ein leichter, rückbaubarer Eingriff auf der Dachterrasse von Haus 7. Aus der Idee eines gewebten Lichtdachs wurden schmale Reflektoren an Spannseilen.', 'Sie fangen Himmel und Sonne ein und werfen ein wanderndes Licht über den Ort. Die Anordnung folgt einer Heatmap der Bewegung: Wo sich Menschen aufhalten, verdichtet sich der Eingriff.'],
    imgs: [['g3.jpg', 'Grundriss und Herleitung aus der Bewegung'], ['g4.jpg', 'Aus den Tüchern werden Reflektoren'], ['g5.jpg', 'Der Reflektor fängt Himmel und Sonne'], ['g6.jpg', 'Die Reflektoren über der Terrasse']] },
  { id: 'scenographic-space', dir: 'spatial-sound', t: 'Scenographic Space', year: '2026', sub: 'Forschung · Parametrik, Wismar',
    meta: '2. Semester · SoSe 2026 · EGD II · ' + TEAM,
    text: ['Wie formt Klang Raum? Aus Feldaufnahmen entstehen über Analyse, psychoakustische Interpretation und parametrische Generierung räumliche Sequenzen.', 'Frequenz, Rhythmus und Dichte werden zu Schwellen, Engstellen und Öffnungen.'],
    imgs: [['hero.jpg', 'Feldaufnahme'], ['content.jpg', 'Analyse · Frequenzverlauf der Aufnahme'], ['g1.jpg', 'Parametrische Klanglandschaften'], ['g4.jpg', 'Materialstudie · Oberfläche'], ['fin1.jpg', 'Modell · Hülle aus Papier'], ['g2.jpg', 'Blick in das Modell'], ['fin2.jpg', 'Modell mit Maßstabsfigur']] },
  { id: 'randstadt-intervention', dir: 'randstadt-intervention', t: 'Randstadt Intervention', year: '2025', sub: 'Installation · 1:1, Wismar',
    meta: '1. Semester · WS 2025/26 · EGD I · gebaut · Teamarbeit',
    text: ['Eine ortsspezifische Rauminstallation im Maßstab 1:1. Ein Folientunnel verdichtet einen bestehenden Weg in der Randstadt von Wismar.', 'Er führt von der Weite in die Enge und öffnet sich am Ende in einen natürlich gewachsenen Raum unter dem Geäst.'],
    imgs: [['hero.jpg', 'Der Folientunnel im Winter'], ['g1.jpg', 'Annäherung · der gefasste Weg'], ['g2.jpg', 'Durchwegung'], ['g3.jpg', 'Der Eingriff im winterlichen Ort']] },
  { id: 'stillstand', dir: 'stillstand', t: 'Stillstand', year: '2026', sub: 'Kunst und Architektur · Licht, Blender',
    meta: '3. Semester · WS 2026/27 · Kunst und Architektur · ' + KUA,
    text: ['150 Fäden hängen im dunklen Raum und bewegen sich nicht. Ein Beamer ist die einzige Lichtquelle. Das Licht wandert, Formen tauchen auf und verwehen, aber sichtbar wird es nur dort, wo ein Faden es fängt.', 'Erst der Stillstand der Fäden macht die Bewegung des Lichts sichtbar. Raum, Fäden und Licht sind in Blender gebaut und gerendert: 150 Baumwollschnüre, nicht ganz gerade gespannt, an einem Rahmen von 3,20 × 1,70 m.'],
    imgs: [['hero.jpg', 'Ein Lichtkreis in der Mitte des Feldes · Rendering, Blender'], ['g1.jpg', 'Detail · jeder Faden ist Lichtlinie und Schattenwerfer · Rendering, Blender'], ['g2.jpg', 'Der Strahl · Rendering, Blender'], ['g3.jpg', 'Eine Linie aus Licht · Rendering, Blender'], ['g4.jpg', '3D-Modell, Blender']] },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function page({ title, desc, section, body, home }) {
  const cur = (s) => (section === s ? ' aria-current="page"' : '');
  return [
    '<!doctype html>',
    '<html lang="de">',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<title>' + esc(title) + '</title>',
    '<meta name="description" content="' + esc(desc) + '">',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
    '<link rel="stylesheet" href="/style.css">',
    '</head>',
    '<body class="' + (home ? 'home' : 's-' + section) + '">',
    '<div class="page">',
    '  <header class="side">',
    '    <a class="name" href="/">Nils<br>Kuhlow</a>',
    '    <nav>',
    '      <ul class="menu">',
    '        <li><a href="/arbeiten/"' + cur('arbeiten') + '>arbeiten</a></li>',
    SHOW_TEXTE ? '        <li><a href="/texte/"' + cur('texte') + '>texte</a></li>' : null,
    '        <li><a href="/ueber/"' + cur('ueber') + '>über</a></li>',
    '        <li><a href="/kontakt/"' + cur('kontakt') + '>kontakt</a></li>',
    '      </ul>',
    '    </nav>',
    '  </header>',
    body ? '  <main class="main">\n' + body + '\n  </main>' : null,
    '</div>',
    '</body>',
    '</html>',
    '',
  ].filter((l) => l !== null).join('\n');
}

function write(rel, html) {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
}

write('index.html', page({ title: 'Nils Kuhlow', desc: 'Nils Kuhlow, Architekturstudent an der Hochschule Wismar und Zimmerer.', home: true }));

write('arbeiten/index.html', page({
  title: 'arbeiten · Nils Kuhlow', desc: 'Ausgewählte Arbeiten aus dem Architekturstudium an der Hochschule Wismar.', section: 'arbeiten',
  body: [
    '    <p class="label">ausgewählte arbeiten, stand 11/2026</p>',
    '    <ul class="list">',
    ...P.map((p) => '      <li><a class="row" href="/arbeiten/' + p.id + '/"><span class="head">' + p.year + '</span><span class="head">' + esc(p.t) + '</span><span class="sub">' + esc(p.sub.split(' · ')[0]) + '</span></a></li>'),
    '    </ul>',
  ].join('\n'),
}));

// ── texte: kurze lyrische Essays, je mit einem Bild ──────────────
// Ausgeschaltet, bis Nils eigene Texte geschrieben hat. Dann T mit seinen Texten füllen und auf true setzen.
const T = [];

if (SHOW_TEXTE) write('texte/index.html', page({
  title: 'texte · Nils Kuhlow', desc: 'Kurze Texte über Räume, Material und Zeit.', section: 'texte',
  body: [
    '    <p class="label">kurze texte über räume, material und zeit</p>',
    '    <ul class="list">',
    ...T.map((x) => '      <li><a class="row" href="/texte/' + x.id + '/"><span class="head">' + x.date + '</span><span class="head">' + esc(x.t) + '</span><span class="sub">' + esc(P.find((p) => p.id === x.project).t) + '</span></a></li>'),
    '    </ul>',
  ].join('\n'),
}));

T.forEach((x, i) => {
  const next = T[(i + 1) % T.length];
  const proj = P.find((p) => p.id === x.project);
  const src = '/assets/projects/' + x.img[0] + '/' + x.img[1];
  const d = dims(src.slice(1));
  const tall = d.h > d.w * 1.05 ? ' tall' : '';
  write('texte/' + x.id + '/index.html', page({
    title: x.t + ' · Nils Kuhlow', desc: x.body[0], section: 'texte',
    body: [
      '    <h1 class="title">' + esc(x.t) + '</h1>',
      '    <p class="meta">' + x.date + ' · zum Projekt <a class="link" href="/arbeiten/' + proj.id + '/">' + esc(proj.t) + '</a></p>',
      '    <div class="text essay">',
      ...x.body.map((t) => '      <p>' + esc(t) + '</p>'),
      '    </div>',
      '    <div class="figures">',
      '      <figure class="fig' + tall + '"><img src="' + src + '" width="' + d.w + '" height="' + d.h + '" alt="' + esc(x.img[2]) + '" loading="lazy"><figcaption>' + esc(x.img[2]) + '</figcaption></figure>',
      '    </div>',
      '    <nav class="pager">',
      '      <a href="/texte/">← texte</a>',
      T.length > 1 ? '      <a href="/texte/' + next.id + '/">' + esc(next.t.toLowerCase()) + ' →</a>' : '',
      '    </nav>',
    ].join('\n'),
  }));
});

P.forEach((p, i) => {
  const next = P[(i + 1) % P.length];
  const fig = ([f, cap], first, indent) => {
    const src = '/assets/projects/' + p.dir + '/' + f;
    const d = dims(src.slice(1));
    const tall = d.h > d.w * 1.05 ? ' tall' : '';
    const load = first ? 'fetchpriority="high"' : 'loading="lazy"';
    return indent + '<figure class="fig' + tall + '"><img src="' + src + '" width="' + d.w + '" height="' + d.h + '" alt="' + esc(p.t + ': ' + cap) + '" ' + load + '><figcaption>' + esc(cap) + '</figcaption></figure>';
  };
  const figs = p.imgs.map((im, k) => fig(im, k === 0 && !p.lead, '      '));
  // *wort* → kursiv (nur im Essay)
  const em = (s) => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
  let picN = 0;
  const pic = ([f, cap]) => {
    const src = '/assets/projects/' + p.dir + '/' + f;
    const d = dims(src.slice(1));
    const load = picN++ === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
    return '      <figure class="pic"><img src="' + src + '" width="' + d.w + '" height="' + d.h + '" alt="' + esc(p.t + ': ' + cap) + '" ' + load + '><figcaption>' + esc(cap) + '</figcaption></figure>';
  };
  let at = 0;
  // Freies Layout: Text bleibt ein zusammenhängender Block, Bilder frei im Raster verteilt
  const fpic = ([f, cap], cls) => pic([f, cap]).replace('<figure class="pic">', '<figure class="pic ' + cls + '">');
  const intro = p.free ? [
    '    <div class="free">',
    fpic(p.free.lead, 'f-lead'),
    '      <div class="read f-text">',
    ...p.essay.map((t, k) => '        <p' + (k === 0 ? ' class="q"' : '') + '>' + em(t) + '</p>'),
    '      </div>',
    '      <div class="f-side">',
    ...p.free.side.map((im) => '  ' + pic(im)),
    '      </div>',
    ...p.free.after.map((im, k) => fpic(im, 'f-' + 'ab'[k])),
    '    </div>',
  ] : p.essay ? [
    ...p.story.flatMap((s, i) => {
      const paras = p.essay.slice(at, at + s.n).map((t, k) => '        <p' + (at + k === 0 ? ' class="q"' : '') + '>' + em(t) + '</p>');
      at += s.n;
      const last = i === p.story.length - 1;
      return [
        '    <section class="pair' + (i === 0 ? ' cover' : '') + '">',
        pic(s.img),
        '      <div class="read">',
        ...paras,
        ...(last && p.refs ? ['        <div class="refs">', '          <p class="k">Referenzen</p>', ...p.refs.map((r) => '          <p>' + esc(r) + '</p>'), '        </div>'] : []),
        '      </div>',
        '    </section>',
      ];
    }),
  ] : [
    '    <div class="text">',
    ...p.text.map((t) => '      <p>' + esc(t) + '</p>'),
    '    </div>',
  ];
  write('arbeiten/' + p.id + '/index.html', page({
    title: p.t + ' · Nils Kuhlow', desc: p.desc || p.text[0], section: 'arbeiten',
    body: [
      '    <h1 class="title">' + esc(p.t) + '</h1>',
      '    <p class="meta">' + esc(p.year + ' · ' + p.meta) + '</p>',
      ...intro,
      ...(figs.length ? ['    <div class="figures">', ...figs, '    </div>'] : []),
      '    <nav class="pager">',
      '      <a href="/arbeiten/">← arbeiten</a>',
      '      <a href="/arbeiten/' + next.id + '/">' + esc(next.t.toLowerCase()) + ' →</a>',
      '    </nav>',
    ].join('\n'),
  }));
});

write('ueber/index.html', page({
  title: 'über · Nils Kuhlow', desc: 'Über Nils Kuhlow: Architekturstudent an der Hochschule Wismar und ausgebildeter Zimmerer.', section: 'ueber',
  body: [
    '    <div class="text first">',
    '      <p>Ich bin Nils Kuhlow, Architekturstudent an der Hochschule Wismar und ausgebildeter Zimmerer. Mein Zugang zur Architektur kommt aus dem Handwerk: vom Material, vom Detail und vom Machen her.</p>',
    '      <p>Mich interessiert Architektur dort, wo Konstruktion, Material und Wahrnehmung ineinandergreifen, in Licht, Proportion, Bewegung und Klang. Konstruktion ist für mich kein technischer Zusatz, sondern Teil des Ausdrucks.</p>',
    '    </div>',
    '    <p class="label">werdegang</p>',
    '    <ul class="list">',
    '      <li><div class="row"><span>2025–</span><span>B.A. Architektur, Hochschule Wismar</span></div></li>',
    '      <li><div class="row"><span>2023–25</span><span>Ausbildung zum Zimmerer, Vechta</span><span class="sub">Gesellenabschluss Juli 2025</span></div></li>',
    '      <li><div class="row"><span>2015–23</span><span>Abitur, Gymnasium Eppendorf, Hamburg</span></div></li>',
    '    </ul>',
    '    <p class="label">sprachen</p>',
    '    <p>Deutsch (Muttersprache) · Englisch (gute Kenntnisse)</p>',
    '    <p class="label">lebenslauf</p>',
    '    <p>auf anfrage, <a class="link" href="/kontakt/">schreib mir</a></p>',
  ].join('\n'),
}));

write('kontakt/index.html', page({
  title: 'kontakt · Nils Kuhlow', desc: 'Kontakt zu Nils Kuhlow.', section: 'kontakt',
  body: [
    '    <p class="intro">für weitere informationen<br>oder meinen lebenslauf: schreib mir.</p>',
    '    <ul class="contact">',
    '      <li><span class="k">e-mail</span><span><a class="link" href="mailto:nils@kuhlow.eu">nils@kuhlow.eu</a></span></li>',
    '      <li><span class="k">telefon</span><span><a class="link" href="tel:+4917664435873">+49 176 64435873</a></span></li>',
    '      <li><span class="k">instagram</span><span><a class="link" href="https://www.instagram.com/nils_klw/" target="_blank" rel="noopener">@nils_klw</a></span></li>',
    '    </ul>',
  ].join('\n'),
}));

write('404.html', page({ title: 'nicht gefunden · Nils Kuhlow', desc: 'Seite nicht gefunden.', section: 'arbeiten',
  body: '    <p>Diese Seite gibt es nicht (mehr). <a class="link" href="/arbeiten/">zu den arbeiten →</a></p>' }));

console.log('ok');
