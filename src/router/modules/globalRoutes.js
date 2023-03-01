/*
 * @ description:登录和错误页面
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:03:31
 */

export const globalRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/User/index.vue'),
  },
  {
    path: '/Error',
    name: 'Error',
    component: () => import('@/views/Error/index.vue'),
  },
];
