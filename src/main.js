/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-14 10:41:36
 */
import { createApp } from 'vue';

import installElementPlus from '@plugins/element';
import App from './App.vue';
import store from './store';
import router from './router';
import '@assets/icon/iconfont/iconfont.css';
import 'animate.css';

const app = createApp(App);
app.use(router).use(store).use(installElementPlus).mount('#app');
console.log('app', app);
