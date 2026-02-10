/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        heartPop: 'heartPop 1.5s ease-out forwards',
      },
      keyframes: {
        heartPop: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(3)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}