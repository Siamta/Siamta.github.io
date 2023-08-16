const COLOR_WHITE = "#ffffff"
const COLOR_BLACK = "#1f1f1f"
const COLOR_FOREGROUND = COLOR_WHITE
const COLOR_BACKGROUND = COLOR_BLACK
const COLOR_FOREGROUND_OVER_BACKGROUND_10_PERCENT = "#e6e6e6"
const COLOR_FOREGROUND_OVER_BACKGROUND_20_PERCENT = "#cccccc"
const COLOR_FOREGROUND_OVER_BACKGROUND_50_PERCENT = "#7c7c7c"

const COLOR_INFO = "#54c6eb"
const COLOR_SUCCESS = "#5dd39e"
const COLOR_WARNING = "#ffd972"
const COLOR_ERROR = "#ff6b6c"
const COLOR_PRIMARY = "#b42724"
const COLOR_PRIMARY_FOCUS = "#c42b27"
const COLOR_PRIMARY_CONTENT = COLOR_FOREGROUND
const COLOR_SECONDARY = "#000000"
const COLOR_SECONDARY_FOCUS = "#cccccc"
const COLOR_SECONDARY_CONTENT = "#ffffff"
const COLOR_ACENT = COLOR_PRIMARY
const COLOR_ACENT_FOCUS = COLOR_PRIMARY_FOCUS
const COLOR_ACENT_CONTENT = COLOR_PRIMARY_CONTENT
const COLOR_NEUTRAL = COLOR_FOREGROUND
const COLOR_NEUTRAL_FOCUS = COLOR_FOREGROUND_OVER_BACKGROUND_50_PERCENT
const COLOR_NEUTRAL_CONTENT = COLOR_BACKGROUND
const COLOR_BASE_100 = COLOR_FOREGROUND
const COLOR_BASE_200 = COLOR_FOREGROUND_OVER_BACKGROUND_10_PERCENT
const COLOR_BASE_300 = COLOR_FOREGROUND_OVER_BACKGROUND_20_PERCENT
const COLOR_BASE_CONTENT = COLOR_FOREGROUND

module.exports = {
  // ===================================================================
  // Basic Configuration.
  // ===================================================================
  READY: "false",

  SITE_DOMAIN: "https://veelglorie.com",
  SITE_NAME: "Veel Glorie",
  SITE_DESCRIPTION: "Gremio de Albion Online",
  SITE_SLOGAN: "Convertimos granjeros en soldados",

  // ===================================================================
  // Screens.
  // ===================================================================

  // Values in pixels.
  SCREEN_SM: "640",
  SCREEN_MD: "768",
  SCREEN_LG: "1024",
  SCREEN_XL: "1280",
  SCREEN_2XL: "1536",

  // ===================================================================
  // Colors.
  // ===================================================================
  // Must accomplish the following regex: `#[0-9a-f]{6}`.

  // DaisyUI.
  // - https://daisyui.com/docs/colors/
  COLOR_INFO,
  COLOR_SUCCESS,
  COLOR_WARNING,
  COLOR_ERROR,
  COLOR_PRIMARY,
  COLOR_PRIMARY_FOCUS,
  COLOR_PRIMARY_CONTENT,
  COLOR_SECONDARY,
  COLOR_SECONDARY_FOCUS,
  COLOR_SECONDARY_CONTENT,
  COLOR_ACENT,
  COLOR_ACENT_FOCUS,
  COLOR_ACENT_CONTENT,
  COLOR_NEUTRAL,
  COLOR_NEUTRAL_FOCUS,
  COLOR_NEUTRAL_CONTENT,
  COLOR_BASE_100,
  COLOR_BASE_200,
  COLOR_BASE_300,
  COLOR_BASE_CONTENT,
}
