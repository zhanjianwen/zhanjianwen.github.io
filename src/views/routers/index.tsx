// // 路由配置
// import * as React from 'react'
// import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
// interface iRouterViewProps {
//   location?: any;
//   // 进入路由之前的钩子
//   beforeEnter?: (path: string) => void;
// }
// const Routers: any = [{
//   path: '/404',
//   component: () => import('../components/NotFound'),
//   hidden: true,
// },
// {
//   path: '/login',
//   component: () => import('../pages/login/login'),
//   hidden: true
// },
// {
//   path: '/',
//   component: () => import('../pages/admin/admin'),
//   hidden: true
//   // children: [
//   //   {
//   //     path: 'dashboard',
//   //     component: () => import('../pages/admin/admin1'),
//   //     name: 'Dashboard',
//   //     meta: { title: 'Dashboard', icon: 'dashboard', requiresAuth: true }
//   //   }
//   // ]
// }] 
// interface iRouterViewProps {
//   location?: any;
//   // 进入路由之前的钩子
//   beforeEnter?: (path: string) => void;
// }
// class AppRouter extends React.Component<iRouterViewProps> {
//   render() {
//       const props = this.props
//       const isLogin = window.localStorage.users? true : false
//       const  pathname   =props.location.pathname;
//       let targetRouterInfo = props.config.find(item => item.path === pathname)
//       if (targetRouterInfo && !targetRouterInfo.auth && !isLogin) {
//           return (
//               <div>
//                   <Route exact path={targetRouterInfo.path} component={targetRouterInfo.component} />
//                   {
//                       this.state.loadingStatus && <Loading text="拼命加载中" fullscreen={true} />
//                   }
//               </div>
//           )
//       }
//       if (isLogin) {
//           // 如果是登陆状态，想要跳转到登陆，重定向到主页
//           if (pathname === '/login' || pathname === '/' || pathname === '') {
//               return <Redirect to='/home' />
//           } else {
//               // 如果路由合法，就跳转到相应的路由
//               if (targetRouterInfo) {
//                   return this.renderCon(<Route exact path={targetRouterInfo.path} component={targetRouterInfo.component} />)
//               } else {
//                   // 如果路由不合法，重定向到 404 页面
//                   return <Redirect to='/404' />
//               }
//           }
//       } else {
//           // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
//           if (targetRouterInfo && targetRouterInfo.auth) {
//               return <Redirect to='/login' />
//           } else {
//               // 非登陆状态下，路由不合法时，重定向至 404
//               return <Redirect to='/404' />
//           }
//       }
//   }

//   renderCon = (element) => {
//       return (
//           <div>
//               <ul className={'nav-box'}>
//                   <Nav />
//               </ul>
//               <div className={'content-box'}>
//                   <Crumb />
//                   <Switch>
//                       {element}
//                   </Switch>
//               </div>
//           </div>
//       )
//   }

//   componentDidMount() {
//       setTimeout(() => {
//           this.setState({
//               loadingStatus: false
//           })
//       }, 500)
//   }
// }

// export default AppRouter
// // export default function (props: iRouterViewProps) {
// //   return (
// //     <BrowserRouter>
// //       <>
// //         <Switch>
// //           <CustomRoute {...props} />
// //         </Switch>
// //       </>
// //     </BrowserRouter>
// //   );
// // }

import * as React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouterFilter from './routerFliter'

const Routers= [{
  path: '/404',
  component: () => import('../components/NotFound'),
  auth: true,
},
{
  path: '/login',
  component: () => import('../pages/login/login'),
  auth: true
},
{
  path: '/',
  component: () => import('../pages/admin/admin'),
  auth: true
  // children: [
  //   {
  //     path: 'dashboard',
  //     component: () => import('../pages/admin/admin1'),
  //     name: 'Dashboard',
  //     meta: { title: 'Dashboard', icon: 'dashboard', requiresAuth: true }
  //   }
  // ]
}] 
const routerMain = () => (
    <Router>
        <Switch>
            <RouterFilter config={Routers} />
        </Switch>
    </Router>
);
export default routerMain;