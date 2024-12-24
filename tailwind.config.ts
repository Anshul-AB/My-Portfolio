import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      animation: {
        drop: "drop 15s cubic-bezier(0.4, 0.26, 0, 0.97) infinite",
      },
      keyframes: {
        drop: {
          "0%": { top: "-15%" },
          "100%": { top: "110%" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".animation-delay-1s": { "animation-delay": "1s" },
        ".animation-delay-1\\.5s": { "animation-delay": "1.5s" },
        ".animation-delay-2s": { "animation-delay": "2s" },
        ".animation-delay-2\\.5s": { "animation-delay": "2.5s" },
        ".animation-delay-3s": { "animation-delay": "3s" },
        ".animation-delay-4s": { "animation-delay": "4s" },
        ".animation-delay-5s": { "animation-delay": "5s" },
      };
      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;
