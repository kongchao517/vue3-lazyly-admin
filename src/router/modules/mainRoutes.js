/*
 * @ description:主要功能路由
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-16 15:27:57
 */

import { System } from '../other/System';
import { Echarts } from '../other/echarts';

export const mainRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@views/Layout'),
    redirect: { path: '/array' },
    children: [...System, ...Echarts],
  },
];
