import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { GAMES, SITE } from "@/lib/site";

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
            {GAMES.map((g) => (
              <span key={g.slug}>
                {" · "}
                <Link href={`/games/${g.slug}/privacy/`}>Datenschutz {g.name}</Link>
              </span>
            ))}
            {" · "}
            <Link href="/impressum/">Impressum</Link>
          </footer>
        </main>
      </body>
    </html>
  );
}
