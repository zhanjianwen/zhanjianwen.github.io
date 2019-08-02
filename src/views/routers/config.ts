const configs: any = [{
  path: '/admin/home',
  title: '首页',
  icon: 'mobile',
  component: 'Home'
},
{
  path: '/admin',
  title: 'dashboard',
  name: 'dashboard',
  icon: 'scan',
  childrens: [{
    path: '/admin/documentation',
    name: 'documentation',
    title: '文档',
    component: 'Documentation'
  },
  {
    path: '/admin/guide',
    name: 'guide',
    title: '引导',
    component: 'Guide'
  },
  {
    path: '/admin/tinymce',
    name: 'Components',
    title: '富文本编辑',
    component: 'Tinymce'
  }, {
    path: '/admin/PDF',
    name: 'Components',
    title: 'PDF',
    component: 'PDF'
  }
  ]
},
]
export default configs;