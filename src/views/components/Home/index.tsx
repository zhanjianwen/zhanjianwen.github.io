import * as React from 'react'
import PancelGroup from './components/PanelGroup'
import './index.less'
import { Row, Col } from 'antd'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
// customerSupports
interface IProps {
  list: any
  homeList: (payload: object) => void
}

class Home extends React.Component<IProps>{
  public componentWillMount() {
    this.props.homeList({})
  }
  public componentDidUpdate() {
    if (JSON.stringify(this.state.ChartData) === '{}') {
      this.setState((prevState: any, props) => ({
        ChartData: props.list.toJS().LineChartDatas ? props.list.toJS().LineChartDatas[prevState.type] : []
      }));
    }
  }
  public state = {
    type: 'newVisitis',
    ChartData: {}
  }
  // public setChartData = (key: string): any => {
  //   const newList = this.props.list.toJS();
  //   this.setState(
  //     {
  //       type: key,
  //       ChartData: newList[key]
  //     }
  //   )
  // }
  public handleSetLineChartData = (key: string) => {
    if (this.props.list) {
      const newList = this.props.list.toJS().LineChartDatas;
      if (this.state.type == key) {
        this.setState({ type: this.state.type, ChartData: this.state.ChartData })
      } else {
        this.setState({ type: key, ChartData: newList[key] }
        )
      }
    }

    // this.setState((_prevState, props) => {
    //   const newList = props.list.toJS();
    //   return ({type:key,ChartData:newList[key]})
    // });
    // this.setState((prevState: any, props) => ({
    //   type: key,
    //   ChartData: props.list.toJS()[key]
    // }));
  }
  public render() {
    const { list } = this.props
    const { ChartData } = this.state
    const newList = list.toJS();
    return (
      <div className="Home">
        <PancelGroup handleSetLineChartData={this.handleSetLineChartData} list={newList} />
        <div className="LineChartGroup">
          <LineChart ChartData={ChartData} />
        </div>
        <div className="panel-group">
          <div className="gutter-example">
            <Row gutter={16}>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                  <div className="card-panel card-panel-col" style={{ height: 'auto', padding: '16px 16px 0' }}>
                    <RaddarChart datas={newList} />
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                  <div className="card-panel card-panel-col" style={{ height: 'auto', padding: '16px 16px 0' }}>
                    <PieChart datas={newList} />
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                  <div className="card-panel card-panel-col" style={{ height: 'auto', padding: '16px 16px 0' }}>
                    <BarChart datas={newList} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Home