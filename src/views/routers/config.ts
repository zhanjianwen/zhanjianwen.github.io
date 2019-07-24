// // import loadable from "@loadable/component";

// const configs: any = [{
//   path: '/login',
//   name: 'login',
//   component: Login,
//   meta: {
//     auth: true, //权限验证
//     title: '登录',
//     icon: 'nested',
//     noCache: true,//是否缓存
//     sliderHidden: true,//　隐藏侧栏
//     headerHidden: true,//　隐藏头部
//     footerHidden: true,//　隐藏底部
//   },
// },{
//   path: '/404',
//   name: 'notFound',
//   component: NotFound,
//   meta: {
//     auth: true, //权限验证
//     title: '404',
//     icon: 'nested',
//     noCache: true,//是否缓存
//     sliderHidden: true,//　隐藏侧栏
//     headerHidden: true,//　隐藏头部
//     footerHidden: true,//　隐藏底部
//   },

// }, {
//   path: '/dashboard',
//   name: 'dashboard',
//   meta: {
//     auth: true,
//     title: 'dashboard',
//     icon: 'nested',
//     noCache: true,
//   },
//   childrens: [{
//     path: '/',
//     name: 'home',
//     component: Layout,
//     meta: {
//       auth: true,
//       title: '首页',
//       icon: 'nested',
//       noCache: true,
//     },
//   }, {
//     path: '/documentation',
//     name: 'documentation',
//     component: Documentation,
//     meta: {
//       auth: true,
//       title: '文档',
//       icon: 'nested',
//       noCache: true,
//     },
//   }, {
//     path: '/guide',
//     name: 'guide',
//     component: Guide,
//     meta: {
//       auth: true,
//       title: '引导',
//       icon: 'nested',
//       noCache: true,
//     },
//   },
//   ],
// }]
const configs: any = [
  // {
  //   path: '/login',
  //   hidden: true,
  //   component: Login,
  //   meta: {
  //     title: '登录',
  //     icon: 'home',
  //     affix: true
  //   }
  // },
  // {
  //   path: '/404',
  //   hidden: true,
  //   component: NotFound,
  //   meta: {
  //     title: '404',
  //     icon: 'home',
  //     affix: true
  //   }
  // },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: dashboard,
  //   meta: {
  //     title: '首页',
  //     icon: 'home',
  //     affix: true
  //   }
  // }, {
  //   path: '/test',
  //   title: 'test',
  //   icon: 'switcher',
  //   children: [
  //     {
  //       path: '/test/documentation',
  //       component: Documentation,
  //       name: 'Documentation',
  //       meta: {
  //         title: '文档',
  //         icon: 'documentation',
  //         affix: true
  //       }
  //     },
  //     {
  //       path: '/test/guide',
  //       component: Guide,
  //       name: 'Guide',
  //       meta: {
  //         title: '引导',
  //         icon: 'guide',
  //         noCache: true
  //       }
  //     }]

  // }
  {
    path: '/',
    title: '首页',
    icon: 'mobile',
    component:'Home'
  },
  {
    path: '/dashboard',
    title: 'dashboard',
    icon: 'scan',
    childrens: [{
      path: '/dashboard/documentation',
      title: '按钮',
      component: 'Documentation'
    },
    ],
  },
  // Login, dashboard, NotFound,
  // Documentation,
  // Guide
]
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