/*
 * @ description:常用技巧与算法
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:11:29
 */
export const Rest = [
  {
    path: '/rest',
    name: 'Rest',
    redirect: '/Rest',
    meta: {
      title: '常用技巧与算法',
    },
    children: [
      {
        path: '/rest',
        name: 'Rest',
        component: () => import('@page/Rest'),
        meta: {
          title: '常用技巧与算法',
        },
      },
    ],
  },
];
