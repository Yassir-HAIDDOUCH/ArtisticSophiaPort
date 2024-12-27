/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#305cde', // Default shade of primary color
          light: '#59b5f7',   // Lighter shade
          dark: '#305cde',    // Darker shade
        },
        secondary: {
          DEFAULT: '#182e6f', // Default shade of secondary color
          light: '#274ab3',   // Lighter shade
          dark: '#182e6f',    // Darker shade
        },
      },
      container: {
        center: true, // Centers the container
        padding: '1rem', // Adds padding to the container
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}
