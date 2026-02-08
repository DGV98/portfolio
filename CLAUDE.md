# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

No test framework is configured yet.

## Architecture

Next.js 16 portfolio site using App Router, React 19, TypeScript, and Tailwind CSS v4.

- **App Router** — all routes live in `app/` (not `pages/`). `layout.tsx` is the root layout; `page.tsx` files define routes.
- **Styling** — Tailwind v4 via `@tailwindcss/postcss`. Dark mode uses `prefers-color-scheme` with CSS custom properties (`--background`, `--foreground`) defined in `globals.css`. Use Tailwind utilities and `dark:` variants.
- **Fonts** — Geist Sans and Geist Mono loaded via `next/font/google`, applied as CSS variables (`--font-geist-sans`, `--font-geist-mono`) on the body element in `layout.tsx`.
- **Path alias** — `@/*` maps to the project root.
- **ESLint** — flat config format (ESLint 9) in `eslint.config.mjs`, extending `next/core-web-vitals` and `next/typescript`.
- **TypeScript** — strict mode enabled.
