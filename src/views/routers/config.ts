const configs: any = [{
  path: '/login',
  name: 'login',
  hidden: true,
  redirect: 'noRedirect',
  component: () => import('../pages/login/login'),
}, {
  path: '/Layout',
  name: 'Layout',
  children: [{
    path: '/',
    name: 'index',
    component: () => import('../pages/admin/admin'),
    meta: {
      auth: true,
      title: '首页',
      icon: 'nested',
      noCache:true,
    },
  }],
}]
export default configs;