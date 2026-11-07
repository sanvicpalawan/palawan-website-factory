/**
 * Prefix a public asset path with the configured base.
 * GitHub Pages project sites live under /<repo>/, so plain "/img/x.jpg"
 * would 404. import.meta.env.BASE_URL is set from astro.config.mjs.
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
};
