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
  - NAS
  - QNAP
  - Container Station
tag:
  - Wordpress
---

# Container Station 搭建 Wordpress

```yaml
version: '3'

services:
  # Database
  db:
    image: mysql:5.7
    restart: always
    environment:
      TZ: Asia/Shanghai
      MYSQL_DATABASE: wordpress
      MYSQL_USER: db_username
      MYSQL_PASSWORD: db_password
      MYSQL_ROOT_PASSWORD: db_root_password
    volumes:
      - /share/Container/wordpressapp/mysql:/var/lib/mysql
    ports:
      - '8106:3306'
    networks:
      - backend
  # phpmyadmin
  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin/phpmyadmin
    restart: always
    ports:
      - '8107:80'
    environment:
      TZ: Asia/Shanghai
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: db_root_password
    networks:
      - frontend
      - backend
  # Wordpress
  wordpress:
    depends_on:
      - db
    image: wordpress
    restart: always
    environment:
      TZ: Asia/Shanghai
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: db_username
      WORDPRESS_DB_PASSWORD: db_password
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - /share/Container/wordpressapp/wordpress/www:/var/www/html
    ports:
      - '8108:80'
    networks:
      - frontend
      - backend
networks:
  frontend:
  backend:
```
