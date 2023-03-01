/*
 * @ description:图与搜索
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:06:15
 */
export const GraphAndSearch = [
  {
    path: '/graphandsearch',
    name: 'GraphAndSearch',
    redirect: '/GraphAndSearch',
    meta: {
      title: '图与搜索',
    },
    children: [
      {
        path: '/graphandsearch',
        name: 'GraphAndSearch',
        component: () => import('@page/GraphAndSearch'),
        meta: {
          title: '图与搜索',
        },
      },
    ],
  },
];
