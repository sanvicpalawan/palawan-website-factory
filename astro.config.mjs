import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves project sites from /<repo>/, so the base must match.
// Deploying to a root domain or Vercel? Set BASE_PATH=/ before building.
const base = process.env.BASE_PATH || '/palawan-website-factory/';

export default defineConfig({
  base,
  site: 'https://sanvicpalawan.github.io',
  vite: { plugins: [tailwindcss()] },
});
