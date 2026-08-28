(() => {
  const nodes = document.querySelectorAll(".reveal");
  const peeks = document.querySelectorAll(".peek");
  const show = (el) => el.classList.add("is-visible");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach(show);
    peeks.forEach(show);
    return;
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(show);
    peeks.forEach(show);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);

        if (!entry.target.classList.contains("peek")) {
          const delay = entry.target.dataset.revealDelay || 0;
          const peeksInThis = entry.target.querySelectorAll(".peek");
          peeksInThis.forEach((p, i) => {
            setTimeout(() => show(p), Number(delay) + i * 80);
          });
        }

        io.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
  );

  nodes.forEach((el) => io.observe(el));

  peeks.forEach((el) => {
    if (el.closest(".reveal")) return;
    io.observe(el);
  });
})();
