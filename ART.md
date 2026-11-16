# Site art

All painted art on the site (`public/art/`) uses the **Lebendig** ("playful") style of the Habit Streak project. The style reference and its guide live there only — link to them, do not copy them into this repo.

- **Style image:** [`mood-4-playful.png`](https://github.com/plundergames/habit-streak-app/blob/main/assets/references/style/mood-4-playful.png) (habit-streak-app, `main`). Saturated, slightly greyed cobalt-blue surroundings, warm brass/amber focal accents, teal lamp glow, blue rim light, crisp near-white highlights.
- **Guide:** [DESIGN.md → "Creating painted tower floors"](https://github.com/plundergames/habit-streak-app/blob/main/docs/DESIGN.md#creating-painted-tower-floors) (how mood images are used: one style image per generation, describe the subject in text, never feed earlier renders back in) and the [style guide](https://github.com/plundergames/habit-streak-app/blob/main/assets/references/style/making-of/style-guide.md) (section "Mood 4" = Lebendig).

The style image only sets the look; what is painted comes from the prompt.

## Generating

1. Get the style image as a local file (the image tool needs a path, not a URL):
   `git -C <habit-streak-app> show main:assets/references/style/mood-4-playful.png > <scratch>/mood-4-playful.png`
2. Generate through the local Codex app (`codex-images` MCP / codex-image skill, ChatGPT subscription). Prompt = subject text + this style tail:

   > Paint it as a polished, stylized digital fantasy illustration (painted game key art) in the style of the attached style image: use the style image for brushwork, shape simplification, palette and lighting: a saturated, slightly greyed cobalt-blue environment with warm brass and amber focal accents, teal lamp glow, cool blue rim light, crisp near-white highlights, deep navy shadows. Do not copy the subject or composition of the style image. No text, letters, logos or watermarks.
   >
   > Reference images: load the local file and pass it to the image generation tool as an input image.
   > - Style image: `<scratch>/mood-4-playful.png`

   UI pieces (buttons, ribbons, icons) ask for a fully transparent background and a plain, evenly lit middle so HTML text can sit on top. Scenes ask for a calm, dark area where text goes and a bottom edge fading into the page color `#0E1132`.
3. Export to `public/art/` as WebP (scenes) or PNG/WebP with alpha (UI), sized for 2× the CSS size.

## Pieces

| File | Subject (prompt core) |
|---|---|
| `hero/*.webp` | layered, animated hero (below) |
| `band.webp` | 4:1 harbor skyline from the water, mostly dark, for the inner-page header |
| `card-lootbeard.webp` | 4:5 red-bearded pirate captain on the bow with a heap of loot; bottom third dark sea for text |
| `card-grim-swordsman.webp` | 4:5 weary swordsman from behind facing a gothic castle, nervous skeleton with lantern behind a gravestone; bottom third dark |
| `logo.webp` (+ `app/icon.png`) | pirate skull with bandana and crossed cutlasses on a round cobalt badge with brass rim (also the favicon) |
| `flag.webp` | jolly-roger flag on a short pole (section icon) |
| `btn-amber.webp` / `btn-blue.webp` | blank 4:1 pill buttons: amber-brass (primary) and cobalt enamel with brass rim (nav) |
| `ribbon-warm.webp` / `ribbon-cool.webp` | blank swallowtail ribbons for card badges |

## Hero layers (`public/art/hero/`, `components/HeroScene.tsx`)

The hero is one painting split into layers so parts can move. First a complete 16:9 scene was generated (pirate harbor at night: left 45 % calm sky/sea for the headline; right: moon, lighthouse on a cliff, crooked town and pier, anchored pirate ship, pirate with a teal lantern on a jetty with a treasure chest). Each layer was then generated **with that scene attached as the first reference image** (style image second), asking to keep only one part, so the layers line up:

| Layer | Prompt core | Motion (globals.css) |
|---|---|---|
| `sky.webp` | background plate: only sky and sea, everything else removed, soft glow where the moon was; opaque | – (stars on top twinkle) |
| `moon.webp` | the moon disc alone, no halo | glow pulses behind it |
| `clouds.webp` | wide strip of separate cloud banks, empty left/right edges so it tiles | drifts left |
| `ship.webp` | the ship alone, hull painted below the waterline | bobs and rocks |
| `waves.webp` | wide strip of wave crests/glints, empty edges | two copies scroll at different speeds, blended with `screen` |
| `land.webp` | cliff, lighthouse, town, pier in the same framing, hidden parts painted in | lamp flickers, CSS beam sweeps |
| `fore.webp` | jetty, bollard, rope, chest in the same framing, pirate removed | – |
| `pirate-gpt.avif` (+ `.webp` fallback) | the pirate as a generated 4-pose sheet (463 × 677 per pose, poses aligned on the standing boot); 7 in-betweens per pose pair computed with optical flow (OpenCV DIS, both directions, premultiplied RGBA warp, loop 0-1-2-3-0 closed), giving 32 frames laid out as an 8 × 4 grid (3704 × 2708; a single 10k px strip broke on some devices). AVIF (quality 40, ~500 KB) is ~40 % smaller than the WebP and is served via `image-set()` inside `@supports`, so browsers without it get the WebP. Give each new sprite a new file name so a cached stylesheet never meets a new image | columns `steps(8)` every 0.72 s, rows `steps(4)` over 2.88 s; teal lantern glow follows the measured lantern centre per frame and flickers |

Post-processing (sharp): sprite alpha below ~140 is cut and the rest stretched (the tool leaves a pale matte fringe); clouds/waves get a milder alpha curve. The raw 4-pose sheet drifted by up to 20 px between poses and looked choppy with hard steps; aligned on the boot and interpolated it runs smoothly. (An owner-made 16-frame GIF version was live in between; the interpolated generated poses were preferred.) Positions in CSS are percentages measured on the original scene (moon centre 76.8 % / 10.3 %, lamp 91.9 % / 9.4 %, …). The stage keeps 16:9 and covers the section like `background-size: cover`, anchored at 72 % horizontally; vertically it crops 15 % from the top and 85 % from the bottom so moon and lighthouse stay visible on wide screens (the hero is at least half the viewport width tall). Everything stops under `prefers-reduced-motion`.

## Share image

`app/opengraph-image.jpg` and `app/twitter-image.jpg` (1200 × 630, Next.js file convention → `og:image` / `twitter:image`) are a headless-browser screenshot of the home page hero at 1200 × 630 with the nav, the button and everything below the hero hidden. Retake it when the hero or the headline changes.
