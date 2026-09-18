/* ============================================================
   Material Moodle bilingüe de Vibecoding · UP01 Mantenimiento
   JS de navegación compartido · CC BY-SA 4.0
   ============================================================ */

(function () {
  "use strict";

  // --- Abrir/cerrar menú lateral en móvil ---
  var btn = document.querySelector(".header__menu-btn");
  var sidebar = document.querySelector(".sidebar");

  if (btn && sidebar) {
    btn.addEventListener("click", function () {
      sidebar.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", sidebar.classList.contains("is-open") ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      var isSidebar = sidebar.contains(e.target);
      var isBtn = btn.contains(e.target);
      if (!isSidebar && !isBtn && sidebar.classList.contains("is-open")) {
        sidebar.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Scroll-spy: resaltar enlace de la sección visible ---
  var sections = Array.prototype.slice.call(document.querySelectorAll("[id]"));
  var links = Array.prototype.slice.call(document.querySelectorAll(".sidebar a[href^='#']"));

  function onScrollSpy() {
    if (!sections.length || !links.length) return;

    var pos = window.scrollY + 100;
    var currentId = null;

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= pos) {
        currentId = sections[i].getAttribute("id");
      }
    }

    links.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + currentId);
    });
  }

  window.addEventListener("scroll", onScrollSpy, { passive: true });
  onScrollSpy();

  // --- Botón volver arriba ---
  var btnTop = document.querySelector(".backtotop");

  function onBackToTopScroll() {
    if (!btnTop) return;
    if (window.scrollY > 400) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", onBackToTopScroll, { passive: true });
  onBackToTopScroll();

  if (btnTop) {
    btnTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- Generación automática de índice (TOC) si existe el contenedor ---
  var tocBox = document.getElementById("toc-automatico");
  if (tocBox) {
    var headings = Array.prototype.slice.call(
      document.querySelectorAll(".main h2[id], .main h3[id]")
    );
    if (headings.length) {
      var ol = document.createElement("ol");
      headings.forEach(function (h) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        ol.appendChild(li);
      });
      var title = document.createElement("div");
      title.className = "toc__title";
      title.textContent = "Contenido de esta página";
      tocBox.appendChild(title);
      tocBox.appendChild(ol);
    }
  }

  // --- Avanzado: menú inglés/español (reservado) ---
  var langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      document.querySelector("html").classList.toggle("lang-en");
    });
  }

  // --- Protección ligera contra copia (disuasoria, no infalible) ---
  ["copy", "cut", "contextmenu", "dragstart"].forEach(function (tipo) {
    document.addEventListener(tipo, function (e) { e.preventDefault(); }, true);
  });
  document.addEventListener("selectstart", function (e) {
    var etiqueta = (e.target && e.target.tagName) || "";
    if (etiqueta !== "INPUT" && etiqueta !== "TEXTAREA" && etiqueta !== "SELECT") {
      e.preventDefault();
    }
  }, true);
})();