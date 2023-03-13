/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 15:15:10
 */
import { createApp } from 'vue';

import installElementPlus from '@plugins/element';
import App from './App.vue';
import store from './store';
import router from './router';
import 'animate.css';

const app = createApp(App);
app.use(router).use(store).use(installElementPlus).mount('#app');
console.log('app', app);
