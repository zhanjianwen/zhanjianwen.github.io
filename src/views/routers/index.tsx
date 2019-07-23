import * as React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routesConfig from './config'
import DocumentTitle from 'react-document-title';
// // import Login from '../pages/login/login'
// // import Admin from '../pages/admin/admin'
// interface iRouterViewProps {
//   location?: any;
//   // 进入路由之前的钩子
//   beforeEnter?: (path: string) => void;
// }
// const RouteMap = (props: iRouterViewProps) => {
//   // configs.map((o: any) => {
//   //   if (o.children) {
//   //     return <RouteMap {...props} />
//   //   } else {
//   //     return <Route path={o.path} component={o.component} />
//   //   }
//   // })
//   // const children = window._.find(configs, (o: any) => {
//   //   return o.children
//   // })
//   // console.log(children)
//   // if (children) {
//   //   return <RouteMap {...props} />
//   // } else {
//   //   console.log(configs)
//   //   return null
//   //   // return <Route path={children.path} component={children.component} />
//   // }
//   // routers.routers.map((route: any) => {
//   //   if (route.children) {
//   //     return <RouteMap routers={route.children} />
//   //   } else {
//       return <div>123</div>
//   //   }
//   // })
// }
// class AppRouter extends React.Component<iRouterViewProps> {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//            <RouteMap {...this.props} />
//         </Switch>
//       </BrowserRouter>
//     )
//   }
// }
// export default AppRouter










export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
              routesConfig.map((r: any) => {
                const route = (r: any) => {
                  const Component = r.component;
                  return (
                    <Route
                      key={r.route || r.path}
                      exact
                      path={r.route || r.path}
                      render={props => {
                        const reg = /\?\S*/g;
                        // 匹配?及其以后字符串
                        const queryParams = window.location.hash.match(reg);
                        // 去除?的参数
                        const { params } = props.match;
                        Object.keys(params).forEach(key => {
                          params[key] = params[key] && params[key].replace(reg, '');
                        });
                        props.match.params = { ...params };
                        const merge = { ...props, query: queryParams ? JSON.parse(queryParams[0]) : {} };
                        // 重新包装组件
                        const wrappedComponent = (
                          <DocumentTitle title={r.meta.title}>
                            <Component {...merge} />
                          </DocumentTitle>
                        )
                        return wrappedComponent
                      }}
                    />
                  )
                }
                console.log(r)
                return !r.childrens ? route(r) : r.childrens.map((r: any) => route(r));
              })
          }
          <Route render={() => <Redirect to="/404" />} />
        </Switch>

      </BrowserRouter>
    )
  }
}