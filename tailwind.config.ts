import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cool: "#fdfbf8",
        // sand: "#f1e6e0",
        griey: "#F6F6F6",
        indie: "#962D8F",
        primary: {
          DEFAULT: "#343BFE",
          hover: "#2F35E5",
          disable: "#E7E7E8",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          hover: "#E7EAF1",
        },
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
        addVariant('current', '&.active');
    })],
};
export default config;
