// // import loadable from "@loadable/component";
import Login from '../pages/login/login'
import Layout from '../components/Layout/index'
import NotFound from '../components/NotFound/index'
import Admin from '../pages/admin/admin'
import Documentation from '../pages/documentation/documentation'
import Guide from '../pages/guide/guide'
const configs: any = [{
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    auth: true, //权限验证
    title: '登录',
    icon: 'nested',
    noCache: true,//是否缓存
    sliderHidden: true,//　隐藏侧栏
    headerHidden: true,//　隐藏头部
    footerHidden: true,//　隐藏底部
  },
},{
  path: '/404',
  name: 'notFound',
  component: NotFound,
  meta: {
    auth: true, //权限验证
    title: '登录',
    icon: 'nested',
    noCache: true,//是否缓存
    sliderHidden: true,//　隐藏侧栏
    headerHidden: true,//　隐藏头部
    footerHidden: true,//　隐藏底部
  },
  
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: Layout,
  meta: {
    auth: true,
    title: 'dashboard',
    icon: 'nested',
    noCache: true,
  },
  childrens: [{
    path: '/home',
    name: 'home',
    component: Admin,
    meta: {
      auth: true,
      title: '首页',
      icon: 'nested',
      noCache: true,
    },
  }, {
    path: '/documentation',
    name: 'documentation',
    component: Documentation,
    meta: {
      auth: true,
      title: '文档',
      icon: 'nested',
      noCache: true,
    },
  }, {
    path: '/guide',
    name: 'guide',
    component: Guide,
    meta: {
      auth: true,
      title: '引导',
      icon: 'nested',
      noCache: true,
    },
  },
  ],
}]
export default configs;
// export default {
//   menus: [ // 菜单相关路由
//       { key: '/', title: '首页', icon: 'mobile',component: Layout, },
//       // {
//       //     key: '/documentation', title: '文档', icon: 'scan',component: Documentation,
//       //     // subs: [
//       //     //     { key: '/documentations', title: '文档', component: Documentation,},
//       //     // ],
//       // },
//       {
//           key: '/subs4', title: '页面', icon: 'switcher',
//           subs: [
//               { key: '/login', title: '登录' ,component: Login},
//               { key: '/404', title: '404',component:NotFound },
//           ],
//       },
//       {
//           key: '/documentation', title: '文档', icon: 'star', component: Documentation
//       },
      
//   ],
// }