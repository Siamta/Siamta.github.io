import { defineConfig } from "vite"
import { fileURLToPath, URL } from "url";
import jsonImporter from "node-sass-json-importer"
import defaultEnv from "./default-env"
import react from "@vitejs/plugin-react-swc"

function defineAliasPath(path) {
  return fileURLToPath(new URL(`./src/${path}`, import.meta.url))
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: defineAliasPath("components") },
      { find: "@layout", replacement: defineAliasPath("layout") },
      { find: "@styles", replacement: defineAliasPath("styles/base.scss") },
      { find: "@svg", replacement: defineAliasPath("svg") },
      { find: "@utils", replacement: defineAliasPath("utils") },
    ]
  },
  define: {
    'process.env': defaultEnv,
  },
  css: {
    preprocessorOptions: {
      scss: {
        importer: jsonImporter(),
      }
    }
  },
})
