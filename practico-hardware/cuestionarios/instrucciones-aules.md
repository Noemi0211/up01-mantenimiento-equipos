# Guía de importación y configuración de los cuestionarios en Aules

**Bloque práctico · Hardware básico de un puesto de trabajo administrativo sanitario · UP01**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias

---

## 0 · Idea general del bloque práctico

El alumnado ya ha estudiado la teoría del hardware y ha hecho el cuestionario sobre
el hardware. En este bloque trabaja **de forma práctica** (página web con
actividades autocorregibles: baraja de reconocimiento, emparejados, escenarios de
conexión, checklist, ordenación e inventario). Esas actividades **no envían nota a
Aules**: sirven de entrenamiento con corrección inmediata.

La **nota** se registra con **tres cuestionarios** que se extraen de los bancos de
esta carpeta. Configuración común: preguntas aleatorias, intentos múltiples y
**calificación más alta** en el libro de calificaciones.

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Cuestionario que alimenta |
|---|---|---|
| `gift-practico-011-reconocimiento.gift` | 10 preguntas (reconocimiento de equipos y periféricos) | PR-01.1 Reconocimiento de equipos y periféricos |
| `gift-practico-012-puertos-conexiones.gift` | 10 preguntas (puertos y conexiones) | PR-01.2 Puertos y conexiones |
| `gift-practico-013-verificacion-equipo.gift` | 10 preguntas (verificación e inventario) | PR-01.3 Verificación del equipo |

Cada archivo empieza con la línea `$CATEGORY:` que sitúa las preguntas en la
categoría correspondiente del banco de preguntas (se crea automáticamente al
importar):

- `OFI/UP01/PR/01-1-reconocimiento`
- `OFI/UP01/PR/01-2-puertos-conexiones`
- `OFI/UP01/PR/01-3-verificacion-equipo`

---

## 2 · Importar el banco de preguntas (una sola vez)

1. En el curso, entra en **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT**.
3. Selecciona el archivo correspondiente (o súbelos en lote con extensión `.gift`).
4. Pulsa **Importar** y después **Continuar**.
5. Al terminar, en **Banco de preguntas → Categorías** aparecerán las categorías
   `OFI/UP01/PR/01-1-reconocimiento`, `…/01-2-puertos-conexiones` y `…/01-3-verificacion-equipo`.

> No hace falta importar de nuevo cuando ya están en el banco: los cuestionarios
> que se crean a continuación extraen preguntas aleatorias de esas categorías.

---

## 3 · Configuración por defecto (aplicar a PR-01.1, PR-01.2 y PR-01.3)

En cada actividad **Cuestionario**, ve a **Administración → Ajustes del cuestionario**:

| Ajuste | Valor |
|---|---|
| **Número de calificaciones** (intentos permitidos) | Múltiples intentos. Para «ilimitados» selecciona *Intentos permitidos → Ilimitados*; si tu Aules limita el máximo, déjalo en ese máximo. |
| **Método de calificación** | **Calificación más alta** (mejor nota). |
| **Aleatorizar dentro de las preguntas** (barajar respuestas) | **Sí**. |
| **Modo de pregunta** | Pregunta aleatoria: **Añadir una pregunta aleatoria...** **5–6 preguntas** de la categoría correspondiente por intento (los bancos tienen 10). |
| **Aplicar abandonos** / penalizaciones por intento | No (para no penalizar la repetición). |
| **Ventana de tiempo** | Período abierto + **fecha de cierre** del bloque práctico (ver apartado 4). |
| **Modo de revisión** | Tras cada intento: **Sí** (el alumnado puede ver aciertos y fallos para seguir practicando). |

> Al ser preguntas aleatorias, cada intento reparte un conjunto distinto de la
> batería de 10 de cada categoría.

---

## 4 · Cómo cerrar el plazo de finalización

Para que solo cuente la **mejor nota hasta una fecha indicada**, configura la
ventana de tiempo:

1. En **Ajustes del cuestionario → Tiempo → Ventana de tiempo**, marca **Activar**.
2. Define **Permitir intentos desde** (fecha/hora de apertura) y
   **Permitir enviar hasta** (fecha/hora de cierre del bloque práctico).
3. Guarda los cambios.

Con esto, el alumnado puede intentarlo **tantas veces como quiera** hasta el
cierre, el libro de calificaciones **refleja la mejor nota** y, al llegar la
fecha, el intento **queda bloqueado automáticamente**.

> Comprueba la zona horaria del curso. Para evitar «Guardar sin enviar» a la
> hora del cierre, configura también **Tiempo → Límite de tiempo** por intento
> (p. ej. 30 min). Para prorrogar, cambia **Permitir enviar hasta**; seguirá
> contando la mejor nota.

---

## 5 · Relación del cuestionario PR-01.1 con el PDF de soluciones

En la actividad 1.3 de la página práctica («Ponte a prueba»), cuando el alumnado
completa el test **perfecto**, se desbloquea una **tabla de respuestas resueltas**
(todas las fichas de reconocimiento con nombre, tipo, función y tarea sanitaria)
descargable en **PDF** para estudiar. Es un refuerzo de estudio independiente del
cuestionario de Aules; no sustituye la realización de PR-01.1.

---

## 6 · Recordatorio en el HTML

Cada apartado del bloque práctico muestra el aviso «🧩 Cuestionario en Aules» con
el nombre de la actividad (PR-01.1, PR-01.2, PR-01.3). No se incrustan preguntas en el
HTML: el banco vive solo en Moodle.

---

## 7 · Estructura de calificación sugerida en el libro de calificaciones

| Ídem | Actividad | Ponderación propuesta |
|---|---|---|
| 1 | PR-01.1 Reconocimiento de equipos y periféricos | Práctica del bloque (misma consideración que HW-01…HW-08) |
| 2 | PR-01.2 Puertos y conexiones | Práctica del bloque |
| 3 | PR-01.3 Verificación del equipo | Práctica del bloque |

> Si prefieres que el bloque práctico penalice (o no) en la nota, ajusta la
> ponderación del ítem en el **libro de calificaciones**. La configuración por
> defecto suma la **no mejor de cada intento** (calificación más alta) como el
> resto de cuestionarios de la unidad.