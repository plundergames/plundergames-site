import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/Header";
import { gamesWith, legalHtml } from "@/lib/legal";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => gamesWith("privacy").map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = gamesWith("privacy").find((g) => g.slug === slug);
  return { title: game ? `Privacy Policy – ${game.name}` : undefined };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!gamesWith("privacy").some((g) => g.slug === slug)) notFound();
  return <PageShell><article dangerouslySetInnerHTML={{ __html: legalHtml(slug, "privacy") }} /></PageShell>;
}
