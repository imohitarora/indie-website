import type { Config } from "tailwindcss";
import { theme } from "./src/theme";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...theme.colors,
      },
    },
  },
  plugins: [],
};
export default config;
