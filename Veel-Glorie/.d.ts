/// <reference types="vite/client" />

declare module "@components";
declare module "@layout";
declare module "@styles";
declare module "@svg";
declare module "@utils";

declare module "node-sass-json-importer" {
  export default function (): () => any
}

declare module "default-env" {
  export interface Dict {
    READY: string,

    SITE_DOMAIN: string,
    SITE_NAME: string,
    SITE_DESCRIPTION: string,
    SITE_SLOGAN: string,

    SCREEN_SM: string,
    SCREEN_MD: string,
    SCREEN_LG: string,
    SCREEN_XL: string,
    SCREEN_2XL: string,

    COLOR_INFO: string,
    COLOR_SUCCESS: string,
    COLOR_WARNING: string,
    COLOR_ERROR: string,
    COLOR_PRIMARY: string,
    COLOR_PRIMARY_FOCUS: string,
    COLOR_PRIMARY_CONTENT: string,
    COLOR_SECONDARY: string,
    COLOR_SECONDARY_FOCUS: string,
    COLOR_SECONDARY_CONTENT: string,
    COLOR_ACENT: string,
    COLOR_ACENT_FOCUS: string,
    COLOR_ACENT_CONTENT: string,
    COLOR_NEUTRAL: string,
    COLOR_NEUTRAL_FOCUS: string,
    COLOR_NEUTRAL_CONTENT: string,
    COLOR_BASE_100: string,
    COLOR_BASE_200: string,
    COLOR_BASE_300: string,
    COLOR_BASE_CONTENT: string,
  }
}
