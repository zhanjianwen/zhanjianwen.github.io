import * as React from 'react'
import { Layout, Icon, Dropdown, Menu } from 'antd';
const MenuItem = Menu.Item
const { Header } = Layout;
import { IHistory } from '../../Dashboard'
import './index.less'
interface IProps extends IHistory {
    collapsed: boolean
    userName: string
    toggle: () => void
    logout: () => void
}

class Headers extends React.Component<IProps> {
    public onClick = () => {
        this.props.logout()
        this.props.push('/login')
    }
    public render() {
        const { userName,collapsed,toggle } = this.props
        const menu = (
            <Menu>
                <MenuItem key="logout" onClick={this.onClick}>
                    退出登录
              </MenuItem>
            </Menu>
        )
        return (
            <Header className="header" style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggle}
                />
                <Dropdown overlay={menu} placement="bottomLeft">
                    <div className="user">
                        <Icon type="user" style={{ marginRight: 5, fontSize: 20 }} />
                        <span>{userName}</span>
                    </div>
                </Dropdown>
            </Header>
        )
    }

}

export default Headers