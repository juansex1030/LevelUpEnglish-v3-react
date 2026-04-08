# Arquitectura del proyecto

## Vision general

LevelUpEnglish esta dividido en dos aplicaciones:

- Frontend SPA en React (directorio `src/`)
- Backend API en Express con PostgreSQL (directorio `backend/`)

Ambas aplicaciones se ejecutan en paralelo durante desarrollo.

## Frontend

Puntos clave:

- `src/main.jsx`: bootstrap de React Router
- `src/App.jsx`: layout principal + definicion de rutas
- `src/context/AuthContext.jsx`: estado de autenticacion y token
- `src/context/ProgressContext.jsx`: estado de progreso del usuario
- `src/api/config.js`: URL base de la API

Patron de organizacion:

- `src/pages/` para vistas de ruta
- `src/components/` para componentes reutilizables
- `src/data/` para datos locales estaticos

## Backend

Puntos clave:

- `backend/server.js`: todos los endpoints y middlewares
- `backend/db.js`: inicializacion de tablas y carga inicial de topics
- `backend/data/topics.json`: seed inicial de contenido
- `backend/scripts/`: utilitarios de mantenimiento, pruebas y cargas de contenido

Capas principales:

- Seguridad (helmet, hpp, rate limit)
- Auth JWT
- Endpoints de progreso
- Endpoints administrativos

## Persistencia

Persistencia principal en PostgreSQL mediante `DATABASE_URL`.

Se crean tablas automaticamente al iniciar el backend:

- `users`
- `topics`
- `progress`

## Convenciones de desarrollo

- Frontend y backend tienen dependencias separadas.
- El lint de la raiz aplica al frontend y excluye `backend/**`.
- Scripts operativos del backend se centralizan en `backend/package.json` y `backend/scripts/`.
- Evitar colocar archivos de reporte temporal en la raiz del repositorio.

## Mejoras futuras sugeridas

- Separar `backend/server.js` en modulos (`routes`, `controllers`, `middleware`).
- Introducir validacion de payloads (por ejemplo `zod` o `joi`).
- Mover scripts sueltos de mantenimiento a `backend/scripts/`.
