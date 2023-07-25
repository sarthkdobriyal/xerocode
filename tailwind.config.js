/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['var(--font-space-grotesk)'],
        open : ['var(--font-open-sans)'],
        urbanist: ['var(--font-urbanist)'],
        abeezee: ['var(--font-abeezee)'],
      },
    },
  },
  plugins: [ ],
}
