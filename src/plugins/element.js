/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 14:19:46
 */
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
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
