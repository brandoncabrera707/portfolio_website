import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarbackground: "#181818",
        background: "var(--background)",
        foreground: "var(--foreground)",
        logoBlue: "#39d5ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
