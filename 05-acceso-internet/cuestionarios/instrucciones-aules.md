# Guía de importación y configuración de los cuestionarios en Aules

**Bloque 05 · Acceso a Internet · UP01 Mantenimiento básico de equipos**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Cuestionario que alimenta |
|---|---|---|
| `Cuestionario_1_5_Acceso_Internet.gift` | 24 preguntas de todo el bloque (15 opción + 9 V/F) | **Cuestionario teórico sobre el acceso a Internet** (INT-11) |

El archivo empieza con la línea `$CATEGORY: OFI/UP01/INT/11-cuestionario-acceso-internet`,
que sitúa las preguntas en la categoría correspondiente del banco de preguntas (se
crea automáticamente al importar).

> **Cuestionario teórico del bloque (INT-11):** está publicado en Aules como
> actividad Quiz **«Cuestionario_1_5_Acceso_Internet»**, con ID `11565413`:
> `https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11565413`. Los enlaces de la
> web están actualizados en las páginas del bloque, la portada, los sidebars y
> la navegación `.page-nav`. La guía del bloque práctico está en
> `practico-acceso-internet/cuestionarios/instrucciones-aules.md`.

### Bancos del bloque práctico

El quiz práctico **PR-01.13 · Acceso a Internet** vive en
`practico-acceso-internet/cuestionarios/` con su propia guía (categoría
`OFI/UP01/PR/01-13-…`). Este bloque tiene **una sola actividad práctica** y, por
tanto, **un solo quiz práctico** (decisión docente, 23-09-2026).

---

## 2 · Importar el banco de preguntas (una sola vez)

1. En el curso, entra en **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT**.
3. Sube `Cuestionario_1_5_Acceso_Internet.gift`.
4. Pulsa **Importar** y después **Continuar**.
5. Al terminar, en **Banco de preguntas → Categorías** aparecerá la categoría
   `OFI/UP01/INT/11-cuestionario-acceso-internet`.

> No hace falta importar de nuevo cuando ya está en el banco: el cuestionario que
> se crea a continuación extrae preguntas aleatorias de esa categoría.

---

## 3 · Configuración por defecto del cuestionario teórico (INT-11)

En la actividad **Cuestionario**, ve a **Administración → Ajustes del cuestionario**:

| Ajuste | Valor |
|---|---|
| **Número de calificaciones** (intentos permitidos) | Múltiples intentos. Para «ilimitados» selecciona *Intentos permitidos → Ilimitados*; si tu Aules limita el máximo (p. ej. 10), déjalo en ese máximo. |
| **Método de calificación** | **Calificación más alta** (mejor nota). |
| **Aleatorizar dentro de las preguntas** (barajar respuestas) | **Sí** para que cada vez se muestren opciones en distinto orden. |
| **Modo de pregunta** | Pregunta aleatoria: **Añadir una pregunta aleatoria...** elige N preguntas de la categoría. |
| **Aplicar abandonos** / penalizaciones por intento | No (para no penalizar la repetición). |
| **Ventana de tiempo** | Período abierto + **fecha de cierre** (ver abajo). |
| **Modo de revisión** | Permite ver el resultado tras cada intento (configuración recomendada: durante el intento = no; después del intento = sí). |

### Número de preguntas por configuración (caso por defecto)
- **INT-11 (Cuestionario teórico sobre el acceso a Internet):** 12–16 preguntas
  aleatorias por intento desde la categoría
  `OFI/UP01/INT/11-cuestionario-acceso-internet` (24 preguntas de todo el bloque).

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

En el bloque teórico **no** se añade aviso de cuestionario por apartado; solo el
«Cuestionario final del bloque» al final enlaza `Cuestionario_1_5_Acceso_Internet`.
En el **bloque práctico** (`practico-acceso-internet/`) sí se inserta el aviso
«🧩 Cuestionario en Aules» en cada actividad, enlazando su quiz PR. No se incrustan
preguntas en el HTML: todo el banco vive en Moodle.

---

## 6 · Orden de las actividades y enlace «Siguiente» en Aules

El recorrido del apartado (teoría → cuestionario → práctica) lo encadena **Aules**:
el sitio web solo controla los «Anterior/Siguiente» internos de las páginas. El
botón **«Siguiente»** que aparece tras terminar un cuestionario pertenece a la
**navegación por actividades** de Moodle:

1. En **Ajustes del cuestionario → Formato → Navegación**, marca **Mostrar enlace
   a la siguiente actividad** (botón flotante para saltar a la actividad siguiente).
2. Coloca las actividades en este orden dentro de la sección del curso:

   | # | Actividad | Tipo |
   |---|---|---|
   | 1 | Teoría de acceso a Internet → `https://noemi0211.github.io/up01-mantenimiento-equipos/05-acceso-internet/` | URL |
   | 2 | Cuestionario teórico sobre el acceso a Internet (`Cuestionario_1_5_Acceso_Internet`, ID `11565413`) | Cuestionario |
   | 3 | Prácticas de acceso a Internet → `https://noemi0211.github.io/up01-mantenimiento-equipos/practico-acceso-internet/` | URL |
   | 4 | PR-01.13 Acceso a Internet y conexión del puesto (ID `11565452`) | Cuestionario |

> Este bloque práctico tiene **una sola actividad** y, por tanto, **un solo quiz
> práctico (PR-01.13)**; no hay PR-01.14 ni PR-01.15 (decisión docente, 23-09-2026).

### Cómo reordenar las actividades en Aules

1. Activa la **edición** del curso (conmutador «Activar edición», arriba a la derecha).
2. En el tema/sección donde están las actividades, usa el icono de **arrastrar**
   (cruz) de cada actividad para dejarlas en el orden de la tabla anterior:
   Teoría → Cuestionario teórico → Bloque práctico → PR-01.13.
3. **Guarda los cambios**.
4. En el cuestionario teórico, comprueba **Ajustes → Formato → Navegación →
   Mostrar enlace a la siguiente actividad** (SÍ) y guarda.
5. Comprueba el resultado en «Vista previa» o terminando un intento: el botón
   «Siguiente» debe abrir *Bloque práctico de acceso a Internet*.

> Importante: todas las actividades del apartado deben vivir en **la misma
> sección/tema**; si el cuestionario está en una sección y las prácticas en otra,
> el botón «Siguiente» saltará fuera del apartado.

---

## 7 · Estructura de calificación sugerida en el libro de calificaciones

| Ídem | Actividad | Ponderación propuesta |
|---|---|---|
| 1 | INT-11 Cuestionario teórico sobre el acceso a Internet | Principal (teoría del bloque) |
| 2 | PR-01.13 Acceso a Internet y conexión del puesto | Práctica |

> La nota de la práctica (PR-01.13) llega al libro de calificaciones solo a
> través de Aules. Si se desea, se puede configurar con «calificación excluida del
> total» como práctica en el ítem del libro.