import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        meta: resolve(__dirname, "meta/index.html"),
        ortopediaGeral: resolve(__dirname, "ortopedia-geral/index.html"),
        metaOrtopediaGeral: resolve(__dirname, "meta/ortopedia-geral/index.html"),
      },
    },
  },
});
