import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["JetBrainsMonoNL", "monospace"],
        dyslexic: ["OpenDyslexic", "sans-serif"],
      },
      colors: {
        border: "#3D5A80", // Bleu foncé
        input: "#98C1D9", // Bleu clair
        ring: "#F4A261", // Orange doux
        background: "#f8edeb", // Bleu pastel clair
        foreground: "#293241", // Bleu foncé profond

        primary: {
          DEFAULT: "#293241",
          foreground: "#E0FBFC",
        },
        secondary: {
          DEFAULT: "#EE6C4D",
          foreground: "#E0FBFC",
        },
        destructive: {
          DEFAULT: "#B56576", // Rose foncé
          foreground: "#E0FBFC",
        },
        muted: {
          DEFAULT: "#6D597A", // Violet grisé
          foreground: "#E0FBFC",
        },
        accent: {
          DEFAULT: "#2A9D8F", // Vert émeraude
          foreground: "#293241",
        },
        popover: {
          DEFAULT: "#FFD166", // Jaune pastel
          foreground: "#293241",
        },
        card: {
          DEFAULT: "#C7D3DD", // Gris bleu clair
          foreground: "#293241",
        },

        // Autres couleurs personnalisées
        darkblue: "#3D5A80",
        info: "#98C1D9",
        warning: "#F4A261",
        success: "#2A9D8F",
        error: "#B56576",
        highlight: "#FFD166",
        neutral: "#6D597A",
        lightneutral: "#B0A0BA",
        blackBlue: "#051923",
        lightBlue: "#e7ecef"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
} satisfies Config;

export default config;
