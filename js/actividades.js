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
  var CLAVE_CIBER_AME = "up01-practico-ciber-ame-ok";
  var CLAVE_CIBER_SOCIAL = "up01-practico-ciber-social-ok";
  var CLAVE_CIBER_PROT = "up01-practico-ciber-prot-ok";
  var CLAVE_RL_COMP = "up01-practico-rl-comp-ok";
  var CLAVE_RL_TOPO = "up01-practico-rl-topo-ok";
  var CLAVE_RL_CONFIG = "up01-practico-rl-config-ok";
  var CLAVE_INT_CONEX = "up01-practico-int-conex-ok";
  var CLAVE_INT_FALLOS = "up01-practico-int-fallos-ok";

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

  /* -------------------- DATOS · CIBERSEGURIDAD -------------------- */

  var CS_DECK = [
    { chip: "Virus", nom: "Virus", tipo: "Malware", funcion: "Se adjunta a archivos legítimos y se propaga cuando se ejecutan.", tarea: "Puede corromper documentos e historias clínicas al abrir archivos infectados." },
    { chip: "Troyano", nom: "Troyano", tipo: "Malware", funcion: "Aparenta ser seguro o útil pero realiza acciones maliciosas.", tarea: "Puede dar acceso remoto a un atacante en el puesto de trabajo." },
    { chip: "Ransomware", nom: "Ransomware", tipo: "Malware", funcion: "Bloquea el acceso a los datos y exige un pago para recuperarlos.", tarea: "Puede impedir el acceso a historias clínicas durante una emergencia." },
    { chip: "Gusano", nom: "Gusano", tipo: "Malware", funcion: "Se propaga automáticamente por redes y dispositivos.", tarea: "Puede infectar toda la red del centro sin intervención del usuario." },
    { chip: "Spyware", nom: "Spyware", tipo: "Malware", funcion: "Recopila información del usuario sin su consentimiento.", tarea: "Puede espiar la actividad y robar datos sensibles del servicio." },
    { chip: "Keylogger", nom: "Keylogger", tipo: "Malware", funcion: "Registra las pulsaciones del teclado.", tarea: "Puede robar contraseñas de las aplicaciones sanitarias." },
    { chip: "Phishing", nom: "Phishing", tipo: "Ingeniería social", funcion: "Mensajes o webs falsas que intentan que reveles datos personales.", tarea: "Puede robar credenciales de acceso a cuentas corporativas." },
    { chip: "Deepfake", nom: "Deepfake", tipo: "Ingeniería social", funcion: "Contenido audiovisual falso creado con IA para engañar.", tarea: "Puede suplantar a un responsable del centro para obtener datos." }
  ];

  var CS_MALWARE = [
    { a: "Virus", b: "Se adjunta a archivos legítimos y se propaga al ejecutarlos" },
    { a: "Troyano", b: "Aparenta ser seguro o útil pero realiza acciones maliciosas" },
    { a: "Ransomware", b: "Bloquea los datos y exige un pago para recuperarlos" },
    { a: "Gusano", b: "Se propaga automáticamente por redes y dispositivos" },
    { a: "Spyware", b: "Recopila información del usuario sin su consentimiento" },
    { a: "Keylogger", b: "Registra las pulsaciones del teclado" },
    { a: "Phishing", b: "Mensajes o webs falsas para que reveles credenciales" },
    { a: "Deepfake", b: "Audiovisual falso creado con IA para engañar" }
  ];

  var CS_ESCENARIOS = [
    { s: "Te llaman por teléfono desde el «servicio de informática» y te piden la contraseña de la historia clínica.", ops: ["Vishing", "Smishing", "Shoulder surfing", "Deepfake"], ok: 0, ex: "El vishing es la suplantación por teléfono; nadie legítimo pedirá tu contraseña." },
    { s: "Recibes un SMS de «tu banco» con un enlace para confirmar un cargo inexistente.", ops: ["Smishing", "Vishing", "Pretexting", "Baiting"], ok: 0, ex: "El smishing usa mensajes de texto para engañar." },
    { s: "Una persona dice ser «la administrativa del servicio» y te cuenta una emergencia para que le facilites el usuario.", ops: ["Pretexting", "Deepfake", "Ransomware", "Keylogger"], ok: 0, ex: "El pretexting inventa una historia para obtener información." },
    { s: "Te ofrecen una tableta «de regalo» si descargas su aplicación de música.", ops: ["Baiting", "Shoulder surfing", "Vishing", "Gusano"], ok: 0, ex: "El baiting ofrece un beneficio atractivo para engañar." },
    { s: "Mientras trabajas notas que alguien se acerca y mira tu pantalla y tu teclado sin tu permiso.", ops: ["Shoulder surfing", "Phishing", "Smishing", "Spyware"], ok: 0, ex: "El shoulder surfing observa la pantalla o el teclado para captar datos." },
    { s: "Recibes un correo «del director del centro», con una dirección no oficial, pidiendo credenciales de admisión.", ops: ["Suplantación de identidad", "Vishing", "Pretexting", "Baiting"], ok: 0, ex: "Hacerse pasar por una persona de confianza es una suplantación de identidad." },
    { s: "Un vídeo generado con IA imita al gerente pidiendo que envíes datos de pacientes.", ops: ["Deepfake", "Keylogger", "Ransomware", "Gusano"], ok: 0, ex: "El deepfake crea contenido audiovisual falso con IA." },
    { s: "Recibes un correo dirigido personalmente a ti, con un enlace «para revisar tu nómina», desde una dirección que parece interna.", ops: ["Spear phishing", "Baiting", "Shoulder surfing", "Troyano"], ok: 0, ex: "El spear phishing va dirigido a una persona concreta." }
  ];

  var CS_TECNICAS = [
    { a: "Pretexting", b: "Inventar una historia para obtener información" },
    { a: "Baiting", b: "Ofrecer un beneficio atractivo para engañar al usuario" },
    { a: "Suplantación de identidad", b: "Hacerse pasar por una persona de confianza" },
    { a: "Shoulder surfing", b: "Observar la pantalla o el teclado de otra persona" },
    { a: "Deepfake", b: "Usar la IA para crear contenido audiovisual falso" },
    { a: "Spear phishing", b: "Phishing dirigido a una persona o colectivo concreto" },
    { a: "Smishing", b: "Suplantación mediante mensajes de texto (SMS)" },
    { a: "Vishing", b: "Suplantación mediante llamadas telefónicas" }
  ];

  var CS_TEST = [
    { p: "Un programa que se propaga automáticamente por la red se llama…", ops: ["Gusano", "Virus", "Troyano", "Deepfake"], ok: 0 },
    { p: "El malware que bloquea los datos y pide un pago es…", ops: ["Ransomware", "Spyware", "Keylogger", "Baiting"], ok: 0 },
    { p: "Un correo falso que pide tus credenciales es…", ops: ["Phishing", "Pretexting", "Shoulder surfing", "Gusano"], ok: 0 },
    { p: "La técnica de hacerse pasar por el director del centro es…", ops: ["Suplantación de identidad", "Baiting", "Smishing", "Vishing"], ok: 0 },
    { p: "Para crear contraseñas seguras y guardarlas se recomienda…", ops: ["Un gestor de contraseñas", "Autocompletar del navegador", "Un post-it en el monitor", "Una hoja de cálculo compartida"], ok: 0 },
    { p: "La herramienta que controla las conexiones de red entrantes y salientes es…", ops: ["El cortafuegos (firewall)", "El antivirus", "El gestor de contraseñas", "El cifrado"], ok: 0 },
    { p: "Comprobar el remitente antes de abrir adjuntos es una práctica de…", ops: ["Protección del correo electrónico", "Navegación rápida", "Protección física", "Gestión de citas"], ok: 0 },
    { p: "¿Qué aporta la autenticación en dos pasos (2FA)?", ops: ["Un segundo factor de confirmación", "Una contraseña más larga", "Un antivirus extra", "Más espacio en el disco"], ok: 0 },
    { p: "Ante un USB encontrado en el pasillo…", ops: ["No se conecta y se avisa", "Se conecta para revisarlo", "Se prueba en un equipo antiguo", "Se comparte con el compañero"], ok: 0 },
    { p: "Una videollamada falsa que imita al gerente usa…", ops: ["Deepfake", "Baiting", "Pretexting", "Keylogger"], ok: 0 }
  ];

  var CS_HERRAMIENTAS = [
    { a: "Antivirus", b: "Detecta, bloquea y elimina virus y otros malware" },
    { a: "Cortafuegos (firewall)", b: "Controla las conexiones de red entrantes y salientes" },
    { a: "Antimalware", b: "Protege frente a amenazas como spyware o ransomware" },
    { a: "Gestor de contraseñas", b: "Crea y almacena contraseñas seguras" },
    { a: "Software de cifrado", b: "Protege la información con técnicas criptográficas" },
    { a: "VPN", b: "Establece conexiones seguras a través de Internet" },
    { a: "Autenticación en dos pasos (2FA)", b: "Confirma la identidad con un segundo factor" },
    { a: "Copias de seguridad", b: "Recupera los datos ante un ataque o una pérdida" }
  ];

  var CS_CHECKLIST = [
    { t: "Uso una contraseña larga y compleja y no la comparto.",
      a: "Crea una contraseña de al menos 12 caracteres mezclando letras, números y símbolos: no la reutilices en otros servicios ni la anotes junto al equipo." },
    { t: "Compruebo el remitente y la dirección web antes de abrir o introducir datos.",
      a: "Fíjate en el dominio del correo y en la URL completa antes de pulsar en un enlace; si la dirección es extraña, no la abras." },
    { t: "No abro adjuntos sospechosos y desconfío de mensajes urgentes o alarmistas.",
      a: "Ante un mensaje que te presiona, párate: verifica con otra vía si el remitente es legítimo antes de actuar." },
    { t: "He activado la autenticación en dos pasos (2FA) en las cuentas que lo permiten.",
      a: "Revisa los ajustes de seguridad de tus cuentas principales y activa el segundo factor de verificación." },
    { t: "Bloqueo el equipo cuando abandono el puesto.",
      a: "Usa Windows+L (u otra combinación de bloqueo rápido) cuando te levantes de la mesa, aunque sea por unos instantes." },
    { t: "No conecto dispositivos USB desconocidos.",
      a: "Si encuentras una memoria USB que no es tuya, no la conectes: avisa a la persona responsable o al servicio informático." },
    { t: "Mantengo actualizado el sistema operativo y las aplicaciones.",
      a: "Comprueba que las actualizaciones automáticas están activadas o instala las pendientes desde la configuración del sistema." },
    { t: "Evito redes Wi-Fi públicas para información sensible y uso VPN cuando es necesario.",
      a: "Comprueba la red a la que te conectas y usa VPN si trabajas desde una red no controlada por el centro." }
  ];

  var CS_SECUENCIA = [
    "Detente y desconfía de los mensajes urgentes o alarmistas.",
    "Comprueba el remitente y la dirección (dominio) del correo.",
    "No abras adjuntos ni pulses enlaces sospechosos.",
    "No facilites credenciales ni datos personales.",
    "Avisa a la persona responsable o al servicio informático.",
    "Registra la incidencia siguiendo el protocolo del centro."
  ];

  var CS_INVENTARIO = [
    { g: "Herramientas de protección", items: ["Antivirus", "Cortafuegos (firewall)", "Antimalware", "Gestor de contraseñas", "Software de cifrado"] },
    { g: "Seguridad de las cuentas", items: ["Autenticación en dos pasos (2FA)", "Contraseñas largas y complejas", "Sesiones bloqueadas al abandonar el puesto"] },
    { g: "Red y navegación", items: ["Acceso a redes autorizadas del centro", "Uso de VPN cuando es necesario", "Navegación solo desde fuentes fiables"] },
    { g: "Actualizaciones y copias", items: ["Actualizaciones del sistema operativo", "Actualizaciones de aplicaciones", "Copias de seguridad periódicas"] }
  ];

  /* -------------------- DATOS · REDES LOCALES (LAN) -------------------- */

  var RL_DECK = [
    { chip: "Equipos", nom: "Ordenadores y dispositivos", tipo: "Equipos de la red", funcion: "Enviar, recibir y procesar información.", tarea: "Puestos de admisión, consultas, archivo y laboratorio conectados a la red." },
    { chip: "Switch", nom: "Switch", tipo: "Dispositivo de interconexión", funcion: "Conecta varios equipos dentro de la LAN y distribuye la información entre ellos.", tarea: "Interconectar los puestos de un centro de salud en la red interna." },
    { chip: "Router", nom: "Router", tipo: "Dispositivo de interconexión", funcion: "Conecta la red local con otras redes, especialmente Internet.", tarea: "Dar acceso del centro a servicios corporativos, aplicaciones en línea e Internet." },
    { chip: "Servidor", nom: "Servidor", tipo: "Equipo de la red", funcion: "Proporciona servicios y centraliza aplicaciones, archivos y copias de seguridad.", tarea: "Almacenar historias clínicas, aplicaciones sanitarias y copias de seguridad." },
    { chip: "Ethernet", nom: "Cable Ethernet", tipo: "Medio de transmisión", funcion: "Transporta la información por cable entre los equipos.", tarea: "Conexiones por cable de consultas, despachos y salas de archivo." },
    { chip: "Wi-Fi", nom: "Wi-Fi", tipo: "Medio de transmisión", funcion: "Conecta dispositivos a la red de forma inalámbrica.", tarea: "Movilidad de tablets y portátiles en consultas y salas de espera." },
    { chip: "Red", nom: "Impresora de red", tipo: "Recurso compartido", funcion: "Permite imprimir desde varios equipos conectados a la red.", tarea: "Impresión compartida de recetas, informes y listados del servicio." },
    { chip: "NIC", nom: "Tarjeta de red (NIC)", tipo: "Componente del equipo", funcion: "Conecta físicamente el equipo a la red.", tarea: "Conexión del puesto de trabajo al cable o a la red inalámbrica del centro." }
  ];

  var RL_COMPONENTES = [
    { a: "Switch", b: "Conectar varios equipos dentro de la red local y distribuir la información" },
    { a: "Router", b: "Conectar la red local con otras redes, como Internet" },
    { a: "Servidor", b: "Proporcionar servicios a otros equipos y centralizar recursos" },
    { a: "Cable Ethernet", b: "Transportar la información por cable entre los equipos" },
    { a: "Wi-Fi", b: "Conectar dispositivos a la red de forma inalámbrica" },
    { a: "Impresora de red", b: "Permitir imprimir desde varios equipos de la red" },
    { a: "Tarjeta de red (NIC)", b: "Conectar físicamente el equipo a la red" },
    { a: "Ordenadores y dispositivos", b: "Enviar, recibir y procesar información en la red" }
  ];

  var RL_TEST = [
    { p: "¿Qué dispositivo conecta varios equipos dentro de una misma red local y distribuye la información entre ellos?", ops: ["El switch", "El router", "El servidor", "La impresora de red"], ok: 0 },
    { p: "¿Qué dispositivo conecta la red local con otras redes, como Internet?", ops: ["El router", "El switch", "El cable Ethernet", "El escáner"], ok: 0 },
    { p: "El ordenador especializado que proporciona servicios a otros equipos de la red es…", ops: ["El servidor", "El switch", "El router", "La tarjeta de red"], ok: 0 },
    { p: "¿Cuál es el medio de transmisión por cable más habitual en las redes locales?", ops: ["El cable de par trenzado (Ethernet)", "El cable de alimentación", "El cable VGA", "La fibra vegetal"], ok: 0 },
    { p: "La conexión inalámbrica de una red local se denomina…", ops: ["Wi-Fi", "Ethernet", "RJ45", "USB"], ok: 0 },
    { p: "¿Qué recurso compartido permite imprimir desde varios equipos conectados a la red?", ops: ["La impresora de red", "El monitor", "El teclado", "El lector de tarjetas"], ok: 0 },
    { p: "La red de un aula, una oficina o un centro sanitario es un ejemplo de red…", ops: ["LAN", "WAN", "MAN", "PAN"], ok: 0 },
    { p: "Internet es un ejemplo de red…", ops: ["WAN", "PAN", "LAN", "WLAN"], ok: 0 },
    { p: "La red Wi-Fi de un hospital es un ejemplo de red…", ops: ["WLAN", "PAN", "WAN", "MAN"], ok: 0 },
    { p: "Los archivos y carpetas, las impresoras y las copias de seguridad compartidas son…", ops: ["Recursos compartidos de la red", "Protocolos de red", "Topologías de red", "Direcciones IP"], ok: 0 }
  ];

  var RL_ESCENARIOS = [
    { s: "En el centro de salud todos los puestos se conectan a un switch central desde el que llegan a la red.", ops: ["Estrella", "Bus", "Anillo", "Malla"], ok: 0, ex: "En la topología en estrella todos los equipos se conectan a un dispositivo central (switch o router)." },
    { s: "Una planta quiere unir dos edificios del hospital a gran velocidad y sin interferencias eléctricas.", ops: ["Fibra óptica", "Wi-Fi", "Cable de par trenzado", "Cable VGA"], ok: 0, ex: "La fibra óptica transmite a alta velocidad, a largas distancias y sin interferencias." },
    { s: "En un despacho un único cable central une todos los equipos; si ese cable se rompe, caen todos.", ops: ["Bus", "Estrella", "Malla", "Anillo"], ok: 0, ex: "En la topología en bus todos los equipos comparten un único canal central." },
    { s: "Escribes «aules.gva.es» en el navegador y el equipo necesita convertirlo en una dirección IP.", ops: ["DNS", "DHCP", "FTP", "SMTP"], ok: 0, ex: "El protocolo DNS traduce los nombres de dominio a direcciones IP." },
    { s: "Al conectar un portátil en la consulta, el equipo recibe automáticamente su dirección IP sin configurarla.", ops: ["DHCP", "HTTP", "DNS", "FTP"], ok: 0, ex: "DHCP asigna automáticamente la configuración IP a cada equipo." },
    { s: "La intranet del hospital muestra sus páginas en el navegador de los puestos de trabajo.", ops: ["HTTP o HTTPS", "DHCP", "DNS", "FTP"], ok: 0, ex: "HTTP (y su versión segura HTTPS) es el protocolo que usa el navegador para mostrar la web." },
    { s: "En el laboratorio cada equipo se conecta a varios de los demás para que la red siga activa aunque falle uno.", ops: ["Malla", "Bus", "Estrella", "Anillo"], ok: 0, ex: "En la topología de malla los equipos se conectan entre varios o todos los demás." },
    { s: "Envías un fichero grande con los resultados del servicio al servidor central mediante un protocolo de transferencia.", ops: ["FTP", "DNS", "DHCP", "SMTP"], ok: 0, ex: "FTP es el protocolo de transferencia de archivos entre equipos." }
  ];

  var RL_PROTOCOLOS = [
    { a: "TCP/IP", b: "Conjunto de protocolos base de Internet" },
    { a: "HTTP/HTTPS", b: "Mostrar las páginas web en el navegador" },
    { a: "DNS", b: "Traducir los nombres de dominio a direcciones IP" },
    { a: "DHCP", b: "Asignar automáticamente la configuración IP a los equipos" },
    { a: "FTP", b: "Transferir archivos entre equipos" },
    { a: "Ethernet", b: "Reglas para transportar los datos por cable" },
    { a: "Wi-Fi", b: "Reglas para conectar dispositivos de forma inalámbrica" },
    { a: "IP", b: "Identificar cada equipo dentro de la red" }
  ];

  var RL_CONFIG = [
    { a: "Dirección IP", b: "Identifica a cada equipo dentro de la red" },
    { a: "Máscara de subred", b: "Indica qué parte de la IP pertenece a la red y cuál al equipo" },
    { a: "Puerta de enlace (gateway)", b: "Dirección del dispositivo que conecta la red local con otras redes" },
    { a: "DHCP", b: "Asigna la configuración de red automáticamente" },
    { a: "DNS", b: "Traduce los nombres de dominio a direcciones IP" },
    { a: "Tarjeta de red (NIC)", b: "Conecta físicamente el equipo a la red" },
    { a: "Comando ipconfig", b: "Muestra la configuración IP del equipo" },
    { a: "Comando ping", b: "Comprueba la conectividad con otro equipo" }
  ];

  var RL_CHECKLIST = [
    { t: "Comprueba que el cable de red está bien conectado (o el Wi-Fi activado).",
      a: "Mira el conector RJ45 de la parte trasera: el piloto del puerto debe estar encendido. En Wi-Fi, revisa la bandeja del sistema y conéctate a la red del centro." },
    { t: "Verifica que el equipo tiene una dirección IP asignada.",
      a: "Abre un símbolo del sistema y escribe ipconfig: deben aparecer una dirección IP, una máscara de subred y una puerta de enlace." },
    { t: "Comprueba el estado de la tarjeta de red en el sistema.",
      a: "En Configuración → Red e Internet revisa el estado de la tarjeta: debe figurar «conectado» al cable o a la red Wi-Fi." },
    { t: "Haz ping a la puerta de enlace para comprobar la salida de la red local.",
      a: "Escribe ping seguido de la dirección de la puerta de enlace: si responde, el equipo puede salir hacia otras redes." },
    { t: "Haz ping a otro equipo o al servidor del centro.",
      a: "Prueba la conectividad con el servidor de la historia clínica o con otro puesto: sin respuestas, la información compartida no llega." },
    { t: "Comprueba que el DNS funciona (acceso por nombre).",
      a: "Abre el navegador e intenta acceder a una página por su nombre; si falla y el ping funciona, revisa que hay un servidor DNS configurado." },
    { t: "Confirma que las aplicaciones de red abren y acceden a los datos centrales.",
      a: "Abre la historia clínica o la aplicación de citas: deben cargar los datos del servidor. Si fallan, registra la incidencia." },
    { t: "Comprueba la impresora de red y envía una página de prueba.",
      a: "Revisa que la impresora figura «en línea» en el sistema y envía una página de prueba para confirmar que la red la alcanza." }
  ];

  var RL_SECUENCIA = [
    "Comprueba el cable y el piloto del puerto de red (o el estado del Wi-Fi).",
    "Verifica la configuración IP del equipo con ipconfig.",
    "Haz ping a la puerta de enlace para comprobar la salida de la red local.",
    "Haz ping a otro equipo o al servidor del centro.",
    "Revisa el servidor DNS y prueba a cargar una página por nombre.",
    "Registra la incidencia y avisa al servicio de mantenimiento si no se resuelve."
  ];

  var RL_INVENTARIO = [
    { g: "Dispositivos de red", items: ["Router", "Switch", "Servidor", "Tarjeta de red (NIC)", "Cable Ethernet"] },
    { g: "Configuración IP", items: ["Dirección IP asignada", "Máscara de subred", "Puerta de enlace (gateway)", "Servidor DNS"] },
    { g: "Medios de conexión", items: ["Cable RJ45", "Punto Wi-Fi", "Fibra óptica"] },
    { g: "Servicios y aplicaciones compartidas", items: ["Historia clínica (servidor central)", "Impresora de red", "Carpetas y archivos compartidos", "Copias de seguridad centralizadas"] }
  ];

  /* -------------------- ACCESO A INTERNET · DATOS -------------------- */

  var INT_DECK = [
    { chip: "Internet", nom: "Internet", tipo: "Red mundial", funcion: "Conectar millones de dispositivos para compartir información, comunicarse y acceder a servicios digitales.", tarea: "Acceso a aplicaciones corporativas, trámites sanitarios y comunicación entre centros." },
    { chip: "Ethernet", nom: "Cable Ethernet", tipo: "Forma de conexión", funcion: "Conexión por cable: estable, rápida y con poca interferencia.", tarea: "Puestos fijos de admisión, consulta y archivo." },
    { chip: "Wi-Fi", nom: "Wi-Fi", tipo: "Forma de conexión", funcion: "Conexión inalámbrica por ondas de radio que facilita la movilidad.", tarea: "Portátiles y tabletas de los profesionales en consultas y salas." },
    { chip: "Móvil", nom: "Red móvil (4G/5G)", tipo: "Forma de conexión", funcion: "Acceso a Internet a través de la red de telefonía móvil.", tarea: "Dispositivos móviles corporativos y situaciones con movilidad." },
    { chip: "Router", nom: "Router", tipo: "Dispositivo de red", funcion: "Conecta la red local del centro con Internet.", tarea: "Dar salida a Internet a todos los puestos del centro." },
    { chip: "HTTPS", nom: "HTTPS", tipo: "Seguridad en la navegación", funcion: "Protege la comunicación entre el navegador y el sitio web.", tarea: "Trámites y aplicaciones en línea con datos sensibles del centro." },
    { chip: "VPN", nom: "VPN", tipo: "Herramienta de seguridad", funcion: "Crea un túnel cifrado para conexiones remotas seguras.", tarea: "Acceso remoto seguro del personal cuando trabaja fuera del centro." },
    { chip: "Antivirus", nom: "Antivirus", tipo: "Programa de seguridad", funcion: "Detecta y elimina virus y programas maliciosos.", tarea: "Proteger los puestos que navegan por Internet." }
  ];

  var INT_CONEXION = [
    { a: "Ethernet", b: "Conexión por cable estable y de alta velocidad" },
    { a: "Wi-Fi", b: "Conexión inalámbrica que facilita la movilidad" },
    { a: "Red móvil (4G/5G)", b: "Acceso a Internet mediante la red de telefonía móvil" },
    { a: "HTTPS", b: "Comunicación cifrada y segura en el navegador" },
    { a: "VPN", b: "Conexión remota segura a través de un túnel cifrado" },
    { a: "Antivirus", b: "Detecta y elimina programas maliciosos" },
    { a: "Cortafuegos", b: "Filtra el tráfico de red para bloquear accesos no deseados" },
    { a: "Redes protegidas", b: "Evitan las intercepciones al manejar información sensible" }
  ];

  var INT_TEST = [
    { p: "¿Qué es Internet?", ops: ["Una red mundial que conecta millones de dispositivos", "Un programa de ofimática", "Un tipo de memoria del equipo", "Un periférico de salida"], ok: 0 },
    { p: "¿Cuál de las siguientes es una función de Internet?", ops: ["Buscar información, comunicarse y usar servicios en línea", "Imprimir sin necesidad de conexión", "Almacenar archivos solo en local", "Fabricar componentes electrónicos"], ok: 0 },
    { p: "La conexión más estable y rápida para un puesto fijo es…", ops: ["Ethernet (por cable)", "Una red Wi-Fi pública", "La red móvil 4G", "El Bluetooth"], ok: 0 },
    { p: "La conexión inalámbrica que utiliza ondas de radio es…", ops: ["Wi-Fi", "Ethernet", "USB", "HDMI"], ok: 0 },
    { p: "La conexión que se realiza a través de la red de telefonía móvil es…", ops: ["Red móvil 4G/5G", "Fibra óptica", "RJ45", "VGA"], ok: 0 },
    { p: "Antes de enviar datos por una página web debes comprobar que utiliza…", ops: ["HTTPS", "FTP", "SMTP", "DHCP"], ok: 0 },
    { p: "Para acceder de forma segura a la red del centro desde fuera, se utiliza una…", ops: ["VPN", "Red Wi-Fi pública", "Un pendrive", "Una impresora de red"], ok: 0 },
    { p: "Un puesto no tiene conexión y el cable está bien conectado. ¿Qué compruebas primero?", ops: ["El estado del Wi-Fi y que el router esté encendido", "El monitor", "La impresora", "La resolución de pantalla"], ok: 0 },
    { p: "Si la conexión es lenta por muchas aplicaciones abiertas, lo correcto es…", ops: ["Cerrar aplicaciones innecesarias", "Apagar el antivirus", "Desinstalar el navegador", "Aumentar el brillo de la pantalla"], ok: 0 },
    { p: "Ante un acceso restringido a una aplicación, la solución básica es…", ops: ["Verificar usuario y contraseña y consultar con sistemas", "Formatear el equipo", "Cambiar de puesto", "Desenchufar el cable"], ok: 0 }
  ];

  var INT_ESCENARIOS = [
    { s: "En el centro una página de trámite pide datos sensibles y quieres enviarlos con seguridad.", ops: ["Comprobar que la página utiliza HTTPS", "Usar una red Wi-Fi pública", "Apagar el antivirus", "Compartir la contraseña"], ok: 0, ex: "HTTPS cifra la comunicación del navegador con el sitio web; es imprescindible al enviar datos sensibles." },
    { s: "Una profesional del centro trabaja desde casa y necesita acceder con seguridad a la red del servicio.", ops: ["Usar una VPN", "Usar una red Wi-Fi pública", "Desactivar el cortafuegos", "Enviar los datos por correo personal"], ok: 0, ex: "La VPN crea un túnel cifrado entre el equipo y la red del centro para conexiones remotas seguras." },
    { s: "Un puesto fijo de admisión necesita la conexión más estable y rápida posible para trabajar.", ops: ["Conexión por cable (Ethernet)", "Wi-Fi público", "Red móvil 4G", "Bluetooth"], ok: 0, ex: "El cable Ethernet ofrece más estabilidad, velocidad y menos interferencias, ideal para puestos fijos." },
    { s: "Las tabletas del servicio necesitan conectarse sin cables para moverlas por las consultas.", ops: ["Wi-Fi", "Cable Ethernet", "Fibra óptica", "VGA"], ok: 0, ex: "La conexión Wi-Fi es inalámbrica y facilita la movilidad de tabletas y portátiles." },
    { s: "Un profesional fuera del centro necesita consultar datos con su móvil corporativo.", ops: ["Red móvil (4G/5G)", "Cable Ethernet", "Cortafuegos", "Un pendrive"], ok: 0, ex: "La red móvil 4G/5G permite acceder a Internet desde prácticamente cualquier lugar con la tarjeta SIM." },
    { s: "En un puesto no hay conexión y se ha descubierto el cable desconectado del router.", ops: ["Comprobar el cable y volver a conectarlo", "Formatear el disco", "Cambiar el monitor", "Pedir otro equipo"], ok: 0, ex: "Ante una falta de conexión, lo primero es comprobar el cableado y el estado del Wi-Fi y el router." }
  ];

  var INT_CHECKLIST = [
    { t: "Comprueba el cable de red (o el estado del Wi-Fi).",
      a: "Mira el conector Ethernet de la parte trasera (el piloto debe estar encendido) o, en Wi-Fi, revisa la bandeja del sistema para comprobar que estás conectado a una red segura." },
    { t: "Verifica la configuración IP del equipo.",
      a: "Abre un símbolo del sistema y escribe ipconfig: deben aparecer una dirección IP, una máscara de subred y una puerta de enlace." },
    { t: "Haz ping a la puerta de enlace para comprobar la salida hacia Internet.",
      a: "Escribe ping seguido de la dirección de la puerta de enlace: si responde, el equipo puede salir hacia otras redes." },
    { t: "Comprueba el DNS accediendo a una página por su nombre.",
      a: "Abre el navegador e intenta cargar una página conocida por su nombre; si falla y el ping funciona, revisa que hay un servidor DNS configurado." },
    { t: "Comprueba que el navegador utiliza HTTPS en los trámites y aplicaciones.",
      a: "Revisa la barra de direcciones: las páginas que manejan datos sensibles deben usar https:// y mostrar el candado de seguridad." },
    { t: "Confirma que las aplicaciones corporativas cargan sus datos.",
      a: "Abre la historia clínica o la aplicación de citas: deben cargar los datos desde el servidor. Si fallan, registra la incidencia." },
    { t: "Registra la incidencia y avisa a sistemas si el fallo persiste.",
      a: "Anota el puesto, la hora y el problema y comunícalo al personal responsable de sistemas para su resolución." }
  ];

  var INT_SECUENCIA = [
    "Comprueba el cable de red y el piloto del puerto (o el estado del Wi-Fi).",
    "Verifica la configuración IP del equipo con ipconfig.",
    "Haz ping a la puerta de enlace para comprobar la salida hacia Internet.",
    "Comprueba el DNS abriendo una página por su nombre.",
    "Reinicia el router o el punto de acceso y cierra aplicaciones innecesarias si la conexión sigue lenta.",
    "Registra la incidencia y avisa al servicio de sistemas si el fallo no se resuelve."
  ];

  var INT_PROBLEMAS = [
    { p: "Falta de conexión", causas: ["Cable desconectado", "Wi-Fi desactivado", "Router apagado"], soluciones: ["Comprobar las conexiones", "Reiniciar los dispositivos", "Verificar la configuración de red"] },
    { p: "Conexión lenta", causas: ["Saturación de la red", "Muchas aplicaciones abiertas", "Cobertura deficiente"], soluciones: ["Cerrar aplicaciones innecesarias", "Acercarse al punto de acceso Wi-Fi", "Utilizar conexión por cable si es posible"] },
    { p: "Acceso restringido", causas: ["Falta de permisos", "Configuración incorrecta", "Problemas de autenticación"], soluciones: ["Verificar usuario y contraseña", "Consultar con el personal responsable de sistemas"] }
  ];

  var INT_INVENTARIO = [
    { g: "Dispositivos y medios de conexión", items: ["Router", "Switch", "Cable Ethernet", "Punto Wi-Fi / red móvil"] },
    { g: "Configuración de red", items: ["Dirección IP (ipconfig)", "Máscara de subred", "Puerta de enlace (gateway)", "Servidor DNS"] },
    { g: "Seguridad del acceso", items: ["HTTPS en los trámites", "Red protegida con contraseña", "VPN (fuera del centro)", "Antivirus y cortafuegos"] },
    { g: "Servicios y aplicaciones", items: ["Historia clínica electrónica", "Aplicaciones corporativas", "Correo profesional", "Telemedicina"] }
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

  /* -------------------- PONTE A PRUEBA · CIBERSEGURIDAD -------------------- */

  function iniciarTestCiber(contenedor) {
    var preguntas = [];
    var total = 10;

    function construir() {
      preguntas = shuffle(CS_TEST).slice(0, total);
      var html = '<ol class="test">';
      preguntas.forEach(function (q, i) {
        html += '<li class="test__q" data-q="' + i + '">';
        html += '<div class="test__prompt"><span>' + esc(q.p) + "</span></div>";
        html += '<div class="test__opciones">';
        q.ops.forEach(function (o, j) {
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
        if (elegida === q.ok) {
          selec.classList.add("is-correct");
          aciertos++;
        } else {
          selec.classList.add("is-wrong");
          ops[q.ok].classList.add("is-revelado");
        }
        ops.forEach(function (o) { o.disabled = true; });
      });
      var fb = $(".feedback", contenedor);
      if (aciertos === total) {
        fb.className = "feedback feedback--ok";
        fb.innerHTML = "<p>¡Perfecto! Has acertado las " + total + " preguntas. " +
          "Se ha desbloqueado la tabla de amenazas resuelta para descargarla en PDF.</p>";
        desbloquearSolucionesCiberAme();
      } else {
        fb.className = "feedback feedback--bad";
        fb.innerHTML = "<p>Has acertado " + aciertos + " de " + total + ". Repite el test cuantas veces quieras hasta lograrlo perfecto.</p>";
      }
    }

    construir();
  }

  /* -------------------- SOLUCIONES PDF · CIBERSEGURIDAD -------------------- */

  var CS_AME_OK_EMPAREJADO = false;
  var CS_SOCIAL_OK_EMPAREJADO = false;
  var CS_SOCIAL_OK_ESCENARIOS = false;
  var CS_PROT_OK_CHECKLIST = false;
  var CS_PROT_OK_ORDEN = false;

  function desbloquearSolucionesCiberAme() {
    desbloquearPanel("#soluciones-ciber-ame", CLAVE_CIBER_AME);
  }

  function intentarDesbloquearCiberSocial() {
    if (CS_SOCIAL_OK_EMPAREJADO && CS_SOCIAL_OK_ESCENARIOS) {
      desbloquearPanel("#soluciones-ciber-social", CLAVE_CIBER_SOCIAL);
    }
  }

  function intentarDesbloquearCiberProt() {
    if (CS_PROT_OK_CHECKLIST && CS_PROT_OK_ORDEN) {
      desbloquearPanel("#soluciones-ciber-prot", CLAVE_CIBER_PROT);
    }
  }

  function tablaCiberAmeHtml() {
    var cab = "<thead><tr><th>#</th><th>Amenaza</th><th>Tipo</th><th>Qué hace</th><th>Consecuencia en el puesto sanitario</th></tr></thead>";
    var filas = "";
    CS_DECK.forEach(function (d, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td><strong>" + esc(d.nom) + "</strong></td>" +
        "<td>" + esc(d.tipo) + "</td><td>" + esc(d.funcion) + "</td><td>" + esc(d.tarea) + "</td></tr>";
    });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>";
  }

  function tablaCiberSocialHtml() {
    var cab = "<thead><tr><th>#</th><th>Situación</th><th>Solución</th><th>Por qué</th></tr></thead>";
    var filas = "";
    CS_ESCENARIOS.forEach(function (e, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td>" + esc(e.s) + "</td>" +
        "<td><strong>" + esc(e.ops[e.ok]) + "</strong></td><td>" + esc(e.ex) + "</td></tr>";
    });
    var cab2 = "<thead><tr><th>Técnica</th><th>Definición</th></tr></thead>";
    var filas2 = "";
    CS_TECNICAS.forEach(function (t) {
      filas2 += "<tr><td><strong>" + esc(t.a) + "</strong></td><td>" + esc(t.b) + "</td></tr>";
    });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>" +
      "<h3>Técnicas de ingeniería social</h3>" +
      '<div class="table-wrap"><table>' + cab2 + "<tbody>" + filas2 + "</tbody></table></div>";
  }

  function tablaCiberProtHtml() {
    var cab = "<thead><tr><th>#</th><th>Comprobación</th><th>Cómo hacerlo</th></tr></thead>";
    var filas = "";
    CS_CHECKLIST.forEach(function (c, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td><strong>" + esc(c.t) + "</strong></td><td>" + esc(c.a) + "</td></tr>";
    });
    var sec = "";
    CS_SECUENCIA.forEach(function (s, i) { sec += "<li>" + (i + 1) + ". " + esc(s) + "</li>"; });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>" +
      "<h3>Orden recomendado ante un correo sospechoso</h3><ol>" + sec + "</ol>";
  }

  function iniciarSolucionesCiberAme() {
    var panel = $("#soluciones-ciber-ame");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = "<div class='table-wrap'>" + tablaCiberAmeHtml() + "</div>";
    $("#btn-pdf-soluciones-ciber-ame").addEventListener("click", function () {
      abrirImpresion("Malware y amenazas · Tabla de amenazas resuelta", tablaCiberAmeHtml());
    });
    $("#btn-cerrar-soluciones-ciber-ame").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_CIBER_AME) === "1") { panel.hidden = false; } } catch (e) {}
  }

  function iniciarSolucionesCiberSocial() {
    var panel = $("#soluciones-ciber-social");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = "<div class='table-wrap'>" + tablaCiberSocialHtml() + "</div>";
    $("#btn-pdf-soluciones-ciber-social").addEventListener("click", function () {
      abrirImpresion("Ingeniería social y protección de la información · Soluciones resueltas", tablaCiberSocialHtml());
    });
    $("#btn-cerrar-soluciones-ciber-social").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_CIBER_SOCIAL) === "1") { panel.hidden = false; } } catch (e) {}
  }

  function iniciarSolucionesCiberProt() {
    var panel = $("#soluciones-ciber-prot");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = "<div class='table-wrap'>" + tablaCiberProtHtml() + "</div>";
    $("#btn-pdf-soluciones-ciber-prot").addEventListener("click", function () {
      abrirImpresion("Herramientas y buenas prácticas · Soluciones resueltas", tablaCiberProtHtml());
    });
    $("#btn-cerrar-soluciones-ciber-prot").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_CIBER_PROT) === "1") { panel.hidden = false; } } catch (e) {}
  }

  /* -------------------- PONTE A PRUEBA · REDES LOCALES -------------------- */

  function iniciarTestRl(contenedor) {
    var preguntas = [];
    var total = 10;

    function construir() {
      preguntas = shuffle(RL_TEST).slice(0, total);
      var html = '<ol class="test">';
      preguntas.forEach(function (q, i) {
        html += '<li class="test__q" data-q="' + i + '">';
        html += '<div class="test__prompt"><span>' + esc(q.p) + "</span></div>";
        html += '<div class="test__opciones">';
        q.ops.forEach(function (o, j) {
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
        if (elegida === q.ok) {
          selec.classList.add("is-correct");
          aciertos++;
        } else {
          selec.classList.add("is-wrong");
          ops[q.ok].classList.add("is-revelado");
        }
        ops.forEach(function (o) { o.disabled = true; });
      });
      var fb = $(".feedback", contenedor);
      if (aciertos === total) {
        fb.className = "feedback feedback--ok";
        fb.innerHTML = "<p>¡Perfecto! Has acertado las " + total + " preguntas. " +
          "Se ha desbloqueado la tabla de componentes de red resueltos para descargarla en PDF.</p>";
        desbloquearSolucionesRlComp();
      } else {
        fb.className = "feedback feedback--bad";
        fb.innerHTML = "<p>Has acertado " + aciertos + " de " + total + ". Repite el test cuantas veces quieras hasta lograrlo perfecto.</p>";
      }
    }

    construir();
  }

  /* -------------------- PONTE A PRUEBA · ACCESO A INTERNET -------------------- */

  function iniciarTestInt(contenedor) {
    var preguntas = [];
    var total = 10;

    function construir() {
      preguntas = shuffle(INT_TEST).slice(0, total);
      var html = '<ol class="test">';
      preguntas.forEach(function (q, i) {
        html += '<li class="test__q" data-q="' + i + '">';
        html += '<div class="test__prompt"><span>' + esc(q.p) + "</span></div>";
        html += '<div class="test__opciones">';
        q.ops.forEach(function (o, j) {
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
        if (elegida === q.ok) {
          selec.classList.add("is-correct");
          aciertos++;
        } else {
          selec.classList.add("is-wrong");
          ops[q.ok].classList.add("is-revelado");
        }
        ops.forEach(function (o) { o.disabled = true; });
      });
      var fb = $(".feedback", contenedor);
      if (aciertos === total) {
        fb.className = "feedback feedback--ok";
        fb.innerHTML = "<p>¡Perfecto! Has acertado las " + total + " preguntas. " +
          "Se ha desbloqueado la tabla de conceptos del acceso a Internet resueltos para descargarla en PDF.</p>";
        desbloquearSolucionesIntConex();
      } else {
        fb.className = "feedback feedback--bad";
        fb.innerHTML = "<p>Has acertado " + aciertos + " de " + total + ". Repite el test cuantas veces quieras hasta lograrlo perfecto.</p>";
      }
    }

    construir();
  }

  /* -------------------- SOLUCIONES PDF · ACCESO A INTERNET -------------------- */

  var INT_FALLOS_OK_ESCENARIOS = false;
  var INT_FALLOS_OK_CHECKLIST = false;
  var INT_FALLOS_OK_ORDEN = false;

  function desbloquearSolucionesIntConex() {
    desbloquearPanel("#soluciones-int-conex", CLAVE_INT_CONEX);
  }

  function intentarDesbloquearIntFallos() {
    if (INT_FALLOS_OK_ESCENARIOS && INT_FALLOS_OK_CHECKLIST && INT_FALLOS_OK_ORDEN) {
      desbloquearPanel("#soluciones-int-fallos", CLAVE_INT_FALLOS);
    }
  }

  function tablaIntConexHtml() {
    var cab = "<thead><tr><th>#</th><th>Concepto</th><th>Tipo</th><th>Función</th><th>Aplicación en el puesto sanitario</th></tr></thead>";
    var filas = "";
    INT_DECK.forEach(function (d, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td><strong>" + esc(d.nom) + "</strong></td>" +
        "<td>" + esc(d.tipo) + "</td><td>" + esc(d.funcion) + "</td><td>" + esc(d.tarea) + "</td></tr>";
    });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>";
  }

  function tablaIntFallosHtml() {
    var cab = "<thead><tr><th>Problema</th><th>Posibles causas</th><th>Soluciones básicas</th></tr></thead>";
    var filas = "";
    INT_PROBLEMAS.forEach(function (pr) {
      filas += "<tr><td><strong>" + esc(pr.p) + "</strong></td>" +
        "<td>" + esc(pr.causas.join(", ")) + "</td>" +
        "<td>" + esc(pr.soluciones.join(", ")) + "</td></tr>";
    });
    var sec = "";
    INT_SECUENCIA.forEach(function (s, i) { sec += "<li>" + (i + 1) + ". " + esc(s) + "</li>"; });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>" +
      "<h3>Orden recomendado ante un fallo de conexión</h3><ol>" + sec + "</ol>";
  }

  function iniciarSolucionesIntConex() {
    var panel = $("#soluciones-int-conex");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaIntConexHtml();
    $("#btn-pdf-soluciones-int-conex").addEventListener("click", function () {
      abrirImpresion("Acceso a Internet · Tabla de conceptos resuelta", tablaIntConexHtml());
    });
    $("#btn-cerrar-soluciones-int-conex").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_INT_CONEX) === "1") { panel.hidden = false; } } catch (e) {}
  }

  function iniciarSolucionesIntFallos() {
    var panel = $("#soluciones-int-fallos");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaIntFallosHtml();
    $("#btn-pdf-soluciones-int-fallos").addEventListener("click", function () {
      abrirImpresion("Acceso a Internet · Problemas frecuentes de conexión · Soluciones resueltas", tablaIntFallosHtml());
    });
    $("#btn-cerrar-soluciones-int-fallos").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_INT_FALLOS) === "1") { panel.hidden = false; } } catch (e) {}
  }

  /* -------------------- INIT -------------------- */

  var RL_TOPO_OK_ESCENARIOS = false;
  var RL_TOPO_OK_EMPAREJADO = false;
  var RL_CONFIG_OK_CHECKLIST = false;
  var RL_CONFIG_OK_ORDEN = false;

  function desbloquearSolucionesRlComp() {
    desbloquearPanel("#soluciones-rl-comp", CLAVE_RL_COMP);
  }

  function intentarDesbloquearRlTop() {
    if (RL_TOPO_OK_ESCENARIOS && RL_TOPO_OK_EMPAREJADO) {
      desbloquearPanel("#soluciones-rl-top", CLAVE_RL_TOPO);
    }
  }

  function intentarDesbloquearRlConfig() {
    if (RL_CONFIG_OK_CHECKLIST && RL_CONFIG_OK_ORDEN) {
      desbloquearPanel("#soluciones-rl-config", CLAVE_RL_CONFIG);
    }
  }

  function tablaRlCompHtml() {
    var cab = "<thead><tr><th>#</th><th>Componente</th><th>Tipo</th><th>Función</th><th>Aplicación en el puesto sanitario</th></tr></thead>";
    var filas = "";
    RL_DECK.forEach(function (d, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td><strong>" + esc(d.nom) + "</strong></td>" +
        "<td>" + esc(d.tipo) + "</td><td>" + esc(d.funcion) + "</td><td>" + esc(d.tarea) + "</td></tr>";
    });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>";
  }

  function tablaRlTopHtml() {
    var cab = "<thead><tr><th>#</th><th>Situación</th><th>Solución</th><th>Por qué</th></tr></thead>";
    var filas = "";
    RL_ESCENARIOS.forEach(function (e, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td>" + esc(e.s) + "</td>" +
        "<td><strong>" + esc(e.ops[e.ok]) + "</strong></td><td>" + esc(e.ex) + "</td></tr>";
    });
    var cab2 = "<thead><tr><th>Protocolo</th><th>Función</th></tr></thead>";
    var filas2 = "";
    RL_PROTOCOLOS.forEach(function (t) {
      filas2 += "<tr><td><strong>" + esc(t.a) + "</strong></td><td>" + esc(t.b) + "</td></tr>";
    });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>" +
      "<h3>Protocolos de red</h3>" +
      '<div class="table-wrap"><table>' + cab2 + "<tbody>" + filas2 + "</tbody></table></div>";
  }

  function tablaRlConfigHtml() {
    var cab = "<thead><tr><th>#</th><th>Comprobación</th><th>Cómo hacerlo</th></tr></thead>";
    var filas = "";
    RL_CHECKLIST.forEach(function (c, i) {
      filas += "<tr><td>" + (i + 1) + "</td><td><strong>" + esc(c.t) + "</strong></td><td>" + esc(c.a) + "</td></tr>";
    });
    var sec = "";
    RL_SECUENCIA.forEach(function (s, i) { sec += "<li>" + (i + 1) + ". " + esc(s) + "</li>"; });
    return '<div class="table-wrap"><table>' + cab + "<tbody>" + filas + "</tbody></table></div>" +
      "<h3>Orden recomendado ante un fallo de conexión</h3><ol>" + sec + "</ol>";
  }

  function iniciarSolucionesRlComp() {
    var panel = $("#soluciones-rl-comp");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaRlCompHtml();
    $("#btn-pdf-soluciones-rl-comp").addEventListener("click", function () {
      abrirImpresion("Conceptos y componentes de una red local · Tabla de componentes resueltos", tablaRlCompHtml());
    });
    $("#btn-cerrar-soluciones-rl-comp").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_RL_COMP) === "1") { panel.hidden = false; } } catch (e) {}
  }

  function iniciarSolucionesRlTop() {
    var panel = $("#soluciones-rl-top");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaRlTopHtml();
    $("#btn-pdf-soluciones-rl-top").addEventListener("click", function () {
      abrirImpresion("Topologías, medios y protocolos de red · Soluciones resueltas", tablaRlTopHtml());
    });
    $("#btn-cerrar-soluciones-rl-top").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_RL_TOPO) === "1") { panel.hidden = false; } } catch (e) {}
  }

  function iniciarSolucionesRlConfig() {
    var panel = $("#soluciones-rl-config");
    if (!panel) { return; }
    $(".soluciones-panel__cuerpo", panel).innerHTML = tablaRlConfigHtml();
    $("#btn-pdf-soluciones-rl-config").addEventListener("click", function () {
      abrirImpresion("Configuración y puertos de red · Soluciones resueltas", tablaRlConfigHtml());
    });
    $("#btn-cerrar-soluciones-rl-config").addEventListener("click", function () { panel.hidden = true; });
    try { if (localStorage.getItem(CLAVE_RL_CONFIG) === "1") { panel.hidden = false; } } catch (e) {}
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

    /* --- Bloque práctico · Ciberseguridad --- */
    if ($("#baraja-ciber")) { iniciarBaraja($("#baraja-ciber"), CS_DECK); }
    if ($("#empareja-amenazas")) {
      iniciarEmparejado(
        $("#empareja-amenazas"),
        shuffle(CS_MALWARE.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(CS_MALWARE.map(function (t, i) { return { id: i, texto: t.b }; })),
        false
      );
    }
    if ($("#ponte-a-prueba-ciber")) { iniciarTestCiber($("#ponte-a-prueba-ciber")); }
    if ($("#soluciones-ciber-ame")) { iniciarSolucionesCiberAme(); }
    if ($("#escenarios-ciber")) {
      iniciarEscenarios(
        $("#escenarios-ciber"),
        CS_ESCENARIOS,
        "Todavía no. Piensa qué técnica de ingeniería social se está usando en la situación.",
        function () { CS_SOCIAL_OK_ESCENARIOS = true; intentarDesbloquearCiberSocial(); }
      );
    }
    if ($("#empareja-tecnicas")) {
      iniciarEmparejado(
        $("#empareja-tecnicas"),
        shuffle(CS_TECNICAS.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(CS_TECNICAS.map(function (t, i) { return { id: i, texto: t.b }; })),
        false,
        function () { CS_SOCIAL_OK_EMPAREJADO = true; intentarDesbloquearCiberSocial(); }
      );
    }
    if ($("#soluciones-ciber-social")) { iniciarSolucionesCiberSocial(); }
    if ($("#empareja-herramientas")) {
      iniciarEmparejado(
        $("#empareja-herramientas"),
        shuffle(CS_HERRAMIENTAS.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(CS_HERRAMIENTAS.map(function (t, i) { return { id: i, texto: t.b }; })),
        false
      );
    }
    if ($("#checklist-ciber")) {
      iniciarChecklist(
        $("#checklist-ciber"),
        CS_CHECKLIST,
        "Comprobación completada: el puesto cumple las buenas prácticas de ciberseguridad. Si detectaste alguna brecha, regístrala y avisa a la persona responsable.",
        function () { CS_PROT_OK_CHECKLIST = true; intentarDesbloquearCiberProt(); }
      );
    }
    if ($("#orden-ciber")) {
      iniciarOrden(
        $("#orden-ciber"),
        CS_SECUENCIA,
        "Ordena correctamente los seis pasos ante un correo sospechoso.",
        "¡Correcto! Este es el orden recomendado ante un correo sospechoso.",
        "Ese paso no corresponde aquí: primero se desconfía y se comprueba antes de actuar. Pulsa «Reiniciar» e inténtalo de nuevo.",
        function () { CS_PROT_OK_ORDEN = true; intentarDesbloquearCiberProt(); }
      );
    }
    if ($("#inventario-ciber")) { iniciarInventario($("#inventario-ciber"), CS_INVENTARIO, "Comprobación de la seguridad del puesto de trabajo"); }
    if ($("#soluciones-ciber-prot")) { iniciarSolucionesCiberProt(); }

    /* --- Bloque práctico · Redes locales (LAN) --- */
    if ($("#baraja-rl")) { iniciarBaraja($("#baraja-rl"), RL_DECK); }
    if ($("#empareja-componentes")) {
      iniciarEmparejado(
        $("#empareja-componentes"),
        shuffle(RL_COMPONENTES.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(RL_COMPONENTES.map(function (t, i) { return { id: i, texto: t.b }; })),
        false
      );
    }
    if ($("#ponte-a-prueba-rl")) { iniciarTestRl($("#ponte-a-prueba-rl")); }
    if ($("#soluciones-rl-comp")) { iniciarSolucionesRlComp(); }
    if ($("#escenarios-rl")) {
      iniciarEscenarios(
        $("#escenarios-rl"),
        RL_ESCENARIOS,
        "Todavía no. Piensa qué topología, medio o protocolo interviene en esta situación.",
        function () { RL_TOPO_OK_ESCENARIOS = true; intentarDesbloquearRlTop(); }
      );
    }
    if ($("#empareja-protocolos")) {
      iniciarEmparejado(
        $("#empareja-protocolos"),
        shuffle(RL_PROTOCOLOS.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(RL_PROTOCOLOS.map(function (t, i) { return { id: i, texto: t.b }; })),
        false,
        function () { RL_TOPO_OK_EMPAREJADO = true; intentarDesbloquearRlTop(); }
      );
    }
    if ($("#soluciones-rl-top")) { iniciarSolucionesRlTop(); }
    if ($("#empareja-config")) {
      iniciarEmparejado(
        $("#empareja-config"),
        shuffle(RL_CONFIG.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(RL_CONFIG.map(function (t, i) { return { id: i, texto: t.b }; })),
        false
      );
    }
    if ($("#checklist-rl")) {
      iniciarChecklist(
        $("#checklist-rl"),
        RL_CHECKLIST,
        "Comprobación completada: el puesto queda conectado y operativo dentro de la red del centro. Si detectaste algún fallo, regístralo y avisa al servicio de mantenimiento.",
        function () { RL_CONFIG_OK_CHECKLIST = true; intentarDesbloquearRlConfig(); }
      );
    }
    if ($("#orden-rl")) {
      iniciarOrden(
        $("#orden-rl"),
        RL_SECUENCIA,
        "Ordena correctamente los seis pasos ante un fallo de conexión.",
        "¡Correcto! Este es el orden recomendado ante un fallo de conexión.",
        "Ese paso no corresponde aquí: primero se comprueba el cable y la configuración. Pulsa «Reiniciar» e inténtalo de nuevo.",
        function () { RL_CONFIG_OK_ORDEN = true; intentarDesbloquearRlConfig(); }
      );
    }
    if ($("#inventario-rl")) { iniciarInventario($("#inventario-rl"), RL_INVENTARIO, "Inventario de la conexión del puesto de trabajo"); }
    if ($("#soluciones-rl-config")) { iniciarSolucionesRlConfig(); }

    /* --- Bloque práctico · Acceso a Internet --- */
    if ($("#baraja-int")) { iniciarBaraja($("#baraja-int"), INT_DECK); }
    if ($("#empareja-int")) {
      iniciarEmparejado(
        $("#empareja-int"),
        shuffle(INT_CONEXION.map(function (t, i) { return { id: i, texto: t.a }; })),
        shuffle(INT_CONEXION.map(function (t, i) { return { id: i, texto: t.b }; })),
        false
      );
    }
    if ($("#ponte-a-prueba-int")) { iniciarTestInt($("#ponte-a-prueba-int")); }
    if ($("#soluciones-int-conex")) { iniciarSolucionesIntConex(); }
    if ($("#escenarios-int")) {
      iniciarEscenarios(
        $("#escenarios-int"),
        INT_ESCENARIOS,
        "Todavía no. Piensa qué forma de conexión, medida de seguridad o solución aplica en esta situación.",
        function () { INT_FALLOS_OK_ESCENARIOS = true; intentarDesbloquearIntFallos(); }
      );
    }
    if ($("#checklist-int")) {
      iniciarChecklist(
        $("#checklist-int"),
        INT_CHECKLIST,
        "Comprobación completada: el puesto queda conectado y puede navegar con seguridad por Internet. Si detectaste algún problema, regístralo y avisa al servicio de sistemas.",
        function () { INT_FALLOS_OK_CHECKLIST = true; intentarDesbloquearIntFallos(); }
      );
    }
    if ($("#orden-int")) {
      iniciarOrden(
        $("#orden-int"),
        INT_SECUENCIA,
        "Ordena correctamente los seis pasos ante un fallo de conexión.",
        "¡Correcto! Este es el orden recomendado ante un fallo de conexión.",
        "Ese paso no corresponde aquí: primero se comprueba el cable y la configuración. Pulsa «Reiniciar» e inténtalo de nuevo.",
        function () { INT_FALLOS_OK_ORDEN = true; intentarDesbloquearIntFallos(); }
      );
    }
    if ($("#inventario-int")) { iniciarInventario($("#inventario-int"), INT_INVENTARIO, "Inventario de la conexión a Internet del puesto de trabajo"); }
    if ($("#soluciones-int-fallos")) { iniciarSolucionesIntFallos(); }
  });
})();