import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import {LocaleConfig} from "@vuepress/core";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";

export default hopeTheme({
  hostname: "https://appeditor-docs.netlify.app",

  /*author: {
    name: "اپ‌ادیتور",
    url: "https://appeditor.ir",
  },*/

  iconAssets: "fontawesome-with-brands",

  logo: "images/logo-70.png",

  //repo: "vuepress-theme-hope/vuepress-theme-hope",

  lastUpdated: false,
  contributors: false,
  pageInfo: false,
  darkmode: "switch",

  docsDir: "src",
  headerDepth:4,
  //toc:false,
  metaLocales:{
    toc:'در این صفحه',
    readingTime:'مدت مطالعه',
    prev:'قبلی',
    next:'بعدی',
    category:'دسته',
    tag:'تگ',
    print:'چاپ',
  },
  routeLocales:{
    back:'برگشت',
    home:"صفحه اصلی",
    openInNewWindow:"در پنجره جدید باز شود",
    notFoundTitle:"صفحه یافت نشد!",
    notFoundMsg:["دوباره تلاش کن!"]
  },
  outlookLocales:{
    darkmode:'روشنایی'
  },

  // navbar
  navbar,
  // sidebar
  sidebar,
  breadcrumb: true,
  rtl:true,
  copyright:'کلیه حقوق محفوظ است',
  //footer: "راهنمای اپ‌ادیتور",
  displayFooter: true,
  /* encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  }, */

  /*metaLocales: {
    editLink: "Edit this page on GitHub",
  },*/
  plugins: {

    

    copyCode: {
      showInMobile:true
    },
    search:true,
    readingTime:false,
    // You should generate and use your own comment service
    /*comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },*/

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      /*stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],*/
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
