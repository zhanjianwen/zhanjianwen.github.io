const configs: any = [{
  path: '/login',
  name: 'login',
  component: () => import('../pages/login/login'),
  meta: {
    auth: false,
    title: '登录'
  },
}, {
  path: '/Loayout',
  name: 'Loayout',
  meta: {
    auth: false,
    title: '模板'
  },
  children: [{
    path: '/',
    name: 'index',
    component: () => import('../pages/admin/admin'),
    meta: {
      auth: true,
      title: '首页'
    },
  }],
}]
export default configs;