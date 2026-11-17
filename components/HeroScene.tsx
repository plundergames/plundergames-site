// Layered, animated hero painting (layers in public/art/hero/, see ART.md). Positions and motion live in globals.css.
import { Pic } from "./Pic";
const H = "/art/hero/";

// Strips that scroll endlessly: four copies side by side (enough to cover the stage), the animation moves by one copy.
function Strip({ cls, src }: { cls: string; src: string }) {
  return (
    <div className={`strip ${cls}`}>
      {[0, 1, 2, 3].map((i) => <Pic key={i} src={H + src} alt="" />)}
    </div>
  );
}

export function HeroScene() {
  return (
    <div className="stage-box" aria-hidden="true">
      <div className="stage">
        <Pic className="full" src={H + "sky.webp"} alt="" />
        <div className="stars" />
        <div className="moon-glow" />
        <Pic className="moon" src={H + "moon.webp"} alt="" />
        <Strip cls="clouds" src="clouds.webp" />
        <div className="ship"><Pic src={H + "ship.webp"} alt="" /></div>
        <Strip cls="waves far" src="waves.webp" />
        <Pic className="full" src={H + "land.webp"} alt="" />
        <div className="beam" />
        <div className="lamp" />
        <Strip cls="waves near" src="waves.webp" />
        <Pic className="full" src={H + "fore.webp"} alt="" />
        <div className="pirate" />
        <div className="lantern" />
      </div>
    </div>
  );
}
