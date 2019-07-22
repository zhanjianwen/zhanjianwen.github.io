import * as  React from 'react'
// import { Loading } from 'element-react'
import Loading from './loading'
import { Route, Redirect, Switch } from 'react-router-dom'
// import Nav from '../components/Nav'
// import Crumb from '../components/Crumb'
interface iRouterViewProps {
  location?: any;
  // 进入路由之前的钩子
  beforeEnter?: (path: string) => void;
  config: any
}
class RouterFilter extends React.Component<iRouterViewProps> {
  render() {
    const props = this.props
    const isLogin = window.localStorage.users ? true : false
    const pathname = props.location.pathname;
    let targetRouterInfo = props.config.find((item: { path: any; }) => item.path === pathname)
    if (targetRouterInfo && !targetRouterInfo.auth && !isLogin) {
      return (
        <div>
          <Route exact path={targetRouterInfo.path} component={targetRouterInfo.component} />
          {
            <Loading />
          }
        </div>
      )
    }
    if (isLogin) {
      // 如果是登陆状态，想要跳转到登陆，重定向到主页
      if (pathname === '/login' || pathname === '/' || pathname === '') {
        return <Redirect to='/home' />
      } else {
        // 如果路由合法，就跳转到相应的路由
        if (targetRouterInfo) {
          return this.renderCon(<Route exact path={targetRouterInfo.path} component={targetRouterInfo.component} />)
        } else {
          // 如果路由不合法，重定向到 404 页面
          return <Redirect to='/404' />
        }
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if (targetRouterInfo && targetRouterInfo.auth) {
        return <Redirect to='/login' />
      } else {
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to='/404' />
      }
    }
  }
  renderCon = (element: React.ReactNode) => {
    return (
      <div>
        <ul className={'nav-box'}>
          {/* <Nav /> */}
        </ul>
        <div className={'content-box'}>
          {/* <Crumb /> */}
          <Switch>
            {element}
          </Switch>
        </div>
      </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loadingStatus: false
      })
    }, 500)
  }
}

export default RouterFilter