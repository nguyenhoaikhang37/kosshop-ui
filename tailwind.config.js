/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // zoom animation infinity
        zoom2: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoom2: "zoom2 1s linear infinite",
      },
      colors: {
        primary: "#1074a5",
        secondary: "#cf3434",
        dark: "#333",
        heading: "#505F76",
        arrow: "#c5c4c4",
        greyLight: "#f2f2f2",
        greyEE: "#d5dfee",
        greyC4: "#c5c4c4",
        greyBg: "#ddd",
        fbColor: "#4267b2",
        youtubeColor: "#c4302b",
      },
      boxShadow: {
        box: "0 3px 5px -1px rgba(0,0,0,.08), 0 6px 10px 0 rgba(0,0,0,.08), 0 1px 18px 0 rgba(0,0,0,.08)",
        header: "1px 1px 5px rgba(0,0,0,.15)",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
};
