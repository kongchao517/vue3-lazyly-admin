/*
 * @ description:贪心算法
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:06:29
 */
export const Greed = [
  {
    path: '/greed',
    name: 'Greed',
    redirect: '/Greed',
    meta: {
      title: '贪心算法',
    },
    children: [
      {
        path: '/greed',
        name: 'Greed',
        component: () => import('@page/Greed'),
        meta: {
          title: '贪心算法',
        },
      },
    ],
  },
];
