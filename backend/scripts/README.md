# Backend Scripts

Este directorio centraliza scripts de mantenimiento y datos.

## Diagnostico

- `check_db.js`: muestra usuarios y topics en DB
- `check_levels.js`: revisa niveles y conteos
- `test_api.js`: smoke test de endpoints admin/progreso

## Cuentas y progreso

- `create_test_accounts.js`: crea usuarios de prueba
- `simulate_progress.js`: simula progreso para cuentas de prueba

## Contenido A1

- `list_a1.js`: lista topics A1
- `update_a1_theory.js`: actualiza teoria A1
- `enhance_a1.js`
- `enhance_a1_11_15.js`
- `enhance_a1_16_20.js`
- `enhance_a1_21_30.js`
- `enhance_a1_topics2_4.js`
- `enhance_a1_topics5_7.js`
- `enhance_a1_topics8_26.js`

Ejecuta scripts desde el root del repo con prefijo backend, por ejemplo:

```bash
npm run db:check --prefix backend
```
