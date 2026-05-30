// app.jsx — application root (extracted from index.html so it can be precompiled).
// Relies on the global React/ReactDOM (vendor/) and the component globals defined
// by the other build/*.js files loaded before it.
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "darkMode": false
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = useState('home');
  const [project, setProject] = useState(null);
  const [lang, setLang] = useState('de');
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Toggle + remember an explicit choice (OS preference wins until then).
  const setDark = (v) => {
    setTweak('darkMode', v);
    try { localStorage.setItem('nk-theme', v ? 'dark' : 'light'); } catch (e) {}
  };

  // First load: follow a saved choice, otherwise the OS colour scheme.
  useEffect(() => {
    let dark = false;
    try {
      const saved = localStorage.getItem('nk-theme');
      dark = saved ? saved === 'dark'
                   : window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {}
    if (dark !== tweaks.darkMode) setTweak('darkMode', dark);
  }, []);

  // Reflect the active theme on <body>.
  useEffect(() => {
    document.body.setAttribute('data-theme', tweaks.darkMode ? 'dark' : 'light');
  }, [tweaks.darkMode]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.title = lang === 'de'
      ? 'Nils Kuhlow — Architektur, erstes Studienjahr'
      : 'Nils Kuhlow — Architecture, year one';
  }, [lang]);

  const openProject = (p) => { setProject(p); setRoute('project'); window.scrollTo(0,0); };
  const closeProject = () => { setProject(null); setRoute('projects'); window.scrollTo(0,0); };
  const goto = (r) => { setRoute(r); setProject(null); window.scrollTo(0,0); };

  return (
    <>
      <Nav route={route === 'project' ? 'projects' : route} setRoute={goto} lang={lang} setLang={setLang} dark={tweaks.darkMode} setDark={setDark} />
      {route === 'home' && (
        <main data-screen-label="01 Home">
          <Home onOpen={openProject} setRoute={goto} lang={lang} />
          <Footer setRoute={goto} lang={lang} />
        </main>
      )}
      {route === 'projects' && (
        <main data-screen-label="02 Projects">
          <Projects onOpen={openProject} lang={lang} />
          <Footer setRoute={goto} lang={lang} />
        </main>
      )}
      {route === 'about' && (
        <main data-screen-label="03 About">
          <About lang={lang} />
          <Footer setRoute={goto} lang={lang} />
        </main>
      )}
      {route === 'contact' && (
        <main data-screen-label="06 Contact">
          <Contact lang={lang} />
          <Footer setRoute={goto} lang={lang} />
        </main>
      )}
      {route === 'project' && project && (
        <main data-screen-label="05 Project Detail">
          <ProjectDetail p={project} onClose={closeProject} onOpen={openProject} lang={lang} />
          <Footer setRoute={goto} lang={lang} />
        </main>
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakToggle label="Dark mode" value={tweaks.darkMode} onChange={setDark} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
