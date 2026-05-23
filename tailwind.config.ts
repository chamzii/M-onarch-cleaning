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
        green: {
          DEFAULT: "#5C9E28",
          dark: "#4A8020",
          light: "#EFF7E6",
          100: "#EFF7E6",
          600: "#5C9E28",
          700: "#4A8020",
        },
        dark: "#1C2B1C",
        navy: "#1C2B3A",
        gray: "#5A6472",
        "light-gray": "#F7F7F5",
        border: "#E5E5E5",
      },
    },
  },
  plugins: [],
};

export default config;
