/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-09 16:16:06
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

// router.beforeEach((to, from, next) => {

//   if (to.name === 'Login') {
//     next();

//     return true;
//   }

//   next({
//     name: 'Login',
//     query: {
//       redirect: to.fullPath ?? '/',
//     },
//   });
// });
export default router;
