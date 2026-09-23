# Guía de importación y configuración de los cuestionarios en Aules

**Bloque 04 · Redes locales (LAN) · UP01 Mantenimiento básico de equipos**
Curso: Ofimática · CFGS Documentación y Administración Sanitarias

---

## 1 · Qué incluye esta carpeta

| Archivo | Contenido | Cuestionario que alimenta |
|---|---|---|
| `Cuestionario_1_4_Redes_Locales_LAN.gift` | 44 preguntas de todo el bloque (35 opción + 9 V/F) | **Cuestionario teórico sobre las redes locales** (RL-11) |

El archivo empieza con la línea `$CATEGORY: OFI/UP01/RL/11-cuestionario-redes-lan`,
que sitúa las preguntas en la categoría correspondiente del banco de preguntas (se
crea automáticamente al importar).

> **Cuestionario teórico del bloque:** el enlace de la web (portada, sidebar y
> «Siguiente» de la teoría) apunta a la actividad Quiz
> **«Cuestionario_1_4_Redes Locales (LAN)»** (ID `11522903`), alimentada por
> `Cuestionario_1_4_Redes_Locales_LAN.gift`. Si el ID cambiara, actualizar los
> enlaces en `04-redes-lan/index.html` (+ `index.md`), portada `index.html`,
> `practico-redes-lan/index.html` y AGENTS.md.

### Bancos del bloque práctico

Los quices prácticos (`PR-01.10…PR-01.12`) viven en
`practico-redes-lan/cuestionarios/` con su propia guía, categorías
`OFI/UP01/PR/01-10-…`, `01-11-…` y `01-12-…`.

---

## 2 · Importar el banco de preguntas (una sola vez)

1. En el curso, entra en **Administración del curso → Banco de preguntas → Importar**.
2. Elige el formato **GIFT**.
3. Sube `Cuestionario_1_4_Redes_Locales_LAN.gift`.
4. Pulsa **Importar** y después **Continuar**.
5. Al terminar, en **Banco de preguntas → Categorías** aparecerá la categoría
   `OFI/UP01/RL/11-cuestionario-redes-lan`.

> No hace falta importar de nuevo cuando ya está en el banco: el cuestionario que
> se crea a continuación extrae preguntas aleatorias de esa categoría.

---

## 3 · Configuración por defecto del cuestionario teórico (RL-11)

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
- **RL-11 (Cuestionario teórico sobre las redes locales):** 15–20 preguntas
  aleatorias por intento desde la categoría
  `OFI/UP01/RL/11-cuestionario-redes-lan` (44 preguntas de todo el bloque).

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
«Cuestionario final del bloque» al final enlaza `Cuestionario_1_4_Redes_Locales_LAN`.
En el **bloque práctico** (`practico-redes-lan/`) sí se inserta el aviso
«🧩 Cuestionario en Aules» en cada actividad, enlazando su quiz PR. No se incrustan
preguntas en el HTML: todo el banco vive en Moodle.

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
   | 1 | Teoría de redes locales (LAN) → `https://noemi0211.github.io/up01-mantenimiento-equipos/04-redes-lan/` | URL |
   | 2 | Cuestionario teórico sobre las redes locales (`Cuestionario_1_4_Redes_Locales_LAN`) | Cuestionario |
   | 3 | Prácticas de redes locales → `https://noemi0211.github.io/up01-mantenimiento-equipos/practico-redes-lan/` | URL |
   | 4 | PR-01.10 Conceptos y componentes de una red local | Cuestionario |
   | 5 | PR-01.11 Topologías, medios y protocolos de red | Cuestionario |
   | 6 | PR-01.12 Configuración y puertos de red (IP/conectividad) | Cuestionario |

> Si el «Siguiente» del cuestionario teórico lleva a unas **prácticas equivocadas**,
> revisa dos cosas: (1) que la actividad URL de **prácticas de redes locales** sea
> exactamente la inmediatamente siguiente al cuestionario en la sección; y (2) que
> la URL de esa actividad apunte a `practico-redes-lan/` (nunca a otro práctico).

### Cómo reordenar las actividades en Aules

1. Activa la **edición** del curso (conmutador «Activar edición», arriba a la derecha).
2. En el tema/sección donde están las actividades, usa el icono de **arrastrar**
   (cruz) de cada actividad para dejarlas en el orden de la tabla anterior:
   Teoría → Cuestionario teórico → Bloque práctico → PR-01.10 → PR-01.11 → PR-01.12.
3. **Guarda los cambios**.
4. En el cuestionario teórico, comprueba **Ajustes → Formato → Navegación →
   Mostrar enlace a la siguiente actividad** (SÍ) y guarda.
5. Comprueba el resultado en «Vista previa» o terminando un intento: el botón
   «Siguiente» debe abrir *Bloque práctico de redes locales*.

> Importante: todas las actividades del apartado deben vivir en **la misma
> sección/tema**; si el cuestionario está en una sección y las prácticas en otra,
> el botón «Siguiente» saltará fuera del apartado.

---

## 7 · Estructura de calificación sugerida en el libro de calificaciones

| Ídem | Actividad | Ponderación propuesta |
|---|---|---|
| 1 | RL-11 Cuestionario teórico sobre las redes locales | Principal (teoría del bloque) |
| 2 | PR-01.10 Conceptos y componentes de una red local | Práctica |
| 3 | PR-01.11 Topologías, medios y protocolos de red | Práctica |
| 4 | PR-01.12 Configuración y puertos de red (IP/conectividad) | Práctica |

> La nota de las prácticas (PR-01.10…12) llega al libro de calificaciones solo a
> través de Aules. Si se desea, se pueden configurar con «calificación excluida del
> total» como práctica en el ítem del libro.