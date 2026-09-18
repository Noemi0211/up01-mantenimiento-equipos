# INVENTARIO DE IMÁGENES · Bloque práctico

## Hardware básico de un puesto de trabajo administrativo sanitario

Unidad: **UP01 · Mantenimiento básico de equipos**
Documento de origen: `ApuntesOPI_UP_01_Mantenimiento 26-27.pdf`
Autora: Noemí Celaya Mingot

> El bloque práctico **no genera imágenes nuevas**: reutiliza las imágenes ya
> integradas en el bloque 01 (`images/hardware/`, copiadas de
> `Documentos base/Imagenes` sin modificar los originales). Las imágenes se
> inyectan de forma dinámica en los widgets interactivos mediante
> `js/actividades.js`, por lo que no aparecen como etiquetas `<img>` estáticas
> en el HTML.
>
> Listado completo de rutas y textos alternativos: `inventario-imagenes/inventario-general.md`.

---

## 1 · Reconocimiento de equipos y periféricos

### Baraja (16 tarjetas) y «Ponte a prueba»

Cargan cada dispositivo con su imagen desde `images/hardware/`:

- `teclado.png` — Teclado (entrada). Alt: Teclado, periférico de entrada que permite introducir texto, números y comandos.
- `raton.png` — Ratón (entrada). Alt: Ratón, dispositivo apuntador que permite interactuar con los elementos de la pantalla.
- `escaner.png` — Escáner (entrada). Alt: Escáner, dispositivo que digitaliza documentos físicos.
- `lector-tarjetas.png` — Lector de tarjetas sanitarias (entrada). Alt: Lector de tarjetas sanitarias que identifica de forma segura a pacientes y profesionales.
- `microfono.png` — Micrófono (entrada). Alt: Micrófono, periférico que captura sonido.
- `monitor.png` — Monitor (salida). Alt: Monitor, periférico de salida que muestra visualmente la información del sistema.
- `impresora.png` — Impresora (salida). Alt: Impresora que produce copias físicas de documentos, recetas, informes y etiquetas.
- `altavoces.png` — Altavoces (salida). Alt: Altavoces, periférico de salida que reproduce sonido.
- `proyector.png` — Proyector (salida). Alt: Proyector que muestra imágenes a gran tamaño.
- `pantalla-tactil.png` — Pantalla táctil (entrada/salida). Alt: Pantalla táctil usada en mostradores y terminales de autoservicio.
- `impresora-multifuncion.png` — Impresora multifunción (entrada/salida). Alt: Impresora multifunción que imprime, escanea y envía fax.
- `usb-disco-externo.png` — Almacenamiento portátil (entrada/salida). Alt: Memoria USB y disco duro externo para guardar y trasladar archivos.
- `hdd.png` — Disco duro (HDD) (almacenamiento interno). Alt: Disco duro HDD de almacenamiento magnético permanente.
- `ssd.png` — Unidad de estado sólido (SSD) (almacenamiento interno). Alt: Unidad SSD sin partes móviles de acceso rápido.
- `cpu.png` — Procesador (CPU) (componente interno). Alt: Procesador o CPU, cerebro del ordenador.
- `memoria-ram.png` — Memoria RAM (componente interno). Alt: Módulos de memoria RAM sobre la placa base.

**Página:** `practico-hardware/index.html` · **Sección:** 1.1 Baraja y 1.3 Ponte a prueba.

---

## 2 · Puertos y conexiones

### Emparejado «Une cada puerto con su nombre»

Cargan las imágenes de puertos desde `images/hardware/`:

- `puerto-usb-a.png` — USB-A (datos). Alt: Puerto USB-A, conector USB tradicional rectangular.
- `puerto-usb-b.png` — USB-B (datos). Alt: Puerto USB-B, conector cuadrado de impresoras y escáneres.
- `puerto-usb-c.png` — USB-C (datos). Alt: Puerto USB-C, conector moderno y reversible.
- `puerto-rj45.png` — RJ45 (red). Alt: Puerto RJ45 o Ethernet que conecta el equipo a una red local.
- `puerto-hdmi.png` — HDMI (vídeo). Alt: Puerto HDMI que transmite vídeo y audio de alta calidad.
- `puerto-jack-audio.png` — Jack 3,5 mm (audio). Alt: Conector jack de 3,5 mm para auriculares, micrófonos y altavoces.
- `puerto-displayport.png` — DisplayPort (vídeo). Alt: Puerto DisplayPort para vídeo digital de alta resolución.
- `puerto-thunderbolt.png` — Thunderbolt (datos). Alt: Puerto Thunderbolt, conector de alta velocidad compatible con USB-C.

**Página:** `practico-hardware/index.html` · **Sección:** 2.2 Emparejado de puertos.

---

## 3 · Inventario del puesto

### Tabla resuelta y fichas imprimibles

Las tablas imprimibles (PDF) **reutilizan las mismas imágenes** de la baraja
(`images/hardware/`) en miniatura; se generan dinámicamente en el panel
«Tabla de respuestas resueltas» (apartado 1.3) y en el «Descargar inventario»
(apartado 3.3) mediante `js/actividades.js`.