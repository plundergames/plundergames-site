import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SITE } from "@/lib/site";

// next/font downloads the fonts at build time and serves them from this domain (no request to Google by visitors).
const display = Fraunces({ subsets: ["latin"], weight: ["800"], variable: "--font-display" });
const body = Nunito({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s – ${SITE.name}` },
  description: SITE.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <footer className="site-footer">
          <div className="container">
            <span>© 2026 Plunder Games · Stuttgart</span>
            <nav aria-label="Legal">
              <Link href="/legal/">Legal</Link>
              <Link href="/privacy/">Privacy</Link>
              <Link href="/imprint/">Imprint</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
