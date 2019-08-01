import * as React from 'react'
import { Button } from 'antd';
import './index.less'
class PDF extends React.Component {
  public DownLoadPDF = () => {
    window.print();
  }
  public render() {
    return (
      <div className="PDF">
        <aside>Here we use window.print() to implement the feature of downloading PDF.</aside>
        <div>
          <Button type="primary" onClick={this.DownLoadPDF}>下载PDF</Button>
        </div>
      </div>
    )
  }
}
export default PDF;