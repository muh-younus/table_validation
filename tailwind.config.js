/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",       // For React files
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}", // PrimeReact
    "./node_modules/reactstrap/**/*.{js,ts,jsx,tsx}", // Reactstrap
    "./node_modules/react-bootstrap/**/*.{js,ts,jsx,tsx}", // React-Bootstrap
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
