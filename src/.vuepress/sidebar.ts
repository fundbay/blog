import { sidebar } from 'vuepress-theme-hope';

/**
 * 侧边栏官方文档：https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html
 */

export default sidebar({
  /**
   * 侧边栏链接
   * 官方文档：https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E9%93%BE%E6%8E%A5
   */
  '/': [
    '',
    // {
    //   text: '如何使用',
    //   icon: 'laptop-code',
    //   prefix: 'demo/',
    //   link: 'demo/',
    //   children: 'structure',
    // },
    {
      text: '文章',
      icon: 'book',
      prefix: 'posts/',
      children: 'structure',
    },
    'intro',
    {
      text: '幻灯片',
      icon: 'person-chalkboard',
      link: 'https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html',
    },
  ],
});
