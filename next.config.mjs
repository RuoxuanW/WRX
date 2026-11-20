import createNextIntlPlugin from 'next-intl/plugin';
import {BASE_PATH} from './site.config.mjs';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH
  },
  // Static export has no server — disable Image Optimization so <Image> uses direct URL
  images: {
    unoptimized: true
  }
};

export default withNextIntl(nextConfig);
