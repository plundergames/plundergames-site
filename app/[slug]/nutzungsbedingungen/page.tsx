import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { gamesWith, legalHtml } from "@/lib/legal";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => gamesWith("terms.de").map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = gamesWith("terms.de").find((g) => g.slug === slug);
  return { title: game ? `Nutzungsbedingungen ${game.name}` : undefined };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!gamesWith("terms.de").some((g) => g.slug === slug)) notFound();
  return <article dangerouslySetInnerHTML={{ __html: legalHtml(slug, "terms.de") }} />;
}
