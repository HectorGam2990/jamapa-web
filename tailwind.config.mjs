/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jamapa: {
          vino: "#5C0D2C",
          turquesa: "#1A888C",
          naranja: "#DF993F",
          verde: "#6CCD3A",
          morado: "#732F69",
          azulOscuro: "#0E5E69",
        },
      },
    },
  },
  plugins: [],
};
