/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-11 11:43:53
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';
import '@assets/icon/iconfont/iconfont.css';
import 'animate.css';
import '../mock/index';
import installEcharts from './plugins/echarts';

const pinia = createPinia();
const app = createApp(App);
pinia.use(piniaPluginPersistedstate);
app.use(router).use(pinia).use(installEcharts).mount('#app');
console.log('app', app);
