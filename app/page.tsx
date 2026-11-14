import Link from "next/link";
import { Header } from "@/components/Header";
import { CastleArt, HarborScene, ShipArt, SkullBig } from "@/components/art";
import { GAMES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="scene">
        <div className="shafts" aria-hidden="true" />
        <HarborScene />
        <Header />
        <div className="container hero-copy">
          <p className="eyebrow">Mobile games for landlubbers</p>
          <h1>Loot first. Questions later.</h1>
          <p className="lead">Small games for your phone. Pirates, monsters and the occasional bad decision.</p>
          <Link className="btn" href="/#games">Show me the loot</Link>
        </div>
      </section>

      <section id="games" className="container section">
        <div className="section-head">
          <SkullBig />
          <h2>The fleet</h2>
        </div>
        <div className="cards">
          {GAMES.map((g) => (
            <article key={g.slug} className={`card ${g.art}`}>
              {g.art === "ship" ? <ShipArt /> : <CastleArt />}
              {g.art === "ship" && <div className="water" aria-hidden="true" />}
              <span className={`badge ${g.tone}`}>{g.badge}</span>
              <div className="card-body">
                <h3>{g.name}</h3>
                <p>{g.blurb}</p>
                <Link className="btn small" href={`/${g.slug}/`}>Game page</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
