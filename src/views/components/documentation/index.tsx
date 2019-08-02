import * as React from 'react'
import './index.less'
class documentation extends React.Component {
  render() {
    return (
      <div className="documentation">
        <a
          className="document-btn"
          target="_blank"
          href="https://panjiachen.github.io/vue-element-admin-site/"
        >文档</a>
        <a
          className="document-btn"
          target="_blank"
          href="https://github.com/PanJiaChen/vue-element-admin/"
        >Github</a>
        <a
          className="document-btn"
          target="_blank"
          href="https://panjiachen.gitee.io/vue-element-admin-site/zh/"
        >国内文档</a>
      </div>
    )
  }
}
export default documentation