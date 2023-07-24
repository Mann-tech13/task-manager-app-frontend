/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
      colors: {
        quad: "#434343",
        textDark: "#111111",
        
        // light theme
        primary: "#ffffff",
        lightSecondary: "#F8F8F8",
        
        // latest
        layoutBackground: "#f3f6fc",
        
        // theme
        theme: "#635fc7",
        themeHover: "#514cba",
        dangerTheme: "#d11d17",
        progressTheme: "#fce303",
        resolvedTheme: "#2cfc03",
        
        lightGrey: "#EFEFEF",
        lightGreyHover: "#ededed",

        linkLine: "#286df7"

      },
    },
  },
  plugins: [],
}