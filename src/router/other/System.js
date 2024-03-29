/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-03-14 18:17:04
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-15 15:26:27
 */
export const System = [
  {
    path: '/system-menu',
    name: 'System-Menu',
    redirect: '/system-menu',
    meta: {
      title: '系统管理',
      icon: 'icon-xitongguanli',
    },
    children: [
      {
        path: '/system-menu',
        name: 'SystemMenu',
        component: () => import('../../views/page/System/Auth/index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'icon-quanxianguanli-',
        },
      },
      {
        path: '/system-role',
        name: 'SystemRole',
        component: () => import('../../views/page/System/Role/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'icon-navicon-jsgl',
        },
      },
      {
        path: '/system-user',
        name: 'SystemUser',
        component: () => import('../../views/page/System/User/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'icon-yonghuguanli',
        },
      },
    ],
  },
];
