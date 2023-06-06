/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-03-16 15:25:07
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-16 15:27:17
 */
export const Echarts = [
  {
    path: '/echarts',
    name: 'Echarts',
    redirect: '/echarts',
    meta: {
      title: '图表',
      icon: 'icon-xitongguanli',
    },
    children: [
      {
        path: '/echarts',
        name: 'Echarts',
        component: () => import('../../views/page/Echarts/index.vue'),
        meta: {
          title: '图表',
          icon: 'icon-quanxianguanli-',
        },
      },
    ],
  },
];
