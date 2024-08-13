import { defineClientConfig } from 'vuepress/client';

/**
 * 引入样式将博主头像裁剪为圆形
 */
// import 'vuepress-theme-hope/presets/round-blogger-avatar.scss';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log(siteData.value.title);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
