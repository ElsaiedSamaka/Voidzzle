/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#194638",
          secondary: "#c3beb6",
          accent: "#181a1b",
          white: "#fff",
        },
        light: {
          primary: "#c9ecde",
          secondary: "#2d3748",
          accent: "#009f60",
          black: "#000",
        },
      },
      screens: {
        xs: "300px",
      },
      direction: {
        rtl: "rtl", // Right-to-left
      },
    },
  },

  plugins: [
    
  ],
};
