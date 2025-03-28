/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // कंटेंट को सही से स्कैन करने के लिए
  theme: {
    extend: {
      colors: {
        darkBrown: "#5C4033", // अपना पसंदीदा ब्राउन कलर डालो
      },
    },
  },
  plugins: [],
};
