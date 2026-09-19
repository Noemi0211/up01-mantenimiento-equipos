/* ============================================================
   Material para el módulo de Ofimática · Creado por Noemí Celaya Mingot con ayuda de la IA
   JS de navegación compartido · CC BY-NC-SA 4.0
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

  // --- Lightbox: ampliar imágenes al hacer clic ---
  var overlay = document.createElement("div");
  overlay.className = "lightbox is-hidden";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Imagen ampliada");
  overlay.innerHTML =
    '<button class="lightbox__cerrar" type="button" aria-label="Cerrar vista ampliada">&times;</button>' +
    '<figure class="lightbox__contenido">' +
    "<img alt=\"\">" +
    "<figcaption></figcaption>" +
    "</figure>";

  var imgZoom = overlay.querySelector("img");
  var figZoom = overlay.querySelector("figcaption");

  function abrirLightbox(img) {
    imgZoom.src = img.src;
    imgZoom.alt = img.alt || "";
    var fig = img.closest("figure");
    var pie = fig ? fig.querySelector("figcaption") : null;
    figZoom.textContent = pie ? pie.textContent : "";
    overlay.classList.remove("is-hidden");
    document.body.classList.add("has-lightbox");
    overlay.querySelector(".lightbox__cerrar").focus();
  }

  function cerrarLightbox() {
    overlay.classList.add("is-hidden");
    document.body.classList.remove("has-lightbox");
    imgZoom.src = "";
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest(".lightbox")) { return; }
    var img = e.target.closest("img");
    if (!img) { return; }
    // Las imágenes dentro de un botón conservan su comportamiento interactivo
    // (baraja que se voltea, emparejados de puertos, opciones de test).
    if (img.closest("button") || img.closest(".baraja")) { return; }
    abrirLightbox(img);
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target.classList.contains("lightbox__cerrar")) {
      cerrarLightbox();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.classList.contains("is-hidden")) {
      cerrarLightbox();
    }
  });

  document.body.appendChild(overlay);

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