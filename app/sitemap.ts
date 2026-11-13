import type { MetadataRoute } from "next";
import { GAMES, SITE } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/impressum/", ...GAMES.flatMap((g) => [`/games/${g.slug}/`, `/games/${g.slug}/privacy/`])];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
