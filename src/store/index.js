/*
 * @Descripttion:
 * @Author: lazyly
 * @Date: 2022-12-05 10:52:25
 * @LastEditors: lazyly
 * @LastEditTime: 2022-12-05 14:06:08
 */
import { createPinia } from 'pinia';

const store = createPinia();

export default store;

export * from './modules/counter';
