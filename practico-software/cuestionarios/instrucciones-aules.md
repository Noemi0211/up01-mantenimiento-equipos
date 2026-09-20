# Guía de importación y configuración de los cuestionarios en Aules

**Bloque práctico · Software y configuración básica de un puesto de trabajo administrativo sanitario · UP01**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias

---

## 0 · Idea general del bloque práctico

El alumnado ya ha estudiado la teoría del software (Bloque 02) y ha hecho el
cuestionario teórico. En este bloque trabaja **de forma práctica** (página web con
actividades autocorregibles: baraja de identificación de software y hardware,
emparejados, escenarios del sistema operativo, checklist, ordenación e inventario
de software). Esas actividades **no envían nota a Aules**: sirven de entrenamiento
con corrección inmediata.

La **nota** se registra con **tres cuestionarios** que se extraen de los bancos de
esta carpeta. Configuración común: preguntas aleatorias, intentos múltiples y
**calificación más alta** en el libro de calificaciones.

> Fechas de referencia de los cuestionarios en el AULA (apartado Aules de este
> bloque): PR-01.4, PR-01.5 y PR-01.6.

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Cuestionario que alimenta |
|---|---|---|
| `gift-practico-014-software-hardware.gift` | 25 preguntas (identificar software y distinguirlo del hardware) | PR-01.4 Identificación de software y hardware |
| `gift-practico-015-sistema-operativo.gift` | 25 preguntas (sistema operativo, drivers y sus funciones) | PR-01.5 El sistema operativo y sus funciones |
| `gift-practico-016-configuracion.gift` | 25 preguntas (personalización y configuración básica) | PR-01.6 Personalización y configuración del sistema |

Cada archivo empieza con la línea `$CATEGORY:` que sitúa las preguntas en la
categoría correspondiente del banco de preguntas (se crea automáticamente al
importar):

- `OFI/UP01/PR/01-4-software-hardware`
- `OFI/UP01/PR/01-5-sistema-operativo`
- `OFI/UP01/PR/01-6-configuracion`

---

## 2 · Importar el banco de preguntas (una sola vez)

1. En el curso, entra en **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT**.
3. Selecciona el archivo correspondiente (o súbelos en lote con extensión `.gift`).
4. Pulsa **Importar** y después **Continuar**.
5. Al terminar, en **Banco de preguntas → Categorías** aparecerán las categorías
   `OFI/UP01/PR/01-4-software-hardware`, `…/01-5-sistema-operativo` y `…/01-6-configuracion`.

> No hace falta importar de nuevo cuando ya están en el banco: los cuestionarios
> que se crean a continuación extraen preguntas aleatorias de esas categorías.

---

## 3 · Configuración por defecto (aplicar a PR-01.4, PR-01.5 y PR-01.6)

En cada actividad **Cuestionario**, ve a **Administración → Ajustes del cuestionario**:

| Ajuste | Valor |
|---|---|
| **Número de calificaciones** (intentos permitidos) | Múltiples intentos. Para «ilimitados» selecciona *Intentos permitidos → Ilimitados*; si tu Aules limita el máximo, déjalo en ese máximo. |
| **Método de calificación** | **Calificación más alta** (mejor nota). |
| **Aleatorizar dentro de las preguntas** (barajar respuestas) | **Sí**. |
| **Modo de pregunta** | Pregunta aleatoria: **Añadir una pregunta aleatoria...** **8–10 preguntas** de la categoría correspondiente por intento (los bancos tienen 25). |
| **Aplicar abandonos** / penalizaciones por intento | No (para no penalizar la repetición). |
| **Ventana de tiempo** | Período abierto + **fecha de cierre** del bloque práctico (ver apartado 4). |
| **Modo de revisión** | Tras cada intento: **Sí** (el alumnado puede ver aciertos y fallos para seguir practicando). |

> Al ser preguntas aleatorias, cada intento reparte un conjunto distinto de la
> batería de 25 de cada categoría.

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
> contando la mejor nota. Recuerda avisar al alumnado de que la nota llega al
> libro de calificaciones solo a través de Aules.

---

## 5 · Relación de los cuestionarios con los PDF de soluciones

En la página práctica, cuando el alumnado completa correctamente las actividades
se desbloquean **soluciones descargables en PDF** para estudiar:

- **Actividad 1 (PR-01.4):** al completar el «Ponte a prueba» perfecto se
  desbloquea la tabla de respuestas resueltas (software, hardware, tipos, función
  y tarea sanitaria).
- **Actividad 2 (PR-01.5):** al completar los escenarios y el emparejado se
  desbloquean las soluciones del sistema operativo y sus funciones.
- **Actividad 3 (PR-01.6):** al completar checklist y orden se desbloquean las
  soluciones de personalización y configuración.

Es un refuerzo de estudio independiente de los cuestionarios de Aules; no
sustituye la realización de PR-01.4, PR-01.5 y PR-01.6.

---

## 6 · Recordatorio en el HTML

Cada apartado del bloque práctico muestra el aviso «🧩 Cuestionario en Aules» con
el nombre de la actividad (PR-01.4, PR-01.5, PR-01.6). No se incrustan preguntas en el
HTML: el banco vive solo en Moodle.

---

## 7 · Estructura de calificación sugerida en el libro de calificaciones

| Ídem | Actividad | Ponderación propuesta |
|---|---|---|
| 1 | PR-01.4 Identificación de software y hardware | Práctica del bloque |
| 2 | PR-01.5 El sistema operativo y sus funciones | Práctica del bloque |
| 3 | PR-01.6 Personalización y configuración del sistema | Práctica del bloque |

> Si prefieres que el bloque práctico penalice (o no) en la nota, ajusta la
> ponderación del ítem en el **libro de calificaciones**. La configuración por
> defecto suma la **mejor de cada intento** (calificación más alta) como el resto
> de cuestionarios de la unidad.