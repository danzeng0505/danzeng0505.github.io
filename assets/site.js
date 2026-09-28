(function () {
  const storageKey = "dan-zeng-homepage-language";

  function readSavedLanguage() {
    try {
      return localStorage.getItem(storageKey);
    } catch (_) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (_) {
      // The language switch still works when storage is unavailable.
    }
  }

  function setLanguage(language) {
    const english = language === "en";
    document.body.classList.toggle("en", english);
    document.documentElement.lang = english ? "en" : "zh-CN";
    document.title = english
      ? (document.body.dataset.page === "research" ? "Research | Dan Zeng" : "Dan Zeng")
      : (document.body.dataset.page === "research" ? "研究｜曾聃" : "曾聃｜Dan Zeng");

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === language);
    });

    saveLanguage(language);
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  window.toggleAbs = function (id, button, closedText, openText) {
    const panel = document.getElementById(id);
    const open = panel.style.display === "block";
    panel.style.display = open ? "none" : "block";
    button.textContent = open ? closedText : openText;
  };

  setLanguage(readSavedLanguage() === "en" ? "en" : "zh");
})();
