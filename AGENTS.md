# AGENTS.md — Proyecto UP01 · Mantenimiento básico de equipos

Guía de proceso para los agentes que trabajen en este proyecto por fases.

## 1 · Qué es este proyecto

Transformar el documento `ApuntesOPI_UP_01_Mantenimiento 26-27.pdf` en una colección de materiales didácticos web para alumnado de **CFGS Documentación y Administración Sanitarias** (módulo Ofimática).

Destino: **GitHub Pages** · acceso desde **Moodle/Aules** · mantenimiento desde **Markdown**.

> NO generar cuestionarios. Se incorporarán después desde Aules.

## 2 · Estado actual y fases

| Fase | Bloque | Estado |
|---|---|---|
| 1 | 00 · Introducción y elementos curriculares | ✅ COMPLETADA |
| 2 | 01 · Hardware | ⏳ PENDIENTE — la más extensa |
| 3 | 02 · Software | ⏳ PENDIENTE |
| 4 | 03 · Ciberseguridad | ⏳ PENDIENTE |
| 5 | 04 · Redes locales (LAN) | ⏳ PENDIENTE |
| 6 | 05 · Acceso a Internet | ⏳ PENDIENTE |

**Regla de fases:** se genera UN bloque por fase. Al terminar una fase, detener la generación y esperar instrucciones del usuario.

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
```

- `docs/` · `output/` · `images/` (raíz) quedan reservados para salidas de proceso.
- Bloques aún no generados: conservar `images/` vacía (scaffolding).

## 5 · Sistema de diseño (NO cambiar sin permiso)

- Paleta: `#1A1F2E` (tinta) · `#4ECCA3` (acento) · `#F7F4EF` (fondo) · `#FFFFFF` (tarjetas) · `#667085` (texto secundario).
- Tipografías (Google Fonts): **Syne** (títulos) · **DM Sans** (cuerpo).
- `css/estilos.css` — CSS único compartido. Prohibido duplicar estilos inline por página.
- Componentes disponibles: `.hero`, `.card-grid/.card`, `.callout` (+ modificadores `--key --health --example --summary --reflect`), `.table-wrap`, `.image-placeholder`, `.timeline`, `.steps/.step`, `.ce-list`, `.toc`, `.page-nav`.
- `js/navegacion.js` — menú móvil, scroll-spy, TOC automático, volver arriba.
- `templates/plantilla-base.html` — marcadores `[[TITULO_PAGINA]]`, `[[CONTENIDO]]`, `[[NAV_INTERNA]]`, `[[URL_RAIZ]]`.

## 6 · Estructura HTML por página

1. HEADER fijo (mismo en todas).
2. Sidebar fija: enlaces a los 6 bloques + sección «En esta página».
3. Contenido principal con `<section id="...">` únicas por página.
4. TOC automático: `<div class="toc" id="toc-automatico"></div>`.
5. `.page-nav` con Anterior/Siguiente.
6. FOOTER con el texto EXACTO:
   `Material Moodle bilingüe de Vibecoding · HTML generado desde Markdown · CC BY-SA 4.0`
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

- NO incrustar las imágenes del PDF automáticamente.
- Insertar marcadores:
  - En Markdown: `<!-- IMAGEN: nombre-imagen -->`
  - En HTML: `<div class="image-placeholder">Imagen recomendada: <strong>…</strong></div>`
- Todo imagen lleva **texto alternativo** (accessibilidad) definido en el inventario.
- Inventario global: `inventario-imagenes/inventario-general.md` (Nombre, Procedencia, Ubicación recomendada, Descripción, Texto alternativo). Hay bloques de inventario ya redactados para Hardware/Software/Ciberseguridad/Redes/Internet.
- Inventario propio: `<bloque>/inventario-imagenes.md`.
- Convención de nombres: `up01-bloque-seccion-nombre.png` (ej. `up01-hw-memoria-ram.png`).

## 9 · Flujo de trabajo por bloque (checklist)

1. **Extraer** el texto de las páginas del PDF correspondientes al bloque.
2. **Transformar** (no copiar literal): microcontenidos, estructura didáctica §7, ejemplos sanitarios.
3. **Redactar** `<bloque>/index.md`.
4. **Generar** `<bloque>/index.html` copiando la estructura de `00-introduccion-elementos-curriculares/index.html` (plantilla ya aplicada), adaptando id, nav y contenido.
5. **Actualizar** `inventario-imagenes.md` del bloque y marcar marcadores de imagen si procede.
6. **Conectar**: si la carpeta del bloque ya existe y tocaba enlace en portada/sidebar, enlazarla; NO crear bloques futuros que queden colgados.
7. **Verificar**: rutas relativas, ids de sección únicos, cierre de etiquetas, footer exacto, responsive (viewport).
8. **Detener** y resumir; esperar instrucciones.

## 10 · Verificación antes de terminar

- `grep` de `href|src` para confirmar rutas `css/` y `js/` correctas.
- Página raíz y bloque 00 abren sin errores (servir carpeta o abrir local).
- Footer exacto en todas las páginas HTML.
- Ninguna imagen rota: solo marcadores `.image-placeholder`.

## 11 · Convenciones de idioma y estilo

- Redacción en español (castellano), tono didáctico directo.
- Emojis solo en los reactivos didácticos (💡🏥✍️📌❓) y jóvenes iconos de tarjetas; NO añadir emojis fuera de contexto.
- Código sin comentarios salvo los placeholders de imágenes y cabeceras de sección HTML.

## 12 · Recursos para continuar

- Plantilla reutilizable: `templates/plantilla-base.html`
- Ejemplo de bloque completo: `00-introduccion-elementos-curriculares/` (index.md + index.html + inventario)
- Inventario global: `inventario-imagenes/inventario-general.md`
- Estilos y JS compartidos: `css/estilos.css`, `js/navegacion.js`