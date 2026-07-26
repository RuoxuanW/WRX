import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/WRX',
  assetPrefix: '/WRX/',
  // Static export has no server — disable Image Optimization so <Image> uses direct URL
  images: {
    unoptimized: true
  }
};

export default withNextIntl(nextConfig);
