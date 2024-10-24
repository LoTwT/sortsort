import { HstVue } from "@histoire/plugin-vue"
import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "histoire"
import Unocss from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
  plugins: [HstVue()],
  outDir: "dist",
  setupFile: "src/histoire.setup.ts",
  vite: {
    plugins: [
      Vue(),
      AutoImport({
        imports: ["vue"],
        dts: true,
      }),
      Unocss(),
    ],
  },
})
