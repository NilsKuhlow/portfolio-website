// ProjectDetail.jsx — bilingual project page
// Each project can compose its own page: hero ratio + full-bleed, and a flexible
// image gallery (p.gallery). Falls back to the classic two-image strip when a
// project defines no gallery.
const ProjectDetail = ({ p, onClose, onOpen, lang }) => {
  if (!p) return null;
  const PROJECTS = window.PROJECTS;
  const L = window.L;
  const t = window.I18N[lang].detail;
  const idx = PROJECTS.findIndex(x => x.id === p.id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const padWrap = { maxWidth: 1440, margin: '0 auto', padding: '0 40px' };
  const topWrap = { ...padWrap, padding: '64px 40px 0' };
  const back = { display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg)', cursor: 'pointer', background: 'none', border: 0, padding: 0, marginBottom: 64 };
  const head = { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80, alignItems: 'flex-start', marginBottom: 64 };
  const lblK = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: 6 };
  const lblV = { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)', marginBottom: 22, lineHeight: 1.5 };
  const eyebrow = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
  const big = { fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.025em', margin: '24px 0 0', textWrap: 'balance' };
  const lede = { fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.65, color: 'var(--fg)', margin: '40px 0 0', maxWidth: '34em' };
  const heroRatio = p.heroRatio || '16/9';
  const heroImg = { width: '100%', aspectRatio: heroRatio, backgroundImage: `url(${p.hero || p.img})`, backgroundSize: 'cover', backgroundPosition: p.heroPos || 'center', backgroundColor: 'var(--paper-2)', marginBottom: 64 };
  const body = { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80, paddingBottom: 96, borderBottom: '1px solid var(--hairline)' };
  const para = { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7, color: 'var(--fg)', maxWidth: '34em', margin: '0 0 24px' };
  const procH = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginTop: 56, marginBottom: 16 };
  const procList = { listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--hairline)' };
  const procLi = { padding: '14px 0', borderBottom: '1px solid var(--hairline)', display: 'flex', alignItems: 'baseline', gap: 16, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)' };
  const procDot = { color: 'var(--fg-subtle)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', minWidth: 32 };
  const stripWrap = { padding: '96px 40px 0', maxWidth: 1440, margin: '0 auto' };
  const stripGrid = { display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, marginBottom: 32 };
  const halfImg = (src) => ({ aspectRatio: '4/3', backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'var(--paper-2)' });
  const q = { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 26, lineHeight: 1.3, margin: '40px 0 0', paddingLeft: 22, borderLeft: '2px solid var(--fg)', color: 'var(--fg)' };
  const navWrap = { padding: '64px 40px 96px', maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 };
  const navCard = { cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 24, borderTop: '1px solid var(--hairline)' };
  const navK = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
  const navTtl = { fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--fg)', margin: 0, letterSpacing: '-0.005em' };

  // ── Hero ────────────────────────────────────────────────────────────────────
  const heroEl = p.heroFull
    ? <div className="nk-bleed" style={heroImg} role="img" aria-label={L(p.t, lang)}></div>
    : <div style={padWrap}><div style={heroImg} role="img" aria-label={L(p.t, lang)}></div></div>;

  // ── Live site: external link + embedded iframe (p.liveUrl / p.embed) ──────────
  const liveBtn = { display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, padding: '12px 22px', border: '1px solid var(--fg)', borderRadius: 999, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg)', textDecoration: 'none' };
  const liveLink = p.liveUrl ? (
    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="nk-link" style={liveBtn}>
      {p.linkLabel ? L(p.linkLabel, lang) : (lang === 'de' ? 'Website live öffnen ↗' : 'Open the live site ↗')}
    </a>
  ) : null;
  const embedEl = (p.embed && p.liveUrl) ? (
    <div className="nk-pad" style={{ maxWidth: 1440, margin: '0 auto', padding: '96px 40px 0' }}>
      <div style={{ ...procH, marginTop: 0, scrollMarginTop: 84 }} data-sec="Live">{lang === 'de' ? 'Live ausprobieren' : 'Try it live'}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe src={p.liveUrl} title={L(p.t, lang)} loading="lazy" allow="geolocation; clipboard-write"
          style={{ width: '100%', maxWidth: 412, height: 800, border: '1px solid var(--hairline)', borderRadius: 22, background: 'var(--paper-2)' }}></iframe>
      </div>
      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="nk-link" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-subtle)', textDecoration: 'none' }}>
          {lang === 'de' ? 'Im neuen Tab öffnen ↗' : 'Open in a new tab ↗'}
        </a>
      </p>
    </div>
  ) : null;

  // ── Gallery (flexible) or classic strip fallback ─────────────────────────────
  const galleryGrid = p.gallery ? (
    <div className="nk-gallery">
      {p.gallery.map((g, i) => (
        <figure key={i} className={'nk-gitem' + (g.wide ? ' nk-gitem-wide' : '')}>
          <div className="nk-fig" style={{ aspectRatio: g.r || '4/3', backgroundImage: `url(${g.src})`, backgroundSize: g.fit || 'cover', backgroundPosition: g.pos || 'center', backgroundRepeat: 'no-repeat', backgroundColor: g.bg || 'var(--paper-2)' }} role="img" aria-label={(g.cap && L(g.cap, lang)) || L(p.t, lang)}></div>
          {(g.lbl || g.cap) && (
            <figcaption className="nk-gcap">
              {g.lbl && <span className="nk-gcap-k">{L(g.lbl, lang)}{g.cap ? ' · ' : ''}</span>}
              {g.cap && L(g.cap, lang)}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  ) : null;

  const capRow = (dark) => (p.capText ? (
    <div className="nk-stack" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80, paddingTop: 32, paddingBottom: 32 }}>
      <div style={{ ...lblK, marginTop: 4, color: dark ? '#B3B3B3' : 'var(--fg-subtle)' }}>{t.caption}</div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: dark ? '#D9D9D9' : 'var(--fg-muted)', lineHeight: 1.6, maxWidth: '34em', margin: 0 }}>{L(p.capText, lang)}</p>
    </div>
  ) : null);

  // Long-form article (blog mode) — used when a project defines p.article
  const aColMax = 720;
  const aH = { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.25, letterSpacing: '-0.01em', color: 'var(--fg)', maxWidth: aColMax, margin: '64px auto 18px' };
  const aP = { fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.8, color: 'var(--fg)', maxWidth: aColMax, margin: '0 auto 22px' };
  const aQ = { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', lineHeight: 1.3, color: 'var(--fg)', maxWidth: aColMax, margin: '52px auto', paddingLeft: 22, borderLeft: '2px solid var(--fg)' };
  const aFig = { margin: '52px 0' };
  const aCap = { fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-subtle)', lineHeight: 1.5, margin: '12px auto 0', maxWidth: aColMax };
  const articleEl = p.article ? (
    <div className="nk-pad" style={{ maxWidth: 1080, margin: '0 auto', padding: '8px 40px 0' }}>
      <span data-sec={lang === 'de' ? 'Auftakt' : 'Opening'} aria-hidden="true" style={{ display: 'block', height: 0, scrollMarginTop: 84 }}></span>
      {p.article.map((b, i) => {
        if (b.h) return <h2 key={i} data-sec={shortSec(L(b.h, lang))} style={{ ...aH, scrollMarginTop: 84 }}>{L(b.h, lang)}</h2>;
        if (b.q) return <blockquote key={i} style={aQ}>{L(b.q, lang)}</blockquote>;
        if (b.img) return (
          <figure key={i} style={aFig}>
            <div style={{ aspectRatio: b.r || '3/2', backgroundImage: `url(${b.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'var(--paper-2)' }} role="img" aria-label={b.cap ? L(b.cap, lang) : L(p.t, lang)}></div>
            {b.cap && <figcaption style={aCap}>{L(b.cap, lang)}</figcaption>}
          </figure>
        );
        return <p key={i} style={aP}>{L(b.p, lang)}</p>;
      })}
    </div>
  ) : null;

  let imageSection;
  if (p.gallery && p.galleryDark) {
    imageSection = (
      <div className="nk-band-dark nk-bleed" data-sec={lang === 'de' ? 'Material' : 'Material'} style={{ marginTop: 96, scrollMarginTop: 84 }}>
        <div style={{ ...padWrap, padding: '76px 40px' }}>
          {galleryGrid}
          {capRow(true)}
        </div>
      </div>
    );
  } else if (p.gallery) {
    imageSection = (
      <div className="nk-pad" data-sec={lang === 'de' ? 'Material' : 'Material'} style={{ ...stripWrap, scrollMarginTop: 84 }}>
        {galleryGrid}
        {capRow(false)}
      </div>
    );
  } else {
    imageSection = (
      <div className="nk-pad" data-sec={lang === 'de' ? 'Material' : 'Material'} style={{ ...stripWrap, scrollMarginTop: 84 }}>
        <div className="nk-stack" style={stripGrid}>
          <div style={halfImg(p.stripA || 'assets/photo-placeholder-cool.svg')} role="img" aria-label={L(p.t, lang)}></div>
          <div style={halfImg(p.stripB || 'assets/photo-placeholder-stone.svg')} role="img" aria-label={L(p.t, lang)}></div>
        </div>
        {capRow(false)}
      </div>
    );
  }

  return (
    <article data-screen-label="05 Project Detail">
      <SectionRail key={p.id} p={p} lang={lang} />
      <div className="nk-pad" style={topWrap}>
        <button type="button" className="nk-link" style={back} onClick={onClose}>{t.back}</button>
        <div className="nk-stack" style={head}>
          <aside>
            <div style={lblK}>{t.project}</div><div style={lblV}>{String(idx + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}</div>
            <div style={lblK}>{t.location}</div><div style={lblV}>{L(p.location, lang)}</div>
            <div style={lblK}>{t.date}</div><div style={lblV}>{p.year}</div>
            <div style={lblK}>{t.semester}</div><div style={lblV}>{L(p.semester, lang)}</div>
            <div style={lblK}>{t.typology}</div><div style={lblV}>{L(p.tag, lang)}</div>
            <div style={lblK}>{t.status}</div><div style={lblV}>{L(p.status, lang)}</div>
            <div style={lblK}>{t.role}</div><div style={lblV}>{L(p.role, lang)}</div>
          </aside>
          <div>
            <span style={eyebrow}>{L(p.kicker, lang)}</span>
            <h1 style={big}>{L(p.t, lang)}</h1>
            <p style={{ ...lede, scrollMarginTop: 84 }} data-sec={p.article ? undefined : (lang === 'de' ? 'Konzept' : 'Concept')}>{L(p.summary, lang)}</p>
            {liveLink}
          </div>
        </div>
      </div>
      {heroEl}
      {p.article ? articleEl : (<React.Fragment>
      <div className="nk-pad" style={padWrap}>
        <div className="nk-stack" style={body}>
          <div></div>
          <div>
            <p style={para}>{p.bodyP1 ? L(p.bodyP1, lang) : t.bodyP1}</p>
            <p style={para}>{p.bodyP2 ? L(p.bodyP2, lang) : t.bodyP2}</p>
            <blockquote style={q}>{p.pull ? L(p.pull, lang) : t.pull}</blockquote>
            <div style={{ ...procH, scrollMarginTop: 84 }} data-sec={lang === 'de' ? 'Prozess' : 'Process'}>{t.process}</div>
            <ul style={procList}>
              {L(p.process, lang).map((step, i) => (
                <li key={i} style={procLi}>
                  <span style={procDot}>P/{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {embedEl}
      {imageSection}
      </React.Fragment>)}
      <div className="nk-stack" data-rail-stop="true" style={navWrap}>
        <div className="nk-card" style={navCard} role="button" tabIndex={0} onClick={() => onOpen(prev)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(prev); } }}>
          <span style={navK}>{t.prev}</span>
          <h3 className="nk-card-ttl" style={navTtl}>{L(prev.t, lang)}</h3>
        </div>
        <div className="nk-card" style={{ ...navCard, textAlign: 'right' }} role="button" tabIndex={0} onClick={() => onOpen(next)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(next); } }}>
          <span style={navK}>{t.next}</span>
          <h3 className="nk-card-ttl" style={navTtl}>{L(next.t, lang)}</h3>
        </div>
      </div>
    </article>
  );
};

window.ProjectDetail = ProjectDetail;
