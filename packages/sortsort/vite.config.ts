import { fileURLToPath, URL } from "node:url"
import Vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import { defineConfig } from "vite"
import Dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ["vue", "vitest"],
      dts: true,
    }),
    Dts({
      tsconfigPath: "./tsconfig.lib.json",
      cleanVueFileName: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
      },
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        format: "es",
        exports: "named",
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
