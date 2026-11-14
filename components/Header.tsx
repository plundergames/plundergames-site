import Link from "next/link";
import { SkullLogo } from "./art";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand"><SkullLogo />Plunder Games</Link>
      <nav className="nav" aria-label="Main">
        <Link href="/#games">Games</Link>
        <Link href="/imprint/">Imprint</Link>
      </nav>
    </header>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="page-band"><Header /></div>
      <main className="container page">{children}</main>
    </>
  );
}
