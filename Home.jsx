// Home.jsx — the landing is the menu. Nothing else: a small wordmark (in Nav) and
// a quiet handwritten list floating in white space. The work is one click away.
const Home = ({ onOpen, setRoute, lang }) => {
  const t = window.I18N[lang];
  const items = [
    { id: 'projects', label: t.nav.projects },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];
  const wrap = { minHeight: '68vh', maxWidth: 1440, margin: '0 auto', padding: '0 40px 120px' };
  const menu = {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    gap: 'clamp(14px, 2.4vw, 30px)',
    paddingLeft: 'clamp(10px, 5vw, 72px)',
    marginTop: 'clamp(56px, 15vh, 160px)',
  };
  const item = {
    fontFamily: 'var(--font-hand)', fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 0.92,
    color: 'var(--fg)', cursor: 'pointer', width: 'fit-content',
  };
  return (
    <section data-screen-label="01 Home" style={wrap}>
      <nav style={menu} aria-label={lang === 'de' ? 'Hauptmenü' : 'Main menu'}>
        {items.map((it) => (
          <button key={it.id} type="button" className="nk-hand-link nk-unbtn" style={item} onClick={() => setRoute(it.id)}>{it.label}</button>
        ))}
      </nav>
    </section>
  );
};

window.Home = Home;
