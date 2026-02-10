function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
  });

  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}

setLang("de");
