# plundergames-site

Studio site for Plunder Games (`plundergames.de`): Next.js 16, static export, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

- `npm install` · `npm run dev` (local) · `npm run check` (types) · `npm run build` (writes `./out`)
- **Add a game:** one entry in `lib/site.ts` (`GAMES`) gives it `/games/<slug>/` and `/games/<slug>/privacy/` plus sitemap + footer links. Replace the placeholder text in `app/games/[slug]/privacy/page.tsx` (or add per-game content) when the real policy exists.
- `public/CNAME` (custom domain) and `public/.nojekyll` must stay; `public/app-ads.txt` goes in the root of the site.
- **Open:** real privacy policy + Impressum (name, address, contact e-mail from the owner); `app-ads.txt` (ironSource Ads + Unity Ads lines from the LevelPlay dashboard); images at release.
- DNS (netcup): `plundergames.de` A records → 185.199.108.153 / .109.153 / .110.153 / .111.153, `www` CNAME → `plundergames.github.io`; then "Enforce HTTPS" in Settings → Pages.
