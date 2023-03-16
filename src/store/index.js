/*
 * @Descripttion:
 * @Author: lazyly
 * @Date: 2022-12-05 10:52:25
 * @LastEditors: lazyly
 * @LastEditTime: 2022-12-05 14:06:08
 */

import { useCounterStore } from './modules/counter';
import { useTagStore } from './modules/tag';
// 统一导出useStore方法
export default function useStore() {
  return {
    count: useCounterStore(),
    tabData: useTagStore(),
  };
}
