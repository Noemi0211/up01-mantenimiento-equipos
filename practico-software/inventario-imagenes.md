# INVENTARIO DE IMÁGENES · Bloque práctico

## Software y configuración básica de un puesto de trabajo administrativo sanitario

Unidad: **UP01 · Mantenimiento básico de equipos**
Documento de origen: `ApuntesOPI_UP_01_Mantenimiento 26-27.pdf`
Autora: Noemí Celaya Mingot

> El bloque práctico de software **no genera imágenes nuevas**: el software no
> dispone de archivos de imagen en `Documentos base/Imagenes` (los elementos de
> software se representan con tarjetas de **texto** en la baraja interactiva), y
> los componentes hardware que aparecen en la baraja reutilizan las imágenes ya
> integradas en el bloque 01 (`images/hardware/`, copiadas de
> `Documentos base/Imagenes` sin modificar los originales).
>
> Las imágenes se inyectan de forma dinámica en los widgets interactivos mediante
> `js/actividades.js`, por lo que no aparecen como etiquetas `<img>` estáticas
> en el HTML.
>
> Listado completo de rutas y textos alternativos: `inventario-imagenes/inventario-general.md`.

---

## 1 · Identificación de software y hardware

### Baraja de reconocimiento (16 tarjetas) y «Ponte a prueba»

La baraja mezcla **componentes hardware** (con imagen) y **programas de software**
(con frontal de texto, clase `.baraja__cara--txt`). Los componentes hardware cargan
su imagen desde `images/hardware/`:

- `monitor.png` — Monitor (Hardware). Alt: Monitor, periférico de salida que muestra visualmente la información del sistema.
- `teclado.png` — Teclado (Hardware). Alt: Teclado, periférico de entrada que permite introducir texto, números y comandos.
- `cpu.png` — Procesador (Hardware). Alt: Procesador o CPU, cerebro del ordenador.
- `memoria-ram.png` — Memoria RAM (Hardware). Alt: Módulos de memoria RAM sobre la placa base.
- `hdd.png` — Disco duro (Hardware). Alt: Disco duro HDD de almacenamiento magnético permanente.

Elementos de **software** (sin imagen, frontal de texto):
Windows (sistema operativo), Driver impresora, Driver escáner, Driver gráfica,
Word, Excel, Access, PowerPoint, Outlook, Historia clínica y Gestión de citas.

**Página:** `practico-software/index.html` · **Sección:** 1.1 Baraja y 1.3 Ponte a prueba.

---

## 2 · El sistema operativo y sus funciones

### Escenarios y emparejado

Estas actividades **no utilizan imágenes**: se plantean situaciones y emparejados
de texto. Las soluciones descargables (PDF) no incluyen imágenes.

**Página:** `practico-software/index.html` · **Sección:** 2.1 Escenarios y 2.2 Emparejado de aplicaciones.

---

## 3 · Personalización y configuración del sistema

### Checklist, orden, inventario y soluciones

Actividades **basadas en texto** (checklist, orden de pasos e inventario de
software): no incluyen imágenes.

**Página:** `practico-software/index.html` · **Sección:** 3.1, 3.2 y 3.3.

---

## 4 · Tabla de respuestas resueltas (PDF descargable)

La tabla imprimible de la **Actividad 1** reutiliza las 5 imágenes de la baraja
(`monitor.png`, `teclado.png`, `cpu.png`, `memoria-ram.png`, `hdd.png`) en
miniatura, junto a los elementos de software con su nombre de texto. Se genera
dinámicamente en el panel «Tabla de respuestas resueltas» (apartado 1.3) mediante
`js/actividades.js`.