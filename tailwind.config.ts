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
        indie: "#962D8F"
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
        addVariant('current', '&.active');
    })],
};
export default config;
