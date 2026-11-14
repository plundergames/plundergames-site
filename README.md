# plundergames-site

Studio site for Plunder Games (`plundergames.de`): Next.js 16, static export, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

- `npm install` · `npm run dev` (local) · `npm run check` (types) · `npm run build` (writes `./out`)
- **Add a game:** one entry in `lib/site.ts` (`GAMES`) gives it `/<slug>/` plus sitemap + footer links. Privacy pages: see "Legal texts".
- `public/CNAME` (custom domain) and `public/.nojekyll` must stay; `public/app-ads.txt` goes in the root of the site.
- **Open:** real privacy policy + Impressum (name, address, contact e-mail from the owner); `app-ads.txt` (ironSource Ads + Unity Ads lines from the LevelPlay dashboard); images at release.
- DNS (netcup): `plundergames.de` A records → 185.199.108.153 / .109.153 / .110.153 / .111.153, `www` CNAME → `plundergames.github.io`; then "Enforce HTTPS" in Settings → Pages.

## Legal texts
- `content/<slug>/{privacy,terms}.{en,de}.md` are copies of the game repo's `Docs/Legal/{privacy-policy,terms}.{en,de}.md` (source of truth there) with `{{DATE}}` filled in; a game gets `/<slug>/privacy/`, `/datenschutz/`, `/terms/`, `/nutzungsbedingungen/` only for the files that exist. Rendered at build time with `marked`.
- `/impressum/` is still a placeholder until `{{PHONE}}` / `{{VAT_ID}}` are settled (`Docs/Legal/impressum.de.md`, `imprint.en.md`).
- `content/drafts/website-datenschutz.de.md` = draft of the site's own privacy note (hosting logs); **not routed**, items marked `[PRÜFEN]`.
