import * as React from 'react'

import ReactEcharts from 'echarts-for-react';
interface IProps {
    datas:any
}
const animationDuration:number=3000

class RaddarChart extends React.Component<IProps>{
    public getOption = (datas: any) => {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              radar: {
                radius: '66%',
                center: ['50%', '42%'],
                splitNumber: 8,
                splitArea: {
                  areaStyle: {
                    color: 'rgba(127,95,132,.3)',
                    opacity: 1,
                    shadowBlur: 45,
                    shadowColor: 'rgba(0,0,0,.5)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 15
                  }
                },
                indicator: [
                  { name: 'Sales', max: 10000 },
                  { name: 'Administration', max: 20000 },
                  { name: 'Information Techology', max: 20000 },
                  { name: 'Customer Support', max: 20000 },
                  { name: 'Development', max: 20000 },
                  { name: 'Marketing', max: 20000 }
                ]
              },
              legend: {
                left: 'center',
                bottom: '5',
                data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
              },
              series: [{
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                  normal: {
                    shadowBlur: 13,
                    shadowColor: 'rgba(0,0,0,.2)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    opacity: 1
                  }
                },
                data:datas.RaddarChartDatas ,
                animationDuration: animationDuration
              }]
        }
    }
    public render(){
        const {datas} =this.props
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
export default RaddarChart