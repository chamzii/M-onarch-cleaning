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
        display: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        light: "#F4F9F8",
        teal: "#0ABFA3",
        "teal-dark": "#089082",
        "teal-light": "#E6F7F5",
        navy: "#1C2B3A",
        gray: "#64748B",
        border: "#E2E8F0",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
