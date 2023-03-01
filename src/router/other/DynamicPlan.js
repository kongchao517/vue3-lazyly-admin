/*
 * @ description:动态规划
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:06:02
 */
export const DynamicPlan = [
  {
    path: '/dynamicplan',
    name: 'DynamicPlan',
    redirect: '/DynamicPlan',
    meta: {
      title: '动态规划',
    },
    children: [
      {
        path: '/dynamicplan',
        name: 'DynamicPlan',
        component: () => import('@page/DynamicPlan'),
        meta: {
          title: '动态规划',
        },
      },
    ],
  },
];
