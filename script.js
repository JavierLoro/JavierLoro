(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const langBtn = document.getElementById("langToggle");
  const primaryNav = document.getElementById("primaryNav");
  const mainContent = document.getElementById("main-content");
  const heroActions = document.querySelector(".hero-actions");

  const savedTheme = localStorage.getItem("portfolio-theme");
  const savedLang = localStorage.getItem("portfolio-lang");
  const preferredDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const preferredLang = navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";

  root.dataset.theme = savedTheme || (preferredDark ? "dark" : "light");
  root.dataset.lang = savedLang || preferredLang;

  if (mainContent) {
    mainContent.setAttribute("tabindex", "-1");
  }

  if (heroActions && !heroActions.querySelector('a[href="https://github.com/JavierLoro"]')) {
    const githubLink = document.createElement("a");
    githubLink.className = "btn-ghost";
    githubLink.href = "https://github.com/JavierLoro";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.textContent = "GitHub ↗";

    const primaryAction = heroActions.querySelector(".btn-green");
    if (primaryAction) {
      primaryAction.insertAdjacentElement("afterend", githubLink);
    } else {
      heroActions.prepend(githubLink);
    }
  }

  function currentLang() {
    return root.dataset.lang === "es" ? "es" : "en";
  }

  function syncLocalizedAttributes() {
    const lang = currentLang();

    document.querySelectorAll("[data-alt-en][data-alt-es]").forEach(function (element) {
      element.setAttribute("alt", element.dataset["alt" + (lang === "es" ? "Es" : "En")]);
    });

    document.querySelectorAll("[data-aria-en][data-aria-es]").forEach(function (element) {
      element.setAttribute("aria-label", element.dataset["aria" + (lang === "es" ? "Es" : "En")]);
    });

    if (primaryNav) {
      primaryNav.setAttribute("aria-label", lang === "es" ? "Navegación principal" : "Primary navigation");
    }
  }

  function syncButtons() {
    const lang = currentLang();
    const dark = root.dataset.theme === "dark";

    langBtn.textContent = lang === "en" ? "ES" : "EN";
    langBtn.setAttribute(
      "aria-label",
      lang === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"
    );
    langBtn.setAttribute(
      "title",
      lang === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"
    );

    themeBtn.textContent = dark ? "☀" : "◐";
    themeBtn.setAttribute(
      "aria-label",
      lang === "es"
        ? (dark ? "Cambiar al tema claro" : "Cambiar al tema oscuro")
        : (dark ? "Switch to light theme" : "Switch to dark theme")
    );
    themeBtn.setAttribute(
      "title",
      lang === "es"
        ? (dark ? "Cambiar al tema claro" : "Cambiar al tema oscuro")
        : (dark ? "Switch to light theme" : "Switch to dark theme")
    );

    document.documentElement.lang = lang;
    syncLocalizedAttributes();
  }

  themeBtn.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", root.dataset.theme);
    syncButtons();
  });

  langBtn.addEventListener("click", function () {
    root.dataset.lang = currentLang() === "en" ? "es" : "en";
    localStorage.setItem("portfolio-lang", root.dataset.lang);
    syncButtons();
  });

  const navLinks = Array.from(document.querySelectorAll("[data-section-link]"));
  const sectionIds = navLinks.map(function (link) { return link.dataset.sectionLink; });
  const sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);

  function setActiveSection(id) {
    navLinks.forEach(function (link) {
      const active = link.dataset.sectionLink === id;
      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      const visible = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top); });

      if (visible.length) {
        setActiveSection(visible[0].target.id);
      }
    }, {
      rootMargin: "-28% 0px -62% 0px",
      threshold: 0
    });

    sections.forEach(function (section) { observer.observe(section); });
  }

  syncButtons();
})();
