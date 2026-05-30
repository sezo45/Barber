/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Bebas Neue', 'cursive'],
      },
      colors: {
        gold: {
          300: '#f5d78e',
          400: '#f0c848',
          500: '#d4a017',
          600: '#b8860b',
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#d4a017",
          "secondary": "#1a1a1a",
          "accent": "#f0c848",
          "neutral": "#111111",
          "base-100": "#0d0d0d",
          "base-200": "#1a1a1a",
          "base-300": "#252525",
          "base-content": "#f5f5f0",
        },
        light: {
          "primary": "#d4a017",
          "secondary": "#f5f5f0",
          "accent": "#b8860b",
          "neutral": "#f0ede8",
          "base-100": "#faf9f6",
          "base-200": "#f0ede8",
          "base-300": "#e5e2dc",
          "base-content": "#111111",
        }
      }
    ],
  },
}
