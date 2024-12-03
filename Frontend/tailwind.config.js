export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#313131',
        secondary: '#FFFFFF',
        Blue: '#3b82f6',  // Blue color
        Green: '#10b981', // Green color
        Pink: '#ec4899',  // Pink color
        Violet: '#8b5cf6', // Violet color
        Rose: '#f43f5e',   // Rose color
        Amber: '#f59e0b',  // Amber color
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)',
      }
    },
  },
  // safelist: [
  //   {
  //     pattern: /(text|bg|border)-(Blue|Green|Pink|Violet|Rose|Amber)-(300|400|500)/,
  //   },
  // ],
  plugins: [],
}
