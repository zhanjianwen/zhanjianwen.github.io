import * as React from 'react'
import { Button } from 'antd'
import './index.less'
class guide extends React.Component {
  public guide = () => {

  }
  render() {
    return (
      <div className="guide">
        <aside>
        引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于
        <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
        </aside>
        <Button type="primary" onClick={() => { guide }}>打开引导</Button>
      </div >
    )
  }
}
export default guide