# Guía de importación y configuración · Bloque práctico · Redes locales (LAN)

**PR-01.10 · PR-01.11 · PR-01.12**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias · UP01 Mantenimiento básico de equipos

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Actividad en Aules |
|---|---|---|
| `gift-practico-0110-conceptos-y-componentes.gift` | 20 preguntas (14 opción + 6 V/F) | **PR-01.10 Conceptos y componentes de una red local** |
| `gift-practico-0111-topologias-medios-protocolos.gift` | 21 preguntas (16 opción + 5 V/F) | **PR-01.11 Topologías, medios y protocolos de red** |
| `gift-practico-0112-configuracion-puertos-red.gift` | 18 preguntas (12 opción + 6 V/F) | **PR-01.12 Configuración y puertos de red (IP/conectividad)** |

Cada archivo empieza con `$CATEGORY: OFI/UP01/PR/01-10-conceptos-y-componentes`
(análogas para 01-11 y 01-12), de modo que Moodle crea la categoría al importar.

> **IDs en uso:** los enlaces del sitio web ya apuntan a las actividades reales de
> Aules (`id=11522977` PR-01.10, `id=11522984` PR-01.11, `id=11522994` PR-01.12;
> cuestionario teórico `id=11522903`) en `practico-redes-lan/index.html`
> (+ `index.md`), `04-redes-lan/index.html` (+ `index.md`), portada `index.html`,
> sidebars y AGENTS.md. Si los IDs cambiaran, actualizarlos en esos archivos.

**IMPORTANTE — numeración:** la numeración `PR-01.10…PR-01.12` continúa la
numeración que la profesora creó en Aules para el bloque práctico (los de hardware
son `PR-01.1…PR-01.3`, los de software `PR-01.4…PR-01.6` y los de ciberseguridad
`PR-01.7…PR-01.9`). Confirmar con la docente la numeración real antes de crear los
quizzes si ha cambiado.

---

## 2 · Importar el banco de preguntas (una sola vez)

1. **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT** y sube el archivo (o los tres en un lote `.gift`).
3. **Importar → Continuar**. En **Categorías** aparecerán
   `OFI/UP01/PR/01-10-conceptos-y-componentes`, `01-11-topologias-medios-protocolos`
   y `01-12-configuracion-puertos-red`.

---

## 3 · Configuración por defecto (aplicar a los tres quizzes PR-01.10…12)

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
enlace al siguiente elemento (PR-01.10 → PR-01.11 → PR-01.12) para recorrer el
apartado desde la web. No se incrustan preguntas en el HTML.

---

## 6 · Orden de las actividades y enlace «Siguiente»

Coloca en Aules, en este orden (misma sección):

| # | Actividad | Tipo |
|---|---|---|
| 1 | Teoría de redes locales (LAN) → `https://noemi0211.github.io/up01-mantenimiento-equipos/04-redes-lan/` | URL |
| 2 | Cuestionario teórico sobre las redes locales | Cuestionario |
| 3 | Prácticas de redes locales → `https://noemi0211.github.io/up01-mantenimiento-equipos/practico-redes-lan/` | URL |
| 4 | PR-01.10 Conceptos y componentes de una red local | Cuestionario |
| 5 | PR-01.11 Topologías, medios y protocolos de red | Cuestionario |
| 6 | PR-01.12 Configuración y puertos de red (IP/conectividad) | Cuestionario |

Activa en cada quiz **Formato → Navegación → Mostrar enlace a la siguiente
actividad** (SÍ) para que «Siguiente» encadene el apartado.

---

## 7 · Calificación en el libro de calificaciones

PR-01.10, PR-01.11 y PR-01.12 figuran como **Práctica**. Su nota llega al libro de
calificaciones solo a través de Aules (las actividades de la página web no envían
nota). Si se desea, se pueden configurar con «calificación excluida del total» como
práctica en el ítem del libro.