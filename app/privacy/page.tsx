import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { PageShell } from "@/components/Header";

export const metadata: Metadata = { title: "Privacy policy" };

// Privacy policy of the website itself (the games have their own under /<slug>/privacy/).
export default function Privacy() {
  const md = readFileSync(path.join(process.cwd(), "content", "privacy.md"), "utf8");
  return <PageShell><article dangerouslySetInnerHTML={{ __html: marked.parse(md, { async: false, breaks: true }) }} /></PageShell>;
}
