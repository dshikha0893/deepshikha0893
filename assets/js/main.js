// Deepshikha · Portfolio interactions (no libraries needed)

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Rotating word in the headline. Edit the words in data-words in index.html.
  const rot = document.querySelector("[data-words]");
  if (rot && !reduceMotion) {
    const words = rot.dataset.words.split(",").map((w) => w.trim()).filter(Boolean);
    let i = 0;
    setInterval(() => {
      rot.classList.add("is-out");
      setTimeout(() => {
        i = (i + 1) % words.length;
        rot.textContent = words[i];
        rot.classList.remove("is-out");
      }, 300);
    }, 2600);
  }

  // 2. Work filters. Each card has data-kind="field" or data-kind="project".
  const filterBtns = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".work-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      cards.forEach((c) => { c.hidden = !(f === "all" || c.dataset.kind === f); });
    });
  });

  // 3. Toolkit tabs (keyboard: left/right arrows move between tabs).
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const selectTab = (tab) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
  };
  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(idx + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });

  // 4. Footer year.
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
