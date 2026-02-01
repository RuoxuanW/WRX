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

### GitHub Pages（静态站点）

项目已配置为**静态导出**并可通过 GitHub Actions 部署到 GitHub Pages。

1. **启用 GitHub Pages**

   - 仓库 → **Settings** → **Pages**
   - **Source** 选择 **GitHub Actions**

2. **触发部署**

   - 推送到 `main` 分支会自动触发部署；若默认分支为 `master`，请修改 `.github/workflows/deploy.yml` 中的 `branches: ['main']` 为 `branches: ['master']`。

3. **访问站点**
   - 部署完成后访问：`https://<你的用户名>.github.io/<仓库名>/`
   - 例如：`https://orianna.github.io/personal-profile/`

本地构建（与 CI 一致）：

```bash
BASE_PATH=/personal-profile npm run build
# 静态文件在 ./out 目录
```

### 其他方式

Deploy to Vercel (recommended) or any Node.js hosting platform. Make sure the `NEXT_INTL_LOCALE_NEGOTIATION` environment setting matches your desired locale detection strategy.
