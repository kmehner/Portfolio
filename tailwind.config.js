// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#3498db',       // your blue
        accent:    'rgb(255, 47, 89)',// your pink
        text:      '#000000',
        background:'#f5f5f5',
        'primary-dark':'#000000',
        'font-light': '#ffffff',
      },
    },
  },
  plugins: [],
})
