import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Montserrat'", "sans-serif"],
      },
      colors: {
        black: "#0A0A0A",
        surface: "#111111",
        "surface-2": "#1A1A1A",
        border: "#2D2D2D",
        pink: {
          DEFAULT: "#FF1F8E",
          dark: "#D4177A",
          light: "#FF8EC7",
          50: "#FFF0F7",
        },
        silver: "#9CA3AF",
        nude: "#D4A5A5",
        gold: "#C9A84C",
        muted: "#6B7280",
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
