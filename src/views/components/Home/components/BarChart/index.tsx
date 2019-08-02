import * as React from 'react'
import ReactEcharts from 'echarts-for-react';
interface IProps {
  datas: any
}
const animationDuration: number = 6000;

class BarChart extends React.Component<IProps>{
   getOption = (datas: any) => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: 10,
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }],
      yAxis: [{
        type: 'value',
        axisTick: {
          show: false
        }
      }],
      series: [{
        name: 'pageA',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: datas.BarChartDatas?datas.BarChartDatas.PageADatas:[],
        animationDuration: animationDuration
      }, {
        name: 'pageB',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: datas.BarChartDatas?datas.BarChartDatas.PageBDatas:[],
        animationDuration: animationDuration
      }, {
        name: 'pageC',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: datas.BarChartDatas?datas.BarChartDatas.PageCDatas:[],
        animationDuration: animationDuration
      }]
    }
  }
  public render() {
    const { datas } = this.props;
    return (
      <ReactEcharts
        option={this.getOption(datas)}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
      />
    )
  }
}

export default BarChart