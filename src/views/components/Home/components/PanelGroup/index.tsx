import * as React from 'react'
import { Row, Col, Icon } from 'antd';
import './index.less'
interface IProps {
  list: any,
  handleSetLineChartData: (key: string) => void

}
class PancelGroup extends React.Component<IProps>{
  public cardPane = (list: any): any => {
    if (list.LineChartDatas) {
      const { handleSetLineChartData } = this.props;
      return Object.keys(list.LineChartDatas).map((key: string): any => {
        const item = list.LineChartDatas[key];
        if (item) {
          return (
            <Col onClick={() => { handleSetLineChartData(key) }} key={key} className="gutter-row" span={6}>
              <div className="card-panel card-panel-col">
                <div className="card-panel-icon-wrapper icon-people">
                  <Icon type={item.icon} className="card-panel-icon" />
                </div>
                <div className="card-panel-description">
                  <div className="card-panel-text">{item.name}</div>
                  <div className="card-panel-num">{item.number}</div>
                </div>
              </div>
            </Col>
          )
        }
      })
    }
  }
  public render() {
    const { list } = this.props;
    return (
      <div className="panel-group">
        <Row gutter={16}>
          {this.cardPane(list)}
        </Row>

      </div>
    )
  }
}
export default PancelGroup