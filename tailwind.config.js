/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: '#8B5CF6',      // Purple
        secondary: '#06B6D4',    // Cyan
        accent: '#F59E0B',       // Amber
        // Theme-aware colors
        'bg-primary': 'rgb(var(--color-bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--color-bg-secondary) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'border': 'rgb(var(--color-border) / <alpha-value>)',
        'footer-text': 'rgb(var(--color-footer-text) / <alpha-value>)',
        'footer-icon': 'rgb(var(--color-footer-icon) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
