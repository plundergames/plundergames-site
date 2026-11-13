export const SITE = {
  name: "Plunder Games",
  url: "https://plundergames.de",
  tagline: "Kleine Spiele fürs Handy.",
};

// One entry per game: add a game here and its page + privacy page appear.
export type Game = {
  slug: string;
  name: string;
  blurb: string;
  status: "soon" | "live";
  storeUrl?: string; // set when the store listing exists
};

export const GAMES: Game[] = [
  {
    slug: "lootbeard",
    name: "Lootbeard",
    blurb: "Piraten-Merge-RPG: Items zusammenführen, die Crew aufrüsten, Bosse besiegen.",
    status: "soon",
  },
];
