import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "dark-gray": "#141414",
        "soft-orange": "#fec89a",
        "light-salmon": "#faa381",
        "off-white": "#f8f7ff",
      },
    },
  },
  plugins: [],
};
export default config;
