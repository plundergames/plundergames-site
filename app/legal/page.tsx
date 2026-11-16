import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/Header";
import { hasDoc } from "@/lib/legal";
import { GAMES } from "@/lib/site";

export const metadata: Metadata = { title: "Legal" };

export default function Legal() {
  return (
    <PageShell>
      <h1>Legal</h1>
      <ul className="linklist">
        {GAMES.map((g) => (
          <li key={g.slug}>
            <strong>{g.name}</strong>
            {": "}
            {hasDoc(g.slug, "privacy") ? <Link href={`/${g.slug}/privacy/`}>Privacy policy</Link> : "Privacy policy (coming)"}
            {" · "}
            {hasDoc(g.slug, "terms") ? <Link href={`/${g.slug}/terms/`}>Terms of Service</Link> : "Terms (coming)"}
          </li>
        ))}
        <li><Link href="/privacy/">Privacy policy for this website</Link></li>
        <li><Link href="/imprint/">Imprint</Link></li>
      </ul>
    </PageShell>
  );
}
