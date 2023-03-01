/*
 * @ description:数据结构
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:05:36
 */
export const DataStructure = [
  {
    path: '/datastructure',
    name: 'DataStructure',
    redirect: '/DataStructure',
    meta: {
      title: '数据结构',
    },
    children: [
      {
        path: '/datastructure',
        name: 'DataStructure',
        component: () => import('@page/DataStructure'),
        meta: {
          title: '数据结构',
        },
      },
    ],
  },
];
