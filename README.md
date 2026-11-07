# Palawan Collective — Website Factory

A reusable foundation for building client websites quickly. One shared design
system, one component library, one build pipeline — many brands.

**Starter shipped:** `Daloy` — a restaurant / café demonstration
([live preview](https://sanvicpalawan.github.io/palawan-website-factory/)).

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | [Astro 5](https://astro.build) | Static by default, content-first, ships near-zero JS |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) | Tokens in CSS, no config file, fast builds |
| Motion | GSAP + ScrollTrigger | Choreographed scroll work, degrades gracefully |
| Fonts | Fraunces (display) + Inter (body) | Editorial serif + neutral sans |
| Admin | Client-side dashboard foundation | Swappable for Payload CMS in production |

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

## Structure

```
src/
  styles/
    global.css     Design tokens (@theme), base reset, component classes
    site.css       Starter-specific components — replace per client
  layouts/
    Base.astro     Head, fonts, JSON-LD, header/footer, script entry
  components/      Header, footer, hero, menu, dishes, gallery, NFC, form…
  lib/
    data.ts        All editable content: menus, dishes, hours, reviews
  pages/
    index.astro    The starter site
    admin.astro    Client dashboard foundation
  scripts/
    main.ts        GSAP choreography, menu tabs, form, admin logic
public/
  img/             Photography (replace per client)
```

## Making a new client site

1. Copy `src/lib/data.ts` → replace the content.
2. Copy `src/styles/site.css` → rename the palette in `global.css` `@theme`.
3. Swap `public/img/` for the client's photography.
4. Edit `Base.astro` — name, description, JSON-LD, fonts.
5. `npm run build` and deploy.

Everything a client edits lives in `src/lib/data.ts`. No component changes are
needed for a rebrand.

## Design standard

Editorial typography, confident layouts, purposeful motion, real photography,
fast and responsive, reduced-motion support. No generic AI-looking pages, no
purple gradients, no glassmorphism, no decorative effects that slow the page.

## NFC / QR integration point

The starter ships a working NFC section with a real QR code per table. The
destination is data-driven — repoint a card from the dashboard without
reprinting it. In production this connects to the agency's multi-tenant
NFC/QR backend (see `FACTORY.md`).

## Deployment

The starter deploys as a static site anywhere. It is currently published on
GitHub Pages from the `gh-pages` branch. For Vercel, link this repository in
the Vercel dashboard — no configuration file is required.

## Licence

Code is yours. Photography must be replaced with properly licensed images per
client. See `public/img/` provenance notes in `FACTORY.md`.
