declare module "node-sass-json-importer" {
  export default function (): () => any
}

// default.env.js
declare module "*.js" {
  interface DefaultEnv {
    [key: string]: string
  }
  export default object as DefaultEnv
}
