export const SITE = {
  name: "Plunder Games",
  url: "https://plundergames.de",
  tagline: "Small games for your phone. Pirates, monsters and the occasional bad decision.",
};

// One entry per game: add a game here and its page appears (legal pages need files in content/<slug>/,
// card art needs public/art/card-<slug>.webp, see ART.md).
export type Game = {
  slug: string;
  name: string;
  blurb: string;
  badge: string; // label on the card
  tone: "warm" | "cool"; // badge ribbon colour
  storeUrl?: string; // set when the store listing exists
};

export const GAMES: Game[] = [
  {
    slug: "lootbeard",
    name: "Lootbeard",
    blurb:
      "Pirate merge RPG. Merge loot, upgrade your crew, beat the bosses. Your pirates keep plundering while you do other things. Android first.",
    badge: "Almost in port",
    tone: "warm",
  },
  {
    slug: "grim-swordsman",
    name: "Grim Swordsman",
    blurb:
      "Dark sword-duel RPG with a sense of humour. Monsters, the undead and one swordsman who has had enough. One duel at a time, no internet needed.",
    badge: "Still at sea",
    tone: "cool",
  },
];
