const { useState: useStateP, useMemo: useMemoP } = React;
const TYPOLOGY = {
  siena: ["digital", "analyse"],
  lichtfaenger: ["installation", "entwurf"],
  spatialsound: ["experiment", "digital"],
  avatar: ["studie"],
  "genius-loci": ["analyse", "studie"],
  "randstadt-intervention": ["installation"],
  "raum-struktur-huelle": ["entwurf"],
  "masse-und-hohlraum": ["experiment"],
  "zu-wasser-lassen": ["installation"],
  "weitere-arbeiten": ["studie"]
};
const TYP_LABELS = {
  installation: { de: "Installation", en: "Installation" },
  entwurf: { de: "Entwurf", en: "Design" },
  experiment: { de: "Experiment", en: "Experiment" },
  analyse: { de: "Stadtanalyse", en: "Urban analysis" },
  studie: { de: "Studie", en: "Study" },
  digital: { de: "Digital", en: "Digital" }
};
const TYP_ORDER = ["installation", "entwurf", "experiment", "analyse", "studie", "digital"];
const Projects = ({ onOpen, lang }) => {
  const PROJECTS = window.PROJECTS;
  const L = window.L;
  const t = window.I18N[lang].projects;
  const [view, setView] = useStateP("grid");
  const [year, setYear] = useStateP(t.all);
  const [typology, setTypology] = useStateP(t.all);
  React.useEffect(() => {
    setYear(t.all);
    setTypology(t.all);
  }, [lang]);
  const years = useMemoP(() => [t.all, ...Array.from(new Set(PROJECTS.map((p) => p.year)))], [PROJECTS, lang]);
  const typologies = useMemoP(() => {
    const used = /* @__PURE__ */ new Set();
    PROJECTS.forEach((p) => (TYPOLOGY[p.id] || []).forEach((k) => used.add(k)));
    return [t.all, ...TYP_ORDER.filter((k) => used.has(k)).map((k) => TYP_LABELS[k][lang])];
  }, [PROJECTS, lang]);
  const list = PROJECTS.filter(
    (p) => (year === t.all || p.year === year) && (typology === t.all || (TYPOLOGY[p.id] || []).some((k) => TYP_LABELS[k][lang] === typology))
  );
  const wrap = { padding: "80px 40px 120px", maxWidth: 1440, margin: "0 auto" };
  const head = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 80, marginBottom: 64 };
  const eyebrow = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)" };
  const h1 = { fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.025em", margin: "24px 0 0" };
  const lede = { fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65, color: "var(--fg)", maxWidth: "34em", margin: "32px 0 0" };
  const filterBar = { display: "grid", gridTemplateColumns: "200px 1fr auto", gap: 40, alignItems: "flex-end", paddingTop: 32, paddingBottom: 24, borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", marginBottom: 56 };
  const filterCol = { display: "flex", flexDirection: "column", gap: 8 };
  const fLabel = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)" };
  const chips = { display: "flex", gap: 6, flexWrap: "wrap" };
  const chip = (active) => ({ padding: "6px 12px", border: "1px solid", borderColor: active ? "var(--fg)" : "var(--hairline-strong)", background: active ? "var(--fg)" : "transparent", color: active ? "var(--bg)" : "var(--fg)", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" });
  const filterGroup = { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 };
  const viewToggle = { display: "flex", border: "1px solid var(--hairline-strong)" };
  const vBtn = (active) => ({ padding: "8px 14px", background: active ? "var(--fg)" : "transparent", color: active ? "var(--bg)" : "var(--fg)", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", border: 0 });
  const SHAPES = { spatialsound: "wide", avatar: "square", "genius-loci": "tall", "randstadt-intervention": "wide", "raum-struktur-huelle": "tall", "masse-und-hohlraum": "pano", "zu-wasser-lassen": "tall", "weitere-arbeiten": "wide" };
  const RATIOS = { tall: "3 / 4", wide: "4 / 3", square: "1 / 1", pano: "16 / 9" };
  const mosaic = { columnCount: 3, columnGap: 32 };
  const cardWrap = { breakInside: "avoid", WebkitColumnBreakInside: "avoid", pageBreakInside: "avoid", display: "flex", flexDirection: "column", gap: 14, marginBottom: 48, cursor: "pointer" };
  const mImg = (shape, src) => ({ aspectRatio: RATIOS[shape] || "3 / 4", backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "var(--paper-2)", backgroundRepeat: "no-repeat" });
  const mTag = { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", letterSpacing: "0.04em" };
  const mTtl = { fontFamily: "var(--font-serif)", fontSize: 23, lineHeight: 1.16, margin: 0, letterSpacing: "-0.005em", color: "var(--fg)" };
  const mBody = { fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 };
  const teaser = (s) => {
    if (s.length <= 165) return s;
    const c = s.slice(0, 165);
    return c.slice(0, c.lastIndexOf(" ")).trim() + "\u2026";
  };
  const indexWrap = { borderTop: "1px solid var(--fg)" };
  const row = { display: "grid", gridTemplateColumns: "60px 1fr 220px 120px 1fr 60px", gap: 24, padding: "20px 0", borderBottom: "1px solid var(--hairline)", alignItems: "baseline", cursor: "pointer", transition: "background 200ms" };
  const num = { fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-subtle)" };
  const rowT = { fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--fg)", letterSpacing: "-0.005em", lineHeight: 1.2 };
  const rowM = { fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)" };
  const rowMono = { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", letterSpacing: "0.04em" };
  return /* @__PURE__ */ React.createElement("section", { className: "nk-pad", style: wrap, "data-screen-label": "02 Projects" }, /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: head }, /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("div", { style: eyebrow }, lang === "de" ? "Archiv" : "Archive"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-muted)", marginTop: 16, lineHeight: 1.7, whiteSpace: "pre-line" } }, t.stats(PROJECTS.length, list.length))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: eyebrow }, t.eyebrow), /* @__PURE__ */ React.createElement("h1", { style: h1 }, t.title), /* @__PURE__ */ React.createElement("p", { style: lede }, t.lede))), /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: filterBar }, /* @__PURE__ */ React.createElement("div", { style: fLabel }, t.filter), /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: filterGroup }, /* @__PURE__ */ React.createElement("div", { style: filterCol }, /* @__PURE__ */ React.createElement("span", { style: { ...fLabel, color: "var(--fg-muted)" } }, t.year), /* @__PURE__ */ React.createElement("div", { style: chips }, years.map((y) => /* @__PURE__ */ React.createElement("button", { key: y, style: chip(year === y), onClick: () => setYear(y) }, y)))), /* @__PURE__ */ React.createElement("div", { style: filterCol }, /* @__PURE__ */ React.createElement("span", { style: { ...fLabel, color: "var(--fg-muted)" } }, t.typology), /* @__PURE__ */ React.createElement("div", { style: chips }, typologies.map((tg) => /* @__PURE__ */ React.createElement("button", { key: tg, style: chip(typology === tg), onClick: () => setTypology(tg) }, tg))))), /* @__PURE__ */ React.createElement("div", { style: viewToggle }, /* @__PURE__ */ React.createElement("button", { style: vBtn(view === "grid"), onClick: () => setView("grid") }, t.grid), /* @__PURE__ */ React.createElement("button", { style: vBtn(view === "index"), onClick: () => setView("index") }, t.index))), view === "grid" && /* @__PURE__ */ React.createElement("div", { className: "nk-news", style: mosaic }, list.map((p) => {
    const shape = SHAPES[p.id] || "tall";
    const src = shape === "wide" || shape === "pano" ? p.hero || p.img : p.img;
    return /* @__PURE__ */ React.createElement("article", { key: p.id, className: "nk-card", style: cardWrap, role: "button", tabIndex: 0, onClick: () => onOpen(p), onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen(p);
      }
    } }, /* @__PURE__ */ React.createElement("div", { className: "nk-card-img", role: "img", "aria-label": L(p.t, lang), style: mImg(shape, src) }), /* @__PURE__ */ React.createElement("div", { style: mTag }, L(p.tag, lang).toUpperCase(), " \xB7 ", p.year), /* @__PURE__ */ React.createElement("h3", { className: "nk-card-ttl", style: mTtl }, L(p.t, lang)), /* @__PURE__ */ React.createElement("p", { style: mBody }, teaser(L(p.summary, lang))));
  })), view === "index" && /* @__PURE__ */ React.createElement("div", { style: indexWrap }, list.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.id, className: "nk-row nk-irow", style: row, role: "button", tabIndex: 0, onClick: () => onOpen(p), onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(p);
    }
  } }, /* @__PURE__ */ React.createElement("span", { style: num }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", { style: rowT }, L(p.t, lang)), /* @__PURE__ */ React.createElement("span", { style: rowM }, L(p.location, lang)), /* @__PURE__ */ React.createElement("span", { style: rowMono }, p.year), /* @__PURE__ */ React.createElement("span", { style: rowMono }, L(p.tag, lang).toUpperCase()), /* @__PURE__ */ React.createElement("span", { style: { ...rowMono, textAlign: "right" } }, "\u2192")))), list.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "80px 0", textAlign: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--fg-subtle)", fontSize: 20 } }, t.empty));
};
window.Projects = Projects;
