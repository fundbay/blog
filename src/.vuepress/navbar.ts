import { navbar } from 'vuepress-theme-hope';

/**
 * 导航栏链接官方文档：https://theme-hope.vuejs.press/zh/guide/layout/navbar.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5
 */

export default navbar([
  /**
   * 如果你对页面的图标不满意或者觉得页面标题太长，你可以改为配置一个对象。可用的配置项有:
   * text: 项目文字
   * link: 项目链接
   * icon: 项目图标 (可选)
   * activeMatch: 项目激活匹配 (可选)，支持正则字符串。
   */
  '/',
  '/demo/',

  /**
   * VuePress 相关路由
   */
  {
    text: 'VuePress',
    prefix: '/posts/vuepress/',
    children: [
      {
        text: 'VuePress 文章',
        icon: 'https://vuepress.vuejs.org/images/hero.png',
        link: '',
      },
      {
        text: '主题',
        prefix: 'themes/',
        children: [
          {
            text: 'VuePress Theme Hope',
            icon: 'https://theme-hope-assets.vuejs.press/logo.svg',
            link: 'vuepress-theme-hope/',
          },
        ],
      },
    ],
  },

  /**
   * 其他路由
   */
  // {
  //   text: '博文',
  //   icon: 'pen-to-square',
  //   prefix: '/posts/',
  //   children: [
  //     {
  //       text: 'VuePress',
  //       icon: 'pen-to-square',
  //       prefix: 'vuepress/',
  //       children: [
  //         {
  //           text: '如何配置vuepress主页',
  //           icon: 'pen-to-square',
  //           link: '如何配置vuepress主页',
  //         },
  //       ],
  //     },
  //     {
  //       text: '苹果',
  //       icon: 'pen-to-square',
  //       prefix: 'apple/',
  //       children: [
  //         { text: '苹果1', icon: 'pen-to-square', link: '1' },
  //         { text: '苹果2', icon: 'pen-to-square', link: '2' },
  //         '3',
  //         '4',
  //       ],
  //     },
  //     {
  //       text: '香蕉',
  //       icon: 'pen-to-square',
  //       prefix: 'banana/',
  //       children: [
  //         {
  //           text: '香蕉 1',
  //           icon: 'pen-to-square',
  //           link: '1',
  //         },
  //         {
  //           text: '香蕉 2',
  //           icon: 'pen-to-square',
  //           link: '2',
  //         },
  //         '3',
  //         '4',
  //       ],
  //     },
  //     { text: '樱桃', icon: 'pen-to-square', link: 'cherry' },
  //     { text: '火龙果', icon: 'pen-to-square', link: 'dragonfruit' },
  //     'tomato',
  //     'strawberry',
  //   ],
  // },
  {
    text: 'V2 文档',
    icon: 'book',
    link: 'https://theme-hope.vuejs.press/zh/',
  },
]);
