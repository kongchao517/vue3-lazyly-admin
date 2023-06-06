/*
 * @ description:登录和错误页面
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-09 16:21:13
 */

export const globalRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../../views/User/index.vue'),
  },
  {
    path: '/Error',
    name: 'Error',
    component: () => import('../../views/Error/index.vue'),
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/Error',
  },
];
