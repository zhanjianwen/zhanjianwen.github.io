// import loadable from "@loadable/component";
import Login from '../pages/login/login'
import Layout from '../components/Layout/index'
import Admin from '../pages/admin/admin'
import Documentation from '../pages/documentation/documentation'
import Guide from '../pages/guide/guide'
const configs: any = [{
  path: '/login',
  name: 'login',
  hidden: true,
  redirect: 'noRedirect',
  component: Login
}, {
  path: '/Layout',
  component: Layout,
  name: 'Layout',
  children: [{
    path: '/',
    name: 'index',
    component: Admin,
    meta: {
      auth: true,
      title: '首页',
      icon: 'nested',
      noCache: true,
    },
  }, {
    path: '/documentation',
    name: 'index',
    component: Documentation,
    meta: {
      auth: true,
      title: '文档',
      icon: 'nested',
      noCache: true,
    },
  }, {
    path: '/guide',
    name: 'index',
    component: Guide,
    meta: {
      auth: true,
      title: '文档',
      icon: 'nested',
      noCache: true,
    },
  },
  ],
}]
export default configs;