/* ============================================================
   Material para el módulo de Ofimática · Creado por Noemí Celaya Mingot con ayuda de la IA
   JS de actividades autocorregibles · CC BY-NC-SA 4.0
   Bloque práctico: hardware básico y software de un puesto
   de trabajo administrativo sanitario
   ============================================================ */

(function () {
  "use strict";

  var IMG = "../images/hardware/";
  var CLAVE_REC = "up01-practico-rec-ok";
  var CLAVE_PUERTOS = "up01-practico-puertos-ok";
  var CLAVE_VERIF = "up01-practico-verificacion-ok";
  var CLAVE_SW_REC = "up01-practico-soft-rec-ok";
  var CLAVE_SW_SO = "up01-practico-soft-so-ok";
  var CLAVE_SW_CONFIG = "up01-practico-soft-config-ok";

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function imgAbs(nombre) {
    return new URL(IMG + nombre, location.href).href;
  }

  function abrirImpresion(titulo, cuerpoHtml) {
    var cssUrl = new URL("../css/estilos.css", location.href).href;
    var leyenda =
      "Material para el aula de Ofimática generado por Noemí Celaya Mingot con ayuda de la IA. Licencia CC BY-NC-SA 4.0";
    var html =
      '<!DOCTYPE html><html lang="es"><head><meta charset="utf-8">' +
      "<title>" + esc(titulo) + "</title>" +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">' +
      '<link rel="stylesheet" href="' + cssUrl + '">' +
      "<style>" +
      "@page{margin:18mm 14mm 20mm}" +
      ".print-visor{max-width:820px;margin:0 auto}" +
      ".print-barra{margin-bottom:1.2rem}" +
      ".print-cab{margin-bottom:1.3rem;border-bottom:3px solid var(--accent);padding-bottom:0.7rem}" +
      ".print-cab h1{color:var(--ink);font-family:Syne,sans-serif;font-size:1.55rem;line-height:1.25;margin:0 0 0.35rem}" +
      ".print-cab .meta{color:var(--muted);font-size:0.85rem}" +
      ".print-pie{border-top:1px solid #d9d7d2;margin-top:1.6rem;padding-top:0.55rem;color:var(--muted);font-size:0.72rem;text-align:center}" +
      "thead{display:table-header-group}" +
      "tr{page-break-inside:avoid}" +
      "img{page-break-inside:avoid}" +
      "@media screen{.print-visor{padding:2rem}}" +
      "@media print{.print-barra{display:none}}" +
      "</style></head><body>" +
      '<div class="print-visor">' +
      '<div class="print-barra">' +
      '<button class="btn btn--primary" onclick="window.print()">Imprimir o guardar como PDF</button> ' +
      '<button class="btn btn--ghost" onclick="window.close()">Cerrar</button>' +
      "</div>" +
      '<header class="print-cab">' +
      "<h1>" + esc(titulo) + "</h1>" +
      '<div class="meta">UP01 · Mantenimiento básico de equipos · Bloque práctico · ' +
      new Date().toLocaleDateString("es-ES") + "</div>" +
      "</header>" +
      cuerpoHtml +
      '<div class="print-pie">' + esc(leyenda) + "</div>" +
      "</div></body></html>";
    var w = window.open("", "_blank");
    if (!w) { alert("Permite las ventanas emergentes para descargar el PDF."); return; }
    w.document.open();
    w.document.write(html);
    w.document.close();
  }

  /* -------------------- DATOS -------------------- */

  var DECK = [
    { img: "teclado.png", nom: "Teclado", tipo: "Entrada", funcion: "Introduce texto, números y comandos.", tarea: "Registrar datos de pacientes, redactar informes y gestionar citas." },
    { img: "raton.png", nom: "Ratón", tipo: "Entrada", funcion: "Mueve el puntero y permite seleccionar y ejecutar acciones.", tarea: "Navegar por historias clínicas electrónicas y agendas." },
    { img: "escaner.png", nom: "Escáner", tipo: "Entrada", funcion: "Digitaliza documentos físicos.", tarea: "Digitalizar consentimientos informados, informes y solicitudes." },
    { img: "lector-tarjetas.png", nom: "Lector de tarjetas sanitarias", tipo: "Entrada", funcion: "Identifica usuarios mediante la lectura de tarjetas.", tarea: "Identificar de forma segura a pacientes y profesionales." },
    { img: "microfono.png", nom: "Micrófono", tipo: "Entrada", funcion: "Captura sonido.", tarea: "Videoconferencias, telemedicina y sistemas de dictado." },
    { img: "monitor.png", nom: "Monitor", tipo: "Salida", funcion: "Muestra visualmente la información procesada.", tarea: "Consultar historias clínicas y visualizar informes." },
    { img: "impresora.png", nom: "Impresora", tipo: "Salida", funcion: "Produce copias físicas de los documentos.", tarea: "Imprimir recetas, informes médicos, etiquetas y listados." },
    { img: "altavoces.png", nom: "Altavoces", tipo: "Salida", funcion: "Reproducen sonido.", tarea: "Videoconferencias, formación online y contenido multimedia." },
    { img: "proyector.png", nom: "Proyector", tipo: "Salida", funcion: "Proyecta imágenes a gran tamaño.", tarea: "Sesiones de formación y reuniones clínicas." },
    { img: "pantalla-tactil.png", nom: "Pantalla táctil", tipo: "Entrada / Salida", funcion: "Muestra información y recibe acciones por contacto.", tarea: "Mostradores de atención al público y autoservicio." },
    { img: "impresora-multifuncion.png", nom: "Impresora multifunción", tipo: "Entrada / Salida", funcion: "Imprime, escanea y envía fax en un único equipo.", tarea: "Gestionar documentación administrativa con un solo dispositivo." },
    { img: "usb-disco-externo.png", nom: "Almacenamiento portátil", tipo: "Entrada / Salida", funcion: "Guarda y traslada archivos.", tarea: "Copias de seguridad e intercambio de documentación." },
    { img: "hdd.png", nom: "Disco duro (HDD)", tipo: "Almacenamiento interno", funcion: "Guarda grandes volúmenes de datos a bajo coste.", tarea: "Copias de seguridad y archivos históricos de documentación." },
    { img: "ssd.png", nom: "Unidad de estado sólido (SSD)", tipo: "Almacenamiento interno", funcion: "Acceso muy rápido a los datos; sin partes móviles.", tarea: "Arranque rápido y consultas ágiles de historias clínicas." },
    { img: "cpu.png", nom: "Procesador (CPU)", tipo: "Componente interno", funcion: "Ejecuta instrucciones y realiza cálculos.", tarea: "Ejecutar la gestión de pacientes y las historias clínicas." },
    { img: "memoria-ram.png", nom: "Memoria RAM", tipo: "Componente interno", funcion: "Memoria de trabajo temporal y muy rápida.", tarea: "Mantener varias aplicaciones sanitarias abiertas a la vez." }
  ];

  var TAREAS = [
    { a: "Teclado", b: "Registrar los datos personales y las citas de un paciente" },
    { a: "Escáner", b: "Digitalizar un consentimiento informado firmado" },
    { a: "Lector de tarjetas sanitarias", b: "Identificar de forma segura a un paciente en admisión" },
    { a: "Impresora", b: "Imprimir recetas e informes médicos para el paciente" },
    { a: "Pantalla táctil", b: "Atender solicitudes en un mostrador de autoservicio" },
    { a: "Micrófono", b: "Dictar un informe médico en la consulta" },
    { a: "Almacenamiento portátil", b: "Realizar copias de seguridad de la documentación" },
    { a: "Proyector", b: "Proyectar el material de una sesión de formación clínica" }
  ];

  var ESCENARIOS = [
    { s: "Quieres conectar la impresora del mostrador al equipo de admisión.", ops: ["USB-B", "HDMI", "RJ45", "Jack 3,5 mm"], ok: 0, ex: "USB-B es el conector habitual de impresoras y escáneres." },
    { s: "Conectas el monitor de la consulta a la torre para visualizar historias clínicas.", ops: ["HDMI", "PS/2", "eSATA", "USB-A"], ok: 0, ex: "HDMI transmite vídeo y audio a monitores y proyectores." },
    { s: "El equipo debe acceder a las historias clínicas guardadas en el servidor del centro.", ops: ["RJ45", "VGA", "Jack 3,5 mm", "USB-B"], ok: 0, ex: "RJ45 (Ethernet) conecta por cable el equipo a la red local." },
    { s: "Cargas en el equipo los escaneos que has traído en una memoria USB.", ops: ["USB-A", "HDMI", "Jack 3,5 mm", "RJ45"], ok: 0, ex: "USB-A es el conector tradicional para memorias USB y periféricos." },
    { s: "Conectas unos auriculares para una videoconferencia de telemedicina.", ops: ["Jack 3,5 mm", "USB-C", "RJ45", "VGA"], ok: 0, ex: "El puerto Jack de 3,5 mm sirve para auriculares, micrófonos y altavoces." },
    { s: "Desde un portátil moderno conectas un disco externo con las copias de seguridad.", ops: ["USB-C", "PS/2", "eSATA", "Jack 3,5 mm"], ok: 0, ex: "USB-C es el conector moderno y reversible de los portátiles actuales." },
    { s: "Un segundo monitor de la estación de radiología necesita muy alta resolución.", ops: ["DisplayPort", "FireWire", "PS/2", "USB-B"], ok: 0, ex: "DisplayPort ofrece vídeo digital de alta resolución." },
    { s: "Identificas un equipo antiguo cuyo teclado se conecta con un conector circular.", ops: ["PS/2", "HDMI", "USB-C", "RJ45"], ok: 0, ex: "PS/2 era el conector de teclados y ratones en equipos antiguos." }
  ];

  var PUERTOS = [
    { nom: "USB-A", img: "puerto-usb-a.png", uso: "Conector clásico para memorias USB, ratón, teclado y periféricos." },
    { nom: "USB-C", img: "puerto-usb-c.png", uso: "Conector moderno y reversible: datos, vídeo y carga en portátiles actuales." },
    { nom: "RJ45 (Ethernet)", img: "puerto-rj45.png", uso: "Conexión por cable del equipo a la red local (Ethernet)." },
    { nom: "HDMI", img: "puerto-hdmi.png", uso: "Transmisión de vídeo y audio digital a monitores y proyectores." }
  ];

  var CHECKLIST = [
    { t: "Inspecciona visualmente el equipo, los cables y las conexiones, sin daños aparentes.",
      a: "Mira el equipo por fuera: busca golpes, grietas, cables pelados o conectores doblados, y comprueba que la carcasa está cerrada y sin restos de líquido." },
    { t: "Comprueba que el cable de corriente está enchufado y el protector funciona.",
      a: "Verifica que el cable de alimentación está bien insertado en el equipo y conectado a una base o regleta con protección, con su interruptor en ON." },
    { t: "Verifica la conexión de red (cable RJ45 o WiFi disponible).",
      a: "Mira el conector RJ45 de la parte trasera: el piloto del puerto debería estar encendido. Si es por WiFi, comprueba en la bandeja del sistema que hay conexión a la red del centro." },
    { t: "Comprueba que el monitor está conectado y encendido.",
      a: "Revisa que el cable de vídeo (VGA, HDMI o DisplayPort) está apretado en ambos extremos y que el monitor recibe corriente: su LED de encendido debe brillar." },
    { t: "Confirma que el teclado y el ratón están conectados y responden.",
      a: "Comprueba que sus conectores (USB o PS/2) están bien enchufados, mueve el ratón para ver que el puntero se desplaza y escribe una letra para ver que el teclado responde." },
    { t: "Enciende el equipo: el LED de encendido se ilumina y el ventilador gira.",
      a: "Pulsa el botón de encendido y observa el equipo: el LED debe iluminarse y el ventilador debe empezar a girar en pocos segundos." },
    { t: "Espera a que el sistema arranque hasta el escritorio sin mensajes de error.",
      a: "Deja que cargue el sistema operativo hasta el escritorio. Si aparece una pantalla negra, mensajes de error o una contraseña inesperada, no fuerces el arranque: registra la incidencia." },
    { t: "Comprueba los periféricos clave: impresora en línea, lector de tarjetas y escáner detectados.",
      a: "Abre la lista de dispositivos o de impresoras del sistema y confirma que la impresora figura «en línea» y que el lector de tarjetas y el escáner aparecen como detectados." },
    { t: "Verifica que las aplicaciones sanitarias abren y que la fecha y la hora son correctas.",
      a: "Abre una aplicación del centro (citas, historias clínicas…), comprueba que carga los datos y mira en la barra de tareas que la fecha y la hora del sistema son las correctas." }
  ];

  var SECUENCIA = [
    "Inspecciona visualmente el equipo, los cables y las conexiones.",
    "Conecta corriente y red antes de encender.",
    "Enciende el equipo y comprueba el indicador de encendido.",
    "Espera el arranque del sistema operativo hasta el escritorio.",
    "Comprueba que los periféricos (teclado, ratón, impresora, lector) responden.",
    "Verifica las aplicaciones sanitarias y registra cualquier incidencia."
  ];

  var INVENTARIO = [
    { g: "Componentes internos", items: ["Placa base", "Procesador (CPU)", "Memoria RAM", "Disco duro (HDD)", "Unidad SSD", "Fuente de alimentación", "Tarjeta gráfica (GPU)"] },
    { g: "Periféricos de entrada", items: ["Teclado", "Ratón", "Escáner", "Lector de tarjetas sanitarias", "Micrófono"] },
    { g: "Periféricos de salida", items: ["Monitor", "Impresora", "Altavoces", "Proyector"] },
    { g: "Entrada / salida", items: ["Pantalla táctil", "Impresora multifunción"] },
    { g: "Puertos presentes", items: ["USB-A", "USB-B", "USB-C", "RJ45", "HDMI", "Jack audio"] }
  ];

  /* -------------------- DATOS · SOFTWARE -------------------- */

  var SW_DECK = [
    { img: "monitor.png", nom: "Monitor", tipo: "Hardware", funcion: "Muestra visualmente la información procesada.", tarea: "Consultar historias clínicas e informes en pantalla." },
    { img: "teclado.png", nom: "Teclado", tipo: "Hardware", funcion: "Introduce texto, números y comandos.", tarea: "Registrar datos de pacientes, redactar informes y gestionar citas." },
    { img: "cpu.png", nom: "Procesador (CPU)", tipo: "Hardware", funcion: "Ejecuta instrucciones y realiza cálculos.", tarea: "Ejecutar la gestión de pacientes y las historias clínicas." },
    { img: "memoria-ram.png", nom: "Memoria RAM", tipo: "Hardware", funcion: "Memoria de trabajo temporal y muy rápida.", tarea: "Mantener varias aplicaciones sanitarias abiertas a la vez." },
    { img: "hdd.png", nom: "Disco duro (HDD)", tipo: "Hardware", funcion: "Guarda grandes volúmenes de datos a bajo coste.", tarea: "Guardar documentación e historias clínicas del servicio." },
    { chip: "Windows", nom: "Sistema operativo (Windows)", tipo: "Software de sistema", funcion: "Gestiona el equipo y hace de intermediario entre el hardware y el usuario.", tarea: "Arrancar el puesto y ejecutar las aplicaciones sanitarias." },
    { chip: "Driver impresora", nom: "Controlador de impresora", tipo: "Software de sistema", funcion: "Permite que el sistema use la impresora.", tarea: "Imprimir recetas, informes, etiquetas y listados." },
    { chip: "Driver escáner", nom: "Controlador de escáner", tipo: "Software de sistema", funcion: "Conecta el sistema con el escáner.", tarea: "Digitalizar consentimientos informados y documentación." },
    { chip: "Driver gráfica", nom: "Controlador de tarjeta gráfica", tipo: "Software de sistema", funcion: "Configura la calidad de imagen en pantalla.", tarea: "Visualizar con nitidez imágenes médicas y radiografías." },
    { chip: "Word", nom: "Procesador de textos (Word)", tipo: "Software de aplicación", funcion: "Crea y modifica documentos de texto.", tarea: "Redactar informes, comunicaciones y documentos administrativos." },
    { chip: "Excel", nom: "Hoja de cálculo (Excel)", tipo: "Software de aplicación", funcion: "Organiza datos y realiza cálculos.", tarea: "Elaborar listados y estadísticas de citas y pacientes." },
    { chip: "Access", nom: "Base de datos (Access)", tipo: "Software de aplicación", funcion: "Almacena y consulta información estructurada.", tarea: "Gestionar pacientes, historiales y recursos del centro." },
    { chip: "PowerPoint", nom: "Presentaciones (PowerPoint)", tipo: "Software de aplicación", funcion: "Crea presentaciones visuales.", tarea: "Formar al personal y presentar proyectos del servicio." },
    { chip: "Outlook", nom: "Correo y agenda (Outlook)", tipo: "Software de aplicación", funcion: "Comunicación y organización profesional.", tarea: "Coordinar al equipo y gestionar avisos y reuniones." },
    { chip: "Historia clínica", nom: "Historia clínica electrónica", tipo: "Software de aplicación sanitaria", funcion: "Aplicación sanitaria de gestión clínica.", tarea: "Acceso seguro a la información clínica del paciente." },
    { chip: "Gestión de citas", nom: "Gestión de citas", tipo: "Software de aplicación sanitaria", funcion: "Reserva y administra citas de pacientes.", tarea: "Asignar, consultar y recordar citas en el servicio." }
  ];

  var SW_DECK_SOFT = SW_DECK.filter(function (d) { return !d.img; });

  var SW_FUNCIONES = [
    { a: "Sistema operativo (Windows)", b: "Gestionar el equipo y hacer de intermediario entre hardware y usuario" },
    { a: "Procesador de textos (Word)", b: "Crear y modificar documentos de texto" },
    { a: "Hoja de cálculo (Excel)", b: "Organizar datos y realizar cálculos" },
    { a: "Base de datos (Access)", b: "Almacenar y consultar información estructurada" },
    { a: "Correo y agenda (Outlook)", b: "Comunicación y organización profesional" },
    { a: "Controlador de impresora", b: "Permitir que el sistema use la impresora" },
    { a: "Controlador de escáner", b: "Conectar el sistema con el escáner" },
    { a: "Historia clínica electrónica", b: "Aplicación sanitaria de gestión clínica" }
  ];

  var SW_ESCENARIOS = [
    { s: "Enciendes el equipo y aparece el logotipo de Windows antes de llegar al escritorio. ¿Qué software lo hace posible?", ops: ["El sistema operativo", "Un procesador de textos", "El controlador del escáner", "Una hoja de cálculo"], ok: 0, ex: "El sistema operativo controla el arranque y gestiona el equipo." },
    { s: "Conectas una impresora nueva y el equipo no la reconoce si falta su programa controlador específico.", ops: ["El controlador (driver) de la impresora", "Una hoja de cálculo", "El sistema operativo", "Un procesador de textos"], ok: 0, ex: "Los drivers permiten que el sistema se comunique con el dispositivo." },
    { s: "La pantalla muestra una imagen borrosa o con poca resolución al conectar un monitor nuevo.", ops: ["El controlador de la tarjeta gráfica", "El correo electrónico", "La base de datos", "El ratón"], ok: 0, ex: "El driver de la tarjeta gráfica ajusta la calidad de la imagen." },
    { s: "Necesitas redactar el informe de alta de un paciente.", ops: ["Un procesador de textos", "Una base de datos", "El sistema operativo", "Un controlador"], ok: 0, ex: "Los procesadores de textos crean y modifican documentos." },
    { s: "El servicio te pide el listado mensual de citas con estadísticas.", ops: ["Una hoja de cálculo", "Un correo electrónico", "Un procesador de textos", "Un driver"], ok: 0, ex: "Las hojas de cálculo organizan datos y realizan cálculos." },
    { s: "Hay que consultar la historia clínica electrónica de un paciente en la consulta.", ops: ["La aplicación de historia clínica", "Presentaciones", "El controlador del escáner", "Una hoja de cálculo"], ok: 0, ex: "Las aplicaciones sanitarias gestionan la información clínica." },
    { s: "Vas a enviar a todo el equipo el recordatorio de la reunión del miércoles.", ops: ["Correo y agenda", "Una base de datos", "El disco duro", "El sistema operativo"], ok: 0, ex: "El correo y la agenda gestionan la comunicación y las citas." },
    { s: "Un compañero te dice que el escáner no digitaliza los consentimientos informados.", ops: ["El controlador del escáner", "Un procesador de textos", "El sistema operativo", "Una hoja de cálculo"], ok: 0, ex: "Sin su driver, el sistema no detecta ni usa el escáner." }
  ];

  var SW_TAREAS = [
    { a: "Procesador de textos (Word)", b: "Redactar informes y comunicaciones" },
    { a: "Hoja de cálculo (Excel)", b: "Elaborar estadísticas y listados de citas" },
    { a: "Base de datos (Access)", b: "Gestionar pacientes e historiales" },
    { a: "Presentaciones (PowerPoint)", b: "Formación del personal y proyectos" },
    { a: "Correo y agenda (Outlook)", b: "Coordinación del equipo y avisos" },
    { a: "Historia clínica electrónica", b: "Acceso seguro a información clínica" }
  ];

  var SW_CHECKLIST = [
    { t: "Inicia sesión en el equipo y comprueba que el escritorio carga sin errores.",
      a: "Identifícate en el sistema y espera a que aparezca el escritorio. Si aparece un error o una cuenta inesperada, registra la incidencia." },
    { t: "Comprueba que la fecha y la hora del sistema son correctas.",
      a: "Abre Configuración → Hora e idioma y verifica la hora, el día y la zona horaria de tu comunidad." },
    { t: "Configura la resolución de pantalla para una lectura cómoda.",
      a: "En Configuración → Sistema → Pantalla, elige la resolución recomendada y comprueba que el texto se ve nítido." },
    { t: "Personaliza el fondo de escritorio con una imagen adecuada (sin datos personales).",
      a: "Clic derecho sobre el escritorio → Personalizar → Fondo y elige una imagen corporativa o neutra." },
    { t: "Organiza los iconos y ancla a la barra de tareas las aplicaciones de uso diario.",
      a: "Ordena los accesos directos del escritorio y fija en la barra de tareas Word, Excel, Outlook y las aplicaciones sanitarias." },
    { t: "Crea una carpeta de trabajo para la documentación del servicio.",
      a: "En Documentos, crea una carpeta con el nombre del servicio y úsala para guardar informes y listados." },
    { t: "Vacía la papelera de reciclaje si contiene archivos temporales.",
      a: "Abre la Papelera, revisa el contenido y vacíala si ya no se necesita. Libera espacio y deja el puesto ordenado." },
    { t: "Comprueba que las aplicaciones abren y guarda la configuración realizada.",
      a: "Abre cada aplicación sanitaria y ofimática y verifica que responde: algunos cambios se aplican al reiniciar o al volver a iniciar sesión." }
  ];

  var SW_SECUENCIA = [
    "Inicia sesión y espera a que el sistema cargue hasta el escritorio.",
    "Comprueba la fecha y la hora del sistema.",
    "Configura la resolución de la pantalla.",
    "Personaliza el fondo de escritorio y organiza los iconos.",
    "Ancla a la barra de tareas las aplicaciones de uso diario.",
    "Crea la carpeta de trabajo y verifica que las aplicaciones abren."
  ];

  var SW_INVENTARIO = [
    { g: "Sistema operativo", items: ["Windows", "Linux", "macOS"] },
    { g: "Software de aplicación (ofimática)", items: ["Procesador de textos", "Hoja de cálculo", "Base de datos", "Presentaciones", "Correo y agenda"] },
    { g: "Aplicaciones sanitarias", items: ["Historia clínica electrónica", "Gestión de citas", "Gestión de pacientes", "Codificación diagnóstica"] },
    { g: "Controladores (drivers)", items: ["Impresora", "Escáner", "Tarjeta gráfica"] }
  ];

  /* -------------------- BAR AJA -------------------- */

  function iniciarBaraja(contenedor, deck) {
    deck = deck || DECK;
    var html = "";
    deck.forEach(function (d) {
      var frontal = d.img
        ? '<span class="baraja__cara"><img src="' + IMG + d.img + '" alt="' + esc(d.nom) + '" loading="lazy"></span>'
        : '<span class="baraja__cara baraja__cara--txt"><span class="baraja__chip">' + esc(d.nom) + "</span></span>";
      html +=
        '<button type="button" class="baraja__card" aria-pressed="false">' +
        '<span class="baraja__inner">' +
        frontal +
        '<span class="baraja__cara baraja__cara--tras">' +
        '<span class="baraja__tras-tipo">' + esc(d.tipo) + "</span>" +
        '<span class="baraja__tras-nombre">' + esc(d.nom) + "</span>" +
        '<span class="baraja__tras-funcion">' + esc(d.funcion) + "</span>" +
        "</span></span></button>";
    });
    contenedor.innerHTML = '<div class="baraja">' + html + "</div>";
    $$(".baraja__card", contenedor).forEach(function (c) {
      c.addEventListener("click", function () {
        var volcada = c.classList.toggle("is-flipped");
        c.setAttribute("aria-pressed", volcada ? "true" : "false");
      });
    });
  }

  /* -------------------- EMPAREJADO -------------------- */

  function iniciarEmparejado(contenedor, izquierda, derecha, esImagenDer, onCompleto) {
    var aciertos = 0;
    var pendiente = null;

    function construir() {
      var rest = (contenedor.querySelector(".match__resto"));
      if (rest) { rest.remove(); }
      var izq = shuffle(izquierda);
      var der = shuffle(derecha);
      var html =
        '<div class="match">' +
        '<div class="match__col">' +
        '<div class="match__title">Columna izquierda</div>';
      izq.forEach(function (x) {
        html += '<button type="button" class="match__item" data-par="' + x.id + '">' + esc(x.texto) + "</button>";
      });
      html += "</div><div class='match__col'><div class='match__title'>Columna derecha</div>";
      der.forEach(function (x) {
        var contenido = esImagenDer
          ? '<img src="' + IMG + x.img + '" alt="Puerto ' + esc(x.texto) + '">'
          : esc(x.texto);
        html += '<button type="button" class="match__item" data-par="' + x.id + '">' + contenido + "</button>";
      });
      html += "</div></div>";
      html +=
        '<div class="feedback" aria-live="polite">Selecciona un elemento a la izquierda y pulsa su pareja a la derecha.</div>';
      html += '<div class="practica__intro match__resto"><button type="button" class="btn btn--ghost">Reiniciar emparejado</button></div>';
      contenedor.innerHTML = html;

      var izqBtns = $$('.match__col:first-child .match__item', contenedor);
      var derBtns = $$('.match__col:nth-child(2) .match__item', contenedor);
      var fb = $(".feedback", contenedor);
      var total = izq.length;

      izqBtns.forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.disabled) { return; }
          $$(".match__item.is-pending", contenedor).forEach(function (o) { o.classList.remove("is-pending"); });
          b.classList.add("is-pending");
          pendiente = b.getAttribute("data-par");
        });
      });

      derBtns.forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.disabled || pendiente === null) { return; }
          var match = b.getAttribute("data-par") === pendiente;
          var a = $$('.match__item[data-par="' + pendiente + '"]', contenedor);
          if (match) {
            a.forEach(function (o) { o.classList.add("is-ok"); o.disabled = true; });
            b.classList.add("is-ok"); b.disabled = true;
            aciertos++;
            fb.className = "feedback";
            if (aciertos === total) {
              fb.className = "feedback feedback--ok";
              fb.innerHTML = "<p>Todas las parejas son correctas. ¡Muy bien!</p>";
              if (onCompleto) { onCompleto(); }
            } else {
              fb.innerHTML = "<p>Pareja correcta (" + aciertos + " de " + total + ").</p>";
            }
          } else {
            a.forEach(function (o) { o.classList.add("is-bad"); });
            b.classList.add("is-bad");
            setTimeout(function () {
              a.forEach(function (o) { o.classList.remove("is-bad"); o.classList.remove("is-pending"); });
              b.classList.remove("is-bad");
            }, 450);
            fb.className = "feedback feedback--bad";
            fb.innerHTML = "<p>Esa pareja no es correcta. Inténtalo de nuevo.</p>";
          }
          pendiente = null;
        });
      });

      var btnReset = $(".match__resto .btn", contenedor);
      if (btnReset) {
        btnReset.addEventListener("click", function () {
          aciertos = 0; pendiente = null;
          construir();
        });
      }
    }

    construir();
  }

  /* -------------------- PONTE A PRUEBA -------------------- */

  var TIPOS_DECK = [];
  DECK.forEach(function (d) { if (TIPOS_DECK.indexOf(d.tipo) === -1) { TIPOS_DECK.push(d.tipo); } });

  function opcionesDesde(correcto, lista) {
    var candidatos = shuffle(lista.filter(function (x) { return x !== correcto; })).slice(0, 3);
    var todas = shuffle([correcto].concat(candidatos));
    return { opciones: todas, respuesta: todas.indexOf(correcto) };
  }

  function hacerPregunta(d) {
    var tipos = ["nombre", "funcion", "tarea", "tipo"];
    var modo = tipos[Math.floor(Math.random() * tipos.length)];
    var q = {};
    if (modo === "nombre") {
      q.prompt = "¿Qué dispositivo es este?";
      q.img = d.img;
      var r1 = opcionesDesde(d.nom, DECK.map(function (x) { return x.nom; }));
      q.opciones = r1.opciones; q.respuesta = r1.respuesta; q.explicacion = d.funcion;
    } else if (modo === "funcion") {
      q.prompt = "¿Cuál es la función de este dispositivo?";
      q.img = d.img;
      var r2 = opcionesDesde(d.funcion, DECK.map(function (x) { return x.funcion; }));
      q.opciones = r2.opciones; q.respuesta = r2.respuesta; q.explicacion = d.nom + ".";
    } else if (modo === "tarea") {
      q.prompt = "¿Con qué tarea del entorno sanitario se relaciona este dispositivo?";
      q.img = d.img;
      var r3 = opcionesDesde(d.tarea, DECK.map(function (x) { return x.tarea; }));
      q.opciones = r3.opciones; q.respuesta = r3.respuesta; q.explicacion = d.nom + ".";
    } else {
      q.prompt = "Clasifica el siguiente dispositivo: «" + d.nom + "»";
      q.img = null;
      var r4 = opcionesDesde(d.tipo, TIPOS_DECK);
      q.opciones = r4.opciones; q.respuesta = r4.respuesta; q.explicacion = d.funcion;
    }
    return q;
  }

  function iniciarTest(contenedor) {
    var preguntas = [];
    var total = 10;

    function construir() {
      preguntas = shuffle(DECK).slice(0, total).map(hacerPregunta);
      var html = '<ol class="test">';
      preguntas.forEach(function (q, i) {
        html += '<li class="test__q" data-q="' + i + '">';
        html += '<div class="test__prompt">';
        if (q.img) { html += '<img src="' + IMG + q.img + '" alt="" loading="lazy">'; }
        html += "<span>" + esc(q.prompt) + "</span></div>";
        html += '<div class="test__opciones">';
        q.opciones.forEach(function (o, j) {
          html += '<button type="button" class="test__op" data-opt="' + j + '">' + esc(o) + "</button>";
        });
        html += "</div></li>";
      });
      html += "</ol>";
      html += '<div class="feedback" aria-live="polite"><p>Selecciona una respuesta en cada pregunta y pulsa «Comprobar respuestas».</p></div>';
      html += '<div class="practica__intro"><button type="button" class="btn btn--primary">Comprobar respuestas</button> ' +
        '<button type="button" class="btn btn--ghost">Reintentar (nuevo test)</button></div>';
      contenedor.innerHTML = html;

      $$(".test__op", contenedor).forEach(function (b) {
        b.addEventListener("click", function () {
          var li = b.closest(".test__q");
          $$(".test__op", li).forEach(function (o) { o.classList.remove("is-selected"); });
          b.classList.add("is-selected");
        });
      });

      $(".btn--primary", contenedor).addEventListener("click", function () { corregir(); });
      $(".btn--ghost", contenedor).addEventListener("click", function () { construir(); });
    }

    function corregir() {
      var aciertos = 0;
      preguntas.forEach(function (q, i) {
        var li = $('.test__q[data-q="' + i + '"]', contenedor);
        var selec = $(".test__op.is-selected", li);
        var ops = $$(".test__op", li);
        if (!selec) { return; }
        var elegida = parseInt(selec.getAttribute("data-opt"), 10);
        if (elegida === q.respuesta) {
          selec.classList.add("is-correct");
          aciertos++;
        } else {
          selec.classList.add("is-wrong");
          ops[q.respuesta].classList.add("is-revelado");
        }
        ops.forEach(function (o) { o.disabled = true; });
      });
      var fb = $(".feedback", contenedor);
      if (aciertos === total) {
        fb.className = "feedback feedback--ok";
        fb.innerHTML = "<p>¡Perfecto! Has acertado las " + total + " preguntas. " +
          "Se ha desbloqueado la tabla de respuestas resueltas para descargarla en PDF.</p>";
        desbloquearSoluciones();
      } else {
        fb.className = "feedback feedback--bad";
        fb.innerHTML = "<p>Has acertado " + aciertos + " de " + total + ". Repite el test cuantas veces quieras hasta lograrlo perfecto.</p>";
      }
    }

    construir();
  }

  /* -------------------- PONTE A PRUEBA · SOFTWARE -------------------- */

  function hacerPreguntaSW(d, deck, tiposDeck) {
    var modos = ["delim", "tipo", "funcion", "tarea"];
    var modo = modos[Math.floor(Math.random() * modos.length)];
    var q = {};
    if (modo === "delim") {
      q.prompt = "«" + d.nom + "» es…";
      q.opciones = shuffle(["Software", "Hardware"]);
      q.respuesta = d.tipo === "Hardware" ? q.opciones.indexOf("Hardware") : q.opciones.indexOf("Software");
      q.explicacion = d.nom + " es " + d.tipo + ".";
    } else if (modo === "tipo") {
      q.prompt = "¿A qué tipo pertenece «" + d.nom + "»?";
      var r = opcionesDesde(d.tipo, tiposDeck);
      q.opciones = r.opciones; q.respuesta = r.respuesta; q.explicacion = d.funcion;
    } else if (modo === "funcion") {
      q.prompt = "¿Cuál es la función de «" + d.nom + "»?";
      var r2 = opcionesDesde(d.funcion, deck.map(function (x) { return x.funcion; }));
      q.opciones = r2.opciones; q.respuesta = r2.respuesta; q.explicacion = d.nom + ".";
    } else {
      q.prompt = "¿Con qué tarea del entorno sanitario se relaciona «" + d.nom + "»?";
      var r3 = opcionesDesde(d.tarea, deck.map(function (x) { return x.tarea; }));
      q.opciones = r3.opciones; q.respuesta = r3.respuesta; q.explicacion = d.funcion;
    }
    return q;
  }

  function iniciarTestSoft(contenedor) {
    var tiposSW = [];
    SW_DECK.forEach(function (d) { if (tiposSW.indexOf(d.tipo) === -1) { tiposSW.push(d.tipo); } });
    var preguntas = [];
    var total = 10;

    function construir() {
      preguntas = shuffle(SW_DECK).slice(0, total).map(function (d) { return hacerPreguntaSW(d, SW_DECK, tiposSW); });
      var html = '<ol class="test">';
      preguntas.forEach(function (q, i) {
        html += '<li class="test__q" data-q="' + i + '">';
        html += '<div class="test__prompt"><span>' + esc(q.prompt) + "</span></div>";
        html += '<div class="test__opciones">';
        q.opciones.forEach(function (o, j) {
          html += '<button type="button" class="test__op" data-opt="' + j + '">' + esc(o) + "</button>";
        });
        html += "</div></li>";
      });
      html += "</ol>";
      html += '<div class="feedback" aria-live="polite"><p>Selecciona una respuesta en cada pregunta y pulsa «Comprobar respuestas».</p></div>';
      html += '<div class="practica__intro"><button type="button" class="btn btn--primary">Comprobar respuestas</button> ' +
        '<button type="button" class="btn btn--ghost">Reintentar (nuevo test)</button></div>';
      contenedor.innerHTML = html;

      $$(".test__op", contenedor).forEach(function (b) {
        b.addEventListener("click", function () {
          var li = b.closest(".test__q");
          $$(".test__op", li).forEach(function (o) { o.classList.remove("is-selected"); });
          b.classList.add("is-selected");
        });
      });

      $(".btn--primary", contenedor).addEventListener("click", function () { corregir(); });
      $(".btn--ghost", contenedor).addEventListener("click", function () { construir(); });
    }

    function corregir() {
      var aciertos = 0;
      preguntas.forEach(function (q, i) {
        var li = $('.test__q[data-q="' + i + '"]', contenedor);
        var selec = $(".test__op.is-selected", li);
        var ops = $$(".test__op", li);
        if (!selec) { return; }
        var elegida = parseInt(selec.getAttribute("data-opt"), 10);
        if (elegida === q.respuesta) {
          selec.classList.add("is-correct");
          aciertos++;
        } else {
          selec.classList.add("is-wrong");
          ops[q.respuesta].classList.add("is-revelado");
        }
        ops.forEach(function (o) { o.disabled = true; });
      });
      var fb = $(".feedback", contenedor);
      if (aciertos === total) {
        fb.className = "feedback feedback--ok";
        fb.innerHTML = "<p>¡Perfecto! Has acertado las " + total + " preguntas. " +
          "Se ha desbloqueado la tabla de respuestas resueltas (software y hardware) para descargarla en PDF.</p>";
        desbloquearSolucionesSoft();
      } else {
        fb.className = "feedback feedback--bad";
        fb.innerHTML = "<p>Has acertado " + aciertos + " de " + total + ". Repite el test cuantas veces quieras hasta lograrlo perfecto.</p>";
      }
    }

    construir();
  }

  /* -------------------- SOLUCIONES PDF · SOFTWARE -------------------- */

  function elementoSoftCelda(d, absolutas) {
    if (d.img) {
      var ruta = absolutas ? imgAbs(d.img) : IMG + d.img;
      return "<img src='" + ruta + "' alt='" + esc(d.nom) + "' loading='lazy'>";
    }
    return '<span class="chip-celda">' + esc(d.chip) + "</span>";
  }

  function tablaSoftwareRecHtml(absolutas) {
    var cab = "<thead><tr><th>Elemento</th><th>Tipo</th><th>Función</th><th>Tarea sanitaria</th></tr></thead>";
    var filas = "";
    SW_DECK.forEach(function (d) {
      filas +=
        "<tr><td>" + elementoSoftCelda(d, absolutas) + "</td>" +
        "<td>" + esc(d.tipo) + "</td>" +
        "<td>" + esc(d.funcion) + "</td>" +
        "<td>" + esc(d.tarea) + "</td></tr>";
    });
    return '<div class="table-wrap tabla-soluciones"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>";
  }

  function tablaSoftSoHtml() {
    var cab = "<thead><tr><th>#</th><th>Situación</th><th>Solución</th><th>Por qué</th></tr></thead>";
    var filas = "";
    SW_ESCENARIOS.forEach(function (e, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td>" + esc(e.s) + "</td>" +
        "<td><strong>" + esc(e.ops[e.ok]) + "</strong></td><td>" + esc(e.ex) + "</td></tr>";
    });
    var cab2 = "<thead><tr><th>Aplicación</th><th>Tarea sanitaria</th></tr></thead>";
    var filas2 = "";
    SW_TAREAS.forEach(function (t) {
      filas2 += "<tr><td><strong>" + esc(t.a) + "</strong></td><td>" + esc(t.b) + "</td></tr>";
    });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>" +
      "<h3>Aplicaciones y tareas sanitarias</h3>" +
      '<div class="table-wrap"><table>' + cab2 + "<tbody>" + filas2 + "</tbody></table></div>";
  }

  function tablaSoftConfigHtml() {
    var cab = "<thead><tr><th>#</th><th>Comprobación</th><th>Cómo hacerlo</th></tr></thead>";
    var filas = "";
    SW_CHECKLIST.forEach(function (c, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td><strong>" + esc(c.t) + "</strong></td><td>" + esc(c.a) + "</td></tr>";
    });
    var sec = "";
    SW_SECUENCIA.forEach(function (s, i) { sec += "<li>" + (i + 1) + ". " + esc(s) + "</li>"; });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>" +
      "<h3>Orden de la personalización y configuración del sistema</h3><ol>" + sec + "</ol>";
  }

  var SW_SO_OK_EMPAREJADO = false;
  var SW_SO_OK_ESCENARIOS = false;
  var SW_CONFIG_OK_CHECKLIST = false;
  var SW_CONFIG_OK_ORDEN = false;

  function desbloquearSolucionesSoft() {
    desbloquearPanel("#soluciones-soft-rec", CLAVE_SW_REC);
  }

  function intentarDesbloquearSoftSo() {
    if (SW_SO_OK_EMPAREJADO && SW_SO_OK_ESCENARIOS) {
      desbloquearPanel("#soluciones-soft-so", CLAVE_SW_SO);
    }
  }

  function intentarDesbloquearSoftConfig() {
    if (SW_CONFIG_OK_CHECKLIST && SW_CONFIG_OK_ORDEN) {
      desbloquearPanel("#soluciones-soft-config", CLAVE_SW_CONFIG);
    }
  }

  function iniciarSolucionesSoftRec() {
    var panel = $("#soluciones-soft-rec");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaSoftwareRecHtml(false);
    $("#btn-pdf-soluciones-soft-rec").addEventListener("click", function () {
      abrirImpresion("Software y hardware · Tabla de respuestas resueltas", tablaSoftwareRecHtml(true));
    });
    $("#btn-cerrar-soluciones-soft-rec").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_SW_REC) === "1") { panel.hidden = false; } } catch (e) {}
  }

  function iniciarSolucionesSoftSo() {
    var panel = $("#soluciones-soft-so");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaSoftSoHtml();
    $("#btn-pdf-soluciones-soft-so").addEventListener("click", function () {
      abrirImpresion("El sistema operativo y sus funciones · Soluciones resueltas", tablaSoftSoHtml());
    });
    $("#btn-cerrar-soluciones-soft-so").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_SW_SO) === "1") { panel.hidden = false; } } catch (e) {}
  }

  function iniciarSolucionesSoftConfig() {
    var panel = $("#soluciones-soft-config");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaSoftConfigHtml();
    $("#btn-pdf-soluciones-soft-config").addEventListener("click", function () {
      abrirImpresion("Personalización y configuración del sistema · Soluciones resueltas", tablaSoftConfigHtml());
    });
    $("#btn-cerrar-soluciones-soft-config").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_SW_CONFIG) === "1") { panel.hidden = false; } } catch (e) {}
  }

  /* -------------------- SOLUCIONES PDF -------------------- */

  function tablaSolucionesHtml(absolutas) {
    var cab = "<thead><tr><th>Imagen</th><th>Dispositivo</th><th>Tipo</th><th>Función</th><th>Tarea sanitaria</th></tr></thead>";
    var filas = "";
    DECK.forEach(function (d) {
      var ruta = absolutas ? imgAbs(d.img) : IMG + d.img;
      filas +=
        "<tr><td><img src='" + ruta + "' alt='' loading='lazy'></td>" +
        "<td><strong>" + esc(d.nom) + "</strong></td>" +
        "<td>" + esc(d.tipo) + "</td>" +
        "<td>" + esc(d.funcion) + "</td>" +
        "<td>" + esc(d.tarea) + "</td></tr>";
    });
    return '<div class="table-wrap tabla-soluciones"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>";
  }

  var PUERTOS_OK_EMPAREJADO = false;
  var PUERTOS_OK_ESCENARIOS = false;
  var VERIF_OK_CHECKLIST = false;
  var VERIF_OK_ORDEN = false;

  function desbloquearPanel(selector, clave) {
    var panel = $(selector);
    if (!panel) { return; }
    panel.hidden = false;
    try { localStorage.setItem(clave, "1"); } catch (e) {}
  }

  function intentarDesbloquearPuertos() {
    if (PUERTOS_OK_EMPAREJADO && PUERTOS_OK_ESCENARIOS) {
      desbloquearPanel("#soluciones-puertos", CLAVE_PUERTOS);
    }
  }

  function intentarDesbloquearVerificacion() {
    if (VERIF_OK_CHECKLIST && VERIF_OK_ORDEN) {
      desbloquearPanel("#soluciones-verificacion", CLAVE_VERIF);
    }
  }

  function desbloquearSoluciones() {
    desbloquearPanel("#soluciones-panel", CLAVE_REC);
  }

  function iniciarSoluciones() {
    var panel = $("#soluciones-panel");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaSolucionesHtml(false);
    $("#btn-pdf-soluciones").addEventListener("click", function () {
      abrirImpresion("Reconocimiento de equipos y periféricos · Tabla resuelta", tablaSolucionesHtml(true));
    });
    $("#btn-cerrar-soluciones").addEventListener("click", function () { panel.hidden = true; });
    try {
      if (localStorage.getItem(CLAVE_REC) === "1") { panel.hidden = false; }
    } catch (e) {}
  }

  /* ---------- SOLUCIONES · PUERTOS ---------- */

  function tablaPuertosHtml(absolutas) {
    var cab1 = "<thead><tr><th>Imagen</th><th>Puerto</th><th>Para qué sirve</th></tr></thead>";
    var filas1 = "";
    PUERTOS.forEach(function (p) {
      var ruta = absolutas ? imgAbs(p.img) : IMG + p.img;
      filas1 += "<tr><td><img src='" + ruta + "' alt='' loading='lazy'></td>" +
        "<td><strong>" + esc(p.nom) + "</strong></td><td>" + esc(p.uso) + "</td></tr>";
    });
    var cab2 = "<thead><tr><th>#</th><th>Situación</th><th>Solución</th><th>Por qué</th></tr></thead>";
    var filas2 = "";
    ESCENARIOS.forEach(function (e, i) {
      filas2 += "<tr><td>" + (i + 1) + "</td><td>" + esc(e.s) + "</td>" +
        "<td><strong>" + esc(e.ops[e.ok]) + "</strong></td><td>" + esc(e.ex) + "</td></tr>";
    });
    return '<div class="table-wrap"><table>' + cab1 + "<tbody>" + filas1 + "</tbody></table></div>" +
      "<h3>Conexiones resueltas de los escenarios</h3>" +
      '<div class="table-wrap"><table>' + cab2 + "<tbody>" + filas2 + "</tbody></table></div>";
  }

  function tablaPuertosPdf() {
    return tablaPuertosHtml(true);
  }

  function iniciarSolucionesPuertos() {
    var panel = $("#soluciones-puertos");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaPuertosHtml();
    $("#btn-pdf-soluciones-puertos").addEventListener("click", function () {
      abrirImpresion("Puertos y conexiones · Soluciones resueltas", tablaPuertosPdf());
    });
    $("#btn-cerrar-soluciones-puertos").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_PUERTOS) === "1") { panel.hidden = false; } } catch (e) {}
  }

  /* ---------- SOLUCIONES · VERIFICACIÓN ---------- */

  function tablaVerificacionHtml() {
    var cab = "<thead><tr><th>#</th><th>Comprobación</th><th>Cómo hacerlo</th></tr></thead>";
    var filas = "";
    CHECKLIST.forEach(function (c, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td><strong>" + esc(c.t) + "</strong></td><td>" + esc(c.a) + "</td></tr>";
    });
    var sec = "";
    SECUENCIA.forEach(function (s, i) { sec += "<li>" + (i + 1) + ". " + esc(s) + "</li>"; });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>" +
      "<h3>Orden estándar de verificación</h3><ol>" + sec + "</ol>";
  }

  function tablaVerificacionPdf() {
    return tablaVerificacionHtml();
  }

  function iniciarSolucionesVerificacion() {
    var panel = $("#soluciones-verificacion");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaVerificacionHtml();
    $("#btn-pdf-soluciones-verificacion").addEventListener("click", function () {
      abrirImpresion("Verificación del equipo · Soluciones resueltas", tablaVerificacionPdf());
    });
    $("#btn-cerrar-soluciones-verificacion").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_VERIF) === "1") { panel.hidden = false; } } catch (e) {}
  }

  /* -------------------- ESCENARIOS -------------------- */

  function iniciarEscenarios(contenedor, datos, msjBad, onCompletos) {
    datos = datos || ESCENARIOS;
    msjBad = msjBad || "Todavía no. Fíjate bien en el dispositivo y en el tipo de puerto.";
    onCompletos = onCompletos || function () { PUERTOS_OK_ESCENARIOS = true; intentarDesbloquearPuertos(); };
    var html = "";
    datos.forEach(function (e, i) {
      html += '<div class="escenario" data-es="' + i + '">';
      html += "<p>" + esc(e.s) + "</p>";
      html += '<div class="escenario__opciones">';
      e.ops.forEach(function (o, j) {
        html += '<label class="escenario__opt"><input type="radio" name="es' + i + '" value="' + j + '">' + esc(o) + "</label>";
      });
      html += "</div>";
      html += '<button type="button" class="btn btn--primary">Comprobar</button>';
      html += '<div class="escenario__mensaje" aria-live="polite"></div>';
      html += "</div>";
    });
    contenedor.innerHTML = html;

    $$(".escenario__opt input", contenedor).forEach(function (inp) {
      inp.addEventListener("change", function () {
        var esc = inp.closest(".escenario");
        $$(".escenario__opt", esc).forEach(function (l) { l.classList.remove("is-sel"); });
        inp.closest("label").classList.add("is-sel");
      });
    });

    $$(".escenario .btn", contenedor).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var esc = btn.closest(".escenario");
        var i = parseInt(esc.getAttribute("data-es"), 10);
        var mensaje = $(".escenario__mensaje", esc);
        var elegido = $('input[name="es' + i + '"]:checked', esc);
        if (!elegido) {
          mensaje.className = "escenario__mensaje bad";
          mensaje.textContent = "Selecciona antes una opción.";
          return;
        }
        var val = parseInt(elegido.value, 10);
        if (val === datos[i].ok) {
          mensaje.className = "escenario__mensaje ok";
          mensaje.textContent = "Correcto. " + datos[i].ex;
          esc.setAttribute("data-acierto", "1");
        } else {
          mensaje.className = "escenario__mensaje bad";
          mensaje.textContent = msjBad;
          esc.setAttribute("data-acierto", "0");
        }
        if ($$('.escenario[data-acierto="1"]', contenedor).length === datos.length) {
          onCompletos();
        }
      });
    });
  }

  /* -------------------- CHECKLIST -------------------- */

  function iniciarChecklist(contenedor, datos, msjOk, onCompletos) {
    datos = datos || CHECKLIST;
    msjOk = msjOk || "Equipo revisado: listo para uso. Si detectaste alguna anomalía, regístrala y avisa al servicio de mantenimiento.";
    onCompletos = onCompletos || function () { VERIF_OK_CHECKLIST = true; intentarDesbloquearVerificacion(); };
    var html = '<ul class="checklist">';
    datos.forEach(function (c, i) {
      html += '<li class="checklist__item">';
      html += '<div class="checklist__fila"><input type="checkbox" id="chk-' + i + '"><span class="num">' + (i + 1) +
        "</span><label for='chk-" + i + "'>" + esc(c.t) + "</label></div>";
      html += '<details class="checklist__ayuda"><summary>¿Cómo lo compruebo?</summary><p>' + esc(c.a) + "</p></details></li>";
    });
    html += "</ul>";
    html += '<div class="progreso"><div class="progreso__relleno"></div></div>';
    html += '<div class="feedback" aria-live="polite"><p>Marca cada comprobación a medida que la realices.</p></div>';
    html += '<div class="practica__intro"><button type="button" class="btn btn--ghost">Reiniciar checklist</button></div>';
    contenedor.innerHTML = html;

    $$(".checklist__fila input", contenedor).forEach(function (inp) {
      inp.addEventListener("change", function () { repintar(); });
    });

    function repintar() {
      var filas = $$(".checklist__fila", contenedor);
      var hecho = 0;
      filas.forEach(function (f) {
        var ok = f.querySelector("input").checked;
        f.classList.toggle("is-hecho", ok);
        if (ok) { hecho++; }
      });
      var total = filas.length;
      $(".progreso__relleno", contenedor).style.width = Math.round((hecho / total) * 100) + "%";
      var fb = $(".feedback", contenedor);
      if (hecho === total) {
        fb.className = "feedback feedback--ok";
        fb.innerHTML = "<p>" + msjOk + "</p>";
        onCompletos();
      } else {
        fb.className = "feedback";
        fb.innerHTML = "<p>Has comprobado " + hecho + " de " + total + " pasos. Continúa revisando.</p>";
      }
    }

    $(".btn--ghost", contenedor).addEventListener("click", function () {
      $$(".checklist__fila input", contenedor).forEach(function (inp) { inp.checked = false; });
      repintar();
    });
    repintar();
  }

  /* -------------------- ORDENAR PASOS -------------------- */

  function iniciarOrden(contenedor, datos, msjIntro, msjOk, msjFallo, onCompletos) {
    var pos = 0;
    var fallo = false;
    datos = datos || SECUENCIA;
    msjIntro = msjIntro || "Ordena correctamente los seis pasos de la puesta en marcha.";
    msjOk = msjOk || "¡Correcto! Este es el orden de verificación de un puesto de trabajo.";
    msjFallo = msjFallo || "Ese paso no corresponde aquí: primero se inspecciona y se conecta el equipo antes de encenderlo. Pulsa «Reiniciar» e inténtalo de nuevo.";
    onCompletos = onCompletos || function () { VERIF_OK_ORDEN = true; intentarDesbloquearVerificacion(); };
    var total = datos.length;

    function construir() {
      pos = 0; fallo = false;
      var pasos = shuffle(datos.map(function (s, i) { return { id: i, t: s }; }));
      var html = '<div class="orden">';
      html += '<div><div class="match__title">Pulsa los pasos en el orden correcto</div><div class="orden__pila">';
      pasos.forEach(function (p) {
        html += '<button type="button" class="orden__ficha" data-paso="' + p.id + '">' + esc(p.t) + "</button>";
      });
      html += "</div></div>";
      html += '<div><div class="match__title">Tu secuencia (1 a ' + total + ')</div><ol class="orden__secuencia">';
      for (var i = 0; i < total; i++) { html += "<li></li>"; }
      html += "</ol></div></div>";
      html += '<div class="feedback" aria-live="polite"><p>' + msjIntro + "</p></div>";
      html += '<div class="practica__intro"><button type="button" class="btn btn--ghost">Reiniciar</button></div>';
      contenedor.innerHTML = html;

      $$(".orden__ficha", contenedor).forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.disabled || fallo) { return; }
          var id = parseInt(b.getAttribute("data-paso"), 10);
          var lis = $$(".orden__secuencia li", contenedor);
          if (id === pos) {
            lis[pos].textContent = (pos + 1) + ". " + datos[id];
            lis[pos].className = "esta-ok";
            b.disabled = true;
            pos++;
            var fb = $(".feedback", contenedor);
            if (pos === total) {
              fb.className = "feedback feedback--ok";
              fb.innerHTML = "<p>" + msjOk + "</p>";
              onCompletos();
            } else {
              fb.className = "feedback";
              fb.innerHTML = "<p>Paso " + pos + " de " + total + " colocado. Sigue con el siguiente.</p>";
            }
          } else {
            fallo = true;
            lis[pos].className = "esta-bad";
            b.classList.add("is-bad");
            var f = $(".feedback", contenedor);
            f.className = "feedback feedback--bad";
            f.innerHTML = "<p>" + msjFallo + "</p>";
          }
        });
      });

      $(".btn--ghost", contenedor).addEventListener("click", function () { construir(); });
    }

    construir();
  }

  /* -------------------- INVENTARIO -------------------- */

  function iniciarInventario(contenedor, datos, tituloPdf) {
    datos = datos || INVENTARIO;
    tituloPdf = tituloPdf || "Inventario del puesto de trabajo";
    var html = "";
    datos.forEach(function (g, gi) {
      html += '<div class="inventario__grupo"><h4>' + esc(g.g) + "</h4>";
      g.items.forEach(function (it, ii) {
        html += '<label class="inventario__fila"><input type="checkbox" data-grupo="' + gi + '" data-item="' + ii + '">' + esc(it) + "</label>";
      });
      html += "</div>";
    });
    html += '<div class="inventario__campos">';
    html += '<label>Puesto / ubicación <input type="text" id="inv-ubicacion" placeholder="Ej.: Admisión · Mesa 3"></label>';
    html += '<label>Centro / servicio <input type="text" id="inv-centro" placeholder="Ej.: Centro de salud Norte"></label>';
    html += "</div>";
    html += '<div class="practica__intro"><button type="button" class="btn btn--primary">Generar inventario</button></div>';
    html += '<div class="inventario-resultado"></div>';
    contenedor.innerHTML = html;

    $(".btn--primary", contenedor).addEventListener("click", function () {
      var resultado = $(".inventario-resultado", contenedor);
      var grupos = [];
      var total = 0;
      INVENTARIO.forEach(function (g, gi) {
        var marcados = [];
        $$('input[data-grupo="' + gi + '"]:checked', contenedor).forEach(function (inp) {
          marcados.push(datos[gi].items[parseInt(inp.getAttribute("data-item"), 10)]);
        });
        total += marcados.length;
        grupos.push({ nombre: g.g, marcados: marcados });
      });

      if (total === 0) {
        resultado.innerHTML = '<div class="feedback feedback--bad" aria-live="polite">' +
          "<p>Marca al menos un componente presente en el puesto.</p></div>";
        return;
      }

      var filas = "";
      grupos.forEach(function (g) {
        filas += "<tr><td><strong>" + esc(g.nombre) + "</strong></td><td>" +
          (g.marcados.length ? esc(g.marcados.join(", ")) : "—") + "</td><td>" + g.marcados.length + "</td></tr>";
      });
      var ubicacion = $("#inv-ubicacion", contenedor).value.trim() || "Sin especificar";
      var centro = $("#inv-centro", contenedor).value.trim() || "Sin especificar";
      var fecha = new Date().toLocaleDateString("es-ES");

      var tablaBase =
        '<div class="feedback feedback--ok" aria-live="polite"><p>Inventario generado: <strong>' + total +
        "</strong> componentes localizados.</p></div>" +
        '<div class="table-wrap"><table><thead><tr><th>Categoría</th><th>Componentes</th><th>Nº</th></tr></thead>' +
        "<tbody>" + filas + "</tbody></table></div>" +
        '<p class="practica__intro">Ubicación: ' + esc(ubicacion) + " · Centro: " + esc(centro) + " · Fecha: " + fecha + "</p>";
      var tabla = tablaBase +
        '<div class="practica__intro"><button type="button" class="btn btn--primary">Descargar inventario (PDF)</button></div>';
      resultado.innerHTML = tabla;

      resultado.querySelector(".btn").addEventListener("click", function () {
        abrirImpresion(tituloPdf, tablaBase);
      });
    });
  }

  /* -------------------- INIT -------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    if ($("#baraja")) { iniciarBaraja($("#baraja")); }
    if ($("#empareja-tareas")) {
      iniciarEmparejado(
        $("#empareja-tareas"),
        shuffle(TAREAS.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(TAREAS.map(function (t, i) { return { id: i, texto: t.b }; })),
        false
      );
    }
    if ($("#empareja-puertos")) {
      iniciarEmparejado(
        $("#empareja-puertos"),
        shuffle(PUERTOS.map(function (p, i) { return { id: i, texto: p.nom }; })),
        shuffle(PUERTOS.map(function (p, i) { return { id: i, img: p.img, texto: p.nom }; })),
        true,
        function () { PUERTOS_OK_EMPAREJADO = true; intentarDesbloquearPuertos(); }
      );
    }
    if ($("#ponte-a-prueba")) { iniciarTest($("#ponte-a-prueba")); }
    if ($("#soluciones-panel")) { iniciarSoluciones(); }
    if ($("#soluciones-puertos")) { iniciarSolucionesPuertos(); }
    if ($("#soluciones-verificacion")) { iniciarSolucionesVerificacion(); }
    if ($("#escenarios")) { iniciarEscenarios($("#escenarios")); }
    if ($("#checklist")) { iniciarChecklist($("#checklist")); }
    if ($("#orden")) { iniciarOrden($("#orden")); }
    if ($("#inventario")) { iniciarInventario($("#inventario")); }

    /* --- Bloque práctico · Software --- */
    if ($("#baraja-soft")) { iniciarBaraja($("#baraja-soft"), SW_DECK_SOFT); }
    if ($("#empareja-funciones")) {
      iniciarEmparejado(
        $("#empareja-funciones"),
        shuffle(SW_FUNCIONES.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(SW_FUNCIONES.map(function (t, i) { return { id: i, texto: t.b }; })),
        false
      );
    }
    if ($("#empareja-apps")) {
      iniciarEmparejado(
        $("#empareja-apps"),
        shuffle(SW_TAREAS.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(SW_TAREAS.map(function (t, i) { return { id: i, texto: t.b }; })),
        false,
        function () { SW_SO_OK_EMPAREJADO = true; intentarDesbloquearSoftSo(); }
      );
    }
    if ($("#ponte-a-prueba-soft")) { iniciarTestSoft($("#ponte-a-prueba-soft")); }
    if ($("#soluciones-soft-rec")) { iniciarSolucionesSoftRec(); }
    if ($("#soluciones-soft-so")) { iniciarSolucionesSoftSo(); }
    if ($("#soluciones-soft-config")) { iniciarSolucionesSoftConfig(); }
    if ($("#escenarios-soft")) {
      iniciarEscenarios(
        $("#escenarios-soft"),
        SW_ESCENARIOS,
        "Todavía no. Piensa qué elemento de software interviene en esta situación.",
        function () { SW_SO_OK_ESCENARIOS = true; intentarDesbloquearSoftSo(); }
      );
    }
    if ($("#checklist-soft")) {
      iniciarChecklist(
        $("#checklist-soft"),
        SW_CHECKLIST,
        "Configuración completada: el puesto queda listo y personalizado para su uso. Si detectaste algo que no responde, regístralo y avisa a mantenimiento.",
        function () { SW_CONFIG_OK_CHECKLIST = true; intentarDesbloquearSoftConfig(); }
      );
    }
    if ($("#orden-soft")) {
      iniciarOrden(
        $("#orden-soft"),
        SW_SECUENCIA,
        "Ordena correctamente los seis pasos de la personalización del sistema.",
        "¡Correcto! Este es el orden de personalización y configuración del sistema.",
        "Ese paso no corresponde aquí: primero se enciende y se configura lo básico. Pulsa «Reiniciar» e inténtalo de nuevo.",
        function () { SW_CONFIG_OK_ORDEN = true; intentarDesbloquearSoftConfig(); }
      );
    }
    if ($("#inventario-soft")) { iniciarInventario($("#inventario-soft"), SW_INVENTARIO, "Inventario de software del puesto de trabajo"); }
  });
})();