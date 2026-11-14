import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { gamesWith, legalHtml } from "@/lib/legal";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => gamesWith("privacy.en").map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = gamesWith("privacy.en").find((g) => g.slug === slug);
  return { title: game ? `Privacy Policy – ${game.name}` : undefined };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!gamesWith("privacy.en").some((g) => g.slug === slug)) notFound();
  return <article lang="en" dangerouslySetInnerHTML={{ __html: legalHtml(slug, "privacy.en") }} />;
}
