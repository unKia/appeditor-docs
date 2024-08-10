import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "/Users/mojtaba/Documents/GitHub/appeditor-docs/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/mojtaba/Documents/GitHub/appeditor-docs/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogGetter } from "/Users/mojtaba/Documents/GitHub/appeditor-docs/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { h } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "/Users/mojtaba/Documents/GitHub/appeditor-docs/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/mojtaba/Documents/GitHub/appeditor-docs/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/Users/mojtaba/Documents/GitHub/appeditor-docs/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});