import { defineConfig } from "vite"
import jsonImporter from "node-sass-json-importer"
import defaultEnv from "./default-env"
import react from "@vitejs/plugin-react-swc"

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
