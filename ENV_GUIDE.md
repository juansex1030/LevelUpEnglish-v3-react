# Guía de Despliegue en Vercel - Level Up English

Para un despliegue exitoso, crea 3 proyectos separados en Vercel apuntando a la misma cuenta de GitHub.

## 1. Backend (API)
- **Root Directory**: `backend`
- **Framework Preset**: `Other` (Vercel detectará el `vercel.json`)
- **Environment Variables**:
  - `DATABASE_URL`: (Tu URL de Supabase)
  - `SECRET_KEY`: (Tu clave secreta JWT)
  - `EMAIL_USER`: tu_correo@gmail.com
  - `EMAIL_PASS`: tu_contraseña_de_aplicación
  - `FRONTEND_URL`: URL final de tu frontend (ej. `https://tu-sitio.vercel.app`)

## 2. Frontend (Main Site)
- **Root Directory**: `frontend`
- **Framework Preset**: `Vite`
- **Environment Variables**:
  - `VITE_API_URL`: URL final de tu backend (ej. `https://tu-api.vercel.app/api/v1`)
  - `VITE_GOOGLE_CLIENT_ID`: (Tu ID de Google Auth)

## 3. Admin Panel
- **Root Directory**: `admin-panel`
- **Framework Preset**: `Vite`
- **Environment Variables**:
  - `VITE_API_URL`: URL final de tu backend (ej. `https://tu-api.vercel.app/api/v1`)

---

> [!TIP]
> Recuerda que en el Backend, la variable `FRONTEND_URL` debe incluir tanto la URL del sitio principal como la del Admin (separadas por coma) para que el CORS funcione correctamente.
