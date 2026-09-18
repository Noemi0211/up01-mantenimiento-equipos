# AGENTS.md — Proyecto UP01 · Mantenimiento básico de equipos

Guía de proceso para los agentes que trabajen en este proyecto por fases.

## 1 · Qué es este proyecto

Transformar el documento `ApuntesOPI_UP_01_Mantenimiento 26-27.pdf` en una colección de materiales didácticos web para alumnado de **CFGS Documentación y Administración Sanitarias** (módulo Ofimática).

Destino: **GitHub Pages** · acceso desde **Moodle/Aules** · mantenimiento desde **Markdown**.

> Cuestionarios: se entregan como **bancos de preguntas en formato GIFT** (`<bloque>/cuestionarios/*.gift`) + guía de importación y configuración en Aules (instrucciones-aules.md). La configuración estándar es: intentos múltiples, **mejor nota** en el libro de calificaciones, preguntas aleatorias por apartado y fecha de cierre. NO se incrustan preguntas en el HTML; en su lugar se inserta un aviso «Cuestionario en Aules» al final de cada apartado.

## 2 · Estado actual y fases

| Fase | Bloque | Estado |
|---|---|---|
| 1 | 00 · Introducción y elementos curriculares | ✅ COMPLETADA (1 imagen general integrada) |
| 2 | 01 · Hardware | ✅ COMPLETADA (contenido + GIFT + guía Aules + 24 imágenes + navegación `.page-nav` conectada con Aules) |
| 2b | Bloque práctico: Hardware básico de un puesto de trabajo administrativo sanitario | ✅ COMPLETADA (`practico-hardware/` · actividades autocorregibles con `js/actividades.js` + 3 bancos GIFT `PR-01.1…PR-01.3` + soluciones PDF desbloqueables por apartado + tarjeta de acceso en 01-hardware) |
| 3 | 02 · Software | ⏳ SIGUIENTE — banco de inventario ya redactado en inventario-general.md |
| 4 | 03 · Ciberseguridad | ⏳ PENDIENTE |
| 5 | 04 · Redes locales (LAN) | ⏳ PENDIENTE |
| 6 | 05 · Acceso a Internet | ⏳ PENDIENTE |

**Regla de fases:** se genera UN bloque por fase. Al terminar una fase, detener la generación y esperar instrucciones del usuario.

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
├── practico-hardware/                        # Bloque práctico (fase 2b): index.md + index.html +
│     inventario-imagenes.md + cuestionarios/ (gift-practico-011..013 + instrucciones-aules.md)
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
- `js/navegacion.js` — menú móvil, scroll-spy, TOC automático, volver arriba y protección ligera contra copia (bloquea `copy`/`cut`/clic derecho/arrastre/selección; permite `input`/`textarea`).
- `js/actividades.js` — actividades autocorregibles del bloque práctico (inicializa por contenedor: `#baraja`, `#empareja-tareas`, `#empareja-puertos`, `#ponte-a-prueba`, `#soluciones-panel`, `#escenarios`, `#checkbox`, `#orden`, `#inventario`…). Solo se ejecuta en la página que los incluye.
- La tabla de respuestas resueltas se desbloquea con un test perfecto; el panel de soluciones de puertos (`#soluciones-puertos`) con escenarios y emparejado perfectos; el de verificación (`#soluciones-verificacion`) con checklist y orden perfectos. Cada desbloqueo se guarda en `localStorage` (`up01-practico-{rec,puertos,verificacion}-ok`).
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
3. **Redactar** `<bloque>/index.md` (incluyendo aviso «🧩 Cuestionario en Aules» al final de cada apartado cuando proceda).
4. **Generar** `<bloque>/index.html` copiando la estructura de `00-introduccion-elementos-curriculares/index.html` (plantilla ya aplicada), adaptando id, nav y contenido.
5. **Imágenes**: copiar a `images/<categoría>/` las imágenes necesarias de `Documentos base/Imagenes` y actualizar el `inventario-imagenes.md` del bloque (archivo, ruta, sección, `alt`, página).
6. **Cuestionarios**: si el bloque los requiere, crear `<bloque>/cuestionarios/` con los `.gift` por apartado + `.gift` de examen final + `instrucciones-aules.md` (ver §8bis).
7. **Conectar**: si la carpeta del bloque ya existe y tocaba enlace en portada/sidebar, enlazarla; NO crear bloques futuros que queden colgados.
8. **Verificar**: rutas relativas, ids de sección únicos, cierre de etiquetas, footer exacto, responsive (viewport).
9. **Detener** y resumir; esperar instrucciones.

## 9bis · Bancos de preguntas GIFT (para bloques con cuestionarios)

- Un `.gift` por apartado + uno de examen final. Cada archivo empieza con `$CATEGORY: OFI/UP01/<BLOQUE>/<NN>-<nombre>` (p. ej. `OFI/UP01/HW/01-que-es-hardware`), de modo que Moodle crea la categoría al importar.
- Sintaxis GIFT: `::Nombre::Pregunta{=Correcta~Incorrecta~Incorrecta}`; V/F: `{T}`/`{F}`; escapar `=`, `{`, `}`, `~`, `#` con `\` si aparecen dentro del enunciado.
- **IMPORTANTE — codificación:** los archivos `.gift` deben escribirse como UTF-8 sin BOM. No transformar con PowerShell `Get-Content`/`Set-Content` sin `-Encoding UTF8` (corrompe acentos). Tras editar, verificar que los acentos (áéíóú/¿¡) se leen correctamente.
- **IMPORTANTE — sintaxis:** una única respuesta correcta (`=`) por pregunta de opción única; el resto con `~`. Verificación rápida por archivo: nº de líneas `::…` = nº de líneas `=` = nº de líneas `}`. Si usas «respuesta múltiple», ponderar con `%50%` etc.
- El `instrucciones-aules.md` describe: importar GIFT, crear un quiz por apartado con **pregunta aleatoria** (extracción aleatoria de la categoría), intentos múltiples, **método de calificación «calificación más alta»**, cierre de plazo con «Ventana de tiempo» (Permitir enviar hasta) y nota en el libro de calificaciones.

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
- Emojis solo en los reactivos didácticos (💡🏥✍️📌❓) y jóvenes iconos de tarjetas; NO añadir emojis fuera de contexto.
- Código sin comentarios salvo las cabeceras de sección HTML (`<!-- ============ … ============ -->`).

## 12 · Recursos para continuar

- Plantilla reutilizable: `templates/plantilla-base.html`
- Ejemplo de bloque completo: `00-introduccion-elementos-curriculares/` (index.md + index.html + inventario)
- Ejemplo de bloque con cuestionarios: `01-hardware/` (index.md + index.html + inventario + `cuestionarios/`)
- Ejemplo de bloque práctico con actividades interactivas: `practico-hardware/` (index.md + index.html + inventario + `cuestionarios/` + widgets `js/actividades.js`)
- Inventario global: `inventario-imagenes/inventario-general.md`
- Estilos y JS compartidos: `css/estilos.css`, `js/navegacion.js`, `js/actividades.js`

## 13 · Estado de imágenes (revisión completa)

Revisión realizada sobre todo el proyecto: se eliminaron todos los marcadores de
posición (`image-placeholder`, `<!-- IMAGEN: … -->`, «Imagen recomendada») y se
sustituyeron por imágenes reales copiadas desde `Documentos base/Imagenes`.

### Imágenes localizadas (fuente `Documentos base/Imagenes`)

45 archivos procedentes de: `Componentes/` (12), `memorias/` (3),
`perifericos/` (12), `puertos/` (13), `Infografías/` (4) y raíz (1,
`Distribucion_componentes.png`).

### Carpetas utilizadas

```
images/
├── hardware/    (44 imágenes) — copiadas y renombradas (minúsculas + guiones)
├── software/    (vacía, .gitkeep)
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

### Imágenes pendientes

- Software, ciberseguridad, redes e Internet: sin archivos disponibles en la
  carpeta fuente; se integrarán cuando esos bloques se generen (categorías
  `software/`, `ciberseguridad/`, `redes/`, `internet/`).
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

### Estructura por apartados (teoría · cuestionario · prácticas)

Cada apartado de la unidad consta de **3 bloques enlazados de forma diferenciada**
en Aules, además del recorrido secuencial con «Siguiente» dentro del sitio:

| Apartado | Teoría (URL) | Cuestionario (Quiz) | Prácticas (URL) |
|---|---|---|---|
| 01 · Hardware | `11225710` → `index.html` + `01-hardware/index.html` | `11291377` | `11397605` → `practico-hardware/index.html` (+ quizzes PR-01.1…3) |

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
- Cuestionarios prácticos: `PR-01.1…PR-01.3` → `PR-02.1…PR-02.3` (categorías `OFI/UP01/PR/…`)

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
- **practico-hardware (Prácticas):** «Anterior» → Cuestionario teórico sobre el hardware (Aules) · «Siguiente» → PR-01.1 (Aules). Además, los avisos «Cuestionario en Aules» de las actividades 1, 2 y 3 llevan el enlace al cuestionario propio y un botón «Siguiente» hacia el siguiente cuestionario, y la tabla del apartado 4 · Autoevaluación enlaza los tres quizzes. Su sidebar incluye la sección «Apartado 01 · Hardware» (teoría, cuestionario teórico y PR-01.1…3).

### Regla para futuros bloques

> Seguir la **«Plantilla de apartado»** definida arriba (3 elementos: teoría · cuestionario · prácticas).

- Cada nuevo apartado (Software, Ciberseguridad, Redes LAN, Acceso a Internet)
  publicará **los 3 enlaces en Aules** (teoría → quiz → prácticas) con el mismo
  esquema que Hardware; su página de teoría añade los enlaces al quiz y a las
  prácticas correspondientes y la portada incorpora las 3 tarjetas del apartado.
- El «Siguiente» de cada página de teoría lleva a su cuestionario (o al siguiente
  elemento del curso si fuera procedente): el `page-nav` solo encadena dentro del
  apartado (teoría → quiz → prácticas), sin encadenar apartados entre sí.
- El bloque práctico enlaza como «Siguiente» el cuestionario PR-01.1.
- Las tres actividades del bloque práctico se califican con los cuestionarios
  «PR-01.1…PR-01.3» (categorías `OFI/UP01/PR/…`); su nota llega al libro de
  calificaciones solo a través de Aules (las prácticas on-page no envían nota).
- Los enlaces externos a Aules se ponen con `target="_blank"` y `rel="noopener"`.
- El `.page-nav` solo se mantiene en el HTML final; el Markdown fuente no incluye
  estos enlaces.