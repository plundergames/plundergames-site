import type { MetadataRoute } from "next";
import { policyGames } from "@/lib/legal";
import { GAMES, SITE } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/impressum/", ...GAMES.map((g) => `/${g.slug}/`), ...policyGames().flatMap((g) => [`/${g.slug}/privacy/`, `/${g.slug}/datenschutz/`])];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
