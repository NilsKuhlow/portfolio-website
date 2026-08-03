const Contact = ({ lang }) => {
  const t = window.I18N[lang].contact;
  const wrap = { maxWidth: 1440, margin: "0 auto", padding: "0 40px 160px", minHeight: "60vh" };
  const inner = { paddingLeft: "clamp(10px, 5vw, 72px)", paddingTop: "clamp(60px, 16vh, 160px)" };
  const col = "min(30em, 100%)";
  const hand = { fontFamily: "var(--font-hand)", fontSize: 28, lineHeight: 1, color: "var(--fg)", marginBottom: 26 };
  const lede = { fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.65, color: "var(--fg-muted)", maxWidth: col, margin: "0 0 34px" };
  const row = { fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5, color: "var(--fg)", margin: "0 0 12px", display: "flex", gap: 10, flexWrap: "wrap" };
  const key = { color: "var(--fg-subtle)", minWidth: 84 };
  const a = { color: "var(--fg)", textDecoration: "none", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 1 };
  return /* @__PURE__ */ React.createElement("section", { "data-screen-label": "06 Contact", style: wrap }, /* @__PURE__ */ React.createElement("div", { style: inner }, /* @__PURE__ */ React.createElement("div", { style: hand }, lang === "de" ? "Kontakt" : "Contact"), /* @__PURE__ */ React.createElement("p", { style: lede }, t.lede), /* @__PURE__ */ React.createElement("div", { style: row }, /* @__PURE__ */ React.createElement("span", { style: key }, lang === "de" ? "E-Mail" : "Email"), /* @__PURE__ */ React.createElement("a", { className: "nk-underline", style: a, href: "mailto:nils@kuhlow.eu" }, "nils@kuhlow.eu")), /* @__PURE__ */ React.createElement("div", { style: row }, /* @__PURE__ */ React.createElement("span", { style: key }, lang === "de" ? "Telefon" : "Phone"), /* @__PURE__ */ React.createElement("a", { className: "nk-underline", style: a, href: "tel:+4917664435873" }, "+49 176 64435873")), /* @__PURE__ */ React.createElement("div", { style: row }, /* @__PURE__ */ React.createElement("span", { style: key }, "Instagram"), /* @__PURE__ */ React.createElement("a", { className: "nk-underline", style: a, href: "https://www.instagram.com/nils_klw/", target: "_blank", rel: "noopener noreferrer" }, "@nils_klw")), /* @__PURE__ */ React.createElement("div", { style: row }, /* @__PURE__ */ React.createElement("span", { style: key }, lang === "de" ? "Lebenslauf" : "CV"), /* @__PURE__ */ React.createElement("a", { className: "nk-underline", style: a, href: "cv.pdf", download: "Nils_Kuhlow_Lebenslauf.pdf" }, lang === "de" ? "als PDF" : "as PDF", " \u2193"))));
};
window.Contact = Contact;
