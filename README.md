# Tu Horóscopo Cósmico — Frontend (Next.js + Tailwind)

Arquitectura escalable lista para Vercel.

## Scripts
- `npm run dev` — desarrollo
- `npm run build` — build de producción
- `npm start` — servir build

## Variables de entorno
Configurar en Vercel → Project Settings → Environment Variables:
- `SUPABASE_EDGE_URL` — p.ej. `https://xxx.functions.supabase.co`
- `INTERNAL_TOKEN` — token interno para llamar a Edge Functions

## Flujo
1. El formulario envía a `/api/lead` (route serverless en Vercel).
2. `/api/lead` reenvía a tu Edge Function `ef_alta_suscriptor` en Supabase.
3. Guardás consentimiento (fecha/IP/version) y devolvés estado.
4. Redirige a `/gracias` si todo ok.

## Estructura
- `/pages` — rutas del sitio (index, gracias, politica) + API routes
- `/components` — Formulario
- `/lib` — helper para requests
- `/styles` — Tailwind
- `/public` — assets estáticos

Hecho para rendimiento alto y escalabilidad SaaS.
