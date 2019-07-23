import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import configs from './config'
// import Login from '../pages/login/login'
// import Admin from '../pages/admin/admin'
interface iRouterViewProps {
  location?: any;
  // 进入路由之前的钩子
  beforeEnter?: (path: string) => void;
}
const RouteMap = (props: iRouterViewProps) => {
  // configs.map((o: any) => {
  //   if (o.children) {
  //     return <RouteMap {...props} />
  //   } else {
  //     return <Route path={o.path} component={o.component} />
  //   }
  // })
  const children = window._.find(configs, (o:any) => {
    return o.children
  })
  if(children){
    return <RouteMap {...props} />
  }else{
    return <Route path={children.path} component={children.component} />
  }
  // routers.routers.map((route: any) => {
  //   if (route.children) {
  //     return <RouteMap routers={route.children} />
  //   } else {
  //     return <div>123</div>
  //   }
  // })
}
class AppRouter extends React.Component<iRouterViewProps> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <RouteMap {...this.props} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default AppRouter