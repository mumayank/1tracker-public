(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var track = document.getElementById("slides");
  var dotsWrap = document.getElementById("dots");
  var featureItems = Array.prototype.slice.call(document.querySelectorAll(".feature-item"));
  var caption = document.querySelector(".slide-caption");
  var capTitle = document.getElementById("capTitle");
  var capSub = document.getElementById("capSub");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var current = 0;
  var autoTimer = null;
  var AUTO_MS = 6000;

  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", "Feature " + (i + 1) + " of " + slides.length);
    dot.addEventListener("click", function () {
      goTo(i, true);
    });
    dotsWrap.appendChild(dot);
  });

  var dots = Array.prototype.slice.call(dotsWrap.children);

  function goTo(index, manual) {
    current = (index + slides.length) % slides.length;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === current);
      slide.toggleAttribute("inert", i !== current);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === current);
    });
    featureItems.forEach(function (item, i) {
      item.classList.toggle("is-active", i === current);
      item.setAttribute("aria-current", i === current ? "true" : "false");
    });
    var active = slides[current];
    capTitle.textContent = active.dataset.title;
    capSub.textContent = active.dataset.sub;
    caption.classList.remove("swap");
    if (!reduceMotion) {
      void caption.offsetWidth;
      caption.classList.add("swap");
    }
    if (manual) restartAuto();
  }

  function restartAuto() {
    if (autoTimer) clearInterval(autoTimer);
    if (reduceMotion) return;
    autoTimer = setInterval(function () {
      goTo(current + 1, false);
    }, AUTO_MS);
  }

  prevBtn.addEventListener("click", function () {
    goTo(current - 1, true);
  });
  nextBtn.addEventListener("click", function () {
    goTo(current + 1, true);
  });
  featureItems.forEach(function (item) {
    item.addEventListener("click", function () {
      goTo(parseInt(item.dataset.slide, 10), true);
    });
  });

  var startX = null;
  var carousel = document.getElementById("carousel");
  carousel.addEventListener("pointerdown", function (e) {
    startX = e.clientX;
  });
  carousel.addEventListener("pointerup", function (e) {
    if (startX === null) return;
    var dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 42) goTo(current + (dx < 0 ? 1 : -1), true);
  });
  carousel.addEventListener("pointercancel", function () {
    startX = null;
  });

  document.querySelector(".hero-phone").addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") goTo(current - 1, true);
    if (e.key === "ArrowRight") goTo(current + 1, true);
  });

  restartAuto();
  var initial = parseInt(new URLSearchParams(location.search).get("s"), 10);
  goTo(Number.isInteger(initial) ? initial - 1 : 0, false);

  var lines = [
    "Small steps still move the scale.",
    "Consistency beats intensity.",
    "One honest weigh-in. That's enough.",
    "Own the number. Own the day.",
    "Today's log is tomorrow's insight.",
    "Energy follows action. Take one.",
    "Progress loves patience.",
    "Stronger than yesterday's excuses.",
    "You've already started. That matters.",
    "Discipline is self-respect in motion.",
  ];
  var motivation = document.getElementById("motivation");
  var lineIndex = Math.floor(Math.random() * lines.length);
  motivation.textContent = lines[lineIndex];
  if (!reduceMotion) {
    setInterval(function () {
      lineIndex = (lineIndex + 1) % lines.length;
      motivation.style.opacity = "0";
      setTimeout(function () {
        motivation.textContent = lines[lineIndex];
        motivation.style.opacity = "0.9";
      }, 500);
    }, 9000);
  }

  var dialog = document.getElementById("policy");
  var openBtn = document.getElementById("policyBtn");
  var closeBtn = document.getElementById("policyClose");
  var okBtn = document.getElementById("policyOk");

  function openPolicy() {
    if (!dialog.open) dialog.showModal();
  }

  openBtn.addEventListener("click", openPolicy);
  closeBtn.addEventListener("click", function () {
    dialog.close();
  });
  okBtn.addEventListener("click", function () {
    dialog.close();
  });
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", function () {
    if (location.hash === "#policy") {
      history.replaceState(null, "", location.pathname + location.search);
    }
  });

  function checkHash() {
    if (location.hash === "#policy") openPolicy();
  }
  window.addEventListener("hashchange", checkHash);
  checkHash();
})();
