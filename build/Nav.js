const Nav = ({ route, setRoute, lang, setLang, dark, setDark }) => {
  const t = window.I18N[lang];
  const isHome = route === "home";
  const nav = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "var(--bg)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "26px 40px 20px",
    gap: 24
  };
  const mark = {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 1.12,
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "var(--fg)",
    cursor: "pointer"
  };
  const right = { display: "flex", alignItems: "baseline", gap: "clamp(18px, 3vw, 34px)", flexWrap: "wrap", justifyContent: "flex-end" };
  const menu = { display: "flex", alignItems: "baseline", gap: "clamp(16px, 2.4vw, 30px)" };
  const link = (active) => ({
    fontFamily: "var(--font-hand)",
    fontSize: 24,
    lineHeight: 1,
    color: "var(--fg)",
    opacity: active ? 1 : 0.5,
    cursor: "pointer",
    paddingBottom: 2,
    textDecoration: active ? "underline" : "none",
    textDecorationThickness: "1px",
    textUnderlineOffset: "6px"
  });
  const ctrls = { display: "flex", alignItems: "center", gap: 14, alignSelf: "center" };
  const langBtn = (active) => ({
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: active ? "var(--fg)" : "var(--fg-subtle)",
    cursor: "pointer"
  });
  const themeBtn = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--fg-subtle)",
    cursor: "pointer",
    lineHeight: 0,
    transition: "color 160ms cubic-bezier(0.2,0,0,1)"
  };
  const items = [
    { id: "projects", label: t.nav.projects },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact }
  ];
  const sun = /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "4.2" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" }));
  const moon = /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M20.5 13.2A7.6 7.6 0 1 1 10.8 3.5a6 6 0 0 0 9.7 9.7z" }));
  return /* @__PURE__ */ React.createElement("nav", { style: nav }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "nk-unbtn", style: mark, onClick: () => setRoute("home"), "aria-label": "Nils Kuhlow \u2014 Startseite" }, "Nils", /* @__PURE__ */ React.createElement("br", null), "Kuhlow"), /* @__PURE__ */ React.createElement("div", { className: "nk-navlinks", style: right }, !isHome && /* @__PURE__ */ React.createElement("div", { style: menu }, items.map((it) => /* @__PURE__ */ React.createElement("button", { key: it.id, type: "button", className: "nk-hand-link nk-unbtn", style: link(route === it.id), onClick: () => setRoute(it.id) }, it.label))), /* @__PURE__ */ React.createElement("div", { style: ctrls }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("button", { type: "button", className: "nk-unbtn", style: langBtn(lang === "de"), onClick: () => setLang("de") }, "DE"), /* @__PURE__ */ React.createElement("span", { style: { margin: "0 5px", color: "var(--fg-subtle)" } }, "\xB7"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "nk-unbtn", style: langBtn(lang === "en"), onClick: () => setLang("en") }, "EN")), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "nk-unbtn",
      style: themeBtn,
      onClick: () => setDark(!dark),
      onMouseEnter: (e) => e.currentTarget.style.color = "var(--fg)",
      onMouseLeave: (e) => e.currentTarget.style.color = "var(--fg-subtle)",
      "aria-pressed": dark,
      "aria-label": t.nav.theme,
      title: t.nav.theme
    },
    dark ? sun : moon
  ))));
};
window.Nav = Nav;
