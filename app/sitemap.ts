import type { MetadataRoute } from "next";
import { gamesWith } from "@/lib/legal";
import { GAMES, SITE } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/impressum/", ...GAMES.map((g) => `/${g.slug}/`), ...(["privacy.en", "privacy.de", "terms.en", "terms.de"] as const).flatMap((d) => gamesWith(d).map((g) => `/${g.slug}/${{ "privacy.en": "privacy", "privacy.de": "datenschutz", "terms.en": "terms", "terms.de": "nutzungsbedingungen" }[d]}/`))];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
