/*
 * @Descripttion:
 * @Author: lazyly
 * @Date: 2022-12-20 09:58:42
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-16 15:42:20
 */
import ElementPlus from 'element-plus';
// import "element-plus/dist/index.css"
import zhCn from 'element-plus/es/locale/lang/zh-cn';

import 'dayjs/locale/zh-cn';

export default {
  install: (app) => {
    app.use(ElementPlus, {
      locale: zhCn,
      size: 'default',
    });
  },
};
