//roles 能显示入口的角色
export default [
  {
    path: '/system',
    name: 'system',
    meta: {
      hidden: false,
      title: '系统管理',
      roles: ['admin', '1022', 'power_admin'],
    },
    children: [
      {
        path: '/system/log',
        name: 'system_log',
        meta: {
          title: '登陆日志',
          icon: '',
          hidden: false,
          roles: [],
        },
      },
    ],
  },
];
