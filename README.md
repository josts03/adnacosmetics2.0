# Adna Cosmetics 2.0

Premium spletna stran za kozmetični salon Adna Cosmetics (Vrhnika) — www.adnacosmetics.si

## Tehnologije

- React 19 + TypeScript (strict)
- Vite 6
- Tailwind CSS v4 (`@theme` v `src/index.css`)
- Motion (Framer Motion) — animacije
- Lenis — smooth scroll
- React Router 7

## Zagon

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # tsc + produkcijski build v dist/
npm run preview  # predogled produkcijskega builda
```

## Deploy (Vercel)

Repo poveži z Vercelom — `vercel.json` že vsebuje SPA rewrite. Build ukaz: `npm run build`, output: `dist`.

## Struktura

- `src/pages/` — Home, About, Services, Pricelist, Contact, PrivacyPolicy, NotFound
- `src/components/anim.tsx` — animacijski sistem (Reveal, WordReveal, ImageReveal, Counter, Magnetic, Eyebrow)
- `src/components/Layout.tsx` — top bar, navigacija, mobilni meni, footer
- `src/components/Preloader.tsx` — uvodna zavesa ob prvem obisku (enkrat na sejo)
- Vsebina sledi `SPECIFIKACIJA.md` (tikanje, 1. oseba ednine, točni teksti in cenik)
