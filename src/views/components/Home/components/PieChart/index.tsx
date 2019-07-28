import * as React from 'react'

import ReactEcharts from 'echarts-for-react';
interface IProps {
    datas: any
}
const animationDuration:number=2600;
class PieChart extends React.Component<IProps>{
    getOption = (datas: any) => {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            bottom: '10',
            data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
          },
          series: [
            {
              name: 'WEEKLY WRITE ARTICLES',
              type: 'pie',
              roseType: 'radius',
              radius: [15, 95],
              center: ['50%', '38%'],
              data:datas.PieChartDatas,
              animationEasing: 'cubicInOut',
              animationDuration: animationDuration
            }
          ]
        }
    }
    public render() {
        const { datas } = this.props
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
export default PieChart