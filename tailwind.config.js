/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Professional Design System
        primary: {
          DEFAULT: "#6B4423",
          dark: "#4A2E18",
          light: "#8B5A3C",
        },
        secondary: "#D4A574",
        accent: "#E67E22",
        cream: "#F8F6F3",
        bone: "#F7F4EE",
        chocolate: {
          DEFAULT: "#2C1810",
          dark: "#1A0F0A",
          light: "#4A2E18",
        },
        "text-dark": "#2C1810",
        "text-light": "#6B6B6B",
        surface: "#FFFFFF",
        "cafe-bg": "#F5F2ED",
        "cafe-text": "#57534e",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.15)",
        soft: "0 2px 8px rgba(0,0,0,0.06)",
        nav: "0 4px 30px rgba(0,0,0,0.08)",
      },
      spacing: {
        section: "100px",
        "section-mobile": "60px",
      },
      fontSize: {
        display: ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["56px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h2: ["48px", { lineHeight: "1.2" }],
        h3: ["32px", { lineHeight: "1.3" }],
        h4: ["24px", { lineHeight: "1.4" }],
        body: ["16px", { lineHeight: "1.75" }],
        small: ["14px", { lineHeight: "1.6" }],
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
    }
  },
  plugins: [],
}
