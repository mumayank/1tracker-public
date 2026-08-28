(() => {
  const C = {
    skin: "#c8a882",
    hair: "#5c4033",
    shirt: "#8d6e4c",
    pants: "#6b7c8a",
    animal: "#b08968",
    plant: "#6b8f71",
    mug: "#c4785a",
    comb: "#c45c4a",
    scale: "#8a8f99",
    steam: "#9aa7b2",
    accent: "#e11d48",
    deep: "#9f1239",
    light: "#fb7185",
  };

  function svg(inner, vb = "0 0 100 100") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="none">${inner}</svg>`;
  }
  function rr(x, y, w, h, r, fill, opacity) {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${opacity ? ` opacity="${opacity}"` : ""}/>`;
  }
  function ci(cx, cy, r, fill, opacity) {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"${opacity ? ` opacity="${opacity}"` : ""}/>`;
  }
  function ov(x, y, w, h, fill, opacity) {
    return `<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w / 2}" ry="${h / 2}" fill="${fill}"${opacity ? ` opacity="${opacity}"` : ""}/>`;
  }

  // ── Person on Scale ──
  function personOnScale() {
    return svg(
      rr(12, 72, 76, 16, 6, C.scale) +
        ci(50, 80, 7, C.accent, 0.55) +
        rr(32, 46, 14, 28, 5, C.pants) +
        rr(54, 46, 14, 28, 5, C.pants) +
        rr(30, 22, 40, 30, 10, C.shirt) +
        ci(50, 16, 13, C.skin) +
        ci(50, 11, 13, C.hair) +
        ci(50, 18, 10, C.skin)
    );
  }

  // ── Cat ──
  function cat() {
    const ears =
      rr(30, 18, 16, 18.4, 5.6, C.animal) +
      rr(33.5, 22.6, 8, 8.8, 3.2, C.animal, 0.35) +
      rr(52, 18, 16, 18.4, 5.6, C.animal) +
      rr(55.5, 22.6, 8, 8.8, 3.2, C.animal, 0.35);
    return svg(
      rr(22, 42, 62, 42, 22, C.animal) +
        ci(48, 38, 22, C.animal) +
        ears +
        ci(40, 36, 3.5, C.animal, 0.55) +
        ci(54, 36, 3.5, C.animal, 0.55) +
        rr(72, 58, 22, 10, 5, C.animal)
    );
  }

  // ── Mug ──
  function mug() {
    return svg(
      rr(18, 38, 52, 48, 8, C.mug) +
        `<path d="M66 54a18 18 0 0 1 0 24" stroke="${C.mug}" stroke-width="8" stroke-linecap="round" fill="none"/>` +
        `<line x1="30" y1="18" x2="32" y2="34" stroke="${C.steam}" stroke-width="5.4" stroke-linecap="round" opacity="0.6"/>` +
        `<line x1="42" y1="12" x2="44" y2="30" stroke="${C.steam}" stroke-width="5.4" stroke-linecap="round" opacity="0.6"/>` +
        `<line x1="54" y1="18" x2="56" y2="34" stroke="${C.steam}" stroke-width="5.4" stroke-linecap="round" opacity="0.6"/>`
    );
  }

  // ── Rooster ──
  function rooster() {
    return svg(
      ci(48, 52, 28, C.animal) +
        ci(62, 32, 18, C.animal) +
        rr(52, 10, 10, 16, 5, C.comb) +
        rr(62, 8, 10, 18, 5, C.comb) +
        rr(76, 28, 16, 8, 4, C.accent) +
        ci(68, 30, 3, C.animal, 0.7) +
        rr(10, 58, 22, 10, 5, C.animal)
    );
  }

  // ── Houseplant ──
  function houseplant() {
    return svg(
      rr(28, 62, 44, 28, 6, C.mug) +
        ov(18, 22, 32, 42, C.plant) +
        ov(42, 12, 34, 46, C.plant, 0.85) +
        ov(50, 28, 30, 34, C.plant, 0.7)
    );
  }

  // ── Floppy Disk ──
  function floppyDisk() {
    return svg(
      rr(16, 12, 68, 76, 8, C.accent) +
        rr(22, 12, 56, 22, 4, C.scale) +
        rr(26, 42, 48, 38, 4, C.shirt) +
        rr(34, 18, 18, 10, 2, C.accent, 0.55)
    );
  }

  // ── Bell ──
  function bell() {
    return svg(
      rr(22, 22, 56, 50, 28, C.accent) +
        ci(50, 16, 8, C.accent) +
        rr(16, 62, 68, 12, 6, C.accent) +
        ci(50, 80, 7, C.accent)
    );
  }

  // ── Download Arrow ──
  function download() {
    return svg(
      rr(44, 8, 12, 42, 6, C.accent) +
        rr(26, 34, 22, 12, 6, C.accent) +
        rr(52, 34, 22, 12, 6, C.accent) +
        rr(18, 70, 64, 16, 8, C.scale) +
        rr(38, 44, 24, 16, 4, C.accent)
    );
  }

  // ── Apple ──
  function apple() {
    return svg(
      ci(48, 56, 28, C.comb) +
        rr(44, 12, 10, 22, 5, C.plant) +
        ov(52, 16, 22, 14, C.plant)
    );
  }

  // ── Pencil (edit) ──
  function pencil() {
    return svg(
      rr(38, 8, 12, 52, 4, C.animal) +
        rr(36, 56, 16, 18, 2, C.scale) +
        rr(40, 70, 8, 10, 2, C.accent) +
        rr(34, 8, 20, 12, 3, C.plant)
    );
  }

  // ── Restore (refresh) ──
  function restore() {
    return svg(
      `<path d="M50 18 A28 28 0 1 1 22 50" stroke="${C.accent}" stroke-width="8" stroke-linecap="round" fill="none"/>` +
        rr(18, 38, 12, 16, 3, C.accent) +
        rr(42, 12, 16, 12, 3, C.scale)
    );
  }

  // ── Render ──
  const map = {
    "person-on-scale": personOnScale,
    cat: cat,
    mug: mug,
    rooster: rooster,
    houseplant: houseplant,
    "floppy-disk": floppyDisk,
    bell: bell,
    download: download,
    apple: apple,
    pencil: pencil,
    restore: restore,
  };

  document.querySelectorAll(".peek[data-illu]").forEach((el) => {
    const fn = map[el.dataset.illu];
    if (fn) el.innerHTML = fn();
  });

  // ── Motivation ──
  const lines = [
    "Small steps still move the scale.",
    "One honest weigh-in. That\u2019s enough.",
    "Data doesn\u2019t judge. It guides.",
    "You showed up. That\u2019s the hard part.",
    "Consistency beats perfection.",
    "The scale is honest. So are you.",
    "Progress is quiet before it\u2019s loud.",
    "You\u2019re building something real.",
    "Every entry is a vote for the life you want.",
    "One number. One day. That\u2019s all you need.",
    "No app can want this for you. You did.",
    "This is what discipline looks like.",
    "You\u2019re not starting over. You\u2019re starting from experience.",
    "The trend is your friend.",
    "Honest data, honest progress.",
    "Future you says thanks.",
    "You can\u2019t manage what you don\u2019t measure.",
    "Showing up is the hardest rep.",
    "Weight is a signal, not a verdict.",
    "Courage is stepping on the scale anyway.",
    "Your data. Your pace. Your story.",
    "It\u2019s not about being perfect. It\u2019s about being present.",
    "One more entry than yesterday.",
    "Progress, not perfection.",
    "The only bad weigh-in is the one you skip.",
    "You\u2019re closer than you were last week.",
    "Trust the process.",
    "Momentum is built in small moments.",
    "Your future self is watching. Make them proud.",
    "This is you, choosing you.",
  ];
  const el = document.getElementById("motivation");
  if (el) {
    const i = Math.floor(Math.random() * lines.length);
    el.textContent = `\u201C${lines[i]}\u201D`;
  }
})();
