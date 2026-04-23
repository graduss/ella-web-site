# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build static export (output: export)
npm run lint     # ESLint
```

There are no automated tests. Prettier (with `prettier-plugin-tailwindcss`) handles formatting via `npx prettier --write .`.

## Architecture

**Next.js App Router with static export** (`output: "export"` in `next.config.ts`). The site is fully statically generated — no server-side rendering at runtime. The `withNextIntl()` plugin wraps the config.

### Routing

All routes live under `src/app/[locale]/`. Static params are generated for three locales: `en`, `ru`, `pl`. There is no root `src/app/page.tsx` — the locale segment is mandatory on every route.

### i18n

Internationalization uses **next-intl v4**:

- `src/i18n/index.ts` — locale list (`["ru", "en", "pl"]`) and default (`"en"`)
- `src/i18n/routing.ts` — next-intl routing config built from the above
- `src/i18n/request.ts` — server-side `getRequestConfig()` that dynamically imports the matching `src/messages/<locale>.json`
- `src/i18n/navigation.ts` — re-exports `Link`, `redirect`, `useRouter`, `usePathname`, `getPathname` wrapped for locale awareness

Use `getTranslations()` in Server Components and `useTranslations()` in Client Components. All translation keys live in `src/messages/{en,ru,pl}.json` organized by namespace (e.g., `home`, `meta`, `privacy`).

The next-intl middleware is exported from `src/proxy.ts` (not `middleware.ts`) — the matcher covers `/` and `/(ru|pl|en)/:path*`.

### Styling

Tailwind CSS with a custom config (`tailwind.config.js`). Key custom tokens:
- Primary color: `green-900`
- Accent: yellow `#FBB040`
- Custom screens: `xs` (450px), up to `2xl` (1400px)

Sass is available. Component-scoped styles use CSS Modules (`*.module.css`). Global styles are in `src/styles/index.css`. Prettier auto-sorts Tailwind classes on save.

### Components & Data

Components live in `src/components/` organized by feature. Static data (service lists, menu items, etc.) is co-located with components or in `src/servicies/` (note the folder name typo — keep it consistent).

FontAwesome icons are registered once in `src/app/[locale]/layout.tsx` using the library pattern — add icons there before using them in components.

Google Analytics is injected in the root layout when the `GOOGLE_ID` environment variable is set.

### TypeScript

Path alias `@/*` maps to `./src/*`. Strict mode is off. JSON imports are enabled.
