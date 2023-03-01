/*
 * @ description:采样
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:11:40
 */
export const Sampling = [
  {
    path: '/sampling',
    name: 'Sampling',
    redirect: '/Sampling',
    meta: {
      title: '采样',
    },
    children: [
      {
        path: '/sampling',
        name: 'Sampling',
        component: () => import('@page/Sampling'),
        meta: {
          title: '采样',
        },
      },
    ],
  },
];
