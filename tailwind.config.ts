import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  preflight: {
    "body": { "background-color": "rgb(249 250 251)" },
    "::selection": {
      "background-color": "#000",
      "color": "#fff",
    },
    "@media (prefers-color-scheme: dark)": {
      "body": { "background-color": "rgb(31 41 55)" },
      "::selection": {
        "background-color": "#fff",
        "color": "#000",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
