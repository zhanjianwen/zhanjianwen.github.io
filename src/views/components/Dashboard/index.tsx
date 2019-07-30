import * as React from 'react';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import LayoutMenu, { IMenuItem } from '../Layout/Menu'
import AppRouter from '../../routers/index'
import Tags from '../Layout/Tags'
import Header from '../../pages/header/header'
import './index.less'
import logoImg from '../../../statics/images/selfimpro.png'
export interface IHistory {
  push: (pathname: string) => void
}
interface ILoaction {
  pathname: string
}
interface IProps {
  history: IHistory,
  location: ILoaction,
  theme: boolean
}
class Dashboard extends React.Component<IProps> {
  public componentWillMount() {
    // if(!window.localStorage.getItem('loginState')){
    //   this.props.history.push('/login');
    // }
    this.setState({
      tagList: JSON.parse(localStorage.getItem('tagList') || '[]')
    })
  }
  public menuList = [
    { label: '首页', url: '/admin/home', icon: 'home', key: 'home' },
    { label: '文档', url: '/admin/documentation', icon: 'snippets', key: 'documentation' },
    { label: '引导', url: '/admin/guide', icon: 'api', key: 'guide' },
    {
      label: '组件', icon: 'appstore', key: 'components',
      children: [
        { label: '富文本编辑', url: '/admin/tinymce', icon: 'file-markdown', key: 'tinymce' }
      ]
    },
  ]
  public state = {
    collapsed: false,
    isMobile: false,
    tagList: [{ label: '首页', url: '/admin/home', icon: 'home', key: 'home' }],
    theme: true
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
  public onClose = (tag: IMenuItem) => {
    this.setState({ tagList: this.state.tagList.filter(item => item.key != tag.key) },
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
  render() {
    const { location } = this.props
    const { theme, tagList, collapsed } = this.state;
    return (
      <Layout className="menu" >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img src={logoImg}></img>
          </div>
          <LayoutMenu
            theme={theme}
            menuList={this.menuList}
            pathname={location.pathname}
            handleTag={this.handleTag}
          />
        </Sider>
        <Layout>
          <Header
            push={this.props.history.push}
            collapsed={collapsed}
            toggle={this.toggle} />
          <Tags
            tagList={tagList}
            pathname={location.pathname}
            onClose={this.onClose} />
          <Content>
            <AppRouter />
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            React-Admin ©{new Date().getFullYear()} Created by zhanjianwen163@163.com
                        </Footer> */}
        </Layout>
      </Layout>
    )
  }
}
export default Dashboard

