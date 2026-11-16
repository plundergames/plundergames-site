import type { MetadataRoute } from "next";
import { gamesWith } from "@/lib/legal";
import { GAMES, SITE } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/imprint/",
    "/privacy/",
    "/legal/",
    ...GAMES.map((g) => `/${g.slug}/`),
    ...gamesWith("privacy").map((g) => `/${g.slug}/privacy/`),
    ...gamesWith("terms").map((g) => `/${g.slug}/terms/`),
  ];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
