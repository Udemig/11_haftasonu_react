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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      // backgroundImage: {
      //   "hero-bg":
      //     "linear-gradient(rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/src/app/assets/bg.jpg')",
      // },
    },
  },
  plugins: [],
} satisfies Config;
