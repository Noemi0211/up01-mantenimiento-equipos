# Guía de importación y configuración de los cuestionarios en Aules

**Bloque 01 · Elementos de hardware · UP01 Mantenimiento básico de equipos**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Cuestionario que alimenta |
|---|---|---|
| `gift-01-que-es-hardware.gift` | 15 preguntas (apartado 1) | HW-01 ¿Qué es el hardware? |
| `gift-02-componentes-esenciales.gift` | 15 preguntas (apartado 2) | HW-02 Componentes esenciales |
| `gift-03-procesamiento.gift` | 15 preguntas (apartado 3) | HW-03 Hardware de procesamiento |
| `gift-04-almacenamiento.gift` | 15 preguntas (apartado 4) | HW-04 Hardware de almacenamiento |
| `gift-05-memorias.gift` | 18 preguntas (apartado 5) | HW-05 Tipos de memoria |
| `gift-06-refrigeracion.gift` | 12 preguntas (apartado 6) | HW-06 Sistemas de refrigeración |
| `gift-07-perifericos.gift` | 19 preguntas (apartado 7) | HW-07 Periféricos |
| `gift-08-puertos.gift` | 19 preguntas (apartado 8) | HW-08 Puertos de comunicación |
| `Cuestionario_1_1_Hardware.gift` | 60 preguntas de todo el bloque (banco amplio) | HW-11 Cuestionario 1.1 Hardware |
| `gift-examen-final.gift` | 22 preguntas de todo el bloque | HW-EXAMEN Hardware |

Cada archivo empieza con la línea `$CATEGORY:` que sitúa las preguntas en la
categoría correspondiente del banco de preguntas (se crea automáticamente al
importar).

---

## 2 · Importar el banco de preguntas (una sola vez)

1. En el curso, entra en **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT**.
3. Haz clic en el archivo correspondiente (o súbelos en un lote con extensión `.gift`).
4. Pulsa **Importar** y después **Continuar**.
5. Al terminar, en **Banco de preguntas → Categorías** aparecerán las categorías:
   `OFI/UP01/HW/01-que-es-hardware`, `…/02-componentes-esenciales`, etc.

> No hace falta importar de nuevo cuando ya están en el banco: los cuestionarios
> que se crean a continuación extraen preguntas aleatorias de esas categorías.

---

## 3 · Configuración por defecto (aplicar a todos los cuestionarios HW-01…HW-08 y al examen)

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
- **HW-01…HW-08 (práctica por apartado):** 5–8 preguntas aleatorias por intento.
- **HW-11 (Cuestionario teórico sobre el hardware):** 15–20 preguntas aleatorias por
  intento desde la categoría `OFI/UP01/HW/11-cuestionario-hardware` (60 preguntas
  de todo el bloque).
- **HW-EXAMEN Hardware:** 10 preguntas aleatorias (o las que quieras) de la
  categoría `OFI/UP01/HW/09-examen-final`.

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

En cada apartado del bloque 01 la página web muestra un aviso
«🧩 Cuestionario en Aules» con el nombre de la actividad. No se incrustan
preguntas en el HTML: todo el banco vive en Moodle.

---

## 6 · Estructura de calificación sugerida en el libro de calificaciones

| Ídem | Actividad | Ponderación propuesta |
|---|---|---|
| 1 | HW-01 ¿Qué es el hardware? | Práctica (cuenta para la nota final si se desea) |
| 2 | HW-02 Componentes esenciales | Práctica |
| 3 | HW-03 Hardware de procesamiento | Práctica |
| 4 | HW-04 Hardware de almacenamiento | Práctica |
| 5 | HW-05 Tipos de memoria | Práctica |
| 6 | HW-06 Sistemas de refrigeración | Práctica |
| 7 | HW-07 Periféricos | Práctica |
| 8 | HW-08 Puertos de comunicación | Práctica |
| 9 | HW-EXAMEN Hardware | Principal de la unidad |

> Si solo quieres que el examen final califique, puedes crear las actividades
> HW-01…HW-08 con **calificación excluida del total** o «sin calificación»
> como práctica. Configúralo en el ítem del libro de calificaciones.