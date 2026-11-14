import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { PageShell } from "@/components/Header";

export const metadata: Metadata = { title: "Imprint" };

// content/imprint.md is a copy of Docs/Legal/imprint.en.md in the game repo (source of truth there).
export default function Imprint() {
  const md = readFileSync(path.join(process.cwd(), "content", "imprint.md"), "utf8");
  return <PageShell><article dangerouslySetInnerHTML={{ __html: marked.parse(md, { async: false, breaks: true }) }} /></PageShell>;
}
