import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <>
      <h1>Impressum</h1>
      <p>Die Angaben werden vor der Veröffentlichung des ersten Spiels hier ergänzt.</p>
    </>
  );
}
