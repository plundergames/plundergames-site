import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GAMES } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => GAMES.map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  return { title: game ? `Datenschutz ${game.name}` : undefined };
}

// Placeholder until the real policy exists (draft: Docs/Legal in the game repo).
export default async function Privacy({ params }: Props) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) notFound();
  return (
    <>
      <h1>{game.name} – Datenschutzerklärung</h1>
      <p>Die Datenschutzerklärung wird vor der Veröffentlichung des Spiels hier bereitgestellt.</p>
      <p className="muted">The privacy policy for {game.name} will be published here before the game is released.</p>
    </>
  );
}
