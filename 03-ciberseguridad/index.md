# Bloque 03 · Ciberseguridad

**UP01 · Mantenimiento básico de equipos**
Módulo de Ofimática · CFGS Documentación y Administración Sanitarias

---

## 1 · ¿Qué es la ciberseguridad?

La **ciberseguridad** es el conjunto de **medidas, herramientas y buenas prácticas** destinadas a proteger los sistemas informáticos, los dispositivos y la información frente a:

- **Accesos no autorizados.**
- **Pérdidas de datos.**
- **Ataques informáticos.**

En el **ámbito sanitario** es especialmente importante, porque los sistemas gestionan **información sensible de pacientes y profesionales**: historias clínicas, datos de contacto, tratamientos y documentación administrativa.

> 💡 **Idea clave:** ciberseguridad no es solo instalar un antivirus: es proteger datos, dispositivos y sistemas con medidas técnicas y también con hábitos de uso seguros.

> 🏥 **Aplicación en entornos sanitarios:** los centros sanitarios deben proteger la historia clínica electrónica y los datos personales de pacientes y profesionales constante y rigurosamente.

> ✍️ **Ejemplo práctico:** un centro de salud no solo usa antivirus: también limita quién accede a las historias clínicas, exige contraseñas seguras y forma al personal para que no caiga en engaños.

> ❓ **Pregunta para reflexionar:** ¿por qué es más delicada la seguridad de los datos en un hospital que en un entorno doméstico?
> **Respuesta orientativa:** porque se manejan datos sensibles de pacientes cuya divulgación o pérdida puede afectar gravemente a las personas y a la atención sanitaria.

> 📌 **Resumen:** ciberseguridad = proteger sistemas, dispositivos e información frente a accesos no autorizados, pérdidas de datos y ataques. En sanidad, misión crítica.

---

## 2 · Malware o software malintencionado

El **malware** es cualquier **programa diseñado para dañar sistemas informáticos, robar información o alterar el funcionamiento normal de los dispositivos**.

Los principales tipos de malware son:

| Tipo | ¿Qué hace? |
|:--|:--|
| **Virus** | Se adjunta a archivos legítimos y se propaga cuando estos se ejecutan. |
| **Troyano** | Aparenta ser seguro o útil, pero realiza acciones maliciosas. |
| **Ransomware** | Bloquea el acceso a los datos y exige un pago para recuperarlos. |
| **Spyware** | Recopila información del usuario sin su consentimiento. |
| **Gusanos (worms)** | Se propagan automáticamente por redes y dispositivos. |
| **Keylogger** | Registra las pulsaciones realizadas en el teclado. |

> 🏥 **Aplicación en entornos sanitarios:** una infección por malware puede **impedir el acceso a las historias clínicas electrónicas** o **comprometer información confidencial de pacientes**.

> ❓ **Pregunta para reflexionar:** ¿por qué puede ser especialmente grave un ataque ransomware en un hospital?
> **Respuesta orientativa:** porque puede impedir el acceso a información clínica necesaria para la atención de los pacientes.

> 📌 **Resumen:** el malware (virus, troyanos, ransomware, spyware, gusanos y keyloggers) daña, roba o bloquea; en sanidad puede detener el acceso a historias clínicas.

---

## 3 · Ingeniería social

La **ingeniería social** es una **técnica de ataque basada en la manipulación de las personas** para obtener información confidencial o acceso a sistemas.

En estos ataques el objetivo principal **no es la tecnología, sino el error humano**.

### 3.1 · Phishing

El **phishing** consiste en el envío de **correos electrónicos, mensajes o páginas web falsas** que intentan engañar al usuario para que **revele información personal o credenciales de acceso**.

Variantes:

- **Spear phishing:** phishing dirigido a una persona o colectivo concreto.
- **Whaling:** ataque dirigido a cargos directivos o relevantes.
- **Smishing:** suplantación mediante **SMS** (mensajes de texto).
- **Vishing:** suplantación mediante **llamadas telefónicas**.

> 🏥 **Aplicación en entornos sanitarios:** los ciberdelincuentes pueden intentar obtener credenciales de acceso a aplicaciones sanitarias mediante mensajes fraudulentos.

> ❓ **Pregunta para reflexionar:** ¿por qué es importante comprobar siempre el remitente de un correo electrónico?
> **Respuesta orientativa:** porque algunos correos fraudulentos intentan hacerse pasar por organizaciones legítimas para obtener información confidencial.

### 3.2 · Otras técnicas de ingeniería social

- **Pretexting:** inventar una historia para obtener información.
- **Baiting:** ofrecer un beneficio atractivo para engañar al usuario.
- **Suplantación de identidad:** hacerse pasar por una persona de confianza.
- **Shoulder surfing:** observar directamente la pantalla o el teclado de otra persona.
- **Deepfake:** uso de inteligencia artificial para crear contenido audiovisual falso con fines de engaño.

> 📌 **Resumen:** la ingeniería social manipula a las personas (no a las máquinas): el phishing y sus variantes, el pretexting, el baiting, la suplantación, el shoulder surfing y el deepfake buscan el error humano.

---

## 4 · Herramientas de protección

### 4.1 · Antivirus

- **Descripción:** programa diseñado para **detectar, bloquear y eliminar** amenazas informáticas.
- **Función:** proteger el sistema frente a virus y otros tipos de malware.

> 🏥 **Aplicación en entornos sanitarios:** ayuda a proteger información clínica y administrativa.

> ❓ **Pregunta para reflexionar:** ¿por qué es importante mantener actualizado el antivirus?
> **Respuesta orientativa:** porque las amenazas evolucionan constantemente y requieren nuevas actualizaciones de protección.

### 4.2 · Cortafuegos (firewall)

- **Descripción:** sistema de seguridad que **controla las conexiones de red entrantes y salientes**.
- **Función:** bloquear accesos no autorizados y proteger los dispositivos conectados a una red.

> 🏥 **Aplicación en entornos sanitarios:** contribuye a proteger los sistemas de información sanitaria frente a accesos no autorizados.

> ❓ **Pregunta para reflexionar:** ¿por qué es importante proteger una red sanitaria?
> **Respuesta orientativa:** porque almacena y transmite información sensible de pacientes y profesionales.

### 4.3 · Otras herramientas de seguridad

| Herramienta | Función |
|:--|:--|
| **Antimalware** | Protege frente a amenazas avanzadas como spyware o ransomware. |
| **Gestores de contraseñas** | Ayudan a crear y almacenar contraseñas seguras. |
| **Software de cifrado** | Protege la información mediante técnicas criptográficas. |
| **VPN (red privada virtual)** | Permite establecer conexiones seguras a través de Internet. |

> 💡 **Idea clave:** antivirus y cortafuegos son la primera línea de defensa; antimalware, gestores de contraseñas, cifrado y VPN completan la protección.

> 📌 **Resumen:** antivirus (detecta y elimina), cortafuegos (controla la red), antimalware, gestores de contraseñas, cifrado y VPN forman el conjunto de herramientas de protección.

---

## 5 · Buenas prácticas de seguridad digital

Aplicar buenos hábitos reduce la mayoría de los riesgos de seguridad:

- **Contraseñas seguras:** contraseñas largas y complejas, no reutilizarlas y activar la **autenticación en dos pasos (2FA)**.
- **Navegación segura:** no acceder a enlaces sospechosos, verificar la dirección de los sitios web y descargar software únicamente desde fuentes fiables.
- **Actualizaciones:** mantener actualizado el sistema operativo y actualizar las aplicaciones periódicamente.
- **Protección de dispositivos:** bloquear el acceso físico al equipo, no conectar dispositivos USB desconocidos y proteger la información sensible.
- **Correo electrónico seguro:** no abrir adjuntos sospechosos, comprobar el remitente y desconfiar de mensajes urgentes o alarmistas.
- **Redes Wi-Fi:** evitar redes públicas para acceder a información sensible y utilizar la **VPN** cuando sea necesario.

> 🏥 **Aplicación en entornos sanitarios:** la protección de los datos de pacientes empieza por los hábitos diarios del personal: contraseñas, bloqueo de pantalla, correo seguro y cuidado con las redes y los dispositivos USB.

> ✍️ **Ejemplo práctico:** antes de salir de la consulta, bloquea el equipo; al recibir un correo de un «compañero» pidiendo datos, verifica el remitente y desconfía de la urgencia.

> ❓ **Pregunta para reflexionar:** ¿qué harías si un USB encontrado en el pasillo se conecta a tu equipo?
> **Respuesta orientativa:** no conectarlo: los dispositivos USB desconocidos pueden contener malware. Debe avisarse a la persona responsable.

> 📌 **Resumen:** contraseñas seguras con 2FA, navegación prudente, actualizaciones, bloqueo de dispositivos, correo seguro y cuidar las redes Wi-Fi son las buenas prácticas esenciales.

---

## 6 · Mapa conceptual de ciberseguridad

Así se organiza todo lo estudiado en este bloque:

```
CIBERSEGURIDAD
├── Malware
│   ├── Virus
│   ├── Troyano
│   ├── Ransomware
│   ├── Spyware
│   ├── Gusano (Worm)
│   └── Keylogger
├── Ingeniería social
│   ├── Phishing → Spear phishing · Whaling · Smishing · Vishing
│   ├── Pretexting
│   ├── Baiting
│   ├── Suplantación de identidad
│   ├── Shoulder surfing
│   └── Deepfake
├── Herramientas de protección
│   ├── Antivirus
│   ├── Cortafuegos (Firewall)
│   ├── Antimalware
│   ├── Gestores de contraseñas
│   ├── Software de cifrado
│   └── VPN
├── Buenas prácticas
│   ├── Contraseñas seguras
│   ├── Autenticación en dos pasos (2FA)
│   ├── Navegación segura
│   ├── Actualizaciones
│   ├── Protección de dispositivos
│   ├── Uso seguro del correo electrónico
│   ├── Seguridad en redes Wi-Fi
│   └── Protección de datos personales
└── Objetivo principal
    ├── Confidencialidad
    ├── Integridad
    └── Disponibilidad
```

> 💡 **Idea clave:** el objetivo principal de la ciberseguridad se resume en tres palabras: **confidencialidad** (solo quien debe puede ver los datos), **integridad** (los datos no se alteran) y **disponibilidad** (los datos y sistemas están accesibles cuando se necesitan).

---

## 7 · Resumen del bloque

- La **ciberseguridad** protege sistemas, dispositivos e información frente a accesos no autorizados, pérdidas de datos y ataques.
- **Malware:** virus, troyano, ransomware, spyware, gusano y keylogger.
- **Ingeniería social:** controla a las personas, no a las máquinas: phishing y variantes, pretexting, baiting, suplantación, shoulder surfing y deepfake.
- **Herramientas de protección:** antivirus, cortafuegos, antimalware, gestores de contraseñas, cifrado y VPN.
- **Buenas prácticas:** contraseñas seguras y 2FA, navegación segura, actualizaciones, correo seguro, protección de dispositivos y cuidado de las redes Wi-Fi.
- **Objetivo final:** confidencialidad, integridad y disponibilidad de la información.

> 🏥 **Aplicación en entornos sanitarios:** cuidar la ciberseguridad del puesto es cuidar a los pacientes: cada hábito seguro de tu día a día protege sus datos y garantiza que la información clínica esté disponible cuando se necesita.

> 🧩 **Cuestionario final del bloque:** accede a [**Cuestionario_1_3_Ciberseguridad**](https://aules.edu.gva.es/fp/mod/quiz/view.php?id=11431133) y contesta a las preguntas relacionadas con estos contenidos. Hazlo tantas veces como quieras antes de que finalice el plazo, se guardará tu mejor nota. Cuando lo hayas completado, continúa con el siguiente elemento: [**Bloque práctico de ciberseguridad**](../practico-ciberseguridad/index.html).

> 🧰 **Bloque práctico:** cuando completes el cuestionario, trabaja el [**Bloque práctico: Ciberseguridad de un puesto de trabajo administrativo sanitario**](../practico-ciberseguridad/index.html): amenazas, ingeniería social y herramientas y buenas prácticas de protección, con actividades autocorregibles y soluciones descargables.

---

## Créditos

Material para el módulo de Ofimática. Creado por Noemí Celaya Mingot con ayuda de la IA. Licencia CC BY-NC-SA 4.0

Módulo de Ofimática · UP01 Mantenimiento básico de equipos · CFGS Documentación y Administración Sanitarias
Autora de los contenidos originales: Noemí Celaya Mingot.