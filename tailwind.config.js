/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#0D0D0D",
        "primary-task": "#0DD9D9",
        "secondary-task": "#731D55",
        "third-task": "#F2A30F",
        "last-task": "#F26E22"
      },
    },
  },
  plugins: [],
}

