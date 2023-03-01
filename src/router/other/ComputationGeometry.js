/*
 * @ description:计算几何
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:05:20
 */
export const ComputationGeometry = [
  {
    path: '/computationgeometry',
    name: 'ComputationGeometry',
    redirect: '/ComputationGeometry',
    meta: {
      title: '计算几何',
    },
    children: [
      {
        path: '/computationgeometry',
        name: 'ComputationGeometry',
        component: () => import('@page/ComputationGeometry'),
        meta: {
          title: '计算几何',
        },
      },
    ],
  },
];
