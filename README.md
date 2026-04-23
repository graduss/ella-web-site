# ConstMax — B2B Export Platform Website

Marketing website for **ConstMax**, a B2B platform for developing export business between Western and Eastern Europe. The site presents the company's services, team, partners, and contact information in three languages.

## Tech Stack

- **Next.js** (App Router, static export)
- **TypeScript**
- **Tailwind CSS** + Sass
- **next-intl** — internationalization (EN / RU / PL)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # static output → /out
npm run lint
```

## Localization

Translations live in `src/messages/{en,ru,pl}.json`. All routes are prefixed with the locale segment — `/{locale}/...`. The default locale is `en`.

To add or update copy, edit the JSON files for all three locales. Keys are namespaced by section (`home`, `header`, `meta`, etc.).

## Deployment

The build produces a fully static site (`/out` directory) that can be served from any static host (Nginx, S3, Netlify, Vercel, etc.).
