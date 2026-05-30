// Contact.jsx — bilingual
const Contact = ({ lang }) => {
  const t = window.I18N[lang].contact;
  const wrap = { padding: '120px 40px', maxWidth: 1440, margin: '0 auto', minHeight: '60vh' };
  const grid = { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80 };
  const eyebrow = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
  const big = { fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.025em', margin: '24px 0 0', textWrap: 'balance' };
  const lede = { fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.65, color: 'var(--fg)', margin: '40px 0 56px', maxWidth: '34em' };
  const linkRow = { display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '20px 0', borderBottom: '1px solid var(--hairline)', alignItems: 'baseline' };
  const linkFirst = { ...linkRow, borderTop: '1px solid var(--fg)' };
  const lk = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)' };
  const lv = { fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--fg)', letterSpacing: '-0.005em' };
  const a = { color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--hairline-strong)', paddingBottom: 2 };
  const lblK = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: 6 };
  const lblV = { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)', marginBottom: 22, lineHeight: 1.5 };

  return (
    <section className="nk-pad" style={wrap} data-screen-label="06 Contact">
      <div className="nk-stack" style={grid}>
        <aside>
          <div style={lblK}>{t.replyL}</div><div style={lblV}>{t.replyV}</div>
          <div style={lblK}>{t.langsL}</div><div style={lblV}>{t.langsV}</div>
          <div style={lblK}>{t.bestL}</div><div style={lblV}>{t.bestV}</div>
        </aside>
        <div>
          <span style={eyebrow}>{t.eyebrow}</span>
          <h1 style={big}>{t.title}</h1>
          <p style={lede}>{t.lede}</p>
          <div>
            <div className="nk-stack" style={linkFirst}>
              <span style={lk}>{t.lbls.email}</span>
              <span style={lv}><a className="nk-underline" style={a} href="mailto:nils@nilskuhlow.de">nils@nilskuhlow.de</a></span>
            </div>
            <div className="nk-stack" style={linkRow}>
              <span style={lk}>{t.lbls.studio}</span>
              <span style={lv}><a className="nk-underline" style={a} href="mailto:nils.kuhlow@hs-wismar.de">nils.kuhlow@hs-wismar.de</a></span>
            </div>
            <div className="nk-stack" style={linkRow}>
              <span style={lk}>{t.lbls.phone}</span>
              <span style={{ ...lv, fontFamily: 'var(--font-mono)', fontSize: 18, letterSpacing: '0.04em' }}>0176 644 358 73</span>
            </div>
            <div className="nk-stack" style={linkRow}>
              <span style={lk}>{t.lbls.insta}</span>
              <span style={lv}><a className="nk-underline" style={a} href="#">@nils_klw</a></span>
            </div>
            <div className="nk-stack" style={linkRow}>
              <span style={lk}>{t.lbls.person}</span>
              <span style={lv}>{t.personV}</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

window.Contact = Contact;