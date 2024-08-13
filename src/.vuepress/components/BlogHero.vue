<template>
    <HopeBlogHero>
        <template #bg>
            <BingHeroBackground />
        </template>
        <template #info="info">
            <HitokotoBlogHero v-bind="info" />
        </template>
    </HopeBlogHero>
</template>

<script setup lang="ts">
/**
 * 插槽利用
 * 有些组件提供了插槽，在这种情况下，你可以在覆盖组件时直接引入原组件，并通过插槽传入你需要的内容。
 * 
 * 博客：
 * ArticleItem: title, cover, info, excerpt
 * 
 * title 插槽将接收 title isEncrypted 和 type 属性。
 * excerpt 插槽将接收 excerpt 属性。
 * cover 插槽将接收 cover 属性。
 * info 插槽将接收 info 属性。
 * 
 * BlogHero: bg, info
 * 
 * info 插槽将接收 text tagline image imageDark style alt 和 isFullScreen 属性。
 * bg 插槽将接收 image bgStyle 和 isFullScreen 属性。
 * 
 * PortfolioHero: avatar bg, info 
 * 
 * avatar 插槽将接收 avatar avatarDark avatarStyle 和 alt 属性。
 * info 插槽将接收 name welcome title titles 和 links 属性。
 * bg 插槽将接收 image imageDark 和 bgStyle 属性。
 * 
 * 导航栏:
 * 
 * NavbarDropdown: title
 * NavActions: before, after
 * Navbar: startBefore, startAfter, centerBefore, centerAfter, endBefore, endAfter
 * NavbarBrand: default
 * NavScreen: before, after
 * NavScreenMenu: before, after
 * 
 * 侧边栏:
 * 
 * Sidebar: top, default, bottom
 * 
 * TOC:
 * 
 * TOC: before, after
 */

import HopeBlogHero from 'vuepress-theme-hope/blog/components/BlogHero.js'
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js"
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
</script>

<style scoped></style>