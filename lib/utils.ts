export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** "01", "02" … for chapter numerals */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Anchor id for a chapter in the story page */
export function chapterId(n: number) {
  return `chapter-${n}`;
}

/** Colour of each section tone, used to fade one section into the next */
export const toneColor = {
  night: "#13151c",
  parchment: "#eee2c8",
  ivory: "#f7f0e0",
  beige: "#e2d4b6",
  maroon: "#4a1318",
  mist: "#223040",
  dusk: "#10131b",
  gold: "#f6e6b8",
} as const;

export type Tone = keyof typeof toneColor;

/** Literal class names (Tailwind must see them verbatim — never build these with template strings). */
export const toneClass: Record<Tone, string> = {
  night: "tone-night",
  parchment: "tone-parchment",
  ivory: "tone-ivory",
  beige: "tone-beige",
  maroon: "tone-maroon",
  mist: "tone-mist",
  dusk: "tone-dusk",
  gold: "tone-gold",
};
