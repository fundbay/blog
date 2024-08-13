import { defineUserConfig } from 'vuepress';
import { getDirname, path } from 'vuepress/utils';
import theme from './theme.js';

// 获取文件路径
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // 部署站点的基础路径
  base: '/blog/',

  // 站点的语言
  lang: 'zh-CN',

  // 站点的标题
  title: '博客演示',

  // 站点的描述
  description: 'vuepress-theme-hope 的博客演示',

  /**
   * 主题
   */
  theme,

  /**
   * [替换主题组件](https://theme-hope.vuejs.press/zh/guide/advanced/replace.html)
   *
   * 当在 行为选项 中设置 { custom: true } 时，主题将通过 @theme-hope 别名来引入组件，所以你可以利用这一点来替换主题的任何一个组件。
   * 你可以在这里将别名定向到自己的组件
   *
   * 组件:
   * @theme-hope/modules/blog/components/ArticleItem 文章项
   * @theme-hope/modules/blog/components/ArticleList 文章列表
   * @theme-hope/modules/blog/components/ArticleType 文章类型
   * @theme-hope/modules/blog/components/BloggerInfo 博主信息
   * @theme-hope/modules/blog/components/BlogHero 博客主页 Logo 与介绍
   * @theme-hope/modules/blog/components/BlogHome 博客主页
   * @theme-hope/modules/blog/components/BlogWrapper 博客常规布局
   * @theme-hope/modules/blog/components/CategoryList 分类列表
   * @theme-hope/modules/blog/components/InfoList 博客信息列表
   * @theme-hope/modules/blog/components/InfoPanel 博客信息面板
   * @theme-hope/modules/blog/components/Pagination 分页组件
   * @theme-hope/modules/blog/components/ProjectPanel 博客主页项目面板
   * @theme-hope/modules/blog/components/SocialMedias 社交媒体链接
   * @theme-hope/modules/blog/components/TagList 标签列表
   * @theme-hope/modules/blog/components/TimelineItems 时间线项目
   * @theme-hope/modules/blog/components/TimelineList 时间线列表
   *
   * 杂项:
   * @theme-hope/modules/blog/components/icons/index 博客图标
   * @theme-hope/modules/blog/composables/index 博客可组合 API
   *
   */
  alias: {
    // 这里我们将主题的 BlogHero 组件改为用户 .vuepress/components 下的 BlogHero.vue
    '@theme-hope/modules/blog/components/BlogHero': path.resolve(
      __dirname,
      './components/BlogHero.vue'
    ),
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
