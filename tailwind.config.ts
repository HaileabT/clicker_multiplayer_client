import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg_primary: "#FFA800",
      bg_secondary: "#00D1FF",
      bg_black: "#262322",
      bg_white:"#E5E4EF"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'bottom-left': '10px 10px 10px rgba(0, 0, 0, 1)', // Customize offset and blur here
      },

      keyframes: {
        //animation definition
      },
      animation: {
        //animation usage
      },
    },
  },
  plugins: [],
};
export default config;
