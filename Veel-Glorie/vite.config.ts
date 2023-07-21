import { defineConfig } from "vite"
import jsonImporter from "node-sass-json-importer"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@styles', replacement: './src/styles/base.scss' },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        importer: jsonImporter(),
      }
    }
  },
})
