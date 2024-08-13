---
# 如果想要使用vuepress-theme-hope 提供的主页，请在 frontmatter 中设置 home: true。任何 frontmatter 之后的内容将会以普通的 Markdown 被渲染，并插入到主页渲染内容的底部。
# 相关配置文档请见：https://theme-hope.vuejs.press/zh/guide/blog/home.html

# 必须设置为 true 以使用博客主页布局
home: true

# 必须设置为 BlogHome 以使用博客主页布局
layout: BlogHome

icon: home

# 设置页面标题，会用于路径导航、页面增强等
title: 首页

# 是否显示主页的图标与描述
hero: true

# 主页图标 (logo) 地址，不支持相对路径
# heroImage: https://theme-hope-assets.vuejs.press/logo.svg

# 深色模式下主页图标 (logo) 地址，不支持相对路径
# heroImageDark: https://theme-hope-assets.vuejs.press/logo.svg

# 主页标题
heroText: Tak's Blog

# 是否全屏显示 Hero
heroFullScreen: true

# 附加文字描述
tagline: Make things easier with Tak

# 背景图片的地址，不支持相对路径。如果不填写，会自动应用一张默认的风景图片
bgImage:

# 项目列表
projects:
  - icon: project
    name: VuePress
    desc: Vue 驱动的静态网站生成器
    link: https://vuepress.vuejs.org/zh/

  - icon: project
    name: VuePress Theme Hope
    desc: 一个具有强大功能的 vuepress 主题✨
    link: https://theme-hope.vuejs.press/zh/

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: https://theme-hope-assets.vuejs.press/logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接

copyright: false
footer: MIT Licensed | Copyright © 2024 by Tak
---
