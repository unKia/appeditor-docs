import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
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
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
