# Guía de importación y configuración · Bloque práctico · Ciberseguridad

**PR-01.7 · PR-01.8 · PR-01.9**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias · UP01 Mantenimiento básico de equipos

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Actividad en Aules |
|---|---|---|
| `gift-practico-017-malware-y-amenazas.gift` | 16 preguntas (12 opción + 4 V/F) | **PR-01.7 Malware y amenazas** |
| `gift-practico-018-ingenieria-social.gift` | 20 preguntas (16 opción + 4 V/F) | **PR-01.8 Ingeniería social y protección de la información** |
| `gift-practico-019-proteccion-y-buenas-practicas.gift` | 20 preguntas (15 opción + 5 V/F) | **PR-01.9 Herramientas y buenas prácticas de seguridad** |

Cada archivo empieza con `$CATEGORY: OFI/UP01/PR/01-7-malware-y-amenazas`
(análogas para 01-8 y 01-9), de modo que Moodle crea la categoría al importar.

> **IDs en uso:** los enlaces del sitio web ya apuntan a las actividades reales de
> Aules (`id=11431277` PR-01.7, `id=11431343` PR-01.8, `id=11431355` PR-01.9;
> cuestionario teórico `id=11431133`) en `practico-ciberseguridad/index.html`
> (+ `index.md`), portada `index.html`, sidebars y AGENTS.md. Si los IDs cambiaran,
> actualizarlos en esos archivos.

**IMPORTANTE — numeración:** la numeración `PR-01.7…PR-01.9` continúa la
numeración que la profesora creó en Aules para el bloque práctico (los de software
son `PR-01.4…PR-01.6`). Confirmar con la docente la numeración real antes de crear
los quizzes si ha cambiado.

---

## 2 · Importar el banco de preguntas (una sola vez)

1. **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT** y sube el archivo (o los tres en un lote `.gift`).
3. **Importar → Continuar**. En **Categorías** aparecerán
   `OFI/UP01/PR/01-7-malware-y-amenazas`, `01-8-ingenieria-social` y
   `01-9-proteccion-buenas-practicas`.

---

## 3 · Configuración por defecto (aplicar a los tres quizzes PR-01.7…9)

En cada **Ajustes del cuestionario**:

| Ajuste | Valor |
|---|---|
| **Número de calificaciones** (intentos) | Ilimitados (o el máximo que permita tu Aules). |
| **Método de calificación** | **Calificación más alta** (mejor nota). |
| **Aleatorizar dentro de las preguntas** | **Sí**. |
| **Modo de pregunta** | **Añadir una pregunta aleatoria…** (5–8 preguntas por intento de la categoría). |
| **Aplicar abandonos** / penalizaciones | No. |
| **Ventana de tiempo** | Período abierto + fecha de cierre (ver abajo). |
| **Modo de revisión** | Ver el resultado tras cada intento (durante el intento no). |

Las preguntas se reparten de forma **aleatoria**: cada alumno (y cada intento)
recibe un conjunto distinto.

---

## 4 · Cerrar el plazo y mejor nota

1. **Ajustes → Tiempo → Ventana de tiempo → Activar**.
2. **Permitir enviar hasta**: fecha de cierre (p. ej. el día acordado antes de la evaluación).
3. Al llegar el cierre, los intentos quedan **bloqueados** y el libro de calificaciones conserva la **mejor nota**.

> Para prorrogar, cambia «Permitir enviar hasta»; la mejor nota seguirá contando.
> Usa la zona horaria del curso.

---

## 5 · Recordatorio en el HTML

En cada actividad del bloque práctico la web muestra el aviso
«🧩 Cuestionario en Aules» enlazando **solo su propio** quiz PR, y además un
enlace al siguiente elemento (PR-01.7 → PR-01.8 → PR-01.9) para recorrer el
apartado desde la web. No se incrustan preguntas en el HTML.

---

## 6 · Orden de las actividades y enlace «Siguiente»

Coloca en Aules, en este orden (misma sección):

| # | Actividad | Tipo |
|---|---|---|
| 1 | Teoría de ciberseguridad → `https://noemi0211.github.io/up01-mantenimiento-equipos/03-ciberseguridad/` | URL |
| 2 | Cuestionario teórico sobre la ciberseguridad | Cuestionario |
| 3 | Prácticas de ciberseguridad → `https://noemi0211.github.io/up01-mantenimiento-equipos/practico-ciberseguridad/` | URL |
| 4 | PR-01.7 Malware y amenazas | Cuestionario |
| 5 | PR-01.8 Ingeniería social y protección de la información | Cuestionario |
| 6 | PR-01.9 Herramientas y buenas prácticas de seguridad | Cuestionario |

Activa en cada quiz **Formato → Navegación → Mostrar enlace a la siguiente
actividad** (SÍ) para que «Siguiente» encadene el apartado.

---

## 7 · Calificación en el libro de calificaciones

PR-01.7, PR-01.8 y PR-01.9 figuran como **Práctica**. Su nota llega al libro de
calificaciones solo a través de Aules (las actividades de la página web no envían
nota). Si se desea, se pueden configurar con «calificación excluida del total» como
práctica en el ítem del libro.