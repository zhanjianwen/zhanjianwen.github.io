// 路由配置
import * as React from 'react'
import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'
import  { BrowserRouter, Switch, Route } from 'react-router-dom'
export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}