import * as React from 'react';
import { ReactHTML } from 'react'
// import { Layout } from 'antd';
// const { Sider, Content } = Layout;
// import LayoutMenu, { IMenuItem } from '../Menu'
// import Tags from '../Tags'
// import Header from '../../views/header'
import './index.less'
export interface IHistory {
  push: (pathname: string) => void
}
interface ILoaction {
  pathname: string
}
interface IProps {
  children: ReactHTML,
  history: IHistory,
  location: ILoaction,
  theme: boolean
}
class Layouts extends React.Component<IProps> {
  // public componentDidMount() {
  //   this.setState({
  //     tagList: JSON.parse(localStorage.getItem('tagList') || '[]')
  //   })
  // }
  // public menuList = [
  //   { label: '首页', url: '/home', icon: 'home', key: '1' },
  //   {
  //     children: [
  //       { label: '文章管理', url: '/Articles/Manage', icon: 'Articles', key: '2' },
  //       { label: '添加文章', url: '/Articles/Add', icon: 'Articles', key: '3' },
  //     ],
  //     icon: 'book',
  //     key: '7',
  //     label: '文章'
  //   },
  // ]
  // public state = {
  //   collapsed: false,
  //   isMobile: false,
  //   tagList: [{ label: '首页', url: '/home', icon: 'home', key: '1' }],
  //   theme: true
  // }
  // public setLocalStorage = () => {
  //   localStorage.setItem('tagList', JSON.stringify(this.state.tagList))
  // }

  // public handleTag = (item: IMenuItem) => {
  //   const tagKeys = new Set(this.state.tagList.map(tag => tag.key))
  //   if (tagKeys.has(item.key)) {
  //     this.setState({ tagList: [...this.state.tagList] }, this.setLocalStorage)
  //   } else {
  //     this.setState(
  //       { tagList: [...this.state.tagList, item] },
  //       this.setLocalStorage
  //     )
  //   }
  // }
  // public onClose = (tag: IMenuItem) => {
  //   this.setState({ tagList: this.state.tagList.filter(item => item.key != tag.key) },
  //     () => {
  //       if (this.state.tagList.length > 0) {
  //         const { url } = this.state.tagList[this.state.tagList.length - 1]
  //         this.props.history.push(url)
  //         this.setLocalStorage()
  //       }
  //     }
  //   )
  // }
  // public toggle = () => {
  //   this.setState({ collapsed: !this.state.collapsed })
  // }
  // render() {
  //   const { children, location } = this.props
  //   const { theme,collapsed } = this.state;
  //   // tagList
  //   const isLogin = location.pathname === '/login'
  //   return !isLogin ? (
  //     <Layout className="menu">
  //       <Sider trigger={null} collapsible collapsed={collapsed}>
  //         <div className="logo">Admin</div>
  //         <LayoutMenu
  //           theme={theme}
  //           menuList={this.menuList}
  //           pathname={location.pathname}
  //           handleTag={this.handleTag}
  //         />
  //       </Sider>
  //       <Layout>12
  //         {/* <Header
  //           push={this.props.history.push}
  //           collapsed={collapsed}
  //           toggle={this.toggle}>
  //         </Header>
  //         <Tags
  //           tagList={tagList}
  //           pathname={location.pathname}
  //           onClose={this.onClose} /> */}
  //         <Content
  //           style={{
  //             margin: '24px 16px',
  //             padding: 24,
  //             background: '#fff',
  //             minHeight: 280,
  //           }}
  //         >
  //           <div>{children}</div>
  //         </Content>
  //       </Layout>
  //     </Layout>
  //   ) : (<div>{children}</div>)
  // }
  render() {
    return (
      <div>123</div>
    );
  }
}
export default Layouts


