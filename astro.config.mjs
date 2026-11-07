import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployment targets differ in where they serve the site from:
//   GitHub Pages project site → https://<user>.github.io/<repo>/  (base = /<repo>/)
//   Vercel / root domain      → https://example.com/                (base = /)
// Vercel sets VERCEL=1 in the build environment, so the same source builds
// correctly for both. Override explicitly with BASE_PATH if ever needed.
const base =
  process.env.BASE_PATH ??
  (process.env.VERCEL ? '/' : '/palawan-website-factory/');

export default defineConfig({
  base,
  site: process.env.VERCEL
    ? 'https://daloypalawan.ph'
    : 'https://sanvicpalawan.github.io',
  vite: { plugins: [tailwindcss()] },
});
