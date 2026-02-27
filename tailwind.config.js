/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        breaker: "var(--breaker)",
        white: "var(--white)",
        "x-3rd": "var(--x-3rd)",
        "x1st-primary": "var(--x1st-primary)",
        "x2nd-primary": "var(--x2nd-primary)",
      },
    },
  },
  plugins: [],
};
