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
        "primary": "#5a189a",
        "secondary": "#9d4edd",
        "dark-gray": "#141414",
        "off-white": "#f8f7ff",
      },
      boxShadow: {
        "inner-soft": " 0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
