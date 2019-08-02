import * as React from 'react'

import ReactEcharts from 'echarts-for-react';
interface IProps {
  ChartData: any
}

class LineChart extends React.Component<IProps> {
  public getOption = (ChartData: any) => {
    return {
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        boundaryGap: false,
        axisTick: {
          show: false
        }
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 20,
        top: 30,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        padding: [5, 10]
      },
      yAxis: {
        axisTick: {
          show: false
        }
      },
      legend: {
        data: ['expected', 'actual']
      },
      series: [{
        name: 'expected', itemStyle: {
          normal: {
            color: '#FF005A',
            lineStyle: {
              color: '#FF005A',
              width: 2
            }
          }
        },
        smooth: true,
        type: 'line',
        data: ChartData.expectedData,
        animationDuration: 2800,
        animationEasing: 'cubicInOut'
      },
      {
        name: 'actual',
        smooth: true,
        type: 'line',
        itemStyle: {
          normal: {
            color: '#3888fa',
            lineStyle: {
              color: '#3888fa',
              width: 2
            },
            areaStyle: {
              color: '#f3f8ff'
            }
          }
        },
        data: ChartData.actualData,
        animationDuration: 2800,
        animationEasing: 'quadraticOut'
      }]
    }
  }
  public render() {
    const { ChartData } = this.props;
    return (
      <ReactEcharts
        option={this.getOption(ChartData)}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
      />
    )
  }
}
export default LineChart