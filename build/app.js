const { useState, useEffect } = React;
const TWEAK_DEFAULTS = (
  /*EDITMODE-BEGIN*/
  {
    "darkMode": false
  }
);
function App() {
  const [route, setRoute] = useState("home");
  const [project, setProject] = useState(null);
  const [lang, setLang] = useState("de");
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const setDark = (v) => {
    setTweak("darkMode", v);
    try {
      localStorage.setItem("nk-theme", v ? "dark" : "light");
    } catch (e) {
    }
  };
  useEffect(() => {
    let dark = false;
    try {
      const saved = localStorage.getItem("nk-theme");
      dark = saved ? saved === "dark" : false;
    } catch (e) {
    }
    if (dark !== tweaks.darkMode) setTweak("darkMode", dark);
  }, []);
  useEffect(() => {
    document.body.setAttribute("data-theme", tweaks.darkMode ? "dark" : "light");
  }, [tweaks.darkMode]);
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.title = lang === "de" ? "Nils Kuhlow \u2014 Architektur, erstes Studienjahr" : "Nils Kuhlow \u2014 Architecture, year one";
  }, [lang]);
  const openProject = (p) => {
    setProject(p);
    setRoute("project");
    window.scrollTo(0, 0);
  };
  const closeProject = () => {
    setProject(null);
    setRoute("projects");
    window.scrollTo(0, 0);
  };
  const goto = (r) => {
    setRoute(r);
    setProject(null);
    window.scrollTo(0, 0);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, { route: route === "project" ? "projects" : route, setRoute: goto, lang, setLang, dark: tweaks.darkMode, setDark }), route === "home" && /* @__PURE__ */ React.createElement("main", { "data-screen-label": "01 Home" }, /* @__PURE__ */ React.createElement(Home, { onOpen: openProject, setRoute: goto, lang }), /* @__PURE__ */ React.createElement(Footer, { setRoute: goto, lang })), route === "projects" && /* @__PURE__ */ React.createElement("main", { "data-screen-label": "02 Projects" }, /* @__PURE__ */ React.createElement(Projects, { onOpen: openProject, lang }), /* @__PURE__ */ React.createElement(Footer, { setRoute: goto, lang })), route === "about" && /* @__PURE__ */ React.createElement("main", { "data-screen-label": "03 About" }, /* @__PURE__ */ React.createElement(About, { lang }), /* @__PURE__ */ React.createElement(Footer, { setRoute: goto, lang })), route === "contact" && /* @__PURE__ */ React.createElement("main", { "data-screen-label": "06 Contact" }, /* @__PURE__ */ React.createElement(Contact, { lang }), /* @__PURE__ */ React.createElement(Footer, { setRoute: goto, lang })), route === "project" && project && /* @__PURE__ */ React.createElement("main", { "data-screen-label": "05 Project Detail" }, /* @__PURE__ */ React.createElement(ProjectDetail, { p: project, onClose: closeProject, onOpen: openProject, lang }), /* @__PURE__ */ React.createElement(Footer, { setRoute: goto, lang })), /* @__PURE__ */ React.createElement(TweaksPanel, { title: "Tweaks" }, /* @__PURE__ */ React.createElement(TweakSection, { label: "Theme" }, /* @__PURE__ */ React.createElement(TweakToggle, { label: "Dark mode", value: tweaks.darkMode, onChange: setDark }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
