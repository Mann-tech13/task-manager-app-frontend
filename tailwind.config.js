/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
      colors: {
        primary: "#1B1B1B",
        secondary: "#272727",
        tertiary: "#2E2E2E",
        quad: "#434343",
        textPrimary: "#ffffff",
        textSecondary: "#D2D2D2",
        textQuad: "#9B9B9B",
        textDark: "#111111",
        
        // light theme
        lightPrimary: "#ffffff",
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
        lightGreyHover: "#ededed"

      },
    },
  },
  plugins: [],
}