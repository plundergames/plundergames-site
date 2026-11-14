import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { GAMES } from "./site";

// content/<slug>/privacy.{en,de}.md is copied from the game repo (Docs/Legal) with the date filled in.
// A game without these files gets no privacy pages yet.
const file = (slug: string, name: string) => path.join(process.cwd(), "content", slug, `${name}.md`);
export const hasPolicy = (slug: string) => existsSync(file(slug, "privacy.en"));
export const policyGames = () => GAMES.filter((g) => hasPolicy(g.slug));

export function legalHtml(slug: string, name: "privacy.en" | "privacy.de"): string {
  return marked.parse(readFileSync(file(slug, name), "utf8"), { async: false });
}
