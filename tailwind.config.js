/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        accent: 'rgb(255, 47, 89)',
        text: '#000',
        background: '#f5f5f5',
        'primary-dark': '#000',
        'font-light': '#fff',
      },
    },
  },
  plugins: [],
}
