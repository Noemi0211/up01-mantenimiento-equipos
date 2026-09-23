# AGENTS.md — Proyecto UP01 · Mantenimiento básico de equipos

Guía de proceso para los agentes que trabajen en este proyecto por fases.

## 1 · Qué es este proyecto

Transformar el documento `ApuntesOPI_UP_01_Mantenimiento 26-27.pdf` en una colección de materiales didácticos web para alumnado de **CFGS Documentación y Administración Sanitarias** (módulo Ofimática).

Destino: **GitHub Pages** · acceso desde **Moodle/Aules** · mantenimiento desde **Markdown**.

> Cuestionarios: se entregan como **bancos de preguntas en formato GIFT** (`<bloque>/cuestionarios/*.gift`) + guía de importación y configuración en Aules (instrucciones-aules.md). La configuración estándar es: intentos múltiples, **mejor nota** en el libro de calificaciones, preguntas aleatorias por apartado y fecha de cierre. NO se incrustan preguntas en el HTML. En los bloques teóricos **no** se añade aviso de cuestionario por apartado; solo al final del bloque se señala el «Cuestionario final» enlazando a su actividad en Aules (p. ej. «Cuestionario_1_1_Hardware»). En el bloque práctico sí se inserta el aviso «Cuestionario en Aules» en cada actividad (enlaza su quiz PR).

## 2 · Estado actual y fases

| Fase | Bloque | Estado |
|---|---|---|
| 1 | 00 · Introducción y elementos curriculares | ✅ COMPLETADA (1 imagen general integrada) |
| 2 | 01 · Hardware | ✅ COMPLETADA (contenido + GIFT + guía Aules + 24 imágenes + navegación `.page-nav` conectada con Aules) |
| 2b | Bloque práctico: Hardware básico de un puesto de trabajo administrativo sanitario | ✅ COMPLETADA (`practico-hardware/` · actividades autocorregibles con `js/actividades.js` + 3 bancos GIFT `PR-01.1…PR-01.3` + soluciones PDF desbloqueables por apartado + tarjeta de acceso en 01-hardware) |
| 3 | 02 · Software | ✅ COMPLETADA (teoría `02-software/` + 5 bancos GIFT + guía Aules + inventario · SIN imágenes, no hay archivos en la fuente · `.page-nav` → Cuestionario teórico SW · **bloque práctico `practico-software/` COMPLETADO** con 3 bancos GIFT `PR-01.4…PR-01.6` + guía Aules + inventario) |
| 4 | 03 · Ciberseguridad | ✅ COMPLETADA (teoría `03-ciberseguridad/` + 7 bancos GIFT (5 apartados + `Cuestionario_1_3_Ciberseguridad` + examen final) + guía Aules + inventario · SIN imágenes en la fuente, mapa conceptual reconstruido como diagrama HTML/CSS · `.page-nav` → Cuestionario teórico CS · **bloque práctico `practico-ciberseguridad/` COMPLETADO** con 3 bancos GIFT `PR-01.7…PR-01.9` + guía Aules + inventario) |
| 5 | 04 · Redes locales (LAN) | ✅ COMPLETADA (teoría `04-redes-lan/` + banco GIFT consolidado `Cuestionario_1_4_Redes_Locales_LAN` (44 preguntas, categoría `OFI/UP01/RL/11-cuestionario-redes-lan`) + guía Aules + inventario · SIN imágenes en la fuente · `.page-nav` → Cuestionario teórico RL (`11522903`) · **bloque práctico `practico-redes-lan/` COMPLETADO** con 3 bancos GIFT `PR-01.10…PR-01.12` + guía Aules + inventario + widgets propios en `js/actividades.js` (`#baraja-rl`, `#empareja-componentes`, `#ponte-a-prueba-rl`/RL_TEST, `#escenarios-rl`, `#empareja-protocolos`, `#empareja-config`, `#checklist-rl`, `#orden-rl`, `#inventario-rl` y paneles `#soluciones-rl-comp/-top/-config` con claves `up01-practico-rl-{comp,topo,config}-ok`) |
| 6 | 05 · Acceso a Internet | ⏳ PENDIENTE |

**Regla de fases:** se genera UN bloque por fase. Al terminar una fase, detener la generación y esperar instrucciones del usuario.

> **Próximo paso (punto de reanudación, 23-09-2026):** la Fase 5 (04 · Redes locales
> (LAN), teoría + bloque práctico) está **COMPLETADA, commiteada y publicada** en
> `origin/main` (ver `git log --oneline`). Los IDs de Aules RL son **definitivos**:
> `11522903` teoría, `11522977` PR-01.10,
> `11522984` PR-01.11, `11522994` PR-01.12. La siguiente fase pendiente es la
> **Fase 6 · 05 · Acceso a Internet**: extraer el texto del PDF (apartado 6),
> redactar `05-acceso-internet/index.md` + `index.html` + inventario, crear los
> bancos GIFT (categoría `OFI/UP01/INT/…`), el bloque práctico `practico-acceso-internet/`
> con widgets en `js/actividades.js`, y conectar portada/sidebar/`.page-nav`
> siguiendo la «Plantilla de apartado» (§14). Confirmar con la profesora los IDs de
> Aules y la numeración `PR-0X.x` antes de enlazar.
>
> **Recordatorio de flujo:** antes de terminar cada fase, re-ejecutar las
> utilidades de validación (en `C:\Users\Usuario\AppData\Local\Temp\opencode\pdf-extract`):
> `node verify-gift.js <carpeta>` (bancos GIFT) y `node check-html.js` (footers,
> ids únicos, rutas e imágenes de los HTML).

### Publicación y git

- Repo público: `Noemi0211/up01-mantenimiento-equipos` · rama `main` · GitHub Pages:
  `https://noemi0211.github.io/up01-mantenimiento-equipos/`
- El PDF fuente y `Documentos base/` (PNG originales BY-NC-SA, ≈55 MB) están excluidos del repo (`.gitignore`); solo se publican las copias normalizadas de `images/`.
- Solo commit/push cuando el usuario lo pida explícitamente.
- El historial de commits está en GitHub; este documento no mantiene el SHA del último commit (usar `git log --oneline`).
- Tras el push, GitHub Pages tarda un par de minutos en regenerarse; si el usuario no ve cambios, avisar de recargar con Ctrl+F5.
- CRLF: al hacer `git add` se avisa del reemplazo LF→CRLF; es normal y no requiere acción.

## 3 · Documento fuente

- Ruta: `ApuntesOPI_UP_01_Mantenimiento 26-27.pdf` (49 páginas).
- El modelo NO puede leer PDF directo. Extraer texto con Node:
  `npm i pdfjs-dist@3.11.174` en `C:\Users\Usuario\AppData\Local\Temp\opencode\pdf-extract` y usar `getDocument().getPage(i).getTextContent()`.
- Estructura del PDF: elemento curricular → 1\. Introducción → 2\. Hardware (2.1.1–2.1.9) → 3\. Software → 4\. Ciberseguridad → 5\. Redes LAN → 6\. Acceso a Internet → 7\. Conclusiones.
- Autora: Noemí Celaya Mingot · Licencia original: CC BY-NC-SA 4.0.

## 4 · Estructura de carpetas (obligatoria)

```
Apuntes 26-27/
├── index.md / index.html          # Portada del curso (ya creada)
├── docs/  images/  templates/  css/  js/  output/  inventario-imagenes/
├── 00-introduccion-elementos-curriculares/   # index.md + index.html + inventario-imagenes.md + images/
├── 01-hardware/ 02-software/ 03-ciberseguridad/ 04-redes-lan/ 05-acceso-internet/
│     (cada una: markdown fuente + html final + inventario de imágenes propio + images/)
│     cuestionarios/  (solo si el bloque lo requiere): *.gift + instrucciones-aules.md
├── practico-hardware/                        # Bloque práctico de cada apartado (<NN> → practico-<bloque>):
│     index.md + index.html + inventario-imagenes.md + cuestionarios/ (PR-0X.1..3 + instrucciones-aules.md)
│     (siguientes apartados: practico-software/, practico-ciberseguridad/, …)
```

- `docs/` · `output/` · `images/` (raíz) quedan reservados para las imágenes del proyecto.
- Imágenes reales: `images/<categoría>/` con subcarpetas `hardware`, `software`, `ciberseguridad`, `redes`, `internet` y `generales`.
- Bloques aún no generados: conservar su carpeta `images/` vacía (scaffolding, `.gitkeep`).

## 5 · Sistema de diseño (NO cambiar sin permiso)

- Paleta: `#1A1F2E` (tinta) · `#4ECCA3` (acento) · `#F7F4EF` (fondo) · `#FFFFFF` (tarjetas) · `#667085` (texto secundario).
- Tipografías (Google Fonts): **Syne** (títulos) · **DM Sans** (cuerpo).
- `css/estilos.css` — CSS único compartido. Prohibido duplicar estilos inline por página. Incluye protección contra copia (`user-select: none` en el contenido, permitido en `input`/`textarea`/`select`).
- Componentes disponibles: `.hero`, `.card-grid/.card`, `.callout` (+ modificadores `--key --health --example --summary --reflect`), `.table-wrap`, `.image-figure` (+ modificadores `--wide --centered`), `.image-grid` (+ modificador `--2`) y `.image-card`, `.timeline`, `.steps/.step`, `.ce-list`, `.toc`, `.page-nav`.
- Widgets interactivos del bloque práctico: `.baraja`/`.flash` (tarjetas volteables), `.match` (emparejados), `.test` (autoevaluación), `.escenario`, `.checklist`, `.orden`, `.inventario` y `.soluciones-panel`. Estilos en `css/estilos.css`.
- `js/navegacion.js` — menú móvil, scroll-spy, TOC automático, volver arriba, **lightbox de imágenes** y protección ligera contra copia (bloquea `copy`/`cut`/clic derecho/arrastre/selección; permite `input`/`textarea`).
- **Lightbox:** se inicializa una sola vez por delegación de eventos en `document` (así cubre también las imágenes generadas dinámicamente por `actividades.js`). Amplía cualquier `<img>` salvo las que estén **dentro de un `<button>` o de `.baraja`**, para no interferir con la baraja que se voltea, los emparejados ni las opciones de los tests. Cierre con ✕, clic en el fondo o `Esc`. Cursor `zoom-in` en `.image-figure img`, `.image-card img`, `.test__prompt img` y `.soluciones-panel img`.
- `js/actividades.js` — actividades autocorregibles del bloque práctico (inicializa por contenedor: `#baraja`, `#empareja-tareas`, `#empareja-puertos`, `#ponte-a-prueba`, `#soluciones-panel`, `#escenarios`, `#checkbox`, `#orden`, `#inventario`… y los contenedores del bloque práctico de software: `#baraja-soft`, `#empareja-funciones`, `#ponte-a-prueba-soft`, `#escenarios-soft`, `#empareja-apps`, `#checklist-soft`, `#orden-soft`, `#inventario-soft`, `#soluciones-soft-rec/-so/-config`; y los del bloque práctico de ciberseguridad: `#baraja-ciber`, `#empareja-amenazas`, `#ponte-a-prueba-ciber`, `#empareja-tecnicas`, `#escenarios-ciber`, `#empareja-herramientas`, `#checklist-ciber`, `#orden-ciber`, `#inventario-ciber` y los paneles `#soluciones-ciber-ame/-social/-prot`; y los del bloque práctico de redes locales: `#baraja-rl`, `#empareja-componentes`, `#ponte-a-prueba-rl`, `#escenarios-rl`, `#empareja-protocolos`, `#empareja-config`, `#checklist-rl`, `#orden-rl`, `#inventario-rl` y los paneles `#soluciones-rl-comp/-top/-config`). Solo se ejecuta en la página que los incluye. Los widgets HW están **parametrizados** (`iniciarBaraja(contenedor, deck)`, `iniciarEscenarios(contenedor, datos, msjBad, onCompletos)`, `iniciarChecklist(contenedor, datos, msjOk, onCompletos)`, `iniciarOrden(contenedor, datos, msjIntro, msjOk, msjFallo, onCompletos)`, `iniciarInventario(contenedor, datos, tituloPdf)`); SW añade `iniciarTestSoft` (modos delim/tipo/función/tarea), CS añade `iniciarTestCiber` y RL añade `iniciarTestRl` (test de 10 preguntas de `CS_TEST` / `RL_TEST`). La baraja admite frontal de imagen o de texto (`.baraja__cara--txt` + `.baraja__chip`). Los PDF que se desbloquean al completar una actividad perfecta (tablas resueltas, puertos, verificación e inventario) se generan con `abrirImpresion(título, html)`: ventana de impresión con cabecera (título + «UP01 · Mantenimiento básico de equipos · Bloque práctico» + fecha), tablas con `thead` repetido y salto de página controlado, y la leyenda al pie: **«Material para el aula de Ofimática generado por Noemí Celaya Mingot con ayuda de la IA. Licencia CC BY-NC-SA 4.0»**.
- La tabla de respuestas resueltas se desbloquea con un test perfecto; el panel de soluciones de puertos (`#soluciones-puertos`) con escenarios y emparejado perfectos; el de verificación (`#soluciones-verificacion`) con checklist y orden perfectos. Cada desbloqueo se guarda en `localStorage` (`up01-practico-{rec,puertos,verificacion}-ok`). Software: `up01-practico-soft-{rec,so,config}-ok` (rec → test perfecto; so → escenarios + emparejado; config → checklist + orden). Ciberseguridad: `up01-practico-ciber-{ame,social,prot}-ok` (ame → test perfecto; social → escenarios + emparejado; prot → checklist + orden). Redes locales: `up01-practico-rl-{comp,topo,config}-ok` (comp → test perfecto; topo → escenarios + emparejado; config → checklist + orden).
- **Botones `.btn--ghost` sobre fondos oscuros:** en `.callout--key` y `.soluciones-panel__cab` (fondo `--ink`), el `btn--ghost` por defecto tiene texto `--ink` y sería invisible («caja vacía»). Estos contextos deben llevar estilos propios: texto blanco, borde translúcido `rgba(255,255,255,0.4)` y hover con fondo `rgba(255,255,255,0.12)`.
- `templates/plantilla-base.html` — marcadores `[[TITULO_PAGINA]]`, `[[CONTENIDO]]`, `[[NAV_INTERNA]]`, `[[URL_RAIZ]]`.

## 6 · Estructura HTML por página

1. HEADER fijo (mismo en todas).
2. Sidebar fija: apartados publicados (enlace a cada bloque de teoría) +, en las páginas de teoría y de prácticas de cada bloque, sección «Apartado 0X» con enlaces a la teoría, al cuestionario teórico y a los recursos del bloque (bloque práctico y quizzes prácticos) + sección «Guía curricular» (enlace al bloque 00, fuera del recorrido del alumnado) + sección «En esta página». No se listan bloques aún no publicados.
3. Contenido principal con `<section id="...">` únicas por página.
4. TOC automático: `<div class="toc" id="toc-automatico"></div>`.
5. `.page-nav` con Anterior/Siguiente.
6. FOOTER con el texto EXACTO:
   `Material para el módulo de Ofimática. Creado por Noemí Celaya Mingot con ayuda de la IA. Licencia CC BY-NC-SA 4.0`
7. Botón volver arriba + `<script src="RUTA js/navegacion.js">`.

Rutas relativas: desde un bloque `<../css/estilos.css>`, `<../js/navegacion.js>`; desde raíz `css/…`.

## 7 · Estructura didáctica (TODO concepto)

```
Título
Explicación breve           → párrafos/ul cortos
💡 Idea clave                → .callout--key
Aplicación en sanidad        → .callout--health
Ejemplo práctico             → .callout--example
Pregunta para reflexionar    → .callout--reflect (si aplica)
Resumen                      → .callout--summary
```
Evitar párrafos largos y lenguaje académico excesivo. Microcontenidos.

## 8 · Imágenes

- **Fuente:** las imágenes disponibles se copian desde `Documentos base/Imagenes` a la raíz `images/` **sin modificar los originales** (los `.zip` y el PDF fuente no se usan).
- **Organización por categorías** (`images/<categoría>/`): `hardware`, `software`, `ciberseguridad`, `redes`, `internet`, `generales`. Los bloques sin imágenes mantienen su carpeta con `.gitkeep`.
- **Convención de nombres:** minúsculas y guiones (`placa-base.png`, `puerto-usb-a.png`), sin espacios ni caracteres especiales.
- **Integración en página** (nada de referencias textuales ni cajas de «Imagen recomendada»):
  - Una imagen: `<figure class="image-figure">` (+ `--wide` o `--centered`) con `<figcaption>` como pie.
  - Varias imágenes relacionadas: `<div class="image-grid">` con tarjetas `<figure class="image-card">` (cada una con `<img>` + `figcaption`).
- Todo `<img>` lleva **texto alternativo descriptivo** (accesibilidad) y `loading="lazy"`.
- Rutas relativas desde un bloque: `<../images/<categoría>/archivo.png>`; desde raíz `images/…`.
- Inventario global: `inventario-imagenes/inventario-general.md` (Nombre, Procedencia, Ubicación, Descripción, Texto alternativo). Inventario propio por bloque: `<bloque>/inventario-imagenes.md` (archivo, ruta completa, sección, `alt` y página).

## 9 · Flujo de trabajo por bloque (checklist)

1. **Extraer** el texto de las páginas del PDF correspondientes al bloque.
2. **Transformar** (no copiar literal): microcontenidos, estructura didáctica §7, ejemplos sanitarios.
3. **Redactar** `<bloque>/index.md` (bloques teóricos: sin aviso por apartado, solo el «Cuestionario final» del bloque con enlace a su actividad en Aules; bloque práctico: aviso «🧩 Cuestionario en Aules» por actividad).
4. **Generar** `<bloque>/index.html` copiando la estructura de `00-introduccion-elementos-curriculares/index.html` (plantilla ya aplicada), adaptando id, nav y contenido.
5. **Imágenes**: copiar a `images/<categoría>/` las imágenes necesarias de `Documentos base/Imagenes` y actualizar el `inventario-imagenes.md` del bloque (archivo, ruta, sección, `alt`, página).
6. **Cuestionarios**: si el bloque los requiere, crear `<bloque>/cuestionarios/` con los `.gift` por apartado + `.gift` de examen final + `instrucciones-aules.md` (ver §9bis).
7. **Conectar**: si la carpeta del bloque ya existe y tocaba enlace en portada/sidebar, enlazarla; NO crear bloques futuros que queden colgados.
8. **Verificar**: rutas relativas, ids de sección únicos, cierre de etiquetas, footer exacto, responsive (viewport).
9. **Detener** y resumir; esperar instrucciones.

## 9bis · Bancos de preguntas GIFT (para bloques con cuestionarios)

- Un `.gift` por apartado + uno de examen final. Cada archivo empieza con `$CATEGORY: OFI/UP01/<BLOQUE>/<NN>-<nombre>` (p. ej. `OFI/UP01/HW/01-que-es-hardware`), de modo que Moodle crea la categoría al importar.
- Sintaxis GIFT: `::Nombre::Pregunta{=Correcta~Incorrecta~Incorrecta}`; V/F: `{T}`/`{F}`; escapar `=`, `{`, `}`, `~`, `#` con `\` si aparecen dentro del enunciado.
- **IMPORTANTE — V/F:** las preguntas verdadero/falso deben escribirse en una sola línea `{T}`/`{F}` (o `{TRUE}`/`{FALSE}`). Un formato en bloque como `{ \n=T \n }` se importa en Moodle como **respuesta corta** (el alumnado debe teclear T/F en vez de botones).
- **IMPORTANTE — codificación:** los archivos `.gift` deben escribirse como UTF-8 sin BOM. No transformar con PowerShell `Get-Content`/`Set-Content` sin `-Encoding UTF8` (corrompe acentos). Tras editar, verificar que los acentos (áéíóú/¿¡) se leen correctamente.
- **IMPORTANTE — sintaxis:** una única respuesta correcta (`=`) por pregunta de opción única; el resto con `~`. Verificación rápida por archivo: nº de líneas `::…` = nº de líneas `=` = nº de líneas `}`. Si usas «respuesta múltiple», ponderar con `%50%` etc.
- El `instrucciones-aules.md` describe: importar GIFT, crear un quiz por apartado con **pregunta aleatoria** (extracción aleatoria de la categoría), intentos múltiples, **método de calificación «calificación más alta»**, cierre de plazo con «Ventana de tiempo» (Permitir enviar hasta) y nota en el libro de calificaciones.

> **Resuelto (18-09-2026):** los 32 V/F de los bancos (teoría HW/SW + PR-01.1…3)
> pasaron del formato en bloque `{\n=T/F\n}` a `{T}`/`{F}` inline, de modo que
> vuelven a importarse como verdadero/falso con botones en Moodle. Además se
> corrigieron 33 marcadores `::Nombre:` (un solo colon) en `gift-04-almacenamiento.gift`
> y `gift-05-memorias.gift`. Verificado: `Cuestionario_1_1_Hardware.gift` y el resto de
> bancos NO tienen acentos corruptos (0 U+FFFD, UTF-8 sin BOM); los `�` que se ven en
> consola PowerShell son solo del juego de caracteres de la terminal.

> **Pendiente (18-09-2026):** los quizzes prácticos PR-01.1…3 en Aules
> actualmente muestran **todas** las preguntas del banco (la profesora no los
> configuró como aleatorios); cómo se repartirán de cara al examen es una
> decisión pendiente de la profesora. No reflejarlo en el contenido dirigido al
> alumnado (ver §11). Aplicable también a los PR-01.4…6 de software (pendiente de
> confirmar con la profesora).

## 10 · Verificación antes de terminar

- `grep` de `href|src` para confirmar rutas `css/` y `js/` correctas.
- Página raíz y bloques abren sin errores (servir carpeta o abrir local).
- Footer exacto en todas las páginas HTML.
- Ninguna imagen rota: todos los `src` de `<img>` resuelven a `images/<categoría>/`.
- No debe quedar ningún marcador de posición (`image-placeholder`, `<!-- IMAGEN` → glob `*placeholder*`, `*IMAGEN*`).
- Cargar el `.page-nav` Anterior/Siguiente sigue la cadena del curso definida en §14.
- GIFT: nº de `::` = nº de `=` = nº de `}` por archivo; acentos UTF-8 sin BOM sin corromper.

## 11 · Convenciones de idioma y estilo

- Redacción en español (castellano), tono didáctico directo.
- **Menciones a los cuestionarios de Aules dirigidas al alumnado:** no indicar que las preguntas son aleatorias; usar la frase **«Puedes intentarlo tantas veces como quieras antes de que finalice el plazo y se guardará tu mejor nota»**.
- Emojis solo en los reactivos didácticos (💡🏥✍️📌❓) y jóvenes iconos de tarjetas; NO añadir emojis fuera de contexto.
- Código sin comentarios salvo las cabeceras de sección HTML (`<!-- ============ … ============ -->`).

## 12 · Recursos para continuar

- Plantilla reutilizable: `templates/plantilla-base.html`
- Ejemplo de bloque completo: `00-introduccion-elementos-curriculares/` (index.md + index.html + inventario)
- Ejemplo de bloque con cuestionarios: `01-hardware/` (index.md + index.html + inventario + `cuestionarios/`)
- Ejemplo de bloque práctico con actividades interactivas: `practico-hardware/` (index.md + index.html + inventario + `cuestionarios/` + widgets `js/actividades.js`)
- Segundo ejemplo de bloque práctico (mismos widgets parametrizados, con contenidos propios y sin imágenes nuevas): `practico-software/`
- Tercer ejemplo de bloque práctico (widgets parametrizados + test propio `iniciarTestCiber` con `CS_TEST` y paneles `#soluciones-ciber-*`): `practico-ciberseguridad/`
- Cuarto ejemplo de bloque práctico (test propio `iniciarTestRl` con `RL_TEST` y paneles `#soluciones-rl-*`): `practico-redes-lan/`
- Inventario global: `inventario-imagenes/inventario-general.md`
- Estilos y JS compartidos: `css/estilos.css`, `js/navegacion.js`, `js/actividades.js`

## 13 · Estado de imágenes (revisión completa)

Revisión realizada sobre todo el proyecto: se eliminaron todos los marcadores de
posición (`image-placeholder`, `<!-- IMAGEN: … -->`, «Imagen recomendada») y se
sustituyeron por imágenes reales copiadas desde `Documentos base/Imagenes`.

### Imágenes localizadas (fuente `Documentos base/Imagenes`)

45 archivos procedentes de: `Componentes/` (12), `memorias/` (3),
`perifericos/` (12), `puertos/` (13), `Infografías/` (4) y raíz (1,
`Distribucion_componentes.png`). Añadido **21-09-2026:** el mapa mental del
software (`Imagenes/Infografías/mapa_software.png`) suma una 5.ª infografía
(nº 46).

### Carpetas utilizadas

```
images/
├── hardware/    (44 imágenes) — copiadas y renombradas (minúsculas + guiones)
├── software/    (1 imagen: mapa-software.png)
├── ciberseguridad/ (vacía, .gitkeep)
├── redes/       (vacía, .gitkeep)
├── internet/    (vacía, .gitkeep)
└── generales/   (1 imagen: distribucion-componentes.png)
```

### Imágenes integradas

| Bloque | Integradas | Dónde |
|---|---|---|
| 00 · Introducción | 1 | Presentación (figura centrada, `generales/distribucion-componentes.png`) |
| 01 · Hardware | 24 | Tarjetas `.image-card` y figura `.image-figure` en los apartados 1–9 |
| 02 · Software (teoría + prácticas) | 1 nueva | `mapa-software.png` (mapa mental) integrado al final del bloque teórico (`software/mapa-software.png`, figura `.image-figure--wide`); la baraja del práctico es **solo de software** (frontal de texto `.chip`); las 5 imágenes de `images/hardware/` (monitor, teclado, cpu, memoria-ram, hdd) solo se usan en miniatura en la tabla de respuestas resueltas en PDF |
| 03 · Ciberseguridad (teoría + prácticas) | 0 | Sin archivos de imagen en la fuente; el mapa conceptual se reconstruyó como **diagrama HTML/CSS** al final del bloque teórico (`03-ciberseguridad/index.html`); todas las actividades del práctico son **de texto** (baraja `.baraja__cara--txt`, emparejados, escenarios, test, checklist, orden e inventario) |
| 04 · Redes locales (LAN) (teoría + prácticas) | 0 | Sin archivos de imagen en la fuente; la teoría y el bloque práctico se construyeron **solo de texto** (categoría `redes/` vacía, con `.gitkeep`) |

### Imágenes pendientes

- Internet: sin archivos disponibles en la carpeta fuente; se integrarán cuando
  se genere ese bloque (categoría `internet/`). Los bloques de ciberseguridad y de
  redes locales ya están publicados **sin imágenes** (0 archivos disponibles): el
  primero con el mapa conceptual reconstruido como diagrama HTML/CSS en
  `03-ciberseguridad/index.html`, y el segundo construido solo de texto.
- No existe imagen real de «portada del módulo»; la presentación del bloque 00 usa
  la imagen general del sistema informático.

### Incidencias encontradas

- La carpeta origen `Infografías` aparece con nombre codificado en la consola
  (`Infograf�as`) por el juegos de caracteres; el acceso con la ruta correcta
  (con `í`) funciona bien al usar `Get-ChildItem -Directory | Where-Object Name -like 'Infograf*'`.
- Los originales son PNG pesados (≈120 KB – 2,2 MB) y se conservan sin optimizar
  para no modificar los originales; si se desea optimizar el sitio, convertir a
  WEBP en `images/<categoría>/` sin tocar la fuente.

## 14 · Navegación secuencial y enlaces de Aules

El curso real en Aules ordena sus actividades, y el sitio GitHub Pages las conecta
con los enlaces `.page-nav` (Anterior/Siguiente) del final de cada página.

### Enlaces de Aules (IDs reales)

| Actividad | Tipo | URL |
|---|---|---|
| Teoría de hardware y presentación (enlace «UP01 · Mantenimiento básico de equipos») | URL | `https://aules.edu.gva.es/fp/mod/url/view.php?id=11225710` |
| Cuestionario sobre la presentación | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11231945` |
| Cuestionario teórico sobre el hardware | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11291377` |
| Prácticas de hardware (Bloque práctico) | URL | `https://aules.edu.gva.es/fp/mod/url/view.php?id=11397605` |
| PR-01.1 Reconocimiento de equipos y periféricos (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11391623` |
| PR-01.2 Puertos y conexiones (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11391626` |
| PR-01.3 Verificación del equipo (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11391627` |
| Teoría de software (enlace «Bloque 02 · Software») | URL | `02-software/index.html` (GitHub Pages) |
| Cuestionario teórico sobre el software | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11402081` |
| Prácticas de software (Bloque práctico) | URL | `practico-software/index.html` (GitHub Pages) |
| PR-01.4 Identificación de software y hardware (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11428448` |
| PR-01.5 El sistema operativo y sus funciones (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11428449` |
| PR-01.6 Personalización y configuración del sistema (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11428451` |
| Teoría de ciberseguridad (enlace «Bloque 03 · Ciberseguridad») | URL | `03-ciberseguridad/index.html` (GitHub Pages) |
| Cuestionario teórico sobre la ciberseguridad | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11431133` |
| Prácticas de ciberseguridad (Bloque práctico) | URL | `practico-ciberseguridad/index.html` (GitHub Pages) |
| PR-01.7 Malware y amenazas (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11431277` |
| PR-01.8 Ingeniería social y protección de la información (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11431343` |
| PR-01.9 Herramientas y buenas prácticas de seguridad (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11431355` |
| Teoría de redes locales (enlace «Bloque 04 · Redes locales (LAN)») | URL | `04-redes-lan/index.html` (GitHub Pages) |
| Cuestionario teórico sobre las redes locales | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522903` |
| Prácticas de redes locales (Bloque práctico) | URL | `practico-redes-lan/index.html` (GitHub Pages) |
| PR-01.10 Conceptos y componentes de una red local (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522977` |
| PR-01.11 Topologías, medios y protocolos de red (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522984` |
| PR-01.12 Configuración y puertos de red (IP/conectividad) (Bloque práctico) | Quiz | `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522994` |

### Estructura por apartados (teoría · cuestionario · prácticas)

Cada apartado de la unidad consta de **3 bloques enlazados de forma diferenciada**
en Aules, además del recorrido secuencial con «Siguiente» dentro del sitio:

| Apartado | Teoría (URL) | Cuestionario (Quiz) | Prácticas (URL) |
|---|---|---|---|
| 01 · Hardware | `11225710` → `index.html` + `01-hardware/index.html` | `11291377` | `11397605` → `practico-hardware/index.html` (+ quizzes PR-01.1…3) |
| 02 · Software | `02-software/index.html` (GitHub Pages) | `11402081` | `practico-software/index.html` (GitHub Pages) (+ quizzes PR-01.4…6) |
| 03 · Ciberseguridad | `03-ciberseguridad/index.html` (GitHub Pages) | `11431133` | `practico-ciberseguridad/index.html` (GitHub Pages) (+ quizzes PR-01.7…9) |
| 04 · Redes locales (LAN) | `04-redes-lan/index.html` (GitHub Pages) | `11522903` | `practico-redes-lan/index.html` (GitHub Pages) (+ quizzes PR-01.10…12) |

La portada (`index.html`) solo muestra los apartados publicados como 3 tarjetas
(teoría · cuestionario · prácticas). El bloque 00 (Introducción y elementos
curriculares) queda como «Guía curricular», fuera del recorrido del alumnado.

**Orden de las actividades en Aules (apartado Hardware):**

1. **Teoría de hardware y presentación** — URL `11225710` → abre la portada del sitio.
2. **Cuestionario teórico sobre el hardware** — Quiz `11291377`.
3. **Prácticas de hardware** — URL `11397605` → abre `practico-hardware/index.html`.
4. **PR-01.1** Reconocimiento de equipos y periféricos — Quiz `11391623`.
5. **PR-01.2** Puertos y conexiones — Quiz `11391626`.
6. **PR-01.3** Verificación del equipo — Quiz `11391627`.

Los pasos 2→3, 4→5 y 5→6 los encadena **Aules** (orden del curso); el sitio solo
controla los «Anterior/Siguiente» internos (portada, teoría y prácticas). Para que
el «Siguiente» del quiz teórico lleve a las prácticas, coloca la actividad URL de
prácticas justo después del quiz y activa en el quiz «Mostrar enlace a la siguiente
actividad».

**Orden de las actividades en Aules (apartado Software):**

1. **Teoría de software** — URL → `02-software/index.html` (GitHub Pages).
2. **Cuestionario teórico sobre el software** — Quiz `11402081`.
3. **Prácticas de software** — URL → `practico-software/index.html`.
4. **PR-01.4** Identificación de software y hardware — Quiz `11428448`.
5. **PR-01.5** El sistema operativo y sus funciones — Quiz `11428449`.
6. **PR-01.6** Personalización y configuración del sistema — Quiz `11428451`.

**Orden de las actividades en Aules (apartado Ciberseguridad):**

1. **Teoría de ciberseguridad** — URL → `03-ciberseguridad/index.html` (GitHub Pages).
2. **Cuestionario teórico sobre la ciberseguridad** — Quiz `11431133`.
3. **Prácticas de ciberseguridad** — URL → `practico-ciberseguridad/index.html`.
4. **PR-01.7** Malware y amenazas — Quiz `11431277`.
5. **PR-01.8** Ingeniería social y protección de la información — Quiz `11431343`.
6. **PR-01.9** Herramientas y buenas prácticas de seguridad — Quiz `11431355`.

**Orden de las actividades en Aules (apartado Redes locales (LAN)):**

1. **Teoría de redes locales** — URL → `04-redes-lan/index.html` (GitHub Pages).
2. **Cuestionario teórico sobre las redes locales** — Quiz `11522903`.
3. **Prácticas de redes locales** — URL → `practico-redes-lan/index.html`.
4. **PR-01.10** Conceptos y componentes de una red local — Quiz `11522977`.
5. **PR-01.11** Topologías, medios y protocolos de red — Quiz `11522984`.
6. **PR-01.12** Configuración y puertos de red (IP/conectividad) — Quiz `11522994`.

> **Nota sobre la numeración:** los quizzes prácticos de software se llaman
> `PR-01.4…PR-01.6` (no `PR-02.x`), porque la profesora los creó en Aules con esa
> numeración continua del bloque práctico (los IDs reales son los de la tabla
> anterior). Los bancos GIFT viven en `practico-software/cuestionarios/`
> (`gift-practico-014-software-hardware.gift`, `gift-practico-015-sistema-operativo.gift`
> y `gift-practico-016-configuracion.gift`; categorías `OFI/UP01/PR/01-4-software-hardware`,
> `OFI/UP01/PR/01-5-sistema-operativo`, `OFI/UP01/PR/01-6-configuracion`).
> El bloque práctico de software **no usa imágenes nuevas**: los elementos de
> software se representan con frontal de texto (.chip) y los componentes hardware
> reutilizan `images/hardware/`. El bloque de ciberseguridad (teoría + prácticas)
> tampoco usa imágenes: todo es texto y el mapa conceptual es un diagrama HTML/CSS
> (0 archivos disponibles en la fuente). Sus bancos GIFT viven en
> `practico-ciberseguridad/cuestionarios/` (`gift-practico-017-malware-y-amenazas.gift`,
> `gift-practico-018-ingenieria-social.gift` y
> `gift-practico-019-proteccion-buenas-practicas.gift`; categorías
> `OFI/UP01/PR/01-7-malware-y-amenazas`, `01-8-ingenieria-social`,
> `01-9-proteccion-buenas-practicas`).

### Plantilla de apartado (replicar en Software y siguientes)

**Cada apartado se construye SIEMPRE con estos 3 elementos**, enlazados de forma
diferenciada en Aules y encadenados con «Siguiente» dentro del sitio:

| # | Elemento | Qué es | Dónde vive | Enlace en Aules |
|---|---|---|---|---|
| 1 | **Teoría** | HTML con los contenidos teóricos del apartado | `<NN>-<bloque>/index.html` (GitHub Pages) | Actividad **URL** al HTML publicado |
| 2 | **Cuestionario teórico** | Banco GIFT del apartado importado como Quiz | `<NN>-<bloque>/cuestionarios/` → Aules | Actividad **Quiz** (una por apartado) |
| 3 | **Prácticas** | HTML del bloque práctico + sus 3 cuestionarios | `practico-<bloque>/` + Aules | 1 actividad **URL** + 3 actividades **Quiz** (`PR-0X.1…3`) |

**URLs publicadas** (para las actividades URL de Aules):
- Teoría: `https://noemi0211.github.io/up01-mantenimiento-equipos/<NN>-<bloque>/`
- Prácticas: `https://noemi0211.github.io/up01-mantenimiento-equipos/practico-<bloque>/`
- Portada / presentación: `https://noemi0211.github.io/up01-mantenimiento-equipos/`

**Convención de nombres** (ejemplo Hardware → Software):
- Teoría: `01-hardware/` → `02-software/`
- Prácticas: `practico-hardware/` → `practico-software/`
- Bancos GIFT teoría: `OFI/UP01/HW/…` → `OFI/UP01/SW/…`
- Cuestionarios prácticos: `PR-01.1…PR-01.3` → para Software se usó la numeración que la profesora creó en Aules (continua del práctico): `PR-01.4…PR-01.6`. Para bloques futuros, confirmar con la docente la numeración real antes de generar los bancos.
- Cuestionario teórico del bloque (quiz final en la web de teoría): `Cuestionario_1_1_<Bloque>`
  (p. ej. `Cuestionario_1_1_Hardware` → quiz `11291377`; `Cuestionario_1_1_Software` → quiz `11402081`;
  `Cuestionario_1_3_Ciberseguridad` → quiz `11431133`; el nombre real en Aules del CS es `Cuestionario_1_3_Ciberseguridad`).

**Pasos de montaje de un apartado nuevo:**
1. Publicar el HTML de teoría: `<NN>-<bloque>/index.html`.
2. Crear el banco GIFT del **cuestionario teórico** e importarlo en Aules (Quiz).
3. Crear el **bloque práctico**: `practico-<bloque>/index.html` con actividades
   autocorregibles (`js/actividades.js`), sus 3 bancos GIFT (`PR-0X.1…3`),
   `instrucciones-aules.md` e inventario de imágenes.
4. Configurar en Aules, en este orden:
   **URL teoría → Quiz teoría → URL prácticas → Quiz PR-0X.1 → PR-0X.2 → PR-0X.3**.
5. Conectar el sitio:
   - **Portada:** 3 tarjetas del apartado (teoría · cuestionario · prácticas).
   - **Sidebar (teoría y prácticas):** sección «Apartado 0X» con enlaces a la teoría,
     al cuestionario teórico y a los 3 quizzes prácticos (y al bloque práctico desde
     la teoría).
   - **`.page-nav`:** Portada → Teoría → Cuestionario teórico → Prácticas → PR-0X.1.
6. Verificar enlaces externos (`target="_blank"` + `rel="noopener"`) y footer exacto.

### Flujo conectado hoy (page-nav)

- **index.html (Portada):** «Anterior» → Cuestionario sobre la presentación (Aules) · «Siguiente» → Apartado 01 · Hardware (salta el bloque 00).
- **00 · Guía curricular (fuera del recorrido):** «Anterior» → Portada · «Siguiente» → Hardware (acceso opcional desde la portada/sidebar).
- **01 · Hardware:** «Anterior» → Portada · «Siguiente» → Cuestionario teórico sobre el hardware (Aules).
- **02 · Software:** «Anterior» → Portada · «Siguiente» → Cuestionario teórico sobre el software (Aules `11402081`). Su sidebar incluye la sección «Apartado 02 · Software» con la teoría, el cuestionario teórico (`11402081`), el bloque práctico y los quizzes PR-01.4…6.
- **practico-hardware (Prácticas):** «Anterior» → Cuestionario teórico sobre el hardware (Aules) · «Siguiente» → PR-01.1 (Aules). Cada actividad enlaza **solo su propio** «Cuestionario en Aules» (sin botón hacia el siguiente quiz antes de trabajar sus contenidos), y la tabla del apartado 4 · Autoevaluación enlaza los tres quizzes. Su sidebar incluye la sección «Apartado 01 · Hardware» (teoría, cuestionario teórico y PR-01.1…3).
- **practico-software (Prácticas):** «Anterior» → Cuestionario teórico sobre el software (Aules `11402081`) · «Siguiente» → PR-01.4 (Aules `11428448`). Cada actividad enlaza **solo su propio** «Cuestionario en Aules» y, además, un enlace «siguiente elemento» al quiz siguiente (PR-01.4 → PR-01.5 → PR-01.6), de modo que la secuencia del apartado se recorre desde la web sin depender del orden de Aules; la autoevaluación enlaza PR-01.4…6 y su sidebar incluye la sección «Apartado 02 · Software». La teoría (02-software) añade en su «Cuestionario final del bloque» el enlace «continúa con el Bloque práctico de software». Widgets con contenedores propios (`#baraja-soft`, `#empareja-funciones`, `#ponte-a-prueba-soft`, `#escenarios-soft`, `#empareja-apps`, `#checklist-soft`, `#orden-soft`, `#inventario-soft` y los paneles `#soluciones-soft-rec/-so/-config`) inicializados en `js/actividades.js` con claves de desbloqueo `up01-practico-soft-{rec,so,config}-ok`; `actividades.js` reutiliza las mismas funciones de widgets parametrizadas con los datos de software, y la baraja soporta tarjetas de texto (`.baraja__cara--txt`) para el software.
- **03 · Ciberseguridad:** «Anterior» → Portada · «Siguiente» → Cuestionario teórico sobre la ciberseguridad (Aules `11431133`). Su sidebar incluye la sección «Apartado 03 · Ciberseguridad» (teoría, cuestionario teórico, bloque práctico y PR-01.7…9). La teoría añade en su «Cuestionario final del bloque» el enlace «continúa con el Bloque práctico de ciberseguridad». Sin imágenes: el mapa conceptual es un diagrama HTML/CSS al final del bloque.
- **practico-ciberseguridad (Prácticas):** «Anterior» → Cuestionario teórico sobre la ciberseguridad (Aules `11431133`) · «Siguiente» → PR-01.7 (Aules `11431277`). Cada actividad enlaza **solo su propio** «Cuestionario en Aules» y un enlace «siguiente elemento» al quiz siguiente (PR-01.7 → PR-01.8 → PR-01.9); la autoevaluación enlaza PR-01.7…9 y su sidebar incluye la sección «Apartado 03 · Ciberseguridad». Widgets con contenedores propios (`#baraja-ciber`, `#empareja-amenazas`, `#ponte-a-prueba-ciber`, `#escenarios-ciber`, `#empareja-tecnicas`, `#empareja-herramientas`, `#checklist-ciber`, `#orden-ciber`, `#inventario-ciber` y los paneles `#soluciones-ciber-ame/-social/-prot`) con claves de desbloqueo `up01-practico-ciber-{ame,social,prot}-ok`; la baraja es **solo de texto** (`.baraja__cara--txt`).
- **04 · Redes locales (LAN):** «Anterior» → Portada · «Siguiente» → Cuestionario teórico sobre las redes locales (Aules `11522903`). Su sidebar incluye la sección «Apartado 04 · Redes locales (LAN)» (cuestionario teórico, bloque práctico y PR-01.10…12). La teoría añade en su «Cuestionario final del bloque» el enlace «continúa con el Bloque práctico de redes locales». Sin imágenes: el bloque se construyó de texto.
- **practico-redes-lan (Prácticas):** «Anterior» → Cuestionario teórico sobre las redes locales (Aules `11522903`) · «Siguiente» → PR-01.10 (Aules `11522977`). Cada actividad enlaza **solo su propio** «Cuestionario en Aules» y un enlace «siguiente elemento» al quiz siguiente (PR-01.10 → PR-01.11 → PR-01.12); la autoevaluación enlaza PR-01.10…12 y su sidebar incluye la sección «Apartado 04 · Redes locales (LAN)». Widgets con contenedores propios (`#baraja-rl`, `#empareja-componentes`, `#ponte-a-prueba-rl`/`RL_TEST`, `#escenarios-rl`, `#empareja-protocolos`, `#empareja-config`, `#checklist-rl`, `#orden-rl`, `#inventario-rl` y los paneles `#soluciones-rl-comp/-top/-config`) con claves de desbloqueo `up01-practico-rl-{comp,topo,config}-ok`; test propio `iniciarTestRl` (paralelo a `iniciarTestCiber`) y la baraja es **solo de texto** (`.baraja__cara--txt` + `.chip`).

### Regla para futuros bloques

> Seguir la **«Plantilla de apartado»** definida arriba (3 elementos: teoría · cuestionario · prácticas).

- Cada nuevo apartado (Acceso a Internet)
  replicará el **mismo formato que 01-hardware/02-software**: teoría con aviso
  único «Cuestionario final» al final del bloque enlazando la actividad
  `Cuestionario_1_1_<Bloque>` (sin avisos por apartado), bloque práctico
  `practico-<bloque>/` con aviso «Cuestionario en Aules» por actividad, 3
  quizzes `PR-0X.1…3`, lightbox compartido para imágenes y los 3 enlaces en
  Aules (teoría → quiz → prácticas) con el mismo esquema que Hardware; su página
  de teoría añade los enlaces al quiz y a las prácticas correspondientes y la
  portada incorpora las 3 tarjetas del apartado.
- El «Siguiente» de cada página de teoría lleva a su cuestionario (o al siguiente
  elemento del curso si fuera procedente): el `page-nav` solo encadena dentro del
  apartado (teoría → quiz → prácticas), sin encadenar apartados entre sí.
- El bloque práctico enlaza como «Siguiente» el cuestionario PR-01.1.
- **Decisión docente (22-09-2026):** en Aules se mantiene la estructura actual del curso y NO se reordenan actividades. Esto hace que el «Siguiente» nativo del quiz teórico de software apunte a la teoría de ciberseguridad; el paso al bloque práctico de software se guía con la nota de la descripción del quiz (ver `02-software/cuestionarios/instrucciones-aules.md` §6) y con los enlaces propios del sitio desde la teoría.
- Las tres actividades del bloque práctico se califican con los cuestionarios
  «PR-01.1…PR-01.3» (categorías `OFI/UP01/PR/…`); su nota llega al libro de
  calificaciones solo a través de Aules (las prácticas on-page no envían nota).
- Los enlaces externos a Aules se ponen con `target="_blank"` y `rel="noopener"`.
- El `.page-nav` solo se mantiene en el HTML final; el Markdown fuente no incluye
  estos enlaces.