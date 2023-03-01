/*
 * @ description:二分查找
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:04:52
 */
export const BinarySearch = [
  {
    path: '/binarysearch',
    name: 'BinarySearch',
    redirect: '/binarysearch',
    meta: {
      title: '二分查找',
    },
    children: [
      {
        path: '/binarysearch',
        name: 'BinarySearch',
        component: () => import('@page/BinarySearch'),
        meta: {
          title: '二分查找',
        },
      },
    ],
  },
];
