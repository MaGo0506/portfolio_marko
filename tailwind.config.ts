import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        primary_color_mg: 'var(--primary-color-mg)',
        sky: {
          400: '#38bdf8',
        },
      },
    },
  },
  plugins: [],
}
export default config
