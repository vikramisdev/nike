/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },         // Start at first slide
          '20%': { transform: 'translateX(0%)' },        // Hold for delay on first slide
          '25%': { transform: 'translateX(-100%)' },     // Move to second slide
          '45%': { transform: 'translateX(-100%)' },     // Hold for delay on second slide
          '50%': { transform: 'translateX(-200%)' },     // Move to third slide
          '70%': { transform: 'translateX(-200%)' },     // Hold for delay on third slide
          '75%': { transform: 'translateX(-300%)' },     // Move to fourth slide
          '95%': { transform: 'translateX(-300%)' },     // Hold for delay on fourth slide
          '100%': { transform: 'translateX(0%)' },       // Reset to start for infinite loop
        },
      },
      animation: {
        slide: 'slide 12s ease-in-out infinite 1s',
      },
    },
  },
  plugins: [],
}
