const { useState: useStateR, useEffect: useEffectR, useRef: useRefR } = React;
const RAIL_DWELL = {};
function shortSec(s) {
  if (!s) return "";
  let x = String(s).split(/[:–—]/)[0].trim().replace(/\s+/g, " ");
  if (x.length <= 20) return x;
  const stop = { und: 1, and: 1, im: 1, in: 1, der: 1, die: 1, das: 1, den: 1, of: 1, the: 1, zur: 1, zum: 1, mit: 1, "f\xFCr": 1, nach: 1, vor: 1, als: 1, am: 1, ein: 1, eine: 1 };
  let w = x.split(" ").slice(0, 2);
  if (w.length > 1 && stop[w[1].toLowerCase()]) w = w.slice(0, 1);
  return w.join(" ");
}
window.shortSec = shortSec;
const clampR = (v, a, b) => Math.max(a, Math.min(b, v));
function SectionRail({ p, lang }) {
  const [lo, setLo] = useStateR(null);
  const [activeI, setActiveI] = useStateR(0);
  const [visible, setVisible] = useStateR(false);
  const [expanded, setExpanded] = useStateR(false);
  const [, setPocheTick] = useStateR(0);
  const inkedRef = useRefR(null);
  const headRef = useRefR(null);
  const progressRef = useRefR(0);
  const activeRef = useRefR(0);
  const visibleRef = useRefR(false);
  useEffectR(() => {
    const measure = () => {
      if (window.innerWidth < 1100) {
        setLo(null);
        return;
      }
      const nodes = Array.prototype.slice.call(document.querySelectorAll("[data-sec]"));
      if (nodes.length < 2) {
        setLo(null);
        return;
      }
      const sy = window.scrollY || window.pageYOffset || 0;
      const article2 = document.querySelector('article[data-screen-label="05 Project Detail"]');
      const start = article2 ? article2.getBoundingClientRect().top + sy : 0;
      const artH = article2 ? article2.offsetHeight : document.documentElement.scrollHeight;
      const innerH = window.innerHeight;
      const end = start + artH - innerH;
      const range = Math.max(1, end - start);
      const top2 = 120, bottom = 72;
      const H2 = Math.max(160, innerH - top2 - bottom);
      let list = nodes.map((el) => {
        const docY = el.getBoundingClientRect().top + sy;
        return { el, label: el.getAttribute("data-sec") || "", docY };
      }).sort((a, b) => a.docY - b.docY);
      let lastLy = -999;
      list = list.map((s) => {
        const frac = clampR((s.docY - start) / range, 0, 1);
        const yTick = top2 + frac * H2;
        const yLabel = Math.max(yTick, lastLy + 18);
        lastLy = yLabel;
        return { el: s.el, label: s.label, frac, yTick, yLabel };
      });
      let contentLeft = Infinity;
      const paras = document.querySelectorAll("article p, article h2");
      for (let i = 0; i < paras.length; i++) {
        const r = paras[i].getBoundingClientRect();
        if (r.width > 80 && r.height > 0 && r.left > 40) contentLeft = Math.min(contentLeft, r.left);
      }
      if (!isFinite(contentLeft)) contentLeft = Math.max(360, window.innerWidth * 0.27);
      const stopEl = document.querySelector("[data-rail-stop]");
      const stopY = stopEl ? stopEl.getBoundingClientRect().top + sy : start + artH - 280;
      setLo({ start, range, top: top2, bottom, H: H2, innerH, sections: list, stopY, contentLeft });
    };
    measure();
    const t1 = setTimeout(measure, 450);
    const t2 = setTimeout(measure, 1500);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    let ro = null;
    const article = document.querySelector('article[data-screen-label="05 Project Detail"]');
    if (window.ResizeObserver && article) {
      ro = new ResizeObserver(measure);
      ro.observe(article);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      if (ro) ro.disconnect();
    };
  }, [p.id, lang]);
  useEffectR(() => {
    if (!lo) return;
    const dwell2 = RAIL_DWELL[p.id] || (RAIL_DWELL[p.id] = {});
    let ticking = false;
    const update = () => {
      const innerH = window.innerHeight;
      const sy = window.scrollY || window.pageYOffset || 0;
      const progress = clampR((sy - lo.start) / lo.range, 0, 1);
      progressRef.current = progress;
      const headY = lo.top + progress * lo.H;
      if (inkedRef.current) inkedRef.current.setAttribute("y2", String(headY));
      if (headRef.current) headRef.current.setAttribute("transform", "translate(0," + headY + ")");
      const tol = Math.min(0.045, 130 / lo.range);
      let a = 0;
      for (let i = 0; i < lo.sections.length; i++) {
        if (lo.sections[i].frac <= progress + tol) a = i;
      }
      if (a !== activeRef.current) {
        activeRef.current = a;
        setActiveI(a);
      }
      const vis = sy > 440 && sy + innerH < lo.stopY + 140;
      if (vis !== visibleRef.current) {
        visibleRef.current = vis;
        setVisible(vis);
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
      if (document.hidden || !visibleRef.current) return;
      const a = activeRef.current;
      if (a >= 0) {
        dwell2[a] = (dwell2[a] || 0) + 0.6;
        setPocheTick((t) => t + 1);
      }
    }, 600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(iv);
    };
  }, [lo, p.id]);
  if (!lo) return null;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const railW = 340, lineX = 30, numX = 38, nameX = 58;
  const top = lo.top, H = lo.H, sections = lo.sections;
  const dwell = RAIL_DWELL[p.id] || {};
  const headY0 = top + (progressRef.current || 0) * H;
  const exp = visible && expanded;
  const restNameMax = clampR(lo.contentLeft - nameX - 18, 0, 240);
  const showRestName = restNameMax >= 64;
  const expNameMax = 220;
  const hotW = exp ? nameX + expNameMax + 22 : Math.max(80, nameX + (showRestName ? restNameMax : 0) + 8);
  const scrollTo = (i) => {
    const el = sections[i].el;
    if (!el) return;
    const y = el.getBoundingClientRect().top + (window.scrollY || 0) - 84;
    window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
  };
  const acc = "var(--accent)";
  const sub = "var(--fg-subtle)";
  const fg = "var(--fg)";
  const hatches = sections.map((s, i) => {
    const segEnd = i < sections.length - 1 ? sections[i + 1].yTick : s.yTick + 44;
    const strokes = [];
    for (let y = s.yTick + 7; y < segEnd - 2; y += 9) {
      strokes.push(/* @__PURE__ */ React.createElement("line", { key: y, x1: lineX - 9, y1: y + 4, x2: lineX - 1, y2: y - 4, stroke: acc, strokeWidth: "1" }));
    }
    return /* @__PURE__ */ React.createElement("g", { key: i, style: { opacity: Math.min(0.5, (dwell[i] || 0) / 7) } }, strokes);
  });
  return /* @__PURE__ */ React.createElement("div", { "aria-hidden": visible ? "false" : "true", style: {
    position: "fixed",
    left: 0,
    top: 0,
    width: railW,
    height: "100vh",
    zIndex: 20,
    pointerEvents: "none",
    opacity: visible ? 1 : 0,
    transition: reduce ? "none" : "opacity 320ms cubic-bezier(0.2,0,0,1)"
  } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setExpanded(true),
      onMouseLeave: () => setExpanded(false),
      onFocus: () => setExpanded(true),
      onBlur: () => setExpanded(false),
      style: { position: "absolute", left: 0, top: top - 46, width: hotW, height: H + 92, pointerEvents: visible ? "auto" : "none", transition: "width 220ms cubic-bezier(0.2,0,0,1)" }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: nameX + expNameMax + 40,
      height: "100%",
      background: "linear-gradient(90deg, var(--bg) 82%, transparent)",
      opacity: exp ? 0.94 : 0,
      pointerEvents: "none",
      transition: reduce ? "none" : "opacity 240ms cubic-bezier(0.2,0,0,1)"
    } })
  ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: nameX, top: top - 38, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: sub, lineHeight: 1.6, pointerEvents: "none", whiteSpace: "nowrap" } }, /* @__PURE__ */ React.createElement("div", { style: { color: acc } }, lang === "de" ? "Schnitt" : "Section"), /* @__PURE__ */ React.createElement("div", null, sections.length, " ", lang === "de" ? "Programme" : "Programs")), /* @__PURE__ */ React.createElement("svg", { width: railW, height: lo.innerH, viewBox: "0 0 " + railW + " " + lo.innerH, style: { position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("line", { x1: lineX, y1: top, x2: lineX, y2: top + H, stroke: "var(--hairline-strong)", strokeWidth: "1" }), hatches, /* @__PURE__ */ React.createElement("line", { ref: inkedRef, x1: lineX, y1: top, x2: lineX, y2: headY0, stroke: acc, strokeWidth: "1.5" }), sections.map((s, i) => {
    const passed = i <= activeI, active = i === activeI;
    return /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("line", { x1: lineX - 5, y1: s.yTick, x2: lineX + 5, y2: s.yTick, stroke: active ? acc : "var(--hairline-strong)", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("circle", { cx: lineX, cy: s.yTick, r: "2.4", fill: passed ? acc : "transparent", stroke: passed ? acc : "var(--hairline-strong)", strokeWidth: "1" }));
  }), /* @__PURE__ */ React.createElement("g", { ref: headRef, transform: "translate(0," + headY0 + ")" }, /* @__PURE__ */ React.createElement("line", { x1: lineX, y1: "0", x2: nameX - 8, y2: "0", stroke: acc, strokeWidth: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M" + (lineX - 5) + ",-4 L" + (lineX + 4) + ",0 L" + (lineX - 5) + ",4 Z", fill: acc }))), sections.map((s, i) => {
    const passed = i <= activeI, active = i === activeI;
    const nameShown = exp || active;
    const nameMax = exp ? expNameMax : restNameMax;
    const canClick = visible && (exp || active);
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        type: "button",
        tabIndex: visible ? 0 : -1,
        onClick: () => {
          if (canClick) scrollTo(i);
        },
        title: s.label,
        style: {
          position: "absolute",
          left: numX,
          top: s.yLabel - 7,
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          background: "none",
          border: 0,
          padding: "2px 0",
          margin: 0,
          textAlign: "left",
          fontFamily: "var(--font-mono)",
          textTransform: "uppercase",
          cursor: canClick ? "pointer" : "default",
          pointerEvents: canClick ? "auto" : "none",
          lineHeight: 1.2
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9.5, letterSpacing: "0.08em", color: active ? acc : passed ? fg : sub, fontWeight: active ? 600 : 500 } }, String(i + 1).padStart(2, "0")),
      /* @__PURE__ */ React.createElement("span", { style: {
        fontSize: 10.5,
        letterSpacing: "0.11em",
        fontWeight: active ? 600 : 500,
        color: active ? acc : passed ? fg : sub,
        maxWidth: nameShown ? nameMax : 0,
        opacity: nameShown ? 1 : 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        transition: reduce ? "none" : "opacity 200ms cubic-bezier(0.2,0,0,1), max-width 220ms cubic-bezier(0.2,0,0,1)"
      } }, s.label)
    );
  }));
}
window.SectionRail = SectionRail;
