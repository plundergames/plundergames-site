import type { Metadata } from "next";

export const metadata: Metadata = { title: "Imprint" };

// Placeholder until the VAT ID / phone line are settled (source: Docs/Legal/imprint.en.md in the game repo).
export default function Imprint() {
  return (
    <>
      <h1>Imprint</h1>
      <p>The details will be added before the first game is released.</p>
    </>
  );
}
