// Footer.jsx — a single quiet line. Kept off the landing (see app.jsx) so the home
// page stays pure menu-in-white-space.
const Footer = ({ setRoute, lang }) => {
  const wrap = {
    maxWidth: 1440, margin: '0 auto', padding: '28px 40px 40px',
    display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
  };
  const txt = { fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.04em', color: 'var(--fg-subtle)' };
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', marginTop: 'clamp(64px, 14vh, 140px)' }}>
      <div style={wrap}>
        <span style={txt}>© {year} Nils Kuhlow</span>
        <span style={txt}>{lang === 'de' ? 'Architektur · Hochschule Wismar' : 'Architecture · Hochschule Wismar'}</span>
      </div>
    </footer>
  );
};

window.Footer = Footer;
