<!--
 * @description: 
 * @author: kongchao
 * @created_at: 2023-02-21 13:32:38
 * @modified_record: 
 * @modified_by: kongchao
 * @modified_time: 2023-05-11 18:05:22
-->

## 👉说明

  [vue3-lazyly-admin](https://github.com/kongchao517/vue3-lazyly-admin)是一个基于Vue3、Vite3、Pina、		   ElementUi 构建的极简版中后台模板具体如下：

* 💥使用husky设置了代码提交规范
* 💥eslint、prettier设置代码规范
* 💥基于axios二次封装接口请求，判定浏览器code和后端code（具体需要自己与后端约定）
* 💥使用docker部署具体配置docker文件夹里面（后续会专出文章总结）
* 💥基于Element二次封装后台常用Dialog、FormList、Pagination、TableList
* 打包优化ElementUI按需加载、viteImagemin图片压缩（需等待时间比较久、如无严格要求可注释）、viteCompression开启Gzip压缩（服务器徐需同步设置）、静态分包

![1684131986465](image/README/1684131986465.png)

## 👉特性

+ ⚡️ [Vite 3](https://cn.vitejs.dev) - 构建工具（就是快！）
+ 🖖 [Vue 3](https://cn.vuejs.org) - 渐进式 JavaScript 框架
+ 🚦 [Vue Router](https://router.vuejs.org/zh) - 官方路由管理器
+ 📦 [Pinia](https://pinia.vuejs.org/zh) - 值得你喜欢的 Vue Store
+ 💻 [Element](https://element-plus.gitee.io/zh-CN/) - Element 适配桌面端的组件库
+ 🎨 [scss](https://www.sass.hk/) - CSS 预处理器
+ 🔗 [Axios](https://axios-http.com/zh/) - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js
+ 🧰 [Husky](https://typicode.github.io/husky/#/) + [Lint-Staged](https://github.com/okonet/lint-staged) - Git Hook 工具
+ 🛡️ [EditorConfig](http://editorconfig.org) + [ESLint](http://eslint.cn) + [Prettier](https://prettier.cn) + [Stylelint](https://stylelint.cn) + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#translation) - 代码规范
+ 🔨 [Commitizen](https://cz-git.qbb.sh/zh) + [Commitlint](https://commitlint.js.org) - 提交规范

## 👉编码风格

+ [ESLint](https://eslint.org/) 配置为 [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
+ [Prettier](https://prettier.io) 配置为  [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
+ [Stylelint](https://stylelint.io) 配置为  [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## 👉开发工具

+ [npm](https://www.npmjs.com) - 包管理器
+ [Visual Stuido Code 扩展](./.vscode/extensions.json)
  + [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  + [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 一套用于统一代码格式的解决方案
  + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 可组装的JavaScript和JSX检查工具
  + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化工具
  + [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - CSS 代码规范工具

# 👉克隆、运行、构建

**🎈拉取代码**

git clone https://github.com/kongchao517/vue3-lazyly-admin.git

**🎈安装依赖**

npm i / yarn

**🎈运行**

npm run dev / yarn dev

**🎈构建开发环境**

npm run build:dev / yarn build:dev

**🎈构建生产环境**

npm run build / yarn build

# 👉自动引入ref、reactive......

 yarn add unplugin-auto-import

 vite.config.js

```
import AutoImport from 'unplugin-auto-import/vite';
    plugins:[ AutoImport({
        dts: 'auto-imports.d.ts',
      }),]
```

删除无引入ref、reactive...eslint警告
yarn add vue-global-api
.eslintrc.js

```
extends: [
    'vue-global-api',
    ]
```

main.js

```
import 'vue-global-api';
```
