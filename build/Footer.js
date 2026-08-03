const Footer = ({ setRoute, lang }) => {
  const wrap = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "28px 40px 40px",
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap"
  };
  const txt = { fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.04em", color: "var(--fg-subtle)" };
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ React.createElement("footer", { style: { borderTop: "1px solid var(--hairline)", marginTop: "clamp(64px, 14vh, 140px)" } }, /* @__PURE__ */ React.createElement("div", { style: wrap }, /* @__PURE__ */ React.createElement("span", { style: txt }, "\xA9 ", year, " Nils Kuhlow"), /* @__PURE__ */ React.createElement("span", { style: txt }, lang === "de" ? "Architektur \xB7 Hochschule Wismar" : "Architecture \xB7 Hochschule Wismar")));
};
window.Footer = Footer;
