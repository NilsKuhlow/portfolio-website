// About.jsx — reduced to a single quiet column: a handwritten label, the bio, and
// a minimal CV (no boxes, no rules), floating in white space.
const About = ({ lang }) => {
  const CV = window.CV;
  const L = window.L;
  const t = window.I18N[lang].about;

  const wrap = { maxWidth: 1440, margin: '0 auto', padding: '0 40px 140px' };
  const inner = { paddingLeft: 'clamp(10px, 5vw, 72px)', paddingTop: 'clamp(36px, 9vh, 90px)' };
  const col = 'min(30em, 100%)';
  const hand = { fontFamily: 'var(--font-hand)', fontSize: 28, lineHeight: 1, color: 'var(--fg)', marginBottom: 26 };
  const handSub = { fontFamily: 'var(--font-hand)', fontSize: 23, lineHeight: 1, color: 'var(--fg)', margin: '40px 0 14px' };
  const lede = { fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.62, color: 'var(--fg)', maxWidth: col, margin: '0 0 18px' };
  const body = { fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.68, color: 'var(--fg-muted)', maxWidth: col, margin: '0 0 14px' };
  const eduRow = { maxWidth: col, margin: '0 0 18px' };
  const eduHead = { fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--fg)' };
  const eduYr = { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)', letterSpacing: '0.04em' };
  const eduDet = { fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.6, color: 'var(--fg-muted)', margin: '3px 0 0' };
  const line = { fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.7, color: 'var(--fg-muted)', maxWidth: col };
  const cvLink = { fontFamily: 'var(--font-hand)', fontSize: 22, color: 'var(--fg)', textDecoration: 'none', display: 'inline-block', marginTop: 44 };

  const skills = L(CV.skills, lang).join('   ·   ');
  const langs = CV.languages.map((l) => L(l.l, lang) + ' (' + L(l.level, lang).toLowerCase() + ')').join('   ·   ');

  return (
    <section data-screen-label="03 About" style={wrap}>
      <div style={inner}>
        <div style={hand}>{lang === 'de' ? 'Über mich' : 'About'}</div>
        <p style={lede}>{t.lede}</p>
        {t.p1 && <p style={body}>{t.p1}</p>}
        {t.p2 && <p style={body}>{t.p2}</p>}
        {t.p3 && <p style={body}>{t.p3}</p>}

        <div style={handSub}>{t.sec.education}</div>
        {CV.education.map((e, i) => (
          <div key={i} style={eduRow}>
            <div style={eduHead}><span style={eduYr}>{e.y}</span>{'  '}{L(e.what, lang)}, {L(e.where, lang)}</div>
            <p style={eduDet}>{L(e.detail, lang)}</p>
          </div>
        ))}

        <div style={handSub}>{t.sec.skills}</div>
        <div style={line}>{skills}</div>

        <div style={handSub}>{t.sec.languages}</div>
        <div style={line}>{langs}</div>

        <a className="nk-hand-link" href="cv.pdf" download="Nils_Kuhlow_Lebenslauf.pdf" style={cvLink}>{t.cvBtn}</a>
      </div>
    </section>
  );
};

window.About = About;
