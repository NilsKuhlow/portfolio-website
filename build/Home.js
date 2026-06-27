const { useState: useStateH, useEffect: useEffectH } = React;
const Home = ({ onOpen, setRoute, lang }) => {
  const PROJECTS = window.PROJECTS;
  const L = window.L;
  const t = window.I18N[lang];
  const FEATURED = PROJECTS.slice(0, 5).map((p) => ({
    id: p.id,
    kicker: `${L(p.kicker, lang).toUpperCase()} \xB7 ${p.year}`,
    title: L(p.t, lang),
    img: p.hero || p.img,
    project: p
  }));
  const NEWS_DE = [
    { tag: "Stegreif", title: "ZU WASSER LASSEN \u2014 REGATTA IN WENDORF", body: "Ein schwimmf\xE4higes Boot aus Karton und Pappmach\xE9, vom 1:20-Modell bis zum 1:1-Bau und am Strand von Wendorf zu Wasser gelassen.", img: "assets/projects/zu-wasser-lassen/card-wide.jpg", shape: "wide" },
    { tag: "Installation 1:1", title: "RANDSTADT \u2014 FOLIENTUNNEL IM SCHNEE", body: "Ein Folientunnel verdichtet einen Weg in der Randstadt von Wismar: von der Weite in die Enge und zur\xFCck ins Freie.", img: "assets/projects/randstadt-intervention/card-wide.jpg", shape: "pano" },
    { tag: "Guss", title: "MASSE UND HOHLRAUM \u2014 BETONGUSS IN ERDE", body: "Negativr\xE4ume in Wachs und Beton gegossen, im Verfahren des Glockengusses. Sichtbar bleibt nur der Hohlraum, belichtet \xFCber ein Oberlicht.", img: "assets/projects/masse-und-hohlraum/card.jpg", shape: "tall" },
    { tag: "Raumstudie", title: "GENIUS LOCI \u2014 INNENR\xC4UME DER STADT", body: "Stra\xDFen und Pl\xE4tze als Innenr\xE4ume der Stadt, gefasst durch Fassaden, Licht und Bewegung \xB7 der K\xF6rper als r\xE4umliches Ma\xDF.", img: "assets/projects/genius-loci/card.jpg", shape: "tall" },
    { tag: "Entwurf", title: "RAUM \u2013 STRUKTUR \u2013 H\xDCLLE \u2014 \xDCBER DEM PLATTENBAU", body: "Eine leichte, parasit\xE4re Struktur legt sich \xFCber ein Plattenbau-Ensemble und verbindet die D\xE4cher zu einer gemeinschaftlichen Fl\xE4che.", img: "assets/projects/raum-struktur-huelle/card-wide.jpg", shape: "wide" },
    { tag: "Collage", title: "TOR ZUR FREIHEIT", body: "Eine digitale Collage \xFCber die Schwelle zwischen Alltag und Freiheit, ein Tor, das es nur auf dem Papier gibt.", img: "assets/projects/weitere-arbeiten/card.jpg", shape: "tall" }
  ];
  const NEWS_EN = [
    { tag: "Workshop", title: "SET AFLOAT \u2014 REGATTA AT WENDORF", body: "A buoyant boat of cardboard and papier-m\xE2ch\xE9, from a 1:20 model to a full-size build and launched on the beach at Wendorf.", img: "assets/projects/zu-wasser-lassen/card-wide.jpg", shape: "wide" },
    { tag: "Installation 1:1", title: "EDGE-CITY \u2014 A FOIL TUNNEL IN SNOW", body: "A foil tunnel condenses a path on the edge of Wismar: from openness into compression and back into the open.", img: "assets/projects/randstadt-intervention/card-wide.jpg", shape: "pano" },
    { tag: "Casting", title: "MASS AND VOID \u2014 CONCRETE CAST IN EARTH", body: "Voids cast in wax and concrete, after the technique of bell-casting. Only the hollow space remains, lit through a skylight.", img: "assets/projects/masse-und-hohlraum/card.jpg", shape: "tall" },
    { tag: "Spatial study", title: "GENIUS LOCI \u2014 INTERIORS OF THE CITY", body: "Streets and squares as interiors of the city, held by fa\xE7ades, light and movement \xB7 the body as a spatial measure.", img: "assets/projects/genius-loci/card.jpg", shape: "tall" },
    { tag: "Design", title: "SPACE \u2013 STRUCTURE \u2013 SKIN \u2014 OVER THE PREFAB", body: "A light, parasitic structure laid over a prefab housing ensemble, joining the roofs into a shared surface.", img: "assets/projects/raum-struktur-huelle/card-wide.jpg", shape: "wide" },
    { tag: "Collage", title: "GATE TO FREEDOM", body: "A digital collage on the threshold between everyday life and freedom, a gate that exists only on paper.", img: "assets/projects/weitere-arbeiten/card.jpg", shape: "tall" }
  ];
  const NEWS = lang === "de" ? NEWS_DE : NEWS_EN;
  const Featured = () => {
    const [i, setI] = useStateH(0);
    const [paused, setPaused] = useStateH(false);
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const item = FEATURED[i];
    const go = (d) => setI((x) => (x + d + FEATURED.length) % FEATURED.length);
    useEffectH(() => {
      if (reduce || paused) return;
      const timer = setInterval(() => setI((x) => (x + 1) % FEATURED.length), 9e3);
      return () => clearInterval(timer);
    }, [paused, reduce]);
    const wrap = { padding: "64px 80px 96px", maxWidth: 1440, margin: "0 auto" };
    const grid = { display: "grid", gridTemplateColumns: "minmax(0, 1fr) 320px", gap: 64, alignItems: "end" };
    const figure = { position: "relative", aspectRatio: "16 / 9", background: `var(--paper-2) url(${item.img}) center/cover no-repeat`, cursor: "pointer" };
    const number = { position: "absolute", top: 16, left: 16, fontFamily: "var(--font-mono)", fontSize: 11, color: "#FFFFFF", letterSpacing: "0.06em", mixBlendMode: "difference" };
    const captionWrap = { display: "flex", flexDirection: "column", gap: 28, paddingBottom: 4 };
    const kicker = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)" };
    const title = { fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.75rem, 2.4vw, 2.4rem)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--fg)", margin: 0, textWrap: "pretty" };
    const dotsRow = { display: "flex", gap: 6, alignItems: "center" };
    const ctrlRow = { display: "flex", alignItems: "center", gap: 16, marginTop: 8 };
    const navBtn = { width: 38, height: 38, display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--fg)", background: "transparent", color: "var(--fg)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1, padding: 0 };
    const dotBtn = { height: 22, display: "inline-flex", alignItems: "center", background: "none", border: 0, padding: "0 3px", cursor: "pointer" };
    const dotBar = (active) => ({ display: "block", width: active ? 28 : 8, height: 2, background: active ? "var(--accent)" : "var(--hairline-strong)", transition: "width 240ms ease, background 240ms ease" });
    const cta = { alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", border: 0, padding: "14px 0", color: "var(--fg)", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", borderTop: "1px solid var(--fg)" };
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        className: "nk-pad",
        style: wrap,
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
        onFocus: () => setPaused(true),
        onBlur: () => setPaused(false)
      },
      /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: grid }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "nk-fig",
          style: figure,
          role: "button",
          tabIndex: 0,
          "aria-label": item.title,
          onClick: () => onOpen(item.project),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpen(item.project);
            }
          }
        },
        /* @__PURE__ */ React.createElement("span", { style: number }, String(i + 1).padStart(2, "0"), " / ", String(FEATURED.length).padStart(2, "0"))
      ), /* @__PURE__ */ React.createElement("div", { style: captionWrap }, /* @__PURE__ */ React.createElement("span", { style: kicker }, item.kicker), /* @__PURE__ */ React.createElement("h1", { style: title }, item.title), /* @__PURE__ */ React.createElement("button", { className: "nk-cta", style: cta, onClick: () => onOpen(item.project) }, t.home.readProject), /* @__PURE__ */ React.createElement("div", { style: ctrlRow }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "nk-cta", style: navBtn, onClick: () => go(-1), "aria-label": lang === "de" ? "Vorheriges Projekt" : "Previous project" }, "\u2190"), /* @__PURE__ */ React.createElement("div", { style: dotsRow }, FEATURED.map((_, k) => /* @__PURE__ */ React.createElement("button", { key: k, type: "button", style: dotBtn, onClick: () => setI(k), "aria-current": k === i ? "true" : void 0, "aria-label": (lang === "de" ? "Projekt " : "Project ") + (k + 1) }, /* @__PURE__ */ React.createElement("span", { style: dotBar(k === i) })))), /* @__PURE__ */ React.createElement("button", { type: "button", className: "nk-cta", style: navBtn, onClick: () => go(1), "aria-label": lang === "de" ? "N\xE4chstes Projekt" : "Next project" }, "\u2192"))))
    );
  };
  const NewsMosaic = () => {
    const wrap = { padding: "0 80px 120px", maxWidth: 1440, margin: "0 auto" };
    const head = { display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: 56, borderTop: "1px solid var(--hairline)", marginBottom: 56 };
    const eyebrow = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)" };
    const all = { fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg)", cursor: "pointer" };
    const grid = { columnCount: 3, columnGap: 32 };
    const cardWrap = { breakInside: "avoid", WebkitColumnBreakInside: "avoid", pageBreakInside: "avoid", display: "flex", flexDirection: "column", gap: 18, marginBottom: 64 };
    const RATIOS = { tall: "3 / 4", wide: "4 / 3", square: "1 / 1", pano: "16 / 9" };
    const ar = (shape) => ({ aspectRatio: RATIOS[shape] || "4 / 3", background: "var(--paper-2)", backgroundSize: "cover", backgroundPosition: "center" });
    const tagS = { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)", letterSpacing: "0.04em" };
    const ttlS = { fontFamily: "var(--font-serif)", fontSize: 19, lineHeight: 1.2, margin: 0, letterSpacing: "-0.005em", color: "var(--fg)" };
    const bodyS = { fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 };
    return /* @__PURE__ */ React.createElement("section", { className: "nk-pad", style: wrap }, /* @__PURE__ */ React.createElement("div", { style: head }, /* @__PURE__ */ React.createElement("span", { style: eyebrow }, t.home.newsHead), /* @__PURE__ */ React.createElement("button", { type: "button", className: "nk-link nk-unbtn", style: all, onClick: () => setRoute("projects") }, t.home.allProjects)), /* @__PURE__ */ React.createElement("div", { className: "nk-news", style: grid }, NEWS.map((n, i) => /* @__PURE__ */ React.createElement("article", { key: i, style: cardWrap }, /* @__PURE__ */ React.createElement("div", { role: "img", "aria-label": n.title, style: { ...ar(n.shape), backgroundImage: `url(${n.img})` } }), /* @__PURE__ */ React.createElement("div", { style: tagS }, n.tag.toUpperCase()), /* @__PURE__ */ React.createElement("h3", { style: ttlS }, n.title), /* @__PURE__ */ React.createElement("p", { style: bodyS }, n.body)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 80, textAlign: "center" } }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "nk-link nk-unbtn", style: { ...all, borderBottom: "1px solid var(--fg)", paddingBottom: 6 }, onClick: () => setRoute("about") }, t.home.aboutLink)));
  };
  const Intro = () => {
    const a = t.about;
    const wrap = { padding: "0 80px 96px", maxWidth: 1440, margin: "0 auto" };
    const top = { borderTop: "1px solid var(--hairline)", paddingTop: 56, display: "grid", gridTemplateColumns: "minmax(0, 1fr) 320px", gap: 64, alignItems: "start" };
    const eyebrow = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)" };
    const statement = { fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.75rem, 3vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--fg)", margin: "20px 0 28px", textWrap: "balance", maxWidth: "14em" };
    const lede = { fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "var(--fg-muted)", margin: 0, maxWidth: "34em" };
    const cta = { display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28, background: "transparent", border: 0, borderTop: "1px solid var(--fg)", padding: "14px 0", color: "var(--fg)", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer" };
    const facts = { display: "flex", flexDirection: "column", gap: 22 };
    const fLbl = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)", display: "block", marginBottom: 6 };
    const fVal = { fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5, color: "var(--fg)" };
    return /* @__PURE__ */ React.createElement("section", { className: "nk-pad", style: wrap }, /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: top }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: eyebrow }, a.eyebrow), /* @__PURE__ */ React.createElement("h2", { style: statement }, a.title), /* @__PURE__ */ React.createElement("p", { style: lede }, a.lede), /* @__PURE__ */ React.createElement("button", { className: "nk-cta", style: cta, onClick: () => setRoute("about") }, t.home.aboutLink)), /* @__PURE__ */ React.createElement("div", { style: facts }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: fLbl }, a.studiesL), /* @__PURE__ */ React.createElement("div", { style: fVal }, a.studiesV)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: fLbl }, a.openL), /* @__PURE__ */ React.createElement("div", { style: fVal }, a.openV)))));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Featured, null), /* @__PURE__ */ React.createElement(Intro, null));
};
window.Home = Home;
