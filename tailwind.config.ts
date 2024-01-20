import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "qu-gray": {
          100: "#EDF2F7",
          200: "#E2E8F0",
          600: "#4A5568",
          900: "#171923",
        },
        primary: {
          500: "#0EA7DA",
          600: "#0099CC",
        },
      },
    },
  },
  plugins: [],
};
export default config;
