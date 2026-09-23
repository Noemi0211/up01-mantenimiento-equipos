# Bloque práctico · Redes locales del puesto de trabajo administrativo sanitario

**UP01 · Mantenimiento básico de equipos**
Módulo de Ofimática · CFGS Documentación y Administración Sanitarias

---

## 0 · Cómo funciona este bloque

Ya has estudiado la **teoría de las redes locales (LAN)** (Bloque 04) y has hecho el cuestionario sobre las redes. Este bloque no vuelve a explicar los conceptos: solo los **recuerda brevemente** para que puedas trabajar las **actividades prácticas**.

- **Red local (LAN)** = conjunto de dispositivos conectados entre sí en una zona limitada (centro sanitario, oficina…) que comparten información, recursos y servicios.
- **Componentes** = ordenadores y dispositivos, **switch** (interconecta equipos), **router** (une la LAN con otras redes e Internet), **Ethernet / Wi-Fi** (medios de conexión) y **servidor** (centraliza servicios).
- **Recursos compartidos** = archivos y carpetas, impresoras y escáneres, aplicaciones y copias de seguridad.
- **Tipos de redes** = PAN (personal), LAN (local), WLAN (local inalámbrica), MAN (ciudad), WAN (grandes distancias).

> 💡 **Idea clave:** aquí no se memoriza teoría nueva: se practica hasta identificar los componentes de la red, entender cómo se transmiten los datos y saber comprobar y configurar la conexión de un puesto.

### Objetivos del bloque

- Reconocer los **componentes de una red local** y su función en el puesto sanitario.
- Distinguir **topologías, medios y protocolos** de red.
- Relacionar los **conceptos de configuración** (IP, máscara, DHCP, DNS, puertos).
- **Comprobar la conectividad** de un puesto y resolver fallos de conexión en orden.
- Generar el **inventario de conexión** de un puesto de trabajo.

> 🏥 **Aplicación en entornos sanitarios:** la red local del centro es la espina dorsal de la gestión diaria: historias clínicas, citas, impresión compartida y comunicación entre consultas dependen de que los equipos estén bien conectados.

Las actividades se **autocorrigen en esta página** y puedes repetirlas las veces que quieras.

---

## 1 · Actividad 1 · Conceptos y componentes de una red local

Recordatorio breve: una **red local (LAN)** conecta dispositivos en una zona limitada. Sus componentes esenciales son los **ordenadores y dispositivos** (envían, reciben y procesan información), el **switch** (conecta equipos dentro de la red y distribuye la información), el **router** (conecta la LAN con otras redes, como Internet), el **servidor** (proporciona servicios a otros equipos) y los **medios de conexión** (cableado **Ethernet** e inalámbrico **Wi-Fi**).

### 1.1 · Baraja de componentes

Las tarjetas muestran el **nombre** de un componente de red. Haz clic sobre cada tarjeta para voltearla y ver su **tipo**, su **función** y su **aplicación en un puesto sanitario**.

> ✍️ **Actividad interactiva:** tarjeta a tarjeta, intenta deducir la **función** de cada componente antes de voltearla. Repítelo hasta reconocerlas todas a simple vista.

### 1.2 · Relaciona cada componente con su función

Une cada **componente** de la red con la **función** que realiza. Selecciona un elemento de la izquierda y pulsa su pareja de la derecha.

> 💡 **Idea clave:** saber el nombre del componente no basta: lo importante es **qué hace en la red** para poder montar y mantener el puesto conectado.

### 1.3 · Ponte a prueba

Autoevaluación de **10 preguntas** generadas al azar sobre conceptos y componentes. Puedes repetirla **tantas veces como quieras**. Cuando la completes **perfecta**, se desbloqueará la tabla de **componentes resuelta** para que la **descargues en PDF**.

> 🧩 **Cuestionario en Aules:** tras practicar en esta página, realiza el cuestionario [**«PR-01.10 Conceptos y componentes de una red local»**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522977) en la plataforma Aules. Puedes intentarlo tantas veces como quieras antes de que finalice el plazo y se guardará tu mejor nota. Cuando lo hayas completado, continúa con el siguiente elemento: [**«PR-01.11 Topologías, medios y protocolos de red»**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522984).

---

## 2 · Actividad 2 · Topologías, medios y protocolos de red

Recordatorio breve: la **topología** es la forma en que se distribuyen los equipos de la red. Las más conocidas son **bus** (un único cable central), **estrella** (todos conectados a un dispositivo central), **anillo** (cada equipo conectado al siguiente) y **malla** (equipos conectados entre varios o todos los demás). Los **medios** transportan los datos: **cable de par trenzado (Ethernet)**, **fibra óptica** (alta velocidad y largas distancias) y **Wi-Fi** (inalámbrico). Los **protocolos** son las reglas de comunicación: **TCP/IP** (base de Internet), **HTTP/HTTPS** (web), **DNS** (traduce nombres a IP), **DHCP** (asigna la configuración automáticamente) y **FTP** (transferencia de archivos).

### 2.1 · Resuelve qué topología, medio o protocolo se usa

Te planteamos **situaciones reales** de un centro sanitario. Decide qué **topología, medio o protocolo** se está utilizando en cada una y comprueba tu respuesta.

> ✍️ **Actividad interactiva:** lee cada situación, elige la opción más adecuada y pulsa «Comprobar». La corrección es inmediata.

### 2.2 · Une cada protocolo con su función

**Empareja** cada **protocolo** con la **función** que realiza. Selecciona un elemento de la izquierda y pulsa su pareja de la derecha.

> 💡 **Idea clave:** la estrella (con switch o router central) es la topología habitual de los centros actuales, y los protocolos son las «reglas» que hacen posible que los equipos se entiendan.

Cuando completes correctamente los **escenarios** y el **emparejado**, se desbloquearán las **soluciones en PDF** de las topologías, los medios y los protocolos.

> 🧩 **Cuestionario en Aules:** cuando domines la actividad, realiza el cuestionario [**«PR-01.11 Topologías, medios y protocolos de red»**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522984) en Aules. Puedes intentarlo tantas veces como quieras antes de que finalice el plazo y se guardará tu mejor nota. Cuando lo hayas completado, continúa con el siguiente elemento: [**«PR-01.12 Configuración y puertos de red (IP/conectividad)»**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522994).

---

## 3 · Actividad 3 · Configuración y puertos de red (IP/conectividad)

Recordatorio breve: la **dirección IP** identifica a cada equipo en la red; la **máscara de subred** indica qué parte pertenece a la red y cuál al equipo; la **puerta de enlace (gateway)** es la salida hacia otras redes. La configuración se puede hacer **automáticamente (DHCP)** o **manualmente (IP fija)**. El **DNS** traduce los nombres de dominio a IP. La **tarjeta de red (NIC)** conecta físicamente el equipo y el **puerto RJ45** recibe el cable Ethernet. Para comprobar la conexión se usan comandos como **ipconfig** (ver la configuración) y **ping** (comprobar conectividad con otro equipo).

### 3.1 · Relaciona cada concepto de configuración con su definición

**Empareja** cada **concepto de red** con la **definición** que le corresponde. Selecciona un elemento de la izquierda y pulsa su pareja de la derecha.

### 3.2 · Checklist de conectividad del puesto

Marca uno a uno los pasos de la **comprobación de la conexión de red de un puesto**. Cuando completes todos, el puesto queda **conectado y operativo**. Si dudas sobre cómo realizar alguna comprobación, pulsa **«¿Cómo lo compruebo?»** en el paso correspondiente.

> 🏥 **Aplicación en entornos sanitarios:** si un puesto «no ve» la historia clínica o no puede imprimir, lo primero es comprobar la conexión: cable, IP y ping. Registrar la incidencia y avisar a mantenimiento si el fallo no se resuelve es parte del mantenimiento básico.

### 3.3 · Ordena los pasos ante un fallo de conexión

Coloca los pasos del **protocolo ante un fallo de conexión** en el orden correcto. Pulsa las fichas en orden: 1 → 2 → 3…

Cuando completes el **checklist entero** y ordenes correctamente los pasos, se desbloquearán las **soluciones en PDF** de la configuración y los puertos de red.

### 3.4 · Inventario de la conexión del puesto

Un **inventario de conexión** registra los **dispositivos de red**, la **configuración IP**, los **medios de conexión** y los **servicios** que usa un puesto. Marca los grupos que has comprobado y **genera el informe**: podrás descargarlo en PDF. Este registro forma parte del mantenimiento básico del puesto.

> 📌 **Resumen:** conectar + comprobar + registrar = un puesto operativo dentro de la red del centro y un mantenimiento básico responsable de cualquier servicio.

> 🧩 **Cuestionario en Aules:** al terminar, realiza el cuestionario [**«PR-01.12 Configuración y puertos de red (IP/conectividad)»**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522994) en Aules. Puedes intentarlo tantas veces como quieras antes de que finalice el plazo y se guardará tu mejor nota. **Con este cuestionario finaliza el bloque práctico.**

---

## 4 · Autoevaluación

A continuación encontrarás unas **sencillas actividades de evaluación** en Aules. Su resultado se reflejará automáticamente en la **calificación de la sección práctica sobre las redes locales**.

| Cuestionario | Contenidos |
|:--|:--|
| [**PR-01.10 Conceptos y componentes de una red local**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522977) | LAN, componentes (switch, router, servidor, Ethernet, Wi-Fi) y recursos compartidos |
| [**PR-01.11 Topologías, medios y protocolos de red**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522984) | Topologías, medios de transmisión y protocolos (TCP/IP, HTTP, DNS, DHCP, FTP) |
| [**PR-01.12 Configuración y puertos de red (IP/conectividad)**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11522994) | IP, máscara, puerta de enlace, DHCP, DNS, puertos y comprobación de conectividad |

Consulta la guía de importación y configuración en `practico-redes-lan/cuestionarios/instrucciones-aules.md`.

> ⚠️ **Nota técnica (no visible para el alumnado):** los enlaces de este bloque práctico apuntan a las actividades reales de Aules (PR-01.10 = `11522977`, PR-01.11 = `11522984`, PR-01.12 = `11522994`; cuestionario teórico = `11522903`).

---

## Créditos

Material para el módulo de Ofimática. Creado por Noemí Celaya Mingot con ayuda de la IA. Licencia CC BY-NC-SA 4.0

Módulo de Ofimática · UP01 Mantenimiento básico de equipos · CFGS Documentación y Administración Sanitarias
Autora de los contenidos originales: Noemí Celaya Mingot.