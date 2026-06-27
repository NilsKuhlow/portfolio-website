// Nav.jsx — EMBT-style: wordmark left, minimal links right, language toggle
const Nav = ({ route, setRoute, lang, setLang, dark, setDark }) => {
  const t = window.I18N[lang];
  const navStyle = {
    height: 64, position: 'sticky', top: 0, zIndex: 50,
    background: 'var(--bg)', borderBottom: '1px solid var(--hairline)',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px',
  };
  const markStyle = {
    fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 22,
    letterSpacing: '-0.01em', color: 'var(--fg)', cursor: 'pointer',
    textDecoration: 'none',
  };
  const linksStyle = { display: 'flex', gap: 32, alignItems: 'center' };
  const linkBase = (active) => ({
    fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: 'var(--fg)', cursor: 'pointer', textDecoration: 'none',
    paddingBottom: 4, borderBottom: '1px solid',
    borderBottomColor: active ? 'var(--fg)' : 'transparent',
    transition: 'border-color 160ms cubic-bezier(0.2,0,0,1)',
  });
  const items = [
    { id: 'projects', label: t.nav.projects },
    { id: 'about',    label: t.nav.about },
    { id: 'contact',  label: t.nav.contact },
  ];
  const langBtn = (active) => ({
    fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: active ? 'var(--fg)' : 'var(--fg-subtle)',
    background: 'none', border: 0, padding: 0, cursor: 'pointer',
  });
  const themeBtn = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: 'none', border: 0, padding: 0, cursor: 'pointer', lineHeight: 0,
    color: 'var(--fg-subtle)', transition: 'color 160ms cubic-bezier(0.2,0,0,1)',
  };
  const sun = (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
    </svg>
  );
  const moon = (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 13.2A7.6 7.6 0 1 1 10.8 3.5a6 6 0 0 0 9.7 9.7z" />
    </svg>
  );
  return (
    <nav style={navStyle}>
      <button type="button" className="nk-link nk-unbtn" style={markStyle} onClick={() => setRoute('home')}>Nils Kuhlow</button>
      <div className="nk-navlinks" style={linksStyle}>
        {items.map(it => (
          <button type="button" key={it.id} className="nk-underline nk-unbtn" style={linkBase(route === it.id)} onClick={() => setRoute(it.id)}>{it.label}</button>
        ))}
        <span style={{ color: 'var(--fg-subtle)', fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.18em' }}>
          <button className="nk-link" style={langBtn(lang === 'de')} onClick={() => setLang('de')}>DE</button>
          <span style={{ margin: '0 6px', color: 'var(--fg-subtle)' }}>·</span>
          <button className="nk-link" style={langBtn(lang === 'en')} onClick={() => setLang('en')}>EN</button>
        </span>
        <button
          type="button"
          style={themeBtn}
          onClick={() => setDark(!dark)}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-subtle)')}
          aria-pressed={dark}
          aria-label={t.nav.theme}
          title={t.nav.theme}
        >
          {dark ? sun : moon}
        </button>
      </div>
    </nav>
  );
};

window.Nav = Nav;
