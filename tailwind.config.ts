module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: {
        'primary': '#ED474A', // Utiliza el color primario que definiste
      },
      colors: {
        primary: "#ED474A", // Color primario
        secondary: "#AF5D63",
        txtcolor: "#C0BCB5", // Color secundario (puedes cambiarlo)
        tertiary: "##4A6C6F", // Color terciario (puedes cambiarlo)
        warning: "#f6e05e", // Color de advertencia (puedes cambiarlo)
        delete: "##AF5D63", // Color de eliminación (puedes cambiarlo)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
