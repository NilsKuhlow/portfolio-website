// ProjectDetail.jsx — bilingual project page
const ProjectDetail = ({ p, onClose, onOpen, lang }) => {
  if (!p) return null;
  const PROJECTS = window.PROJECTS;
  const L = window.L;
  const t = window.I18N[lang].detail;
  const idx = PROJECTS.findIndex(x => x.id === p.id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const wrap = { padding: '64px 40px 0', maxWidth: 1440, margin: '0 auto' };
  const back = { display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg)', cursor: 'pointer', background: 'none', border: 0, padding: 0, marginBottom: 64 };
  const head = { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80, alignItems: 'flex-start', marginBottom: 64 };
  const lblK = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: 6 };
  const lblV = { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)', marginBottom: 22, lineHeight: 1.5 };
  const eyebrow = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
  const big = { fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.025em', margin: '24px 0 0', textWrap: 'balance' };
  const lede = { fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.65, color: 'var(--fg)', margin: '40px 0 0', maxWidth: '34em' };
  const fullImg = { width: '100%', aspectRatio: '16/9', backgroundImage: `url(${p.hero || p.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'var(--paper-2)', marginBottom: 64 };
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

  return (
    <article data-screen-label="05 Project Detail">
      <div className="nk-pad" style={wrap}>
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
            <p style={lede}>{L(p.summary, lang)}</p>
          </div>
        </div>
        <div style={fullImg} role="img" aria-label={L(p.t, lang)}></div>
        <div className="nk-stack" style={body}>
          <div></div>
          <div>
            <p style={para}>{p.bodyP1 ? L(p.bodyP1, lang) : t.bodyP1}</p>
            <p style={para}>{p.bodyP2 ? L(p.bodyP2, lang) : t.bodyP2}</p>
            <blockquote style={q}>{p.pull ? L(p.pull, lang) : t.pull}</blockquote>
            <div style={procH}>{t.process}</div>
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
      <div className="nk-pad" style={stripWrap}>
        <div className="nk-stack" style={stripGrid}>
          <div style={halfImg(p.stripA || 'assets/photo-placeholder-cool.svg')} role="img" aria-label={L(p.t, lang)}></div>
          <div style={halfImg(p.stripB || 'assets/photo-placeholder-stone.svg')} role="img" aria-label={L(p.t, lang)}></div>
        </div>
        <div className="nk-stack" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80, paddingTop: 32, paddingBottom: 32 }}>
          <div style={{ ...lblK, marginTop: 4 }}>{t.caption}</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6, maxWidth: '34em', margin: 0 }}>{p.capText ? L(p.capText, lang) : t.capText}</p>
        </div>
      </div>
      <div className="nk-stack" style={navWrap}>
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
