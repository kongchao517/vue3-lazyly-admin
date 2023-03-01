/*
 * @ description:哈希表
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:06:41
 */
export const HashTable = [
  {
    path: '/hashtable',
    name: 'HashTable',
    redirect: '/HashTable',
    meta: {
      title: '哈希表',
    },
    children: [
      {
        path: '/hashtable',
        name: 'HashTable',
        component: () => import('@page/HashTable'),
        meta: {
          title: '哈希表',
        },
      },
    ],
  },
];
