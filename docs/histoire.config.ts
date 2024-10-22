import { HstVue } from "@histoire/plugin-vue"
import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "histoire"
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
  plugins: [HstVue()],
  outDir: "dist",
  vite: {
    plugins: [
      Vue(),
      AutoImport({
        imports: ["vue"],
        dts: true,
      }),
    ],
  },
})
