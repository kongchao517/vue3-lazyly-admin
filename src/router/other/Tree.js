/*
 * @ description:树
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:13:13
 */
export const Tree = [
  {
    path: '/Tree',
    name: 'Tree',
    redirect: '/Tree',
    meta: {
      title: '树',
    },
    children: [
      {
        path: '/Tree',
        name: 'Tree',
        component: () => import('@page/Tree'),
        meta: {
          title: '树',
        },
      },
    ],
  },
];
