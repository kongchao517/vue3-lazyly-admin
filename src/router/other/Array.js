/*
 * @ description:数组
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:04:16
 */
export const Array = [
  {
    path: '/array',
    name: 'Array',
    redirect: '/max-continuous',
    meta: {
      title: '数组类型',
    },
    children: [
      {
        path: '/max-continuous',
        name: 'MaxContinuous',
        component: () => import('@page/Array/MaxContinuous'),
        meta: {
          title: '最大连续1的个数',
        },
      },
    ],
  },
];
