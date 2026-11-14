# plundergames-site

Studio site for Plunder Games (`plundergames.de`): Next.js 16, static export, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

- `npm install` · `npm run dev` (local) · `npm run check` (types) · `npm run build` (writes `./out`)
- **Add a game:** one entry in `lib/site.ts` (`GAMES`) gives it `/<slug>/` plus sitemap + footer links. Privacy pages: see "Legal texts".
- `public/CNAME` (custom domain) and `public/.nojekyll` must stay; `public/app-ads.txt` goes in the root of the site.
- **Open:** `app-ads.txt` (ironSource Ads + Unity Ads lines from the LevelPlay dashboard); images at release.
- DNS (netcup): `plundergames.de` A records → 185.199.108.153 / .109.153 / .110.153 / .111.153, `www` CNAME → `plundergames.github.io`; then "Enforce HTTPS" in Settings → Pages.

## Legal texts
- `content/<slug>/{privacy,terms}.md` are copies of the game repo's `Docs/Legal/{privacy-policy,terms}.en.md` (source of truth there) with `{{DATE}}` filled in. **Legal pages are English only** (owner decision); a game gets `/<slug>/privacy/` and `/<slug>/terms/` only for the files that exist. Rendered at build time with `marked`.
- `/imprint/` renders `content/imprint.md` (copy of `Docs/Legal/imprint.en.md`; linked from every footer).
- `content/drafts/website-privacy.en.md` = draft of the site's own privacy note (hosting logs); **not routed**, items marked `[CHECK]`.

## Look
- Design "Moonlit Harbor" (from the Claude design canvas): hero scene is vector art in `components/art.tsx` (placeholder until generated scene art exists), animations in `app/globals.css` (switched off for reduced motion). Fonts via `next/font` (self-hosted at build time, no requests to Google). The page footer links to `/legal/` (per-game privacy + terms) and `/imprint/`.
- Per game, `lib/site.ts` holds the card text, badge and art type.
