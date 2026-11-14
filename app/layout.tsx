import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { gamesWith } from "@/lib/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s – ${SITE.name}` },
  description: SITE.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <main>
          {children}
          <footer>
            <Link href="/">{SITE.name}</Link>
            {gamesWith("privacy").map((g) => (
              <span key={g.slug}>
                {" · "}
                <Link href={`/${g.slug}/privacy/`}>Privacy ({g.name})</Link>
                {" · "}
                <Link href={`/${g.slug}/terms/`}>Terms ({g.name})</Link>
              </span>
            ))}
            {" · "}
            <Link href="/imprint/">Imprint</Link>
          </footer>
        </main>
      </body>
    </html>
  );
}
