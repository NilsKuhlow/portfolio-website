// About.jsx — bilingual bio + CV
const About = ({ lang }) => {
  const CV = window.CV;
  const L = window.L;
  const t = window.I18N[lang].about;

  const wrap = { padding: '80px 40px 0', maxWidth: 1440, margin: '0 auto' };
  const head = { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80, alignItems: 'flex-start', marginBottom: 96 };
  const eyebrow = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
  const big = { fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.025em', margin: '24px 0 0', textWrap: 'balance' };
  const lede = { fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.65, color: 'var(--fg)', margin: '40px 0 0', maxWidth: '34em' };
  const body = { fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7, color: 'var(--fg)', maxWidth: '34em', margin: '0 0 24px' };
  const lblK = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: 6 };
  const lblV = { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)', marginBottom: 22, lineHeight: 1.5 };

  const cvSection = { padding: '64px 0', borderTop: '1px solid var(--hairline)' };
  const cvGrid = { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80 };
  const cvHead = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginTop: 4 };
  const row = { display: 'grid', gridTemplateColumns: '110px 1fr', gap: 32, padding: '20px 0', borderBottom: '1px solid var(--hairline)', alignItems: 'flex-start' };
  const rowFirst = { ...row, borderTop: '1px solid var(--fg)' };
  const yr = { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-subtle)', letterSpacing: '0.04em', paddingTop: 4 };
  const what = { fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.2, color: 'var(--fg)', margin: '0 0 4px', letterSpacing: '-0.005em' };
  const where = { fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-muted)', marginBottom: 6 };
  const detail = { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)', lineHeight: 1.6, margin: 0, maxWidth: '34em' };

  const tokenWrap = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, listStyle: 'none', padding: 0, margin: 0 };
  const token = { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)', padding: '8px 0', borderBottom: '1px solid var(--hairline)', display: 'flex', alignItems: 'baseline', gap: 12 };
  const dot = { color: 'var(--fg-subtle)', fontFamily: 'var(--font-mono)', fontSize: 10 };
  const langRow = { display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '10px 0', borderBottom: '1px solid var(--hairline)', alignItems: 'baseline' };

  return (
    <section data-screen-label="03 About">
      <div className="nk-pad" style={wrap}>
        <div className="nk-stack" style={head}>
          <aside>
            <div style={lblK}>{t.bornL}</div><div style={lblV}>{t.bornV}</div>
            <div style={lblK}>{t.livesL}</div><div style={lblV}>{t.livesV}</div>
            <div style={lblK}>{t.studiesL}</div><div style={lblV}>{t.studiesV}</div>
            <div style={lblK}>{t.openL}</div><div style={lblV}>{t.openV}</div>
            <button className="btn nk-cta" onClick={() => alert('CV PDF.')} style={{ marginTop: 8 }}>{t.cvBtn}</button>
          </aside>
          <div>
            <span style={eyebrow}>{t.eyebrow}</span>
            <h1 style={big}>{t.title}</h1>
            <p style={lede}>{t.lede}</p>
            <p style={{ ...body, marginTop: 24 }}>{t.p1}</p>
            <p style={body}>{t.p2}</p>
            {t.p3 && <p style={body}>{t.p3}</p>}
          </div>
        </div>
      </div>

      <div className="nk-pad" style={{ ...wrap, padding: '0 40px' }}>
        <div style={cvSection}><div className="nk-stack" style={cvGrid}>
          <div style={cvHead}>{t.sec.education}</div>
          <div>{CV.education.map((e, i) => (
            <div key={i} style={i === 0 ? rowFirst : row}>
              <div style={yr}>{e.y}</div>
              <div>
                <h4 style={what}>{L(e.what, lang)}</h4>
                <div style={where}>{L(e.where, lang)}</div>
                <p style={detail}>{L(e.detail, lang)}</p>
              </div>
            </div>
          ))}</div>
        </div></div>

        <div style={cvSection}><div className="nk-stack" style={cvGrid}>
          <div style={cvHead}>{t.sec.experience}</div>
          <div>{CV.experience.map((e, i) => (
            <div key={i} style={i === 0 ? rowFirst : row}>
              <div style={yr}>{e.y}</div>
              <div>
                <h4 style={what}>{L(e.what, lang)}</h4>
                <div style={where}>{L(e.where, lang)}</div>
                <p style={detail}>{L(e.detail, lang)}</p>
              </div>
            </div>
          ))}</div>
        </div></div>

        <div style={cvSection}><div className="nk-stack" style={cvGrid}>
          <div style={cvHead}>{t.sec.recognition}</div>
          <div>{CV.recognition.map((e, i) => (
            <div key={i} style={i === 0 ? rowFirst : row}>
              <div style={yr}>{e.y}</div>
              <div>
                <h4 style={what}>{L(e.what, lang)}</h4>
                <div style={where}>{L(e.where, lang)}</div>
              </div>
            </div>
          ))}</div>
        </div></div>

        <div style={cvSection}><div className="nk-stack" style={cvGrid}>
          <div style={cvHead}>{t.sec.skills}</div>
          <ul style={tokenWrap}>{L(CV.skills, lang).map((s, i) => (
            <li key={i} style={token}><span style={dot}>▪</span>{s}</li>
          ))}</ul>
        </div></div>

        <div style={cvSection}><div className="nk-stack" style={cvGrid}>
          <div style={cvHead}>{t.sec.software}</div>
          <ul style={tokenWrap}>{CV.software.map((s, i) => (
            <li key={i} style={token}><span style={dot}>▪</span>{s}</li>
          ))}</ul>
        </div></div>

        <div style={cvSection}><div className="nk-stack" style={cvGrid}>
          <div style={cvHead}>{t.sec.languages}</div>
          <div style={{ borderTop: '1px solid var(--fg)' }}>{CV.languages.map((l, i) => (
            <div key={i} style={langRow}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--fg)' }}>{L(l.l, lang)}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-subtle)', letterSpacing: '0.04em' }}>{L(l.level, lang).toUpperCase()}</div>
            </div>
          ))}</div>
        </div></div>
      </div>
    </section>
  );
};

window.About = About;
