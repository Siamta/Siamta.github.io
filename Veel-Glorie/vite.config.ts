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
