# LevelUpEnglish v3 (React + Express + PostgreSQL)

Plataforma de aprendizaje de ingles con frontend en React (Vite) y backend en Express con base de datos PostgreSQL.

## Stack

- Frontend: React 19, React Router, Recharts, Axios, Vite
- Backend: Node.js, Express, pg, JWT, Helmet, HPP, rate limit
- Base de datos: PostgreSQL

## Estructura del proyecto

```text
.
|-- src/                     # Frontend React
|   |-- api/                 # Configuracion de cliente API
|   |-- components/          # Componentes reutilizables
|   |-- context/             # Auth y progreso global
|   |-- pages/               # Vistas principales
|   |-- App.jsx              # Rutas principales
|   `-- main.jsx             # Entrada de la app
|
|-- backend/                 # API Express + PostgreSQL
|   |-- data/                # JSON de seed inicial
|   |-- scripts/             # Scripts de mantenimiento y carga
|   |-- db.js                # Inicializacion de DB
|   |-- server.js            # Endpoints API
|   `-- package.json
|
|-- public/                  # Recursos estaticos
|-- eslint.config.js
|-- vite.config.js
`-- package.json             # Scripts de orquestacion
```

## Requisitos

- Node.js 20+
- npm 10+

## Instalacion

1. Instalar dependencias de frontend:

```bash
npm install
```

2. Instalar dependencias de backend:

```bash
npm install --prefix backend
```

## Comandos principales

Desde la raiz del proyecto:

- `npm run dev:frontend`: levanta Vite (frontend)
- `npm run dev:backend`: levanta API Express (backend)
- `npm run dev`: levanta solo frontend
- `npm run start`: alias de `npm run dev` (solo frontend)
- `npm run build`: build de produccion del frontend
- `npm run preview`: vista previa de build
- `npm run lint`: lint del frontend (ignora `backend/**`)

Desde `backend/`:

- `npm run dev`: inicia servidor backend
- `npm run start`: inicia servidor backend
- `npm run db:check`: utilitario para revisar DB
- `npm run levels:check`: utilitario para revisar niveles
- `npm run progress:simulate`: simulacion de progreso
- `npm run accounts:create-test`: crea cuentas de prueba
- `npm run topics:list:a1`: lista topics A1
- `npm run api:test`: prueba API (smoke test)

Detalle de scripts: `backend/scripts/README.md`

## Variables de entorno

Backend (`backend/.env`):

```env
PORT=3000
SECRET_KEY=change-me
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/levelupenglish
PGSSL=false
```

Nota: si no existe `.env`, el backend usa valores por defecto definidos en el codigo.

## Endpoints base

- Base URL API: `http://localhost:3000/api/v1`
- Health check: `GET http://localhost:3000/`

## Flujo de desarrollo recomendado

1. Abrir una terminal para frontend y ejecutar `npm run dev`.
2. Abrir una segunda terminal para backend y ejecutar `npm run dev:backend`.
3. Trabajar rutas/componentes en `src/`.
4. Agregar o ajustar endpoints en `backend/server.js`.
5. Ejecutar `npm run lint` antes de cerrar cambios.

## Notas de organizacion

- Los archivos de salida de lint y artefactos temporales estan ignorados en `.gitignore`.
- El backend tiene su propio `package.json` y ciclo de dependencias.
- El lint de raiz solo aplica al frontend por diseno.
