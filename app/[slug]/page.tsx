import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/Header";
import { hasDoc } from "@/lib/legal";
import { GAMES } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false; // only the slugs from GAMES exist (static export)
export const generateStaticParams = () => GAMES.map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: GAMES.find((g) => g.slug === slug)?.name };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) notFound();
  return (
    <PageShell>
      <h1>{game.name}</h1>
      <p>{game.blurb}</p>
      <p>{game.storeUrl ? <a href={game.storeUrl}>View in the store</a> : <strong>{game.badge}.</strong>}</p>
      {(hasDoc(game.slug, "privacy") || hasDoc(game.slug, "terms")) && (
        <p>
          {hasDoc(game.slug, "privacy") && <Link href={`/${game.slug}/privacy/`}>Privacy policy</Link>}
          {hasDoc(game.slug, "privacy") && hasDoc(game.slug, "terms") && " · "}
          {hasDoc(game.slug, "terms") && <Link href={`/${game.slug}/terms/`}>Terms of Service</Link>}
        </p>
      )}
    </PageShell>
  );
}
