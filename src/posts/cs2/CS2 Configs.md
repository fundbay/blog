---
############################################################################
#
# 信息 Frontmatter 配置
#
# title | string | 当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容。
# shortTitle | string | 当前页面的短标题，会在导航栏、侧边栏和路径导航中作为首选。
# description | string | 当前页面内容描述。
# icon | string | 当前页面图标的 FontClass 或文件路径 (建议填写)。[指南 → 图标支持](https://theme-hope.vuejs.press/zh/guide/interface/icon.html)
# author | Author{name, url, email} / boolean | 作者，如果不填，则会回退到默认作者。
# isOriginal | boolean | 当前文章是否为原创。
# date | DateString | 写作时间，格式：YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
# category | string / string[] | 分类。
# tag | string / string[] | 标签。
# license | string | 页面的协议信息。设置后协议文字将会展现在页脚。[页面 → 页脚支持](https://theme-hope.vuejs.press/zh/guide/layout/footer.html)
# sticky | boolean / number | 是否在列表中置顶。当填入数字时，数字越大，排名越靠前。默认值为 false
# star | boolean / number | 是否标为星标文章。当填入数字时，数字越大，排名越靠前。默认值为 false
# article | boolean | 是否将该文章添加至文章列表中。默认值为 true
# timeline | boolean | 是否将该文章添加至时间线中。默认值为 true
# cover | string | 设置预览图 (分享图)，请填入绝对路径。
# banner | string | 设置横幅图片 (宽屏分享图)，请填入绝对路径。
# order | number | 默认情况下，侧边栏会按照文件名的标题文字按照当前语言排序，可以通过 order 来控制排序方式，越小的越靠前
# footer | boolean / string | 自定义页脚或禁用页脚
# copyright | boolean / string | 自定义版权信息或禁用版权信息
# navbar | boolean | 是否激活导航栏
# sidebar | boolean | 是否激活侧边栏
# breadcrumb | boolean | 是否激活路径导航
# pageInfo | boolean | 是否激活页面信息
# contributors | boolean | 是否激活贡献者
# editLink | boolean | 是否激活编辑此页链接
# lastUpdated | boolean | 是否激活更新时间
# prev | boolean / string | 上一篇文章的链接将会自动地根据当前页面的侧边栏的顺序来获取。可以重写或者禁用它，也可以传递一个拥有 title, icon 和 link 的对象来自定义
# next | boolean / string | 下一篇文章的链接将会自动地根据当前页面的侧边栏的顺序来获取。可以重写或者禁用它，也可以传递一个拥有 title, icon 和 link 的对象来自定义
# comment | boolean | 是否激活评论
# backtotop | boolean | 是否激活返回顶部按钮
# toc | boolean | 桌面模式下显示右侧的标题列表
# index | boolean | 当你不希望页面被侧边栏收录时，你需要在 Frontmatter 中设置 index: false
#
############################################################################

date: 2024-08-14
icon:
category:
  - Steam
  - CS2
tag:
  - CS2
---

# CS2 Configs

## 1. 找到游戏目录

::: info 方法

1. 在游戏的 config 目录 `Steam 目录\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg` 下创建 `.cfg` 文件

2. 文件名自定义即可，如 `myconfig.cfg`

:::

## 2. 编辑 config 文件

::: info 方法

1. 可以使用 `//` 来注释指令

:::

```conf
sensitivity "1.9"

// 显示设置
r_fullscreen_gamma "3"

// 计分板设置
cl_teamcounter_playercount_instead_of_avatars "true"
cl_scoreboard_survivors_always_on "true"

// 左手持枪
cl_prefer_lefthanded "1"
switchhandsleft

// 不显示左下角版本信息
r_show_build_info "0"

// 雷达设置
cl_hud_radar_background_alpha "0.627"
cl_hud_radar_map_additive "true"
cl_hud_radar_scale "1.1"
cl_radar_always_centered "false"
cl_radar_rotate "true"
cl_radar_scale "0.4"
cl_radar_scale_alternate "1.0"

// 音量控制
snd_menumusic_volume "0.04"
snd_roundstart_volume "0.0"
snd_roundaction_volume "0.0"
snd_roundend_volume "0.16"
snd_mvp_volume "0.16"
snd_mapobjective_volume "0.04"
snd_tensecondwarning_volume "0.04"
snd_deathcamera_volume "0.16"
snd_mute_mvp_music_live_players "false"
snd_voipvolume "0.5"
snd_headphone_eq "1"
snd_mute_losefocus "true"
speaker_config "2"

// 鼠标控制
m_pitch "0.022"
m_yaw "0.022"

// 基础按键绑定
bind "`" "toggleconsole"
bind "w" "+forward"
bind "s" "+back"
bind "a" "+left"
bind "d" "+right"
bind "i" "show_loadout_toggle"
bind "e" "+use"
bind "r" "+reload"
bind "q" "lastinv"
bind "t" "drop"
bind "f" "+lookatweapon"
bind "b" "buymenu"
bind "1" "slot1"
bind "2" "slot2"
bind "3" "slot3"
bind "4" "slot4"
bind "5" "slot5"
bind "6" "slot6"
bind "7" "slot7"
bind "8" "slot8"
bind "9" "slot9"
bind "0" "slot10"
bind "TAB" "+showscores"
bind "k" say ".kick"
bind "m" "teammenu"
bind "u" "messagemode2"
bind "y" "messagemode"
bind "v" "+voicerecord"
bind "SHIFT" "+sprint"
bind "CTRL" "+duck"
bind "SPACE" "+jump"
bind "MWHEELUP" "+jump"
bind "MWHEELDOWN" "+jump"
bind "MOUSE1" "+attack"
bind "MOUSE2" "+attack2"
bind "MOUSE3" "player_ping"
bind "MOUSE4" "+spray_menu"
// bind "MOUSE4" "switchhands"
bind "MOUSE5" "say .drop"

// 一键道具按键绑定
// Flash
bind "x" "+xflash"
alias +xflash "slot3"
alias -xflash "slot7"

// Smoke
bind "z" "+zsmoke"
alias +zsmoke "slot3"
alias -zsmoke "slot8"

// Fire
bind "c" "+cfire"
alias +cfire "slot3"
alias -cfire "slot10"

// 跳投
// alias +jp "+jump;-jump"
// alias +ak "-attack;-attack2"
// bind "SPACE" "+jp;+ak"


// 准心设置
cl_crosshairalpha "255"
cl_crosshaircolor "4"
// cl_crosshaircolor_b "144"
// cl_crosshaircolor_g "238"
// cl_crosshaircolor_r "0"
cl_crosshairdot "0"
cl_crosshairgap "-3"
cl_crosshairgap_useweaponvalue "0"
cl_crosshairsize "1"
cl_crosshairstyle "4"
cl_crosshairthickness "0"
cl_crosshairusealpha "1"

// 持枪视角
viewmodel_fov "68"
// 2.5
viewmodel_offset_x "1.5"
// 0
viewmodel_offset_y "2"
// -1.5
viewmodel_offset_z "-1"
```

## 3. 执行 config 文件

::: info 方法

1. 在游戏控制台输入 `exec 文件名` 来执行

:::