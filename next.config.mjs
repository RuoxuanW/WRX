import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // GitHub Pages 项目页地址为 https://<user>.github.io/<repo>/，与仓库名一致
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',
};

export default withNextIntl(nextConfig);
