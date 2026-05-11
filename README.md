# DocuLens MVP

DocuLens MVP es una aplicación personal de inteligencia documental human-in-the-loop construida con Next.js 14, App Router, TypeScript y Tailwind CSS.

## Objetivo

Crear una base visual y técnica limpia para organizar workspaces documentales sin implementar todavía automatizaciones, subida de documentos, autenticación ni base de datos real.

## Alcance actual

- Layout general con sidebar.
- Página principal `Workspaces` con datos mock/locales.
- Tarjetas de workspaces para `FEN 2026`, `WASH Tumbes`, `Tesis Agua y Saneamiento` y `Propuestas Técnicas`.
- Ruta dinámica `app/workspace/[id]` para visualizar dominio, descripción, modo estricto y flujo documental.
- Páginas placeholder para documentos, contexto, prompt, outputs y notas.
- Estructura preparada para incorporar Supabase más adelante.
- Configuración compatible con despliegue en Vercel.

## Restricciones del MVP

- Uso personal, no multiusuario.
- Sin APIs de IA.
- Sin Microsoft Graph API.
- Sin agentes.
- Sin voz.
- Sin router multi-IA.
- Sin arquitectura enterprise.
- Sin subida de documentos por ahora.
- Sin autenticación por ahora.
- Sin base de datos real por ahora.

## Estructura principal

```txt
app/          Rutas, layout y estilos globales de Next.js App Router.
components/   Componentes reutilizables de interfaz.
lib/          Datos mock y utilidades locales temporales.
types/        Tipos TypeScript compartidos.
supabase/     Espacio reservado para configuración futura de Supabase.
```

## Variables de entorno

Copia el archivo de ejemplo cuando llegue el momento de conectar Supabase:

```bash
cp .env.local.example .env.local
```

Variables previstas:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Desarrollo local

Instala dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Rutas mock de Fase 0

- `/`: listado de workspaces.
- `/workspace/[id]`: vista resumen del workspace.
- `/workspace/[id]/documents`: placeholder de documentos.
- `/workspace/[id]/context`: placeholder de contexto.
- `/workspace/[id]/prompt`: placeholder de prompt.
- `/workspace/[id]/outputs`: placeholder de outputs.
- `/workspace/[id]/notes`: placeholder de notas.

## Scripts

- `npm run dev`: inicia Next.js en modo desarrollo.
- `npm run build`: compila la aplicación para producción.
- `npm run start`: sirve la build de producción.
- `npm run lint`: ejecuta las reglas de lint de Next.js.
