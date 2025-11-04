# Personal Profile Website

A bilingual (English/Chinese) personal portfolio for a senior software engineer in quantitative finance, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and next-intl.

## Getting Started

```bash
npm install
npm run dev
```

The site is available at `http://localhost:3000` with locale-aware routes (`/en`, `/zh`).

## Key Features

- **Internationalisation** powered by [`next-intl`](https://next-intl-docs.vercel.app/) with locale-aware routing, middleware, and typed translations.
- **Finance-focused content model** using structured JSON messages with rich experience and project entries for quick iteration.
- **Reusable UI system** composed of layout, navigation, and section components designed for future expansion.
- **Actionable contact flow** with configurable call-to-actions and a mailto helper form.

## Customisation Checklist

- Update personal details in `content/profile.ts` (`name`, `email`, `location`, and social links).
- Replace placeholder contact links (LinkedIn, calendar) in `messages/en.json` and `messages/zh.json`.
- Adjust experience and project data within the locale message files, or connect to a CMS later.
- Review Tailwind theme tokens in `tailwind.config.ts` for brand alignment.

## Scripts

- `npm run dev` – Start local development with Turbopack.
- `npm run build` – Create an optimised production build.
- `npm run start` – Launch the production server.
- `npm run lint` – Run ESLint checks.

## Deployment

Deploy to Vercel (recommended) or any Node.js hosting platform. Make sure the `NEXT_INTL_LOCALE_NEGOTIATION` environment setting matches your desired locale detection strategy.
