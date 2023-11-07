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
          bgPrimary: "#000",
          bgSecondary: "#18181a",
          textPrimary: "#fff",
          textSecondary: "#a1a1aa",
          bgDisabled: "#818182",
          primary: "#4e0000",
          accent: "#181a1b",
        },
        light: {
          bgPrimary: "#FFFFFF",
          bgSecondary: "#F5F5F5",
          textPrimary: "#212429",
          textSecondary: "#868D94",
          bgDisabled: "#C9CCCF",
          primary: "#FA254C",
          accent: "#181a1b",
        },
      },
      screens: {
        xs: "300px",
      },
    },
  },

  plugins: [],
};
