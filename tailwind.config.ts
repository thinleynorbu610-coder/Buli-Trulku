import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  safelist: [
    "tone-night",
    "tone-parchment",
    "tone-ivory",
    "tone-beige",
    "tone-maroon",
    "tone-mist",
    "tone-dusk",
    "tone-gold",
  ],
  theme: {
    extend: {
      colors: {
        // Bhutanese Buddhist palette
        maroon: {
          DEFAULT: "#5a1a20",
          deep: "#3a0f14",
          light: "#7b2630",
        },
        gold: {
          DEFAULT: "#b8923a", // antique gold — lines, dividers, icons
          light: "#d6b566",
          soft: "#ead7a3",
          ink: "#7a5a1a", // gold dark enough for small text on ivory
        },
        saffron: "#c8782a",
        ivory: "#f7f0e0",
        parchment: "#eee2c8",
        beige: "#e2d4b6",
        brown: "#3a2a1e",
        charcoal: "#2a2623",
        himalaya: {
          DEFAULT: "#5f7a8c", // muted Himalayan blue
          deep: "#2c3b4a",
          mist: "#a9bac6",
        },
        night: {
          DEFAULT: "#13151c",
          soft: "#1b2030",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        jomolhari: ["Jomolhari", "serif"],
        tibetan: [
          '"Noto Serif Tibetan"',
          '"Noto Sans Tibetan"',
          "Jomolhari",
          '"Microsoft Himalaya"',
          "Kailasa",
          '"Tibetan Machine Uni"',
          "serif",
        ],
      },
      letterSpacing: {
        sacred: "0.28em",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(-2%,0,0)" },
          "50%": { transform: "translate3d(2%,0,0)" },
        },
        smoke: {
          "0%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0" },
          "15%": { opacity: "0.35" },
          "100%": {
            transform: "translate3d(18px,-220px,0) scale(2.4)",
            opacity: "0",
          },
        },
        glow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.95" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.9", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.06)" },
        },
      },
      animation: {
        drift: "drift 40s ease-in-out infinite",
        "drift-slow": "drift 70s ease-in-out infinite",
        smoke: "smoke 9s ease-out infinite",
        glow: "glow 6s ease-in-out infinite",
        flicker: "flicker 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
