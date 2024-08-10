import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

//import { catalogPlugin } from '@vuepress/plugin-catalog'
export default defineUserConfig({
  //base: "/appeditor-help/",
  base: "/",
  lang: "fa-IR",
  title: "راهنمای برنامه ساز اپ‌ادیتور",
  description: "ساخت اپلیکیشن بدون برنامه‌نویسی",
  head:[

  ],
  theme,
  plugins: [
    /*catalogPlugin({
      // Your options
    }),*/
    removeHtmlExtensionPlugin()
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
