/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:13:28
 */
import { createRouter, createWebHistory } from 'vue-router';

import { globalRoutes } from './modules/globalRoutes';
import { mainRoutes } from './modules/mainRoutes';

console.log('mainRoutes', mainRoutes);
const routes = [...mainRoutes, ...globalRoutes];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
