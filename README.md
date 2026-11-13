# plundergames-site

Plain static site for the Plunder Games studio (GitHub Pages, custom domain `plundergames.de`). No build step: edit the HTML, push to `main`.

- `/` studio page with the game list (Lootbeard is one entry), `/lootbeard/privacy/`, `/impressum/` are placeholders until the texts exist.
- **Open:** real privacy policy + Impressum (needs name, address, contact e-mail from the owner); `app-ads.txt` in the root (lines from the LevelPlay dashboard for ironSource Ads + Unity Ads, **not** the Unity lines of the old Paladin's Story site); images/screenshots at release.
- DNS (netcup): `plundergames.de` A records → GitHub Pages IPs, `www` CNAME → `plundergames.github.io`. Then switch on "Enforce HTTPS" in the repo's Pages settings.
