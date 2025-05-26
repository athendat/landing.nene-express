/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nex-yellow': '#f7c600',
        'nex-dark': '#1a1a1a',
        'nex-gray': '#e5e5e5',
      },
      fontFamily: {
        'display': ['Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: [],
}