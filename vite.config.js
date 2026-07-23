import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const regionalSlugs = [
  "quadril",
  "joelho",
  "coluna",
  "ombro",
  "mao-punho",
  "pe-tornozelo",
];

const regionalInputs = Object.fromEntries(
  regionalSlugs.flatMap((slug) => [
    [`regional-${slug}`, resolve(__dirname, `${slug}/index.html`)],
    [`meta-${slug}`, resolve(__dirname, `meta/${slug}/index.html`)],
  ]),
);

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        meta: resolve(__dirname, "meta/index.html"),
        ortopediaGeral: resolve(__dirname, "ortopedia-geral/index.html"),
        ortopediaTraumatologista: resolve(__dirname, "ortopedista-traumatologista/index.html"),
        metaOrtopediaGeral: resolve(__dirname, "meta/ortopedia-geral/index.html"),
        ...regionalInputs,
      },
    },
  },
});
