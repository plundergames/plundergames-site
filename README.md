# plundergames-site

Studio site for Plunder Games (`plundergames.de`): Next.js 16, static export, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

- `npm install` · `npm run dev` (local) · `npm run check` (types) · `npm run build` (writes `./out`)
- **Add a game:** one entry in `lib/site.ts` (`GAMES`) gives it `/<slug>/` plus sitemap + footer links. Privacy pages: see "Legal texts".
- `public/CNAME` (custom domain) and `public/.nojekyll` must stay; `public/app-ads.txt` goes in the root of the site.
- `public/app-ads.txt` is a copy of `Docs/Legal/app-ads.txt` in the game repo (source of truth there).
- DNS (netcup): `plundergames.de` A records → 185.199.108.153 / .109.153 / .110.153 / .111.153, `www` CNAME → `plundergames.github.io`; then "Enforce HTTPS" in Settings → Pages.

## Legal texts
- `content/<slug>/{privacy,terms}.md` are copies of the game repo's `Docs/Legal/{privacy-policy,terms}.en.md` (source of truth there) with `{{DATE}}` filled in. **Legal pages are English only** (owner decision); a game gets `/<slug>/privacy/` and `/<slug>/terms/` only for the files that exist. Rendered at build time with `marked`.
- `/imprint/` renders `content/imprint.md` (copy of `Docs/Legal/imprint.en.md`; linked from every footer).
- `content/privacy.md` = the site's own privacy policy (GitHub Pages logs, netcup DNS/mail, email contact) at `/privacy/`; update it when the site adds anything (fonts, scripts, forms, analytics).

## Look
- Design "Moonlit Harbor" (from the Claude design canvas), painted in the Habit Streak "Lebendig" style: all art (hero, page band, game cards, logo/favicon, buttons, badge ribbons) is generated WebP in `public/art/`; how to regenerate it and the links to the style reference are in [ART.md](ART.md). Fonts via `next/font` (self-hosted at build time, no requests to Google). The page footer links to `/legal/` (per-game privacy + terms), `/privacy/` (the site) and `/imprint/`.
- Per game, `lib/site.ts` holds the card text and badge; the card art is `public/art/card-<slug>.webp`.
