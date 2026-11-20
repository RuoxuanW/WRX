/** Matches `site.config.mjs` via next.config `env` */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix public asset paths for GitHub Pages `basePath` (e.g. `/WRX`). */
export function publicAssetPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (!basePath || normalized.startsWith(basePath)) {
    return normalized;
  }
  return `${basePath}${normalized}`;
}