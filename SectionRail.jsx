// SectionRail.jsx — "Schnitt": the scrollbar reborn as an architectural section.
//
// Two architects, one instrument:
//  · Koolhaas — the page's parts are made legible as labelled PROGRAM bands in
//    section. A moving cut-head shows where in the "building" you stand; clicking
//    a program turns the section into circulation and carries you there.
//  · Miralles — the line is never pre-drawn. It inks itself as you descend, and
//    wherever you DWELL a fine poché accumulates, so the section is authored by
//    the act of reading it — and remembered, per project, for the session.
//
// Refinement: at rest the rail is a minimal NUMBERED gauge (01..N) that can never
// overlap content; only the current program is named, in the clear left gutter.
// On hover the full legend of program names blooms over a soft backdrop. Built
// only from the site's own vocabulary (hairline + single accent + mono-caps), so
// it never disturbs the editorial spirit.

const { useState: useStateR, useEffect: useEffectR, useRef: useRefR } = React;

// Per-session, per-project memory of where the reader lingered (Miralles).
const RAIL_DWELL = {};

// Reduce a heading to a terse program label (drop subtitle, keep <= ~20 chars).
function shortSec(s) {
  if (!s) return '';
  let x = String(s).split(/[:–—]/)[0].trim().replace(/\s+/g, ' ');
  if (x.length <= 20) return x;
  const stop = { und: 1, and: 1, im: 1, in: 1, der: 1, die: 1, das: 1, den: 1, of: 1, the: 1, zur: 1, zum: 1, mit: 1, 'für': 1, nach: 1, vor: 1, als: 1, am: 1, ein: 1, eine: 1 };
  let w = x.split(' ').slice(0, 2);
  if (w.length > 1 && stop[w[1].toLowerCase()]) w = w.slice(0, 1);
  return w.join(' ');
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

  // ── Measure: read the tagged section anchors, map them onto the rail ─────────
  useEffectR(() => {
    const measure = () => {
      if (window.innerWidth < 1100) { setLo(null); return; }
      const nodes = Array.prototype.slice.call(document.querySelectorAll('[data-sec]'));
      if (nodes.length < 2) { setLo(null); return; }
      const sy = window.scrollY || window.pageYOffset || 0;
      const article = document.querySelector('article[data-screen-label="05 Project Detail"]');
      const start = article ? (article.getBoundingClientRect().top + sy) : 0;
      const artH = article ? article.offsetHeight : document.documentElement.scrollHeight;
      const innerH = window.innerHeight;
      const end = start + artH - innerH;
      const range = Math.max(1, end - start);
      const top = 120, bottom = 72;
      const H = Math.max(160, innerH - top - bottom);
      let list = nodes.map((el) => {
        const docY = el.getBoundingClientRect().top + sy;
        return { el: el, label: el.getAttribute('data-sec') || '', docY: docY };
      }).sort((a, b) => a.docY - b.docY);
      let lastLy = -999;
      list = list.map((s) => {
        const frac = clampR((s.docY - start) / range, 0, 1);
        const yTick = top + frac * H;
        const yLabel = Math.max(yTick, lastLy + 18);
        lastLy = yLabel;
        return { el: s.el, label: s.label, frac: frac, yTick: yTick, yLabel: yLabel };
      });
      // Where does the text column begin? The rail must always stay left of it.
      let contentLeft = Infinity;
      const paras = document.querySelectorAll('article p, article h2');
      for (let i = 0; i < paras.length; i++) {
        const r = paras[i].getBoundingClientRect();
        if (r.width > 80 && r.height > 0 && r.left > 40) contentLeft = Math.min(contentLeft, r.left);
      }
      if (!isFinite(contentLeft)) contentLeft = Math.max(360, window.innerWidth * 0.27);
      const stopEl = document.querySelector('[data-rail-stop]');
      const stopY = stopEl ? (stopEl.getBoundingClientRect().top + sy) : (start + artH - 280);
      setLo({ start: start, range: range, top: top, bottom: bottom, H: H, innerH: innerH, sections: list, stopY: stopY, contentLeft: contentLeft });
    };
    measure();
    const t1 = setTimeout(measure, 450);
    const t2 = setTimeout(measure, 1500);
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    let ro = null;
    const article = document.querySelector('article[data-screen-label="05 Project Detail"]');
    if (window.ResizeObserver && article) { ro = new ResizeObserver(measure); ro.observe(article); }
    return () => {
      clearTimeout(t1); clearTimeout(t2);
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', measure);
      if (ro) ro.disconnect();
    };
  }, [p.id, lang]);

  // ── Drive: scroll → ink + cut-head + active program; dwell → poché ───────────
  useEffectR(() => {
    if (!lo) return;
    const dwell = RAIL_DWELL[p.id] || (RAIL_DWELL[p.id] = {});
    let ticking = false;
    const update = () => {
      const innerH = window.innerHeight;
      const sy = window.scrollY || window.pageYOffset || 0;
      const progress = clampR((sy - lo.start) / lo.range, 0, 1);
      progressRef.current = progress;
      const headY = lo.top + progress * lo.H;
      if (inkedRef.current) inkedRef.current.setAttribute('y2', String(headY));
      if (headRef.current) headRef.current.setAttribute('transform', 'translate(0,' + headY + ')');
      const tol = Math.min(0.045, 130 / lo.range);
      let a = 0;
      for (let i = 0; i < lo.sections.length; i++) { if (lo.sections[i].frac <= progress + tol) a = i; }
      if (a !== activeRef.current) { activeRef.current = a; setActiveI(a); }
      const vis = sy > 440 && (sy + innerH) < (lo.stopY + 140);
      if (vis !== visibleRef.current) { visibleRef.current = vis; setVisible(vis); }
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false; }); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    const iv = setInterval(() => {
      if (document.hidden || !visibleRef.current) return;
      const a = activeRef.current;
      if (a >= 0) { dwell[a] = (dwell[a] || 0) + 0.6; setPocheTick((t) => t + 1); }
    }, 600);
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(iv); };
  }, [lo, p.id]);

  if (!lo) return null;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const railW = 340, lineX = 30, numX = 38, nameX = 58;
  const top = lo.top, H = lo.H, sections = lo.sections;
  const dwell = RAIL_DWELL[p.id] || {};
  const headY0 = top + (progressRef.current || 0) * H;
  const exp = visible && expanded;

  // gutter math — names may never reach the text column
  const restNameMax = clampR(lo.contentLeft - nameX - 18, 0, 240);
  const showRestName = restNameMax >= 64;
  // The hover-bloom is a flyout with its own backdrop, so it may extend over the
  // (dimmed) content and stay fully legible — independent of the gutter width.
  const expNameMax = 220;
  const hotW = exp ? (nameX + expNameMax + 22) : Math.max(80, nameX + (showRestName ? restNameMax : 0) + 8);

  const scrollTo = (i) => {
    const el = sections[i].el; if (!el) return;
    const y = el.getBoundingClientRect().top + (window.scrollY || 0) - 84;
    window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  };

  const acc = 'var(--accent)';
  const sub = 'var(--fg-subtle)';
  const fg = 'var(--fg)';

  // poché — fine hatch per program band, faded in by dwell (Miralles)
  const hatches = sections.map((s, i) => {
    const segEnd = (i < sections.length - 1) ? sections[i + 1].yTick : (s.yTick + 44);
    const strokes = [];
    for (let y = s.yTick + 7; y < segEnd - 2; y += 9) {
      strokes.push(<line key={y} x1={lineX - 9} y1={y + 4} x2={lineX - 1} y2={y - 4} stroke={acc} strokeWidth="1" />);
    }
    return <g key={i} style={{ opacity: Math.min(0.5, (dwell[i] || 0) / 7) }}>{strokes}</g>;
  });

  return (
    <div aria-hidden={visible ? 'false' : 'true'} style={{
      position: 'fixed', left: 0, top: 0, width: railW, height: '100vh', zIndex: 20,
      pointerEvents: 'none', opacity: visible ? 1 : 0,
      transition: reduce ? 'none' : 'opacity 320ms cubic-bezier(0.2,0,0,1)'
    }}>
      {/* hover zone — enter to bloom the full legend (desktop only; rail hides < 1100px) */}
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        style={{ position: 'absolute', left: 0, top: top - 46, width: hotW, height: H + 92, pointerEvents: visible ? 'auto' : 'none', transition: 'width 220ms cubic-bezier(0.2,0,0,1)' }}
      >
        {/* soft backdrop so the bloomed names stay legible over content */}
        <div style={{
          position: 'absolute', left: 0, top: 0, width: nameX + expNameMax + 40, height: '100%',
          background: 'linear-gradient(90deg, var(--bg) 82%, transparent)',
          opacity: exp ? 0.94 : 0, pointerEvents: 'none',
          transition: reduce ? 'none' : 'opacity 240ms cubic-bezier(0.2,0,0,1)'
        }}></div>
      </div>

      {/* sheet label — the section identifies itself */}
      <div style={{ position: 'absolute', left: nameX, top: top - 38, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: sub, lineHeight: 1.6, pointerEvents: 'none', whiteSpace: 'nowrap' }}>
        <div style={{ color: acc }}>{lang === 'de' ? 'Schnitt' : 'Section'}</div>
        <div>{sections.length} {lang === 'de' ? 'Programme' : 'Programs'}</div>
      </div>

      <svg width={railW} height={lo.innerH} viewBox={'0 0 ' + railW + ' ' + lo.innerH} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible', pointerEvents: 'none' }} aria-hidden="true">
        <line x1={lineX} y1={top} x2={lineX} y2={top + H} stroke="var(--hairline-strong)" strokeWidth="1" />
        {hatches}
        <line ref={inkedRef} x1={lineX} y1={top} x2={lineX} y2={headY0} stroke={acc} strokeWidth="1.5" />
        {sections.map((s, i) => {
          const passed = i <= activeI, active = i === activeI;
          return (
            <g key={i}>
              <line x1={lineX - 5} y1={s.yTick} x2={lineX + 5} y2={s.yTick} stroke={active ? acc : 'var(--hairline-strong)'} strokeWidth="1" />
              <circle cx={lineX} cy={s.yTick} r="2.4" fill={passed ? acc : 'transparent'} stroke={passed ? acc : 'var(--hairline-strong)'} strokeWidth="1" />
            </g>
          );
        })}
        <g ref={headRef} transform={'translate(0,' + headY0 + ')'}>
          <line x1={lineX} y1="0" x2={nameX - 8} y2="0" stroke={acc} strokeWidth="1" />
          <path d={'M' + (lineX - 5) + ',-4 L' + (lineX + 4) + ',0 L' + (lineX - 5) + ',4 Z'} fill={acc} />
        </g>
      </svg>

      {/* program rows: number always shown; name at rest only for the active one,
          all names on hover-bloom */}
      {sections.map((s, i) => {
        const passed = i <= activeI, active = i === activeI;
        const nameShown = exp || active;
        const nameMax = exp ? expNameMax : restNameMax;
        const canClick = visible && (exp || active);
        return (
          <button key={i} type="button" tabIndex={visible ? 0 : -1}
            onClick={() => { if (canClick) scrollTo(i); }}
            title={s.label}
            style={{
              position: 'absolute', left: numX, top: s.yLabel - 7,
              display: 'flex', alignItems: 'baseline', gap: 8,
              background: 'none', border: 0, padding: '2px 0', margin: 0, textAlign: 'left',
              fontFamily: 'var(--font-mono)', textTransform: 'uppercase', cursor: canClick ? 'pointer' : 'default',
              pointerEvents: canClick ? 'auto' : 'none', lineHeight: 1.2
            }}>
            <span style={{ fontSize: 9.5, letterSpacing: '0.08em', color: active ? acc : (passed ? fg : sub), fontWeight: active ? 600 : 500 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{
              fontSize: 10.5, letterSpacing: '0.11em', fontWeight: active ? 600 : 500,
              color: active ? acc : (passed ? fg : sub),
              maxWidth: nameShown ? nameMax : 0, opacity: nameShown ? 1 : 0,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              transition: reduce ? 'none' : 'opacity 200ms cubic-bezier(0.2,0,0,1), max-width 220ms cubic-bezier(0.2,0,0,1)'
            }}>
              {s.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

window.SectionRail = SectionRail;
