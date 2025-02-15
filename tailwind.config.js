/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'barber': {
          gold: '#D4B062',
          burgundy: '#8B2635',
          dark: '#1A1A1A',
          cream: '#F5E6D3',
        }
      },
    },
  },
  plugins: [],
};
