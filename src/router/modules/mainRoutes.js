/*
 * @ description:主要功能路由
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-15 16:17:50
 */

import { System } from '../other/System';

export const mainRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@views/Layout'),
    redirect: { path: '/array' },
    children: [...System],
  },
];
