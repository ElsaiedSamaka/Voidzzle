/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bgPrimary: '#000',
          // 181a1b
          bgSecondary: '#18181a',
          textPrimary: '#ededed',
          textSecondary: '#F5F5F5',
          iconPrimary: '#DFE1E3',
          iconSecondary: '#F5F5F5',
          bgDisabled: '#818182',
          border: '#27272a',
          primary: '#bd1d1d',
          accent: '#181a1b',
        },
        light: {
          bgPrimary: '#FFFFFF',
          bgSecondary: '#F5F5F5',
          textPrimary: '#212429',
          textSecondary: '#868D94',
          iconPrimary: '#C9CCCF',
          iconSecondary: '#495057',
          bgDisabled: '#C9CCCF',
          border: '#e7e5e4',
          primary: '#d92525',
          accent: '#181a1b',
        },
      },
      screens: {
        xs: '300px',
      },
    },
  },

  plugins: [],
};
