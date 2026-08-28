(() => {
  const nodes = document.querySelectorAll(".reveal");
  const show = (el) => el.classList.add("is-visible");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach(show);
    return;
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(show);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
  );

  nodes.forEach((el) => io.observe(el));
})();

(() => {
  const button = document.querySelector("[data-download-apk]");
  const label = document.querySelector("[data-download-label]");
  if (!button) return;

  const versionJson =
    "https://raw.githubusercontent.com/mumayank/1tracker-public/main/version.json";
  const filesBase =
    "https://raw.githubusercontent.com/mumayank/1tracker-public/main/";

  fetch(`${versionJson}?t=${Date.now()}`)
    .then((response) => {
      if (!response.ok) throw new Error("version.json missing");
      return response.json();
    })
    .then((data) => {
      const fileName = data.apkFileName || "1tracker.apk";
      const versionName = data.versionName || "";
      button.href = `${filesBase}${fileName}`;
      button.setAttribute("download", fileName);
      if (versionName) {
        button.textContent = `Download ${versionName}`;
      }
      if (label) {
        label.textContent = fileName;
      }
    })
    .catch(() => {
      if (label) {
        label.textContent = "Latest version";
      }
    });
})();
