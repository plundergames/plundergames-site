import Link from "next/link";
import { GAMES, SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      <h1>{SITE.name}</h1>
      <p className="muted">{SITE.tagline}</p>
      {GAMES.map((g) => (
        <div className="card" key={g.slug}>
          <h2>
            <Link href={`/games/${g.slug}/`}>{g.name}</Link>
          </h2>
          <p>{g.blurb}</p>
          <p className="muted">{g.status === "soon" ? "Erscheint bald." : "Jetzt im Store."}</p>
        </div>
      ))}
    </>
  );
}
