(function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("portfolio-theme");
  const savedLang = localStorage.getItem("portfolio-lang");

  const preferredDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  root.dataset.theme = savedTheme || (preferredDark ? "dark" : "light");
  root.dataset.lang = savedLang || "en";

  const themeBtn = document.getElementById("themeToggle");
  const langBtn = document.getElementById("langToggle");

  function syncButtons() {
    themeBtn.textContent = root.dataset.theme === "dark" ? "☀" : "◐";
    langBtn.textContent = root.dataset.lang === "en" ? "ES" : "EN";
    document.documentElement.lang = root.dataset.lang;
  }

  themeBtn.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", root.dataset.theme);
    syncButtons();
  });

  langBtn.addEventListener("click", function () {
    root.dataset.lang = root.dataset.lang === "en" ? "es" : "en";
    localStorage.setItem("portfolio-lang", root.dataset.lang);
    syncButtons();
  });

  syncButtons();
})();
