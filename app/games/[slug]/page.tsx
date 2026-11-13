import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GAMES } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false; // only the slugs from GAMES exist (static export)
export const generateStaticParams = () => GAMES.map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  return { title: game?.name };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) notFound();
  return (
    <>
      <h1>{game.name}</h1>
      <p>{game.blurb}</p>
      {game.storeUrl ? (
        <p><a href={game.storeUrl}>Im Store ansehen</a></p>
      ) : (
        <p className="muted">Erscheint bald.</p>
      )}
      <p><Link href={`/games/${game.slug}/privacy/`}>Datenschutzerklärung</Link></p>
    </>
  );
}
