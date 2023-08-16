declare namespace NodeJS {
  export interface Dict {
    // Basic Configuration.
    READY: string
    SITE_DOMAIN: string
    SITE_NAME: string
    SITE_DESCRIPTION: string
    AUTHOR_NAME: string
    AUTHOR_URL: string
    PANELBAR_SITE_ID: string

    // Contact information.
    TEL_COUNTRY_CODE: string
    TEL_PREFIX: string
    TEL_AREA_CODE: string
    TEL_NUMBER: string
    ADDRESS_CITY: string
    ADDRESS_STATE: string

    // Indexing.
    ROBOTS_DISALLOW: string

    // Internationalization.
    LOCALE_LANGUAGE: string
    LOCALE_TERRITORY: string
    LOCALE_DIR: string

    // Screens.
    SCREEN_SM: string
    SCREEN_MD: string
    SCREEN_LG: string
    SCREEN_XL: string
    SCREEN_2XL: string

    // Colors.
    COLOR_INFO: string
    COLOR_SUCCESS: string
    COLOR_WARNING: string
    COLOR_ERROR: string
    COLOR_PRIMARY: string
    COLOR_PRIMARY_FOCUS: string
    COLOR_PRIMARY_CONTENT: string
    COLOR_SECONDARY: string
    COLOR_SECONDARY_FOCUS: string
    COLOR_SECONDARY_CONTENT: string
    COLOR_ACENT: string
    COLOR_ACENT_FOCUS: string
    COLOR_ACENT_CONTENT: string
    COLOR_NEUTRAL: string
    COLOR_NEUTRAL_FOCUS: string
    COLOR_NEUTRAL_CONTENT: string
    COLOR_BASE_100: string
    COLOR_BASE_200: string
    COLOR_BASE_300: string
    COLOR_BASE_CONTENT: string
  }
}
