// Home.jsx — EMBT-style overview, bilingual
const { useState: useStateH, useEffect: useEffectH } = React;

const Home = ({ onOpen, setRoute, lang }) => {
  const PROJECTS = window.PROJECTS;
  const L = window.L;
  const t = window.I18N[lang];

  const FEATURED = PROJECTS.slice(0, 5).map(p => ({
    id: p.id, kicker: `${L(p.kicker, lang).toUpperCase()} · ${p.year}`, title: L(p.t, lang), img: p.hero || p.img, project: p,
  }));

  const NEWS_DE = [
    { tag: 'Stegreif',         title: 'ZU WASSER LASSEN — REGATTA IN WENDORF',          body: 'Ein schwimmfähiges Boot aus Karton und Pappmaché, vom 1:20-Modell bis zum 1:1-Bau — und am Strand von Wendorf zu Wasser gelassen.', img: 'assets/projects/zu-wasser-lassen/hero.jpg', shape: 'wide' },
    { tag: 'Installation 1:1', title: 'RANDSTADT — FOLIENTUNNEL IM SCHNEE',             body: 'Ein Folientunnel verdichtet einen Weg in der Randstadt von Wismar: von der Weite in die Enge und zurück ins Freie.', img: 'assets/projects/randstadt-intervention/hero.jpg', shape: 'pano' },
    { tag: 'Guss',             title: 'MASSE UND HOHLRAUM — BETONGUSS IN ERDE',          body: 'Negativräume in Wachs und Beton gegossen, im Verfahren des Glockengusses. Sichtbar bleibt nur der Hohlraum, belichtet über ein Oberlicht.', img: 'assets/projects/masse-und-hohlraum/card.jpg', shape: 'tall' },
    { tag: 'Raumstudie',       title: 'GENIUS LOCI — INNENRÄUME DER STADT',             body: 'Straßen und Plätze als Innenräume der Stadt, gefasst durch Fassaden, Licht und Bewegung — der Körper als räumliches Maß.', img: 'assets/projects/genius-loci/card.jpg', shape: 'tall' },
    { tag: 'Entwurf',          title: 'RAUM – STRUKTUR – HÜLLE — ÜBER DEM PLATTENBAU',   body: 'Eine leichte, parasitäre Struktur legt sich über ein Plattenbau-Ensemble und verbindet die Dächer zu einer gemeinschaftlichen Fläche.', img: 'assets/projects/raum-struktur-huelle/hero.jpg', shape: 'wide' },
    { tag: 'Collage',          title: 'TOR ZUR FREIHEIT',                               body: 'Eine digitale Collage über die Schwelle zwischen Alltag und Freiheit — ein Tor, das es nur auf dem Papier gibt.', img: 'assets/projects/weitere-arbeiten/card.jpg', shape: 'tall' },
  ];
  const NEWS_EN = [
    { tag: 'Workshop',         title: 'SET AFLOAT — REGATTA AT WENDORF',                body: 'A buoyant boat of cardboard and papier-mâché, from a 1:20 model to a full-size build — and launched on the beach at Wendorf.', img: 'assets/projects/zu-wasser-lassen/hero.jpg', shape: 'wide' },
    { tag: 'Installation 1:1', title: 'EDGE-CITY — A FOIL TUNNEL IN SNOW',              body: 'A foil tunnel condenses a path on the edge of Wismar: from openness into compression and back into the open.', img: 'assets/projects/randstadt-intervention/hero.jpg', shape: 'pano' },
    { tag: 'Casting',          title: 'MASS AND VOID — CONCRETE CAST IN EARTH',         body: 'Voids cast in wax and concrete, after the technique of bell-casting. Only the hollow space remains, lit through a skylight.', img: 'assets/projects/masse-und-hohlraum/card.jpg', shape: 'tall' },
    { tag: 'Spatial study',    title: 'GENIUS LOCI — INTERIORS OF THE CITY',            body: 'Streets and squares as interiors of the city, held by façades, light and movement — the body as a spatial measure.', img: 'assets/projects/genius-loci/card.jpg', shape: 'tall' },
    { tag: 'Design',           title: 'SPACE – STRUCTURE – SKIN — OVER THE PREFAB',     body: 'A light, parasitic structure laid over a prefab housing ensemble, joining the roofs into a shared surface.', img: 'assets/projects/raum-struktur-huelle/hero.jpg', shape: 'wide' },
    { tag: 'Collage',          title: 'GATE TO FREEDOM',                                body: 'A digital collage on the threshold between everyday life and freedom — a gate that exists only on paper.', img: 'assets/projects/weitere-arbeiten/card.jpg', shape: 'tall' },
  ];
  const NEWS = lang === 'de' ? NEWS_DE : NEWS_EN;

  const Featured = () => {
    const [i, setI] = useStateH(0);
    const item = FEATURED[i];
    useEffectH(() => {
      const timer = setInterval(() => setI((x) => (x + 1) % FEATURED.length), 9000);
      return () => clearInterval(timer);
    }, []);
    const wrap = { padding: '64px 80px 96px', maxWidth: 1440, margin: '0 auto' };
    const grid = { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: 64, alignItems: 'end' };
    const figure = { position: 'relative', aspectRatio: '16 / 9', background: `var(--paper-2) url(${item.img}) center/cover no-repeat`, cursor: 'pointer' };
    const number = { position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: '#FFFFFF', letterSpacing: '0.06em', mixBlendMode: 'difference' };
    const captionWrap = { display: 'flex', flexDirection: 'column', gap: 28, paddingBottom: 4 };
    const kicker = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
    const title = { fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(1.75rem, 2.4vw, 2.4rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--fg)', margin: 0, textWrap: 'pretty' };
    const dotsRow = { display: 'flex', gap: 6, alignItems: 'center', marginTop: 8 };
    const dot = (active) => ({ width: active ? 28 : 8, height: 2, background: active ? 'var(--accent)' : 'var(--hairline-strong)', border: 0, padding: 0, cursor: 'pointer', transition: 'width 240ms ease, background 240ms ease' });
    const cta = { alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', border: 0, padding: '14px 0', color: 'var(--fg)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', borderTop: '1px solid var(--fg)' };
    return (
      <section className="nk-pad" style={wrap}>
        <div className="nk-stack" style={grid}>
          <div className="nk-fig" style={figure} role="button" tabIndex={0} aria-label={item.title}
            onClick={() => onOpen(item.project)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(item.project); } }}>
            <span style={number}>{String(i + 1).padStart(2, '0')} / {String(FEATURED.length).padStart(2, '0')}</span>
          </div>
          <div style={captionWrap}>
            <span style={kicker}>{item.kicker}</span>
            <h1 style={title}>{item.title}</h1>
            <button className="nk-cta" style={cta} onClick={() => onOpen(item.project)}>{t.home.readProject}</button>
            <div style={dotsRow}>
              {FEATURED.map((_, k) => (
                <button key={k} style={dot(k === i)} onClick={() => setI(k)} aria-label={(lang === 'de' ? 'Projekt ' : 'Project ') + (k + 1)} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const NewsMosaic = () => {
    const wrap = { padding: '0 80px 120px', maxWidth: 1440, margin: '0 auto' };
    const head = { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 56, borderTop: '1px solid var(--hairline)', marginBottom: 56 };
    const eyebrow = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
    const all = { fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg)', cursor: 'pointer' };
    const grid = { columnCount: 3, columnGap: 32 };
    const cardWrap = { breakInside: 'avoid', WebkitColumnBreakInside: 'avoid', pageBreakInside: 'avoid', display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 64 };
    const RATIOS = { tall: '3 / 4', wide: '4 / 3', square: '1 / 1', pano: '16 / 9' };
    const ar = (shape) => ({ aspectRatio: RATIOS[shape] || '4 / 3', background: 'var(--paper-2)', backgroundSize: 'cover', backgroundPosition: 'center' });
    const tagS = { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)', letterSpacing: '0.04em' };
    const ttlS = { fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.2, margin: 0, letterSpacing: '-0.005em', color: 'var(--fg)' };
    const bodyS = { fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0 };
    return (
      <section className="nk-pad" style={wrap}>
        <div style={head}>
          <span style={eyebrow}>{t.home.newsHead}</span>
          <button type="button" className="nk-link nk-unbtn" style={all} onClick={() => setRoute('projects')}>{t.home.allProjects}</button>
        </div>
        <div className="nk-news" style={grid}>
          {NEWS.map((n, i) => (
            <article key={i} style={cardWrap}>
              <div role="img" aria-label={n.title} style={{ ...ar(n.shape), backgroundImage: `url(${n.img})` }} />
              <div style={tagS}>{n.tag.toUpperCase()}</div>
              <h3 style={ttlS}>{n.title}</h3>
              <p style={bodyS}>{n.body}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 80, textAlign: 'center' }}>
          <button type="button" className="nk-link nk-unbtn" style={{ ...all, borderBottom: '1px solid var(--fg)', paddingBottom: 6 }} onClick={() => setRoute('about')}>{t.home.aboutLink}</button>
        </div>
      </section>
    );
  };

  // Short positioning band — who I am, surfaced right after the featured work.
  // Reuses the bilingual About strings so there is a single source of truth.
  const Intro = () => {
    const a = t.about;
    const wrap = { padding: '0 80px 96px', maxWidth: 1440, margin: '0 auto' };
    const top = { borderTop: '1px solid var(--hairline)', paddingTop: 56, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: 64, alignItems: 'start' };
    const eyebrow = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
    const statement = { fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(1.75rem, 3vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--fg)', margin: '20px 0 28px', textWrap: 'balance', maxWidth: '14em' };
    const lede = { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.65, color: 'var(--fg-muted)', margin: 0, maxWidth: '38em' };
    const cta = { display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28, background: 'transparent', border: 0, borderTop: '1px solid var(--fg)', padding: '14px 0', color: 'var(--fg)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer' };
    const facts = { display: 'flex', flexDirection: 'column', gap: 22 };
    const fLbl = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)', display: 'block', marginBottom: 6 };
    const fVal = { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.5, color: 'var(--fg)' };
    return (
      <section className="nk-pad" style={wrap}>
        <div className="nk-stack" style={top}>
          <div>
            <span style={eyebrow}>{a.eyebrow}</span>
            <h2 style={statement}>{a.title}</h2>
            <p style={lede}>{a.lede}</p>
            <button className="nk-cta" style={cta} onClick={() => setRoute('about')}>{t.home.aboutLink}</button>
          </div>
          <div style={facts}>
            <div>
              <span style={fLbl}>{a.studiesL}</span>
              <div style={fVal}>{a.studiesV}</div>
            </div>
            <div>
              <span style={fLbl}>{a.openL}</span>
              <div style={fVal}>{a.openV}</div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (<><Featured /><Intro /><NewsMosaic /></>);
};

window.Home = Home;
