import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F1F3D',
          secondary: '#1B365F',
          accent: '#F0B429'
        }
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(15, 31, 61, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
