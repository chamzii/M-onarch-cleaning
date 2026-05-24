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
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "#0369A1",
          dark: "#0284C7",
          light: "#EFF6FF",
          100: "#EFF6FF",
          400: "#38BDF8",
          600: "#0369A1",
          700: "#0284C7",
        },
        dark: "#0F172A",
        navy: "#0F172A",
        gray: "#475569",
        "light-gray": "#F8FAFC",
        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
};

export default config;
