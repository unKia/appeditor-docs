import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

//import { catalogPlugin } from '@vuepress/plugin-catalog'
export default defineUserConfig({
  //base: "/appeditor-help/",
  base: "/",
  lang: "fa-IR",
  title: "راهنمای اپ‌ادیتور",
  description: "ساخت اپلیکیشن بدون برنامه‌نویسی",
  head:[

  ],
  theme: hopeTheme({
    // keywords: "iconify", "fontawesome", "fontawesome-with-brands"
    iconAssets: "iconify",
  }),
  plugins: [
    /*catalogPlugin({
      // Your options
    }),*/
    removeHtmlExtensionPlugin()
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
