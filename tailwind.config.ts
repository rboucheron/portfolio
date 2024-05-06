import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#ff6d0a',
        secondary: '#fffbf9',
        warning: '#2f2f2f',
        gris: '#b1b1b1',
        dark: '#1b1b1b'

      },
      fontFamily: {
        sans: ['JetBrainsMono', 'sans-serif']
      }
    }
  },
  plugins: []

}
export default config
