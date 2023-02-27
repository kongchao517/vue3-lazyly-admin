import { createApp } from 'vue';

import installElementPlus from '@plugins/element';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);
app.use(router).use(store).use(installElementPlus).mount('#app');
console.log('app', app);
