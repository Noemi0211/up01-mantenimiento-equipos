# Guía de importación y configuración de los cuestionarios en Aules

**Bloque 03 · Ciberseguridad · UP01 Mantenimiento básico de equipos**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Cuestionario que alimenta |
|---|---|---|
| `gift-01-que-es-ciberseguridad.gift` | 12 preguntas (apartado 1) | CS-01 ¿Qué es la ciberseguridad? |
| `gift-02-malware.gift` | 20 preguntas (apartado 2) | CS-02 Malware |
| `gift-03-ingenieria-social.gift` | 20 preguntas (apartado 3) | CS-03 Ingeniería social |
| `gift-04-herramientas-proteccion.gift` | 18 preguntas (apartado 4) | CS-04 Herramientas de protección |
| `gift-05-buenas-practicas.gift` | 19 preguntas (apartado 5) | CS-05 Buenas prácticas |
| `Cuestionario_1_3_Ciberseguridad.gift` | 42 preguntas de todo el bloque (banco amplio) | CS-11 Cuestionario teórico sobre la ciberseguridad |
| `gift-examen-final.gift` | 20 preguntas de todo el bloque | CS-EXAMEN Ciberseguridad |

Cada archivo empieza con la línea `$CATEGORY:` que sitúa las preguntas en la
categoría correspondiente del banco de preguntas (se crea automáticamente al
importar).

> **Cuestionario teórico del bloque:** el enlace de la web (portada, sidebar y
> «Siguiente» de la teoría) apunta a la actividad Quiz **CS-11 «Cuestionario
> teórico sobre la ciberseguridad»** (ID `11431133`), alimentada por
> `Cuestionario_1_3_Ciberseguridad.gift` (categoría
> `OFI/UP01/CS/11-cuestionario-ciberseguridad`). Si el ID cambiara, actualizar los
> enlaces en `03-ciberseguridad/index.html` (+ `index.md`), portada `index.html`,
> `practico-ciberseguridad/index.html` y AGENTS.md.

---

## 2 · Importar el banco de preguntas (una sola vez)

1. En el curso, entra en **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT**.
3. Haz clic en el archivo correspondiente (o súbelos en un lote con extensión `.gift`).
4. Pulsa **Importar** y después **Continuar**.
5. Al terminar, en **Banco de preguntas → Categorías** aparecerán las categorías:
   `OFI/UP01/CS/01-que-es-ciberseguridad`, `…/02-malware`,
   `…/03-ingenieria-social`, `…/04-herramientas-proteccion`,
   `…/05-buenas-practicas`, `…/11-cuestionario-ciberseguridad` y
   `…/09-examen-final`.

> No hace falta importar de nuevo cuando ya están en el banco: los cuestionarios
> que se crean a continuación extraen preguntas aleatorias de esas categorías.

---

## 3 · Configuración por defecto (aplicar a todos los cuestionarios CS-01…CS-05 y examen)

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
- **CS-01…CS-05 (práctica por apartado):** 5–8 preguntas aleatorias por intento.
- **CS-11 (Cuestionario teórico sobre la ciberseguridad):** 15–20 preguntas
  aleatorias por intento desde la categoría
  `OFI/UP01/CS/11-cuestionario-ciberseguridad` (42 preguntas de todo el bloque).
- **CS-EXAMEN Ciberseguridad:** 10 preguntas aleatorias (o las que quieras) de la
  categoría `OFI/UP01/CS/09-examen-final`.

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
«Cuestionario final del bloque» al final enlaza `Cuestionario_1_3_Ciberseguridad`.
En el **bloque práctico** (`practico-ciberseguridad/`) sí se inserta el aviso
«🧩 Cuestionario en Aules» en cada actividad, enlazando su quiz PR. No se
incrustan preguntas en el HTML: todo el banco vive en Moodle.

---

## 6 · Orden de las actividades y enlace «Siguiente» en Aules

El recorrido del apartado (teoría → cuestionario → prácticas) lo encadena **Aules**:
el sitio web solo controla los «Anterior/Siguiente» internos de las páginas. El
botón **«Siguiente»** que aparece tras terminar un cuestionario pertenece a la
**navegación por actividades** de Moodle:

1. En **Ajustes del cuestionario → Formato → Navegación**, marca **Mostrar enlace
   a la siguiente actividad** (botón flotante para saltar a la actividad siguiente).
2. Coloca las actividades en este orden dentro de la sección del curso:

   | # | Actividad | Tipo |
   |---|---|---|
   | 1 | Teoría de ciberseguridad → `https://noemi0211.github.io/up01-mantenimiento-equipos/03-ciberseguridad/` | URL |
   | 2 | Cuestionario teórico sobre la ciberseguridad (`Cuestionario_1_3_Ciberseguridad`) | Cuestionario |
   | 3 | Prácticas de ciberseguridad → `https://noemi0211.github.io/up01-mantenimiento-equipos/practico-ciberseguridad/` | URL |
   | 4 | PR-01.7 Malware y amenazas | Cuestionario |
   | 5 | PR-01.8 Ingeniería social y protección de la información | Cuestionario |
   | 6 | PR-01.9 Herramientas y buenas prácticas de seguridad | Cuestionario |

> Si el «Siguiente» del cuestionario teórico lleva a unas **prácticas equivocadas**
> (p. ej. a las de software), revisa dos cosas: (1) que la actividad URL de
> **prácticas de ciberseguridad** sea exactamente la inmediatamente siguiente al
> cuestionario en la sección; y (2) que la URL de esa actividad apunte a
> `practico-ciberseguridad/` (nunca a `practico-hardware/` ni a `practico-software/`).

### Cómo reordenar las actividades en Aules

1. Activa la **edición** del curso (conmutador «Activar edición», arriba a la
   derecha).
2. En el tema/sección donde están las actividades, usa el icono de **arrastrar**
   (cruz) de cada actividad para dejarlas en el orden de la tabla anterior:
   Teoría → Cuestionario teórico → Bloque práctico → PR-01.7 → PR-01.8 → PR-01.9.
3. **Guarda los cambios**.
4. En el cuestionario teórico, comprueba **Ajustes → Formato → Navegación →
   Mostrar enlace a la siguiente actividad** (SÍ) y guarda.
5. Comprueba el resultado en «Vista previa» o terminando un intento: el botón
   «Siguiente» debe abrir *Bloque práctico ciberseguridad*.

> Importante: todas las actividades del apartado deben vivir en **la misma
> sección/tema**; si el cuestionario está en una sección y las prácticas en otra,
> el botón «Siguiente» saltará fuera del apartado.

---

## 7 · Estructura de calificación sugerida en el libro de calificaciones

| Ídem | Actividad | Ponderación propuesta |
|---|---|---|
| 1 | CS-01 ¿Qué es la ciberseguridad? | Práctica (cuenta para la nota final si se desea) |
| 2 | CS-02 Malware | Práctica |
| 3 | CS-03 Ingeniería social | Práctica |
| 4 | CS-04 Herramientas de protección | Práctica |
| 5 | CS-05 Buenas prácticas | Práctica |
| 6 | CS-11 Cuestionario teórico sobre la ciberseguridad | Principal (teoría del bloque) |
| 7 | CS-EXAMEN Ciberseguridad | Principal de la unidad |

> Si solo quieres que el examen final califique, puedes crear las actividades
> CS-01…CS-05 con **calificación excluida del total** o «sin calificación»
> como práctica. Configúralo en el ítem del libro de calificaciones.