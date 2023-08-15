import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-soehne)'],
      },
      boxShadow: {
        'graphic': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'oscillate': 'oscillate 3s ease-in-out infinite',
      },
      keyframes: {
        oscillate: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-5px)', opacity: '0.3' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
