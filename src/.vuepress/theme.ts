import { hopeTheme } from 'vuepress-theme-hope';

import navbar from './navbar.js';
import sidebar from './sidebar.js';

export default hopeTheme(
  {
    hostname: 'https://fundbay.github.io/blog',

    iconAssets: 'fontawesome-with-brands',

    logo: 'https://theme-hope-assets.vuejs.press/logo.svg',

    /**
     * Git 仓库和编辑链接
     * 当你在主题选项中提供了 repo 选项，将会自动在每个页面的导航栏生成源文件仓库按钮。
     * 你可以在主题选项中通过 repoDisplay 控制是否显示仓库按钮。
     */
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: 'fundbay/blog',

    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,

    docsDir: 'src',

    /**
     * 深色模式
     * 主题支持深色模式并允许你自定义它。
     * "switch": 在深色模式，浅色模式和自动之间切换 (默认)
     * "toggle": 在深色模式和浅色模式之间切换
     * "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
     * "enable": 强制深色模式
     * "disable": 禁用深色模式
     */
    darkmode: 'switch',

    /**
     * 打印按钮
     * 主题对打印样式进行了全面优化，默认在桌面模式的目录下会有一个打印按钮。
     * 要隐藏打印按钮，你应该在主题选项中设置 print: false。
     */
    print: true,

    /**
     * 全屏按钮
     * 如果当前浏览器不支持全屏，则全屏按钮会自动隐藏。
     */
    fullscreen: false,

    /**
     * 导航栏
     * 官方文档：https://theme-hope.vuejs.press/zh/guide/layout/navbar.html
     */
    navbar,

    /**
     * 导航栏布局配置
     * 主题允许你自定义导航栏布局。 你可以在 navbarLayout 选项下的 start、center 和 end 键中添加组件。
     * 导航栏包含了下列可以使用的内置组件:
     * Brand: 站点品牌
     * Links: 导航栏链接
     * Language: 语言切换菜单
     * Search: 搜索框
     * Outlook: 外观弹窗
     * Repo: 项目仓库
     * 同时，你也可以全局注册自己的组件并使用它们。
     */
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Search', 'Language', 'Repo', 'Outlook'],
    },

    /**
     * 侧边栏
     * 官方文档：https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html
     * 侧边栏包含相关的文档列表，文档标题以及博客模式下的博主信息。
     * 主题允许你通过 文件结构 和 文档标题 自动生成侧边栏，也可以手动配置。
     */
    sidebar,

    /**
     * 页脚
     * 官方文档：https://theme-hope.vuejs.press/zh/guide/layout/footer.html
     * 当 displayFooter: true 时，你可以在 frontmatter 中将 footer 设置为 false 来禁用特定页面的页脚。
     * 当全局显示页脚未开启时，将 footer 设置为 true 会显示默认的页脚文字。
     * 如果你填入一个字符串，它会以 v-html 指令的形式插入到页脚的位置作为页脚的内容，所以你可以填入 HTMLString。
     */
    footer: "Tak's Blog",
    displayFooter: true,
    copyright: 'MIT LICENSE',

    /**
     * 作者信息
     */
    author: {
      name: 'Tak',
      url: 'https://mister-hope.com',
    },

    /**
     * 博客相关信息
     */
    blog: {
      description: '一个前端开发者',
      intro: '/intro.html',
      articlePerPage: 5,
      medias: {
        Baidu: 'https://example.com',
        BiliBili: 'https://example.com',
        Bitbucket: 'https://example.com',
        Dingding: 'https://example.com',
        Discord: 'https://example.com',
        Dribbble: 'https://example.com',
        Email: 'mailto:info@example.com',
        Evernote: 'https://example.com',
        Facebook: 'https://example.com',
        Flipboard: 'https://example.com',
        Gitee: 'https://example.com',
        GitHub: 'https://example.com',
        Gitlab: 'https://example.com',
        Gmail: 'mailto:info@example.com',
        Instagram: 'https://example.com',
        Lark: 'https://example.com',
        Lines: 'https://example.com',
        Linkedin: 'https://example.com',
        Pinterest: 'https://example.com',
        Pocket: 'https://example.com',
        QQ: 'https://example.com',
        Qzone: 'https://example.com',
        Reddit: 'https://example.com',
        Rss: 'https://example.com',
        Steam: 'https://example.com',
        Twitter: 'https://example.com',
        Wechat: 'https://example.com',
        Weibo: 'https://example.com',
        Whatsapp: 'https://example.com',
        Youtube: 'https://example.com',
        Zhihu: 'https://example.com',
        VuePressThemeHope: {
          icon: 'https://theme-hope-assets.vuejs.press/logo.svg',
          link: 'https://theme-hope.vuejs.press',
        },
      },
    },

    // 加密配置
    encrypt: {
      config: {
        '/demo/encrypt.html': ['1234'],
      },
    },

    // 多语言配置
    metaLocales: {
      editLink: '在 GitHub 上编辑此页',
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {
      blog: true,

      // 启用之前需安装 @waline/client
      // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
      // comment: {
      //   provider: "Waline",
      //   serverURL: "https://waline-comment.vuejs.press",
      // },

      components: {
        components: ['Badge', 'VPCard'],
      },

      /**
       * 返回顶部按钮
       * vuepress-theme-hope 通过 @vuepress/plugin-back-to-top 添加了一个带进度条的返回顶部按钮，默认向下滚动 100px 后显示。
       * 你可以在主题选项中设置 plugins.backToTop: false 来禁用它，或者用一个对象来设置它来自定义它的阈值距离和进度条显示
       */
      backToTop: {
        /**
         * 显示返回顶部按钮的滚动阈值距离（以像素为单位）
         *
         * @default 100
         */
        threshold: 200,
        /**
         * 是否显示滚动进度
         *
         * @default true
         */
        progress: true,
      },

      /**
       * 活动的标题链接
       * 默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新。
       * 这个功能是通过插件 @vuepress/plugin-active-header-links 实现的，并可以通过以下的配置来禁用
       */
      activeHeaderLinks: true,

      /**
       * 使用 vuepress-plugin-search-pro
       * 1. 安装 vuepress-plugin-search-pro
       *    npm i -D vuepress-plugin-search-pro
       * 2. 在主题选项中配置 plugins.searchPro。
       * 官方文档：https://plugin-search-pro.vuejs.press/zh/
       */
      searchPro: true,

      /**
       * 代码块
       * vuepress-theme-hope 将主题选项中的 plugins.shiki 选项作为插件选项提供给 @vuepress/plugin-shiki。
       * [代码高亮文档]https://theme-hope.vuejs.press/zh/guide/feature/code-block.html#shiki
       * [Shiki Themes](https://shiki.tmrs.site/themes)
       */
      shiki: {
        // Shiki 的主题。该主题会应用到代码块上
        theme: 'dark-plus',
        // 启用代码行号
        lineNumbers: true,
        // 是否启用行高亮。启用后，可在代码块的信息描述中添加行数标记来高亮指定的行。例如：```ts {1,7-9}
        highlightLines: true,
        // 是否启用差异标记，通过代码块中注释 [!code --] 或 [!code ++]
        notationDiff: true,
        // 是否启用错误级别标记，通过代码块中注释 [!code warning] 或 [!code error] 等等
        notationErrorLevel: true,
      },

      // 此处开启了很多功能用于演示，你应仅保留用到的功能。
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
        plantuml: true,
        spoiler: true,
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({ tag }) => {
              if (tag === 'em')
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
                  content: 'Recommended',
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,

        // 在启用之前安装 chart.js
        // chart: true,

        // insert component easily

        // 在启用之前安装 echarts
        // echarts: true,

        // 在启用之前安装 flowchart.ts
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // 在启用之前安装 katex
        // katex: true,

        // 在启用之前安装 mathjax-full
        // mathjax: true,

        // 在启用之前安装 mermaid
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // 在启用之前安装 reveal.js
        // revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
      },

      // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
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
  },
  /**
   * 主题行为选项
   * hopeTheme() 接受可选的第二个参数，即行为选项。行为选项控制主题的行为。
   *
   * 行为选项也可接受一个布尔值:
   * false: 意味着所有选项都设置为 false
   * true: 意味着 { check: true, compact:true, custom: false, debug: false }
   */
  {
    /**
     * 是否启用通过别名导入组件的自定义支持
     * 默认情况下，主题将在性能模式下运行，所有文件都被捆绑并直接导入。
     * 如果你想通过覆盖组件和布局来自定义主题，请将此选项设置为 true，主题将加载带有 @theme-hope 别名的组件和布局。
     *
     * 延伸：当在 行为选项 中设置 { custom: true } 时，主题将通过 @theme-hope 别名来引入组件，所以你可以利用这一点来替换主题的任何一个组件。
     */
    custom: true,

    /**
     * 是否在调试模式下运行
     * 这只是通过将 app.env.isDebug 设置为 true 来实现的。
     * 你还可以在运行 vuepress dev 或 vuepress build 时添加 --debug 标志以启用调试模式。(推荐)
     */
    debug: false,
  }
);
