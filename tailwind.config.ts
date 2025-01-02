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
          xs:'375px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
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
        "spin-slow": "spin-slow 8s linear infinite",
      },
      keyframes: {
        drop: {
          "0%": { top: "-15%" },
          "100%": { top: "110%" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
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
