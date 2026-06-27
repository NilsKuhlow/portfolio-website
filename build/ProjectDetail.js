function shortSec(s) {
  if (!s) return "";
  let x = String(s).split(/[:–—]/)[0].trim().replace(/\s+/g, " ");
  if (x.length <= 20) return x;
  const stop = { und: 1, and: 1, im: 1, in: 1, der: 1, die: 1, das: 1, den: 1, of: 1, the: 1, zur: 1, zum: 1, mit: 1, "f\xFCr": 1, nach: 1, vor: 1, als: 1, am: 1, ein: 1, eine: 1 };
  let w = x.split(" ").slice(0, 2);
  if (w.length > 1 && stop[w[1].toLowerCase()]) w = w.slice(0, 1);
  return w.join(" ");
}
const ProjectDetail = ({ p, onClose, onOpen, lang }) => {
  if (!p) return null;
  const PROJECTS = window.PROJECTS;
  const L = window.L;
  const t = window.I18N[lang].detail;
  const idx = PROJECTS.findIndex((x) => x.id === p.id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const padWrap = { maxWidth: 1440, margin: "0 auto", padding: "0 40px" };
  const topWrap = { ...padWrap, padding: "64px 40px 0" };
  const back = { display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg)", cursor: "pointer", background: "none", border: 0, padding: 0, marginBottom: 64 };
  const head = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, alignItems: "flex-start", marginBottom: 64 };
  const lblK = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)", marginBottom: 6 };
  const lblV = { fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg)", marginBottom: 22, lineHeight: 1.5 };
  const eyebrow = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)" };
  const big = { fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.025em", margin: "24px 0 0", textWrap: "balance" };
  const lede = { fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.65, color: "var(--fg)", margin: "40px 0 0", maxWidth: "32em" };
  const heroRatio = p.heroRatio || "16/9";
  const heroImg = { width: "100%", aspectRatio: heroRatio, backgroundImage: `url(${p.hero || p.img})`, backgroundSize: "cover", backgroundPosition: p.heroPos || "center", backgroundColor: "var(--paper-2)", marginBottom: 64 };
  const body = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, paddingBottom: 96, borderBottom: "1px solid var(--hairline)" };
  const para = { fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7, color: "var(--fg)", maxWidth: "32em", margin: "0 0 24px" };
  const procH = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)", marginTop: 56, marginBottom: 16 };
  const procList = { listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--hairline)" };
  const procLi = { padding: "14px 0", borderBottom: "1px solid var(--hairline)", display: "flex", alignItems: "baseline", gap: 16, fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg)" };
  const procDot = { color: "var(--fg-subtle)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em", minWidth: 32 };
  const stripWrap = { padding: "96px 40px 0", maxWidth: 1440, margin: "0 auto" };
  const stripGrid = { display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, marginBottom: 32 };
  const halfImg = (src) => ({ aspectRatio: "4/3", backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "var(--paper-2)" });
  const q = { fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: 26, lineHeight: 1.3, margin: "40px 0 0", paddingLeft: 22, borderLeft: "2px solid var(--fg)", color: "var(--fg)" };
  const navWrap = { padding: "64px 40px 96px", maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 };
  const navCard = { cursor: "pointer", display: "flex", flexDirection: "column", gap: 8, paddingTop: 24, borderTop: "1px solid var(--hairline)" };
  const navK = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)" };
  const navTtl = { fontFamily: "var(--font-serif)", fontSize: 24, color: "var(--fg)", margin: 0, letterSpacing: "-0.005em" };
  const heroEl = p.heroFull ? /* @__PURE__ */ React.createElement("div", { className: "nk-bleed", style: heroImg, role: "img", "aria-label": L(p.t, lang) }) : /* @__PURE__ */ React.createElement("div", { style: padWrap }, /* @__PURE__ */ React.createElement("div", { style: heroImg, role: "img", "aria-label": L(p.t, lang) }));
  const liveBtn = { display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, padding: "12px 22px", border: "1px solid var(--fg)", borderRadius: 999, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg)", textDecoration: "none" };
  const liveLink = p.liveUrl ? /* @__PURE__ */ React.createElement("a", { href: p.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "nk-link", style: liveBtn }, p.linkLabel ? L(p.linkLabel, lang) : lang === "de" ? "Website live \xF6ffnen \u2197" : "Open the live site \u2197") : null;
  const embedEl = p.embed && p.liveUrl ? /* @__PURE__ */ React.createElement("div", { className: "nk-pad", style: { maxWidth: 1440, margin: "0 auto", padding: "96px 40px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { ...procH, marginTop: 0, scrollMarginTop: 84 }, "data-sec": "Live" }, lang === "de" ? "Live ausprobieren" : "Try it live"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: p.liveUrl,
      title: L(p.t, lang),
      loading: "lazy",
      allow: "geolocation",
      referrerPolicy: "strict-origin-when-cross-origin",
      style: { width: "100%", maxWidth: 412, height: 800, border: "1px solid var(--hairline)", borderRadius: 22, background: "var(--paper-2)" }
    }
  )), /* @__PURE__ */ React.createElement("p", { style: { textAlign: "center", marginTop: 16 } }, /* @__PURE__ */ React.createElement("a", { href: p.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "nk-link", style: { fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-subtle)", textDecoration: "none" } }, lang === "de" ? "Im neuen Tab \xF6ffnen \u2197" : "Open in a new tab \u2197"))) : null;
  const galleryGrid = p.gallery ? /* @__PURE__ */ React.createElement("div", { className: "nk-gallery" }, p.gallery.map((g, i) => /* @__PURE__ */ React.createElement("figure", { key: i, className: "nk-gitem" + (g.wide ? " nk-gitem-wide" : "") }, /* @__PURE__ */ React.createElement("div", { className: "nk-fig", style: { aspectRatio: g.r || "4/3", backgroundImage: `url(${g.src})`, backgroundSize: g.fit || "cover", backgroundPosition: g.pos || "center", backgroundRepeat: "no-repeat", backgroundColor: g.bg || "var(--paper-2)" }, role: "img", "aria-label": g.cap && L(g.cap, lang) || L(p.t, lang) }), (g.lbl || g.cap) && /* @__PURE__ */ React.createElement("figcaption", { className: "nk-gcap" }, g.lbl && /* @__PURE__ */ React.createElement("span", { className: "nk-gcap-k" }, L(g.lbl, lang), g.cap ? " \xB7 " : ""), g.cap && L(g.cap, lang))))) : null;
  const capRow = (dark) => p.capText ? /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, paddingTop: 32, paddingBottom: 32 } }, /* @__PURE__ */ React.createElement("div", { style: { ...lblK, marginTop: 4, color: dark ? "#B3B3B3" : "var(--fg-subtle)" } }, t.caption), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 14, color: dark ? "#D9D9D9" : "var(--fg-muted)", lineHeight: 1.6, maxWidth: "34em", margin: 0 } }, L(p.capText, lang))) : null;
  const aColMax = 640;
  const aH = { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.25, letterSpacing: "-0.01em", color: "var(--fg)", maxWidth: aColMax, margin: "64px auto 18px" };
  const aP = { fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.8, color: "var(--fg)", maxWidth: aColMax, margin: "0 auto 22px" };
  const aQ = { fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", lineHeight: 1.3, color: "var(--fg)", maxWidth: aColMax, margin: "52px auto", paddingLeft: 22, borderLeft: "2px solid var(--fg)" };
  const aFig = { margin: "52px 0" };
  const aCap = { fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-subtle)", lineHeight: 1.5, margin: "12px auto 0", maxWidth: aColMax };
  const articleEl = p.article ? /* @__PURE__ */ React.createElement("div", { className: "nk-pad", style: { maxWidth: 1080, margin: "0 auto", padding: "8px 40px 0" } }, /* @__PURE__ */ React.createElement("span", { "data-sec": lang === "de" ? "Auftakt" : "Opening", "aria-hidden": "true", style: { display: "block", height: 0, scrollMarginTop: 84 } }), p.article.map((b, i) => {
    if (b.h) return /* @__PURE__ */ React.createElement("h2", { key: i, "data-sec": shortSec(L(b.h, lang)), style: { ...aH, scrollMarginTop: 84 } }, L(b.h, lang));
    if (b.q) return /* @__PURE__ */ React.createElement("blockquote", { key: i, style: aQ }, L(b.q, lang));
    if (b.img) return /* @__PURE__ */ React.createElement("figure", { key: i, style: aFig }, /* @__PURE__ */ React.createElement("div", { style: { aspectRatio: b.r || "3/2", backgroundImage: `url(${b.img})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "var(--paper-2)" }, role: "img", "aria-label": b.cap ? L(b.cap, lang) : L(p.t, lang) }), b.cap && /* @__PURE__ */ React.createElement("figcaption", { style: aCap }, L(b.cap, lang)));
    return /* @__PURE__ */ React.createElement("p", { key: i, style: aP }, L(b.p, lang));
  })) : null;
  let imageSection;
  if (p.gallery && p.galleryDark) {
    imageSection = /* @__PURE__ */ React.createElement("div", { className: "nk-band-dark nk-bleed", "data-sec": lang === "de" ? "Material" : "Material", style: { marginTop: 96, scrollMarginTop: 84 } }, /* @__PURE__ */ React.createElement("div", { style: { ...padWrap, padding: "76px 40px" } }, galleryGrid, capRow(true)));
  } else if (p.gallery) {
    imageSection = /* @__PURE__ */ React.createElement("div", { className: "nk-pad", "data-sec": lang === "de" ? "Material" : "Material", style: { ...stripWrap, scrollMarginTop: 84 } }, galleryGrid, capRow(false));
  } else {
    imageSection = /* @__PURE__ */ React.createElement("div", { className: "nk-pad", "data-sec": lang === "de" ? "Material" : "Material", style: { ...stripWrap, scrollMarginTop: 84 } }, /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: stripGrid }, /* @__PURE__ */ React.createElement("div", { style: halfImg(p.stripA || "assets/photo-placeholder-cool.svg"), role: "img", "aria-label": L(p.t, lang) }), /* @__PURE__ */ React.createElement("div", { style: halfImg(p.stripB || "assets/photo-placeholder-stone.svg"), role: "img", "aria-label": L(p.t, lang) })), capRow(false));
  }
  return /* @__PURE__ */ React.createElement("article", { "data-screen-label": "05 Project Detail" }, /* @__PURE__ */ React.createElement("div", { className: "nk-pad", style: topWrap }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "nk-link", style: back, onClick: onClose }, t.back), /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: head }, /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("div", { style: lblK }, t.project), /* @__PURE__ */ React.createElement("div", { style: lblV }, String(idx + 1).padStart(2, "0"), " / ", String(PROJECTS.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: lblK }, t.location), /* @__PURE__ */ React.createElement("div", { style: lblV }, L(p.location, lang)), /* @__PURE__ */ React.createElement("div", { style: lblK }, t.date), /* @__PURE__ */ React.createElement("div", { style: lblV }, p.year), /* @__PURE__ */ React.createElement("div", { style: lblK }, t.semester), /* @__PURE__ */ React.createElement("div", { style: lblV }, L(p.semester, lang)), /* @__PURE__ */ React.createElement("div", { style: lblK }, t.typology), /* @__PURE__ */ React.createElement("div", { style: lblV }, L(p.tag, lang)), /* @__PURE__ */ React.createElement("div", { style: lblK }, t.status), /* @__PURE__ */ React.createElement("div", { style: lblV }, L(p.status, lang)), /* @__PURE__ */ React.createElement("div", { style: lblK }, t.role), /* @__PURE__ */ React.createElement("div", { style: lblV }, L(p.role, lang))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: eyebrow }, L(p.kicker, lang)), /* @__PURE__ */ React.createElement("h1", { style: big }, L(p.t, lang)), /* @__PURE__ */ React.createElement("p", { style: { ...lede, scrollMarginTop: 84 }, "data-sec": p.article ? void 0 : lang === "de" ? "Konzept" : "Concept" }, L(p.summary, lang)), liveLink))), heroEl, p.article ? articleEl : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "nk-pad", style: padWrap }, /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: body }, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { style: para }, p.bodyP1 ? L(p.bodyP1, lang) : t.bodyP1), /* @__PURE__ */ React.createElement("p", { style: para }, p.bodyP2 ? L(p.bodyP2, lang) : t.bodyP2), /* @__PURE__ */ React.createElement("blockquote", { style: q }, p.pull ? L(p.pull, lang) : t.pull), /* @__PURE__ */ React.createElement("div", { style: { ...procH, scrollMarginTop: 84 }, "data-sec": lang === "de" ? "Prozess" : "Process" }, t.process), /* @__PURE__ */ React.createElement("ul", { style: procList }, L(p.process, lang).map((step, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: procLi }, /* @__PURE__ */ React.createElement("span", { style: procDot }, "P/", String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", null, step))))))), embedEl, imageSection), /* @__PURE__ */ React.createElement("div", { className: "nk-stack", "data-rail-stop": "true", style: navWrap }, /* @__PURE__ */ React.createElement("div", { className: "nk-card", style: navCard, role: "button", tabIndex: 0, onClick: () => onOpen(prev), onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(prev);
    }
  } }, /* @__PURE__ */ React.createElement("span", { style: navK }, t.prev), /* @__PURE__ */ React.createElement("h3", { className: "nk-card-ttl", style: navTtl }, L(prev.t, lang))), /* @__PURE__ */ React.createElement("div", { className: "nk-card", style: { ...navCard, textAlign: "right" }, role: "button", tabIndex: 0, onClick: () => onOpen(next), onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(next);
    }
  } }, /* @__PURE__ */ React.createElement("span", { style: navK }, t.next), /* @__PURE__ */ React.createElement("h3", { className: "nk-card-ttl", style: navTtl }, L(next.t, lang)))));
};
window.ProjectDetail = ProjectDetail;
