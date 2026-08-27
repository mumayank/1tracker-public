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
