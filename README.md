# AHA Landing

Local-first landing page using TanStack Router (file-based), shadcn/ui, Tailwind v4, and TanStack Query.

## Prerequisites

- Node.js 20+ (LTS recommended)
- PNPM/NPM/Yarn (examples use npm)

## Quick start

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Scripts

- `npm run dev`: start Vite dev server
- `npm run build`: typecheck and build for production
- `npm run preview`: preview the production build
- `npm run lint`: run ESLint
- `npm run lint:fix`: fix lint issues
- `npm run format`: check Prettier formatting
- `npm run format:fix`: write Prettier formatting

## Tech stack

- React 19, TypeScript, Vite 7
- TanStack Router (file-based routes) with `@tanstack/router-plugin`
- shadcn/ui (Tailwind v4), component blocks
- TanStack Query + Devtools
- Zustand (state management)

## Project structure

```text
src/
  components/         # UI components (shadcn & app)
  lib/                # app libs (e.g., queryClient)
  routes/             # file-based routes for TanStack Router
  index.css           # Tailwind v4 base + shadcn variables
  main.tsx            # app entry, providers
```

## Routing

We use file-based routing via TanStack Router. Routes live under `src/routes/`.

- `src/routes/index.tsx` → `/`
- `src/routes/services.tsx` → `/services`
- `src/routes/about.tsx` → `/about`
- `src/routes/projects.tsx` → `/projects`
- `src/routes/contact.tsx` → `/contact`

The root layout is `src/routes/__root.tsx` and includes the persistent navigation.

## Devtools

- TanStack Router Devtools are enabled in development (inside the root layout)
- React Query Devtools are enabled in development (in `main.tsx`)

## Code style

Prettier is configured for single quotes and no semicolons. VS Code on-save formatting and ESLint fixes are enabled via `.vscode/settings.json`.

## Aliases

Import alias `@/*` maps to `src/*` (configured in `tsconfig.json` and `vite.config.ts`).

## Adding UI blocks (shadcn/ui)

```bash
npx shadcn add <component-or-block>
```

## Troubleshooting

- If routes are missing, ensure the Vite plugin `@tanstack/router-plugin` is loaded before React in `vite.config.ts`.
- If you see extension-related console warnings, try Incognito or hide extension messages in DevTools.

## Deployment

```bash
npm run build
npm run preview   # or deploy the dist/ folder to your host
```
