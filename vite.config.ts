import path from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    solidPlugin({
      ssr: true,
      solid: { hydratable: true, generate: "ssr" },
    }),
  ],
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "knapp",
      fileName: (format) => `knapp.solid.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          "solid-js": "solid-js",
        },
      },
    },
  },
});
