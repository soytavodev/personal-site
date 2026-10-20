# Estado y pendientes

## Proyectos (fase 2, revisada el 20/10/2026)

Los textos de ChopCheck, GuessIT! y ChangeIT! en `src/data/projects.ts` están comprobados con el código de cada repositorio. Sus README se reescribieron con lo mismo.

Afirmaciones del portfolio antiguo que **no** se publican porque el código no las respalda:
- ChopCheck: "B2B2C / sector HORECA", "Long Polling" (son consultas cada 2-3 s), "control de concurrencia / bloqueo optimista", "acceso vía QR", "Proyecto de Fin de Grado".
- GuessIT!: "seeding dinámico", "UI skeuomórfica", "MVC".
- ChangeIT!: "tiempo real" (la API se actualiza una vez al día).

Pendiente:
- Demo de GuessIT!: estaba en InfinityFree y se desactivó por inactividad. Enlace retirado; volver a ponerlo si se reactiva o se aloja en otro sitio.
- El historial de git de ChopCheck contiene una contraseña antigua de MySQL. Gustavo confirma que no la usa en ningún otro sitio: no hace falta reescribir el historial.
- Analizador-ids y DeepLens: solo funcionan con el servidor de IA y la base de datos de la empresa de FCT. Hacerlos independientes (base de datos de ejemplo + Ollama local) antes de añadirlos al portfolio. El tutor ha confirmado que se pueden publicar.
- Analizador-IA: el README describe funciones (SQLite, db_manager) que el código actual no tiene. No se publica hasta corregirlo.
- DevNova: es la landing de ChopCheck; no va como proyecto aparte.
- Mejoras posibles de GuessIT!: mostrar la respuesta correcta tras cada pregunta, categorías y temporizador.

## Web

- Publicada en https://gustavo-delnardo.vercel.app (CV y `og:image` ya la usan).
- Formulario de contacto (Formspree `xrejqdop`) activo en /contacto. Probado con un mensaje real el 20/10/2026: llega a gustavoedv35@gmail.com.
- No hay dominio propio. Quitar el enlace a gustavodelnardo.com del README de GitHub (fase 4).
- Bloque "Ecosistema tecnológico" del portfolio antiguo y "Operando en entornos de producción reales": no se publican.

## Decidido

- Lumina se elimina del portfolio.
- La historia personal es cierta y vive en `/historia`, con un tono más sencillo.
