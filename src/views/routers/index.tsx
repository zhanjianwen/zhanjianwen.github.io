import * as React from 'react'
// Route
import { BrowserRouter, Switch, } from 'react-router-dom'
import configs from './config'
// import Login from '../pages/login/login'
// import Admin from '../pages/admin/admin'
const RouteMap = (config: any) => {
  console.log(config.config)
  console.log(config)
  // routers.routers.map((route: any) => {
  //   if (route.children) {
  //     return <RouteMap routers={route.children} />
  //   } else {
  //     return <div>123</div>
  //   }
  // })
  return null
}
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <RouteMap routers={configs} /> */}
          {configs.map((route: any, i: number) => {
            return <RouteMap config={route} key={i} />
          })}
        </Switch>
      </BrowserRouter>
    )
  }
}
export default AppRouter