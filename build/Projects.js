const { useState: useStateP, useMemo: useMemoP, useEffect: useEffectP, useRef: useRefP } = React;
const TYPOLOGY = {
  siena: ["digital", "analyse"],
  lichtfaenger: ["installation", "entwurf"],
  spatialsound: ["experiment", "digital"],
  avatar: ["studie"],
  "edge-hafencity": ["analyse"],
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
  analyse: { de: "Analyse", en: "Analysis" },
  studie: { de: "Studie", en: "Study" },
  digital: { de: "Digital", en: "Digital" }
};
const TYP_ORDER = ["installation", "entwurf", "experiment", "analyse", "studie", "digital"];
const WORK_DWELL = {};
const WorkSection = ({ projects, onOpen, lang }) => {
  const L = window.L;
  const wrapRef = useRefP(null);
  const inkRef = useRefP(null);
  const headRef = useRefP(null);
  const rowRefs = useRefP([]);
  const hatchRefs = useRefP([]);
  const headLocalRef = useRefP(0);
  const activeRef = useRefP(0);
  const [lay, setLay] = useStateP(null);
  const [active, setActive] = useStateP(0);
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lineX = 40, railW = 72;
  const pad = (n) => ("0" + n).slice(-2);
  useEffectP(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const wRect = wrap.getBoundingClientRect();
      const H2 = wrap.offsetHeight;
      const ticks2 = projects.map((p, i) => {
        const el = rowRefs.current[i];
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return r.top - wRect.top + r.height / 2;
      });
      setLay({ H: H2, ticks: ticks2 });
    };
    measure();
    const t1 = setTimeout(measure, 300);
    const t2 = setTimeout(measure, 1200);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    let ro = null;
    if (window.ResizeObserver && wrapRef.current) {
      ro = new ResizeObserver(measure);
      ro.observe(wrapRef.current);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      if (ro) ro.disconnect();
    };
  }, [projects, lang]);
  useEffectP(() => {
    if (!lay) return;
    let ticking = false;
    const update = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const innerH = window.innerHeight;
      const rectTop = wrap.getBoundingClientRect().top;
      const headRaw = innerH * 0.42 - rectTop;
      const headLocal = Math.max(0, Math.min(lay.H, headRaw));
      headLocalRef.current = headLocal;
      if (inkRef.current) inkRef.current.setAttribute("y2", String(headLocal));
      if (headRef.current) headRef.current.setAttribute("transform", "translate(0," + headLocal + ")");
      let a = 0;
      for (let i = 0; i < lay.ticks.length; i++) {
        if (lay.ticks[i] <= headRaw + 1) a = i;
      }
      if (a !== activeRef.current) {
        activeRef.current = a;
        setActive(a);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const iv = setInterval(() => {
      if (document.hidden) return;
      const a = activeRef.current;
      const p = projects[a];
      if (!p) return;
      WORK_DWELL[p.id] = (WORK_DWELL[p.id] || 0) + 0.6;
      const g = hatchRefs.current[a];
      if (g) g.style.opacity = String(Math.min(0.45, WORK_DWELL[p.id] / 8));
    }, 600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(iv);
    };
  }, [lay, projects]);
  const acc = "var(--accent)", sub = "var(--fg-subtle)", fg = "var(--fg)";
  const H = lay ? lay.H : 0;
  const ticks = lay ? lay.ticks : [];
  const hLocal = headLocalRef.current || 0;
  const hatches = ticks.map((y, i) => {
    const segEnd = i < ticks.length - 1 ? ticks[i + 1] : y + 40;
    const strokes = [];
    for (let yy = y + 8; yy < segEnd - 4; yy += 10) {
      strokes.push(/* @__PURE__ */ React.createElement("line", { key: yy, x1: lineX - 10, y1: yy + 5, x2: lineX - 1, y2: yy - 5, stroke: acc, strokeWidth: "1" }));
    }
    const pid = projects[i] && projects[i].id;
    const op = Math.min(0.45, (WORK_DWELL[pid] || 0) / 8);
    return /* @__PURE__ */ React.createElement("g", { key: i, ref: (el) => hatchRefs.current[i] = el, style: { opacity: op } }, strokes);
  });
  const enter = (e, p) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(p);
    }
  };
  const rows = [];
  let lastYear = null;
  projects.forEach((p, i) => {
    if (p.year !== lastYear) {
      lastYear = p.year;
      rows.push(
        /* @__PURE__ */ React.createElement("div", { key: "storey-" + p.year, style: { display: "flex", alignItems: "center", gap: 14, margin: rows.length ? "52px 0 4px" : "0 0 4px", paddingTop: 12, borderTop: "1px solid var(--hairline-strong)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: sub } }, lang === "de" ? "Geschoss" : "Storey"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--fg)" } }, p.year))
      );
    }
    const isA = active === i, passed = i <= active;
    rows.push(
      /* @__PURE__ */ React.createElement(
        "div",
        {
          key: p.id,
          ref: (el) => rowRefs.current[i] = el,
          className: "nk-row",
          role: "button",
          tabIndex: 0,
          onClick: () => onOpen(p),
          onKeyDown: (e) => enter(e, p),
          style: { display: "grid", gridTemplateColumns: "46px 1fr auto", gap: 24, alignItems: "baseline", padding: "26px 16px 26px 0", borderBottom: "1px solid var(--hairline)", cursor: "pointer" }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 12, color: isA ? acc : passed ? fg : sub } }, pad(i + 1)),
        /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: isA ? acc : fg, transition: reduce ? "none" : "color 200ms cubic-bezier(0.2,0,0,1)" } }, L(p.t, lang)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: sub, marginTop: 10 } }, L(p.tag, lang), " \xB7 ", L(p.location, lang))),
        /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 12, color: sub, alignSelf: "center" } }, p.year)
      )
    );
  });
  return /* @__PURE__ */ React.createElement("div", { ref: wrapRef, style: { position: "relative", paddingLeft: railW } }, /* @__PURE__ */ React.createElement("svg", { width: railW, height: H, viewBox: "0 0 " + railW + " " + H, style: { position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("line", { x1: lineX, y1: 0, x2: lineX, y2: H, stroke: "var(--hairline-strong)", strokeWidth: "1" }), hatches, /* @__PURE__ */ React.createElement("line", { ref: inkRef, x1: lineX, y1: 0, x2: lineX, y2: hLocal, stroke: acc, strokeWidth: "1.6" }), ticks.map((y, i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("line", { x1: lineX, y1: y, x2: railW - 6, y2: y, stroke: i <= active ? acc : "var(--hairline)", strokeWidth: "1", opacity: i <= active ? 0.5 : 0.4 }), /* @__PURE__ */ React.createElement("circle", { cx: lineX, cy: y, r: "3", fill: i <= active ? acc : "transparent", stroke: i <= active ? acc : "var(--hairline-strong)", strokeWidth: "1" }))), /* @__PURE__ */ React.createElement("g", { ref: headRef, transform: "translate(0," + hLocal + ")" }, /* @__PURE__ */ React.createElement("line", { x1: lineX, y1: "0", x2: railW - 4, y2: "0", stroke: acc, strokeWidth: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M" + (lineX - 6) + ",-5 L" + (lineX + 5) + ",0 L" + (lineX - 6) + ",5 Z", fill: acc }))), /* @__PURE__ */ React.createElement("div", null, rows));
};
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
  const chip = (active) => ({ padding: "6px 12px", border: "1px solid", borderColor: active ? "var(--accent)" : "var(--hairline-strong)", background: active ? "var(--accent)" : "transparent", color: active ? "var(--accent-fg)" : "var(--fg)", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" });
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
  return /* @__PURE__ */ React.createElement("section", { className: "nk-pad", style: wrap, "data-screen-label": "02 Projects" }, /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: head }, /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("div", { style: eyebrow }, lang === "de" ? "Archiv" : "Archive"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-muted)", marginTop: 16, lineHeight: 1.7, whiteSpace: "pre-line" } }, t.stats(PROJECTS.length, list.length))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: eyebrow }, t.eyebrow), /* @__PURE__ */ React.createElement("h1", { style: h1 }, t.title), /* @__PURE__ */ React.createElement("p", { style: lede }, t.lede))), /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: filterBar }, /* @__PURE__ */ React.createElement("div", { style: fLabel }, t.filter), /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: filterGroup }, /* @__PURE__ */ React.createElement("div", { style: filterCol }, /* @__PURE__ */ React.createElement("span", { style: { ...fLabel, color: "var(--fg-muted)" } }, t.year), /* @__PURE__ */ React.createElement("div", { style: chips }, years.map((y) => /* @__PURE__ */ React.createElement("button", { key: y, style: chip(year === y), onClick: () => setYear(y) }, y)))), /* @__PURE__ */ React.createElement("div", { style: filterCol }, /* @__PURE__ */ React.createElement("span", { style: { ...fLabel, color: "var(--fg-muted)" } }, t.typology), /* @__PURE__ */ React.createElement("div", { style: chips }, typologies.map((tg) => /* @__PURE__ */ React.createElement("button", { key: tg, style: chip(typology === tg), onClick: () => setTypology(tg) }, tg))))), /* @__PURE__ */ React.createElement("div", { style: viewToggle }, /* @__PURE__ */ React.createElement("button", { style: vBtn(view === "grid"), onClick: () => setView("grid") }, t.grid), /* @__PURE__ */ React.createElement("button", { style: vBtn(view === "index"), onClick: () => setView("index") }, t.index), /* @__PURE__ */ React.createElement("button", { style: vBtn(view === "section"), onClick: () => setView("section") }, lang === "de" ? "Schnitt" : "Section"))), view === "grid" && /* @__PURE__ */ React.createElement("div", { className: "nk-news", style: mosaic }, list.map((p) => {
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
  } }, /* @__PURE__ */ React.createElement("span", { style: num }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("span", { style: rowT }, L(p.t, lang)), /* @__PURE__ */ React.createElement("span", { className: "nk-irow-meta" }, p.year, " \xB7 ", L(p.tag, lang).toUpperCase())), /* @__PURE__ */ React.createElement("span", { style: rowM }, L(p.location, lang)), /* @__PURE__ */ React.createElement("span", { style: rowMono }, p.year), /* @__PURE__ */ React.createElement("span", { style: rowMono }, L(p.tag, lang).toUpperCase()), /* @__PURE__ */ React.createElement("span", { style: { ...rowMono, textAlign: "right" } }, "\u2192")))), view === "section" && list.length > 0 && /* @__PURE__ */ React.createElement(WorkSection, { projects: list, onOpen, lang }), list.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "80px 0", textAlign: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--fg-subtle)", fontSize: 20 } }, t.empty));
};
window.Projects = Projects;
