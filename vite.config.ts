import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "src/manifest.json", dest: "." },
        { src: "src/public/16-history-no.png", dest: "." },
        { src: "src/public/32-history-no.png", dest: "." },
        { src: "src/public/48-history-no.png", dest: "." },
        { src: "src/public/192-history-no.png", dest: "." },
        { src: "src/public/192-dont-save-to-history.png", dest: "." },
        { src: "src/public/dont-save-to-history-how-it-works.gif", dest: "." },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "popup.html"),
        options: resolve(__dirname, "options.html"),
        background: resolve(__dirname, "src/background.ts"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
