# FACTORY — operations notes

Lightweight internal documentation. Not an execution checklist — read only the
section you need.

## Where things live

| Thing | Location |
|---|---|
| Factory repository | `sanvicpalawan/palawan-website-factory` |
| Live demonstration | https://sanvicpalawan.github.io/palawan-website-factory/ |
| Client dashboard (demo) | `/admin` on the deployed site |
| Demo staff PIN | `1972` (demonstration only — production uses Payload CMS auth) |
| Design tokens | `src/styles/global.css` → `@theme` |
| Editable content | `src/lib/data.ts` |
| Starter components | `src/styles/site.css` + `src/components/` |

## Reusable modules

| Module | File | Notes |
|---|---|---|
| Header + mobile nav | `SiteHeader.astro` | Scroll-aware, translucent → solid |
| Hero with rotating word | `Hero.astro` | Words array in the inline script |
| Menu with category tabs | `MenuSection.astro` | Data-driven from `data.ts` |
| Dish cards | `Featured.astro` | Alternating offset on desktop |
| Horizontal gallery | `Gallery.astro` | Native scroll-snap, no library |
| NFC section | `NfcSection.astro` | QR is a real generated SVG |
| Reservation form | `ReservationForm.astro` | Validates, stores to `localStorage` |
| Client dashboard | `pages/admin.astro` | PIN gate, inquiries, NFC repointing, automations |
| GSAP choreography | `scripts/main.ts` | Hero intro, reveals, parallax, progress |

## NFC / QR architecture (target)

The demonstration shows the shape of the product, not the production system.

```
NFC sticker / printed QR
        │  (static UID, printed once)
        ▼
  Short link: d/<uid>          ← resolved by the NFC backend
        │
        ▼
  Tenant lookup by uid  →  destination URL stored per campaign
        │
        ▼
  302 to destination + fire analytics event
```

- One multi-tenant backend serves every client site.
- Each sticker has a stable UID; the destination is a row in a table, so it can
  be repointed without reprinting.
- Analytics are privacy-conscious: counts by campaign, device class, day.
  No personal data without explicit consent.
- Client sites call a single script (`/nfc.js`) or link directly to `d/<uid>`.
- The starter's QR points at the deployed URL; replace per client.

## Production admin

The demo dashboard is a functional front-end only. The production path is
**Payload CMS** on PostgreSQL with role-based permissions, replacing
`localStorage` reads in `pages/admin.astro`. Automations are wired through the
agency's own engine — no n8n subscription.

## Common fixes

| Symptom | Cause | Fix |
|---|---|---|
| Styles not applying | Tailwind v4 needs `@tailwindcss/vite` in `astro.config.mjs` | Check the vite plugin array |
| GSAP animations play but elements stay hidden | `reduce-motion` path not resetting | `main.ts` sets `.reveal` opacity 1 in the fallback branch |
| Images not loading | Lazy images below the fold | Expected; they load on scroll |
| Fonts look different | Google Fonts blocked | Add a local fallback stack in `@theme` |

## Asset provenance

Photography in this starter is demonstration-only:

- Unsplash images (licence: Unsplash) — `cafe-interior.jpg`, `coffee-*.jpg`,
  `kinilaw.jpg`, `lechon.jpg`, `cocktail.jpg`, `bar.jpg`, `fine-dish.jpg`,
  `restaurant-table.jpg`, `pastry.jpg`, `wine.jpg`, `plating.jpg`, `panna-cotta.jpg`.
- QR code generated locally with `segno`.

Replace all of it with licensed client photography before any commercial use.
