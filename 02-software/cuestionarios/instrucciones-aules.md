# Guía de importación y configuración de los cuestionarios en Aules

**Bloque 02 · Elementos de software · UP01 Mantenimiento básico de equipos**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Cuestionario que alimenta |
|---|---|---|
| `gift-01-que-es-software.gift` | 15 preguntas (apartado 1) | SW-01 ¿Qué es el software? |
| `gift-02-tipos-de-software.gift` | 28 preguntas (apartado 2) | SW-02 Tipos de software |
| `gift-03-interaccion-software-hardware.gift` | 14 preguntas (apartado 3) | SW-03 Interacción entre software y hardware |
| `Cuestionario_1_1_Software.gift` | 45 preguntas de todo el bloque (banco amplio) | SW-11 Cuestionario teórico sobre el software |
| `gift-examen-final.gift` | 20 preguntas de todo el bloque | SW-EXAMEN Software |

Cada archivo empieza con la línea `$CATEGORY:` que sitúa las preguntas en la
categoría correspondiente del banco de preguntas (se crea automáticamente al
importar).

> **Cuestionario teórico del bloque:** el enlace de la web (portada, sidebar y
> «Siguiente» de la teoría) apunta a la actividad Quiz del **SW-11 «Cuestionario
> teórico sobre el software»**, alimentada por `Cuestionario_1_1_Software.gift`
> (categoría `OFI/UP01/SW/11-cuestionario-software`). Añade la actividad a Aules
> y usa el ID que aparezca en su URL (`mod/quiz/view.php?id=…`).

---

## 2 · Importar el banco de preguntas (una sola vez)

1. En el curso, entra en **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT**.
3. Haz clic en el archivo correspondiente (o súbelos en un lote con extensión `.gift`).
4. Pulsa **Importar** y después **Continuar**.
5. Al terminar, en **Banco de preguntas → Categorías** aparecerán las categorías:
   `OFI/UP01/SW/01-que-es-software`, `…/02-tipos-de-software`,
   `…/03-interaccion-software-hardware`, `…/11-cuestionario-software` y
   `…/09-examen-final`.

> No hace falta importar de nuevo cuando ya están en el banco: los cuestionarios
> que se crean a continuación extraen preguntas aleatorias de esas categorías.

---

## 3 · Configuración por defecto (aplicar a todos los cuestionarios SW-01…SW-03 y examen)

En cada actividad **Cuestionario**, ve a **Administración → Ajustes del cuestionario**:

| Ajuste | Valor |
|---|---|
| **Número de calificaciones** (intentos permitidos) | Múltiples intentos. Para «ilimitados» selecciona *Intentos permitidos → Ilimitados*; si tu Aules limita el máximo (p. ej. 10), déjalo en ese máximo. |
| **Método de calificación** | **Calificación más alta** (mejor nota). |
| **Aleatorizar dentro de las preguntas** (barajar respuestas) | **Sí** para que cada vez se muestren opciones en distinto orden. |
| **Modo de pregunta** | Pregunta aleatoria: **Añadir una pregunta aleatoria...** elige N preguntas de la categoría (ya importadas). |
| **Aplicar abandonos** / penalizaciones por intento | No (para no penalizar la repetición). |
| **Ventana de tiempo** | Período abierto + **fecha de cierre** (ver abajo). |
| **Modo de revisión** | Permite ver el resultado tras cada intento (configuración recomendada: durante el intento = no; después del intento = sí). |

### Número de preguntas por configuración (caso por defecto)
- **SW-01…SW-03 (práctica por apartado):** 5–8 preguntas aleatorias por intento.
- **SW-11 (Cuestionario teórico sobre el software):** 15–20 preguntas aleatorias por
  intento desde la categoría `OFI/UP01/SW/11-cuestionario-software` (45 preguntas
  de todo el bloque).
- **SW-EXAMEN Software:** 10 preguntas aleatorias (o las que quieras) de la categoría
  `OFI/UP01/SW/09-examen-final`.

Las preguntas se reparten de forma **aleatoria**: cada alumno (y cada intento)
recibe un conjunto distinto de la batería.

---

## 4 · Cómo cerrar el plazo de finalización

Para que solo cuente la **mejor nota hasta una fecha indicada**, crea una ventana
de tiempo planificada:

1. En **Ajustes del cuestionario → Tiempo → Ventana de tiempo**, marca la opción
   **Activar**.
2. Define **Permitir intentos desde** (fecha/hora de apertura) y
   **Permitir enviar hasta** (fecha/hora de cierre, por ejemplo el domingo
   anterior a la evaluación o la fecha acordada).
3. Guarda los cambios.

Con esto:
- El alumnado puede intentarlo **tantas veces como quiera** hasta el cierre.
- El libro de calificaciones **solo refleja la mejor nota** (cada intento se
  guarda en el historial, pero la calificación definitiva es la mayor).
- **Al llegar la fecha de cierre, el intento queda bloqueado automáticamente**:
  nadie puede enviar más respuestas y la nota ya registrada se mantiene en el
  libro de calificaciones.

### Notas importantes
- Moodle/Aules usa la **zona horaria configurada en el curso**; comprueba que la fecha y la hora del cierre corresponden a la que quieres publicar.
- Si un alumno ha dejado un intento *en curso* («Guardar sin enviar») antes del cierre, podrá enviarlo hasta la hora límite del propio intento (menos de 24 h); si quieres evitar esto, configura también **Tiempo → Límite de tiempo** para cada intento (p. ej. 30 min).
- Para prorrogar el plazo: cambia la **Permitir enviar hasta** a la nueva fecha. El alumnado podrá volver a intentarlo y seguirá contando la mejor nota.
- Para saber quién ha entregado: **Resumen del cuestionario** muestra quién lo ha completado y las notas parciales.

---

## 5 · Recordatorio en el HTML

En cada apartado del bloque 02 la página web muestra un aviso
«🧩 Cuestionario en Aules» con el nombre de la actividad. No se incrustan
preguntas en el HTML: todo el banco vive en Moodle.

---

## 6 · Estructura de calificación sugerida en el libro de calificaciones

| Ídem | Actividad | Ponderación propuesta |
|---|---|---|
| 1 | SW-01 ¿Qué es el software? | Práctica (cuenta para la nota final si se desea) |
| 2 | SW-02 Tipos de software | Práctica |
| 3 | SW-03 Interacción entre software y hardware | Práctica |
| 4 | SW-11 Cuestionario teórico sobre el software | Principal (teoría del bloque) |
| 5 | SW-EXAMEN Software | Principal de la unidad |

> Si solo quieres que el examen final califique, puedes crear las actividades
> SW-01…SW-03 con **calificación excluida del total** o «sin calificación»
> como práctica. Configúralo en el ítem del libro de calificaciones.