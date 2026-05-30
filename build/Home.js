const { useState: useStateH, useEffect: useEffectH } = React;
const Home = ({ onOpen, setRoute, lang }) => {
  const PROJECTS = window.PROJECTS;
  const L = window.L;
  const t = window.I18N[lang];
  const FEATURED = PROJECTS.slice(0, 5).map((p) => ({
    id: p.id,
    kicker: `${L(p.kicker, lang).toUpperCase()} \xB7 ${p.year}`,
    title: L(p.t, lang),
    img: p.img,
    project: p
  }));
  const NEWS_DE = [
    { tag: "Studio", title: "STUDIO I \u2014 AULA-PAVILLON \xB7 ZWISCHENKRITIK", body: "Freitag, 24. April \xB7 10:00H \xB7 Aula 207. Pinnen des 1:50-Modells und des L\xE4ngsschnitts. Pavillon-Aufgabe l\xE4uft bis zur Juli-Abgabe.", img: "assets/photo-placeholder-warm.svg", shape: "pano" },
    { tag: "Praktikum", title: "OFFEN F\xDCR EIN SOMMERPRAKTIKUM \u2014 2026", body: "Suche eine Stelle zwischen Juni und August 2026. Bevorzugt kleine B\xFCros, die von Hand zeichnen, Restaurierungspraxen oder eine Baustelle. Reisebereit.", img: "assets/photo-placeholder-stone.svg", shape: "tall" },
    { tag: "Lekt\xFCre", title: "PALLASMAA \u2014 DIE AUGEN DER HAUT", body: "Im Februar abgeschlossen. Das Kapitel \xFCber Schatten als raumbildendes Material h\xE4ngt seither \xFCber dem Schreibtisch.", img: "assets/photo-placeholder-cool.svg", shape: "square" },
    { tag: "Vortrag", title: "LACATON & VASSAL \u2014 GASTVORTRAG, BERLIN", body: "Mittwoch, 12. M\xE4rz \xB7 19:00H \xB7 Akademie der K\xFCnste. Mit dem Zug aus Wismar gereist. Notizen f\xFCllten ein halbes Skizzenbuch.", img: "assets/photo-placeholder-warm.svg", shape: "wide" },
    { tag: "Ausstellung", title: "STUDIO-OFFEN \u2014 GRUNDLAGENJAHR", body: "Hauptgeb\xE4ude \xB7 Wismar. Drei Arbeiten gezeigt: Aula-Pavillon-Modell, Altstadt-Schwelle-Ansicht (4 m, Tusche auf Papier) und ein einzelner Stuhl.", img: "assets/photo-placeholder-stone.svg", shape: "wide" },
    { tag: "Modelle", title: "ZWEIUNDVIERZIGSTES MODELL \u2014 LINDENHOLZ UND MESSING", body: "Ein Arbeitsschnittmodell f\xFCr den Aula-Pavillon, im selben Nordlicht fotografiert wie die anderen.", img: "assets/photo-placeholder-cool.svg", shape: "tall" },
    { tag: "Reise", title: "EINE WOCHE PORTO \u2014 SIZA, SOUTO DE MOURA, MARGINAL", body: "Februar-Ferien. F\xFCnf Tage, drei Notizb\xFCcher, zweiundsechzig Fotografien. Boa Nova an einem klaren Nachmittag.", img: "assets/photo-placeholder-warm.svg", shape: "pano" },
    { tag: "Fotografie", title: "ACHTZEHNTER FILM \u2014 NACHKRIEGSWOHNUNGSBAU, ROSTOCK", body: "Mamiya RB67, Ilford HP5, in Caffenol selbst entwickelt. Kontaktbogen h\xE4ngt im Studio.", img: "assets/photo-placeholder-stone.svg", shape: "square" }
  ];
  const NEWS_EN = [
    { tag: "Studio", title: "STUDIO I \u2014 AULA PAVILION \xB7 MID-CRIT", body: "Friday, 24 April \xB7 10:00H \xB7 Aula 207. Pinning up the 1:50 model and the long section. Pavilion brief running through to July review.", img: "assets/photo-placeholder-warm.svg", shape: "pano" },
    { tag: "Internship", title: "OPEN TO A SUMMER INTERNSHIP \u2014 2026", body: "Looking for a position between June and August 2026. Preference for small studios that draw by hand, restoration practices, or a working building site. Will travel.", img: "assets/photo-placeholder-stone.svg", shape: "tall" },
    { tag: "Reading", title: "PALLASMAA \u2014 THE EYES OF THE SKIN", body: "Finished in February. The chapter on shadow as room-making material has been pinned above the desk since.", img: "assets/photo-placeholder-cool.svg", shape: "square" },
    { tag: "Lecture", title: "LACATON & VASSAL \u2014 VISITING LECTURE, BERLIN", body: "Wednesday, 12 March \xB7 19:00H \xB7 Akademie der K\xFCnste. Travelled from Wismar by train. Notes filled half a sketchbook.", img: "assets/photo-placeholder-warm.svg", shape: "wide" },
    { tag: "Exhibition", title: "STUDIO OPEN HOUSE \u2014 FOUNDATION YEAR", body: "Hauptgeb\xE4ude \xB7 Wismar. Three pieces shown: Aula Pavilion model, Altstadt Threshold elevation (4 m, ink on paper), and a single chair.", img: "assets/photo-placeholder-stone.svg", shape: "wide" },
    { tag: "Models", title: "FORTY-SECOND MODEL \u2014 BASSWOOD AND BRASS", body: "A working section model for the Aula Pavilion, photographed in the same north light as the others.", img: "assets/photo-placeholder-cool.svg", shape: "tall" },
    { tag: "Travel", title: "WEEK IN PORTO \u2014 SIZA, SOUTO DE MOURA, MARGINAL", body: "February break. Five days, three notebooks, sixty-two photographs. Boa Nova on a clear afternoon.", img: "assets/photo-placeholder-warm.svg", shape: "pano" },
    { tag: "Photography", title: "EIGHTEENTH ROLL \u2014 POST-WAR HOUSING, ROSTOCK", body: "Mamiya RB67, Ilford HP5, hand-developed in caffenol. Contact sheet pinned in studio.", img: "assets/photo-placeholder-stone.svg", shape: "square" }
  ];
  const NEWS = lang === "de" ? NEWS_DE : NEWS_EN;
  const Featured = () => {
    const [i, setI] = useStateH(0);
    const item = FEATURED[i];
    useEffectH(() => {
      const timer = setInterval(() => setI((x) => (x + 1) % FEATURED.length), 9e3);
      return () => clearInterval(timer);
    }, []);
    const wrap = { padding: "64px 80px 96px", maxWidth: 1440, margin: "0 auto" };
    const grid = { display: "grid", gridTemplateColumns: "minmax(0, 1fr) 320px", gap: 64, alignItems: "end" };
    const figure = { position: "relative", aspectRatio: "16 / 9", background: `var(--paper-2) url(${item.img}) center/cover no-repeat`, cursor: "pointer" };
    const number = { position: "absolute", top: 16, left: 16, fontFamily: "var(--font-mono)", fontSize: 11, color: "#FFFFFF", letterSpacing: "0.06em", mixBlendMode: "difference" };
    const captionWrap = { display: "flex", flexDirection: "column", gap: 28, paddingBottom: 4 };
    const kicker = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)" };
    const title = { fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.75rem, 2.4vw, 2.4rem)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--fg)", margin: 0, textWrap: "pretty" };
    const dotsRow = { display: "flex", gap: 6, alignItems: "center", marginTop: 8 };
    const dot = (active) => ({ width: active ? 28 : 8, height: 2, background: active ? "var(--accent)" : "var(--hairline-strong)", border: 0, padding: 0, cursor: "pointer", transition: "width 240ms ease, background 240ms ease" });
    const cta = { alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", border: 0, padding: "14px 0", color: "var(--fg)", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", borderTop: "1px solid var(--fg)" };
    return /* @__PURE__ */ React.createElement("section", { className: "nk-pad", style: wrap }, /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: grid }, /* @__PURE__ */ React.createElement(
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
    ), /* @__PURE__ */ React.createElement("div", { style: captionWrap }, /* @__PURE__ */ React.createElement("span", { style: kicker }, item.kicker), /* @__PURE__ */ React.createElement("h1", { style: title }, item.title), /* @__PURE__ */ React.createElement("button", { className: "nk-cta", style: cta, onClick: () => onOpen(item.project) }, t.home.readProject), /* @__PURE__ */ React.createElement("div", { style: dotsRow }, FEATURED.map((_, k) => /* @__PURE__ */ React.createElement("button", { key: k, style: dot(k === i), onClick: () => setI(k), "aria-label": (lang === "de" ? "Projekt " : "Project ") + (k + 1) }))))));
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
    const lede = { fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "var(--fg-muted)", margin: 0, maxWidth: "38em" };
    const cta = { display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28, background: "transparent", border: 0, borderTop: "1px solid var(--fg)", padding: "14px 0", color: "var(--fg)", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer" };
    const facts = { display: "flex", flexDirection: "column", gap: 22 };
    const fLbl = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-subtle)", display: "block", marginBottom: 6 };
    const fVal = { fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5, color: "var(--fg)" };
    return /* @__PURE__ */ React.createElement("section", { className: "nk-pad", style: wrap }, /* @__PURE__ */ React.createElement("div", { className: "nk-stack", style: top }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: eyebrow }, a.eyebrow), /* @__PURE__ */ React.createElement("h2", { style: statement }, a.title), /* @__PURE__ */ React.createElement("p", { style: lede }, a.lede), /* @__PURE__ */ React.createElement("button", { className: "nk-cta", style: cta, onClick: () => setRoute("about") }, t.home.aboutLink)), /* @__PURE__ */ React.createElement("div", { style: facts }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: fLbl }, a.studiesL), /* @__PURE__ */ React.createElement("div", { style: fVal }, a.studiesV)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: fLbl }, a.openL), /* @__PURE__ */ React.createElement("div", { style: fVal }, a.openV)))));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Featured, null), /* @__PURE__ */ React.createElement(Intro, null), /* @__PURE__ */ React.createElement(NewsMosaic, null));
};
window.Home = Home;
