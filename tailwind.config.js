/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  // Security: Restrict CSS generation to prevent CSS injection
  safelist: [
    // Allow specific dynamic classes if needed (none currently used)
  ],
  blocklist: [
    // Block potentially dangerous classes
    'eval',
    'expression',
    'javascript',
    'vbscript',
    'data:',
    'javascript:',
    'onload',
    'onerror',
    'onclick'
  ],
  theme: {
    extend: {
      colors: {
        chai: '#8B4513',
        cream: '#F5DEB3',
        dark: '#2C2C2C',
        accent: '#D4A574',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
