const default_env = require("./default_env")

module.exports = {
  preserveHtmlElements: false,
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  purge: [
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: default_env.COLOR_PRIMARY,
        secondary: default_env.COLOR_SECONDARY,
        tertiary: default_env.COLOR_TERTIARY,
        white: default_env.COLOR_WHITE,
        black: default_env.COLOR_BLACK,
        foreground: default_env.COLOR_FOREGROUND,
        background: default_env.COLOR_BACKGROUND,
      },
    },
  },
}
