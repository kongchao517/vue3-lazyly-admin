/*
 * @ description:二进制运算的应用
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:05:05
 */
export const BinarySystem = [
  {
    path: '/binarysystem',
    name: 'BinarySystem',
    redirect: '/BinarySystem',
    meta: {
      title: '二进制运算的应用',
    },
    children: [
      {
        path: '/binarysystem',
        name: 'BinarySystem',
        component: () => import('@page/BinarySystem'),
        meta: {
          title: '二进制运算的应用',
        },
      },
    ],
  },
];
