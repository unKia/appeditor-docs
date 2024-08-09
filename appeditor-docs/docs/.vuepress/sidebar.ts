import { sidebar } from "vuepress-theme-default";

export default sidebar({
  //'/':'structure',
  '/': [
    '/get-started/appeditor',
    {
      text: 'شروع',
      //icon: "tip",
      // optional, link of group title
      //path: "/get-started/",
      // optional, will be appended to each item link
      //prefix: "/foo/",
      collapsible: true,
      children: [
        '/get-started/register',
        '/get-started/first-app'
      ]
    },
    {
      text: 'طراحی اپلیکیشن',
      collapsible: true,
      //path:'/application-design/page-design',
      children: [
        '/application-design/design-environment',
        '/application-design/page-design',
        '/application-design/widgets/introduction',
        //'/application-design/widgets/layout',//به بخش معرفی ویجت منتقل شود
        //'/application-design/widgets/animation',//به بخش معرفی ویجت منتقل شود
        {
          text:'انواع ویجت',
          collapsible:true,
          //path:'/application-design/widgets/introduction',
          children:[
            /*{text:'#گروه',link:'under-construction'},//'/application-design/widgets/group',
            {text:'#متن',link:'under-construction'},//'/application-design/widgets/text',
            {text:'#متن پیشرفته',link:'under-construction'},//'/application-design/widgets/text',
            {text:'#دکمه',link:'under-construction'},//'/application-design/widgets/button',
            {text:'#عکس',link:'under-construction'},//'/application-design/widgets/image',
            {text:'#پخش کننده صوت',link:'under-construction'},//'/application-design/widgets/audio',
            {text:'#پخش کننده ویدئو',link:'under-construction'},//'/application-design/widgets/video',
            {text:'#نمایشگر وب(وب ویو)',link:'under-construction'},//'/application-design/widgets/webview',*/
            '/application-design/widgets/pdf',
            '/application-design/widgets/tapsell',
            '/application-design/widgets/rss-reader',
            '/application-design/widgets/favorites',
            '/application-design/widgets/tab',
            '/application-design/widgets/form',
            '/application-design/widgets/slide',
          ]
        },

        '/application-design/menu-design',//انواع منو
        '/application-design/iab-items',
        '/application-design/templates',//قالب ها
        '/application-design/icons',//آیکون ها
          '/application-design/events',
          '/application-design/actions',
          '/application-design/conditions',
          '/application-design/variables/',
          '/application-design/javascript',
      ]
    },
    {
      text: 'سرویس ها',
      collapsible: true,
      //collapsed:false,
      children: [
        '/services/shop-maker/',//فروشگاه ساز
        '/services/form-builder',//فرم ساز
        '/services/account',//حساب کاربری
        '/services/in-app-purchase',//پرداخت درون برنامه ای
        '/services/online-content-update',//آپدیت آنلاین محتوا
        '/services/update-version',//آپدیت آنلاین محتوا
        '/services/notification',
        '/services/ads',//تبلیغات
        '/services/wordpress',
        '/services/woocommerce',
      ]
    },
    {
      text: 'ساخت و دریافت خروجی',
      collapsible: true,
      //collapsed:false,
      children: [
        '/make-application/configs',
        '/make-application/keystore',
        '/make-application/source-code',
        '/make-application/output',
      ]
    },
    {
      text: 'آموزشهای متفرقه',
      collapsible: true,
      //collapsed:false,
      children: [
        '/other/how-to-embed-aparat-video',
        '/other/how-to-turn-a-site-into-an-application',
      ]
    },
    '/introduction',
    '/changelog',
    '/FAQ',
  ]
});
