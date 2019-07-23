import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import configs from './config'
import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'
console.log(configs)
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default AppRouter