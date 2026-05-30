// Footer.jsx — bilingual
const Footer = ({ setRoute, lang }) => {
  const t = window.I18N[lang].footer;
  const wrap = { padding: '80px 40px 40px', background: 'var(--bg-elevated)', borderTop: '1px solid var(--hairline)' };
  const grid = { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 56, alignItems: 'flex-start' };
  const mark = { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.01em', color: 'var(--fg)', margin: '0 0 16px' };
  const blurb = { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-muted)', margin: 0, maxWidth: 360 };
  const lblK = { fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-subtle)', marginBottom: 16 };
  const linkList = { display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 };
  const linkA = { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg)', cursor: 'pointer', textDecoration: 'none' };
  const addr = { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--fg)', margin: 0, whiteSpace: 'pre-line' };
  const bottom = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 64, paddingTop: 24, borderTop: '1px solid var(--hairline)', flexWrap: 'wrap', gap: 16 };
  const small = { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)', letterSpacing: '0.04em' };

  return (
    <footer className="nk-pad" style={wrap}>
      <div className="nk-footer" style={grid}>
        <div>
          <div style={mark}>Nils Kuhlow</div>
          <p style={blurb}>{t.blurb}</p>
        </div>
        <div>
          <div style={lblK}>{t.site}</div>
          <ul style={linkList}>
            <li><button type="button" className="nk-link nk-unbtn" style={linkA} onClick={() => setRoute('home')}>{t.siteLinks.home}</button></li>
            <li><button type="button" className="nk-link nk-unbtn" style={linkA} onClick={() => setRoute('projects')}>{t.siteLinks.projects}</button></li>
            <li><button type="button" className="nk-link nk-unbtn" style={linkA} onClick={() => setRoute('about')}>{t.siteLinks.about}</button></li>
            <li><button type="button" className="nk-link nk-unbtn" style={linkA} onClick={() => setRoute('contact')}>{t.siteLinks.contact}</button></li>
          </ul>
        </div>
        <div>
          <div style={lblK}>{t.elsewhere}</div>
          <ul style={linkList}>
            <li><a className="nk-link" style={linkA} href="https://www.instagram.com/nils_klw/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div>
          <div style={lblK}>{t.address}</div>
          <p style={addr}>Hochschule Wismar{'\n'}Philipp-Müller-Straße 14{'\n'}23966 Wismar · DE</p>
        </div>
      </div>
      <div style={bottom}>
        <div style={small}>{t.copyright}</div>
        <div style={small}>{t.colophon}</div>
      </div>
    </footer>);

};

window.Footer = Footer;