import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cormorant)", "serif"],
        serif: ["var(--font-great-vibes)", "cursive"],
      },
      colors: {
        "dusty-teal": "#7696a5",
        "sky-lavender": "#a6c3e3",
        "olive-brown": "#585d46",
        sage: "#b4b99a",
        "cream-beige": "#d3c1ad",
        "dusty-rose": "#d7c0b8",
        "coffee-milk": "#a78d76",
        "bitter-chocolate": "#543e31",
        "dark-oak": "#352b22",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
