import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalHtml, policyGames } from "@/lib/legal";
import { GAMES } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => policyGames().map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  return { title: game ? `${game.name} – Privacy Policy` : undefined };
}

export default async function Privacy({ params }: Props) {
  const { slug } = await params;
  if (!policyGames().some((g) => g.slug === slug)) notFound();
  return <article lang="en" dangerouslySetInnerHTML={{ __html: legalHtml(slug, "privacy.en") }} />;
}
