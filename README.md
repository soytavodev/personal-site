# Gustavo Delnardo · Web personal y portfolio

Una sola app (Vite + React + TypeScript) con rutas:

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio |
| `/portfolio` | Cuadrícula de proyectos |
| `/portfolio/:slug` | Ficha de cada proyecto (`chopcheck`, `guessit`, `changeit`) |
| `/sobre-mi` | Sobre mí |
| `/historia` | Mi historia (cuatro capítulos con fotos) |
| `/contacto` | Enlaces de contacto |

## Comandos

```bash
npm install
npm run dev      # desarrollo
npm run build    # comprueba tipos y genera dist/
npm run lint
npm run preview  # sirve dist/ en local
```

## Dónde está cada cosa

- `src/data/projects.ts`: datos de los proyectos. Para añadir uno, se añade un objeto aquí y sus capturas en `public/projects/`.
- `src/App.css`: sistema de diseño de la web personal (variables de color, sidebar, botones, tarjetas).
- `src/portfolio.css`: estilos del portfolio, basados en las mismas variables.
- `vercel.json`: reescritura necesaria para que las rutas funcionen al recargar en Vercel.

El contenido de los proyectos está limitado a lo comprobable. Lo que falta por verificar está en `PENDIENTE-REVISION.md`.
