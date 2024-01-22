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
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          800: "#1A202C",
          900: "#171923",
        },
        primary: {
          50: "#E1F5F9",
          500: "#0EA7DA",
          600: "#0099CC",
          800: "#0076A6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
