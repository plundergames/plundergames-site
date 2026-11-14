import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { GAMES } from "./site";

// content/<slug>/<doc>.md is copied from the game repo (Docs/Legal) with the date filled in.
// Legal pages are English only (owner decision). A game without the file gets no page yet.
export type Doc = "privacy" | "terms";
const file = (slug: string, doc: Doc) => path.join(process.cwd(), "content", slug, `${doc}.md`);
export const hasDoc = (slug: string, doc: Doc) => existsSync(file(slug, doc));
export const gamesWith = (doc: Doc) => GAMES.filter((g) => hasDoc(g.slug, doc));

export function legalHtml(slug: string, doc: Doc): string {
  return marked.parse(readFileSync(file(slug, doc), "utf8"), { async: false, breaks: true });
}
