/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
      },
      screens: {
        DEFAULT: "1280px",
      },
    },
    extend: {
      // Custom responsive breakpoints to match requested device ranges.
      // Keep existing behavior for the current MacBook layout by adding
      // explicit ranges for mobile/tablet/laptop/desktop.

      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        afacad: ["Afacad", "sans-serif"],
      },
      screens: {
        // Mobile: up to 640px
        mobile: { max: "640px" },
        // Tablet: 641px - 1024px
        tablet: { min: "641px", max: "1024px" },
        // Small laptops: 1025px - 1366px
        "lap-sm": { min: "1025px", max: "1366px" },
        // Larger desktops: 1367px and up
        "lg-desktop": { min: "1367px" },
      },
      colors: {
        brand: "#ff9934",
      },
    },
  },
  plugins: [],
};
