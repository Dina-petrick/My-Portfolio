/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "200px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: "#0a0a0a",
        secondary: "#1a1a1a",
        accent: "#f5f5f5",
        text: {
          primary: "#0a0a0a",
          secondary: "#525252",
          muted: "#737373",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
