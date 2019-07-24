// import * as React from 'react';
// import { ReactHTML } from 'react'
// import { Layout } from 'antd';
// const { Sider, Content } = Layout;
// import LayoutMenu, { IMenuItem } from '../Layout/Menu'
// import Tags from '../Layout/Tags'
// import Header from '../Layout/Header'
// import './index.less'
// export interface IHistory {
//   push: (pathname: string) => void
// }
// interface ILoaction {
//   pathname: string
// }
// interface IProps {
//   children: ReactHTML,
//   history: IHistory,
//   location: ILoaction,
//   theme: boolean
// }
// class Home extends React.Component<IProps> {
//   public componentDidMount() {
//     this.setState({
//       tagList: JSON.parse(localStorage.getItem('tagList') || '[]')
//     })
//   }
//   public menuList = [
//     { label: '首页', url: '/', name: 'home', icon: 'home', key: 'home' },
//     { label: '文档', url: '/documentation', name: 'documentation', icon: 'home', key: 'documentation' },
//     { label: '引导', url: '/guide', name: 'guide', icon: 'home', key: 'guide' },
//     // {
//     //   children: [
//     //     { label: '文章管理', url: '/Articles/Manage', icon: 'Articles', key: '2' },
//     //     { label: '添加文章', url: '/Articles/Add', icon: 'Articles', key: '3' },
//     //   ],
//     //   icon: 'book',
//     //   key: '7',
//     //   label: '文章'
//     // },
//   ]
//   public state = {
//     collapsed: false,
//     isMobile: false,
//     tagList: [{ label: '首页', url: '/', name: 'home', icon: 'home', key: 'home' },],
//     theme: true
//   }
//   public setLocalStorage = () => {
//     localStorage.setItem('tagList', JSON.stringify(this.state.tagList))
//   }

//   public handleTag = (item: IMenuItem) => {
//     const tagKeys = new Set(this.state.tagList.map(tag => tag.key))
//     if (tagKeys.has(item.key)) {
//       this.setState({ tagList: [...this.state.tagList] }, this.setLocalStorage)
//     } else {
//       this.setState(
//         { tagList: [...this.state.tagList, item] },
//         this.setLocalStorage
//       )
//     }
//   }
//   public onClose = (tag: IMenuItem) => {
//     this.setState({ tagList: this.state.tagList.filter(item => item.key != tag.key) },
//       () => {
//         if (this.state.tagList.length > 0) {
//           const { url } = this.state.tagList[this.state.tagList.length - 1]
//           this.props.history.push(url)
//           this.setLocalStorage()
//         }
//       }
//     )
//   }
//   public toggle = () => {
//     this.setState({ collapsed: !this.state.collapsed })
//   }
//   render() {
//     const { children, location,history } = this.props
//     const { theme, collapsed,tagList } = this.state;
//     // 
//     // const isLogin = location.pathname === '/login'
//     return (
//       <Layout className="menu">
//         <Sider trigger={null} collapsible collapsed={collapsed}>
//           <div className="logo">Admin</div>
//           <LayoutMenu
//             theme={theme}
//             menuList={this.menuList}
//             pathname={location.pathname}
//             handleTag={this.handleTag}
//           />
//         </Sider>
//         <Layout>
//           <Header
//             push={history.push}
//             collapsed={collapsed}
//             toggle={this.toggle}>
//           </Header>
//           <Tags
//             tagList={tagList}
//             pathname={location.pathname}
//             onClose={this.onClose} />
//           <Content
//             style={{
//               margin: '24px 16px',
//               padding: 24,
//               background: '#fff',
//               minHeight: 280,
//             }}
//           >
//             <div>{children}</div>
//           </Content>
//         </Layout>
//       </Layout>
//     )
//   }
// }
// export default Home



import * as React from 'react';
import { ReactHTML } from 'react'
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import Menu, { IMenuItem } from '../Layout/Menu'
import Tags from '../Layout/Tags'
// import Header from '../Layout/Header'
import './index.less'
export interface IHistory {
  push: (pathname: string) => void
}
interface ILocation {
  pathname: string
}
interface IProps {
  children: ReactHTML
  location: ILocation
  history: IHistory
  isLogin: () => void
  token: string
}
class App extends React.Component<IProps> {
  public timer: any
  public menuList = [
    { label: '首页', url: '/', name: 'home', icon: 'home', key: 'home' },
    { label: '文档', url: '/documentation', name: 'documentation', icon: 'home', key: 'documentation' },
    { label: '引导', url: '/guide', name: 'guide', icon: 'home', key: 'guide' },
    // {
    //   children: [
    //     { label: '文章管理', url: '/Articles/Manage', icon: 'Articles', key: '2' },
    //     { label: '添加文章', url: '/Articles/Add', icon: 'Articles', key: '3' },
    //   ],
    //   icon: 'book',
    //   key: '7',
    //   label: '文章'
    // },
  ]
  public state = {
    collapsed: false,
    isMobile: false,
    tagList: [{ label: '首页', url: '/', name: 'home', icon: 'home', key: 'home' }],
    theme: true
  }
  public componentDidMount() {
    // this.isLogin()
    this.setState({
      tagList: JSON.parse(localStorage.getItem('tagList') || '[]')
    })
  }
  // public isLogin = () => {
  //   const user = localStorage.getItem('user')
  //   if (user && user !== 'undefined') {
  //     // this.props.history.push('/admin')
  //   } else {
  //     this.props.history.push('/login')
  //   }
  // }
  public onClose = (tag: IMenuItem) => {
    this.setState(
      { tagList: this.state.tagList.filter(item => item.key !== tag.key) },
      () => {
        if (this.state.tagList.length > 0) {
          const { url } = this.state.tagList[this.state.tagList.length - 1]
          this.props.history.push(url)
          this.setLocalStorage()
        }
      }
    )
  }
  public toggle = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }
  public setLocalStorage = () => {
    localStorage.setItem('tagList', JSON.stringify(this.state.tagList))
  }
  public handleTag = (item: IMenuItem) => {
    const tagKeys = new Set(this.state.tagList.map(tag => tag.key))
    if (tagKeys.has(item.key)) {
      this.setState({ tagList: [...this.state.tagList] }, this.setLocalStorage)
    } else {
      this.setState(
        { tagList: [...this.state.tagList, item] },
        this.setLocalStorage
      )
    }
  }
  public switchOnChange = () => {
    this.setState({ theme: !this.state.theme })
  }
  public render() {
    const { children, location } = this.props
    const { collapsed, tagList, theme } = this.state
    // const isLogin = location.pathname === '/login'
    console.log(this.props)
    return (
      <Layout className="menu" style={{ height: '100vh' }}>
        <Sider
          theme={theme ? 'dark' : 'light'}
          trigger={null}
          collapsed={collapsed}
          collapsible={true}>
          <div className="logo">
            <span>Blog ADMIN</span>
          </div>
          <Menu
            menuList={this.menuList}
            pathname={location.pathname}
            handleTag={this.handleTag}
            theme={theme}
          />
        </Sider>
        <Layout>
          {/* <Header
            push={this.props.history.push}
            collapsed={collapsed}
            toggle={this.toggle}
            isMobile={isMobile}>
            {isMobile && (
              <Menu
                menuList={this.menuList}
                pathname={location.pathname}
                handleTag={this.handleTag}
                theme={theme}
              />
            )}
          </Header> */}
          <Tags
            tagList={tagList}
            pathname={location.pathname}
            onClose={this.onClose}
          />
          <Content
            className="content"
          >
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App