import * as Mock from 'mockjs'
export default Mock.mock('/api/home', 'post', {
  isSucc: true,
  message: null,
  result: {
    LineChartDatas: {
      newVisitis: {
        name: 'New Visits',
        icon: 'usergroup-add',
        number: 8600,
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      },
      messages: {
        name: 'Messages',
        icon: 'message',
        number: 9600,
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130]
      },
      purchases: {
        name: 'Purchases',
        icon: 'property-safety',
        number: 10600,
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130]
      },
      shoppings: {
        name: 'Shoppings',
        icon: 'shopping-cart',
        number: 11600,
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130]
      }
    },
    RaddarChartDatas: [
      {
        value: [5000, 7000, 12000, 11000, 15000, 14000],
        name: 'Allocated Budget'
      },
      {
        value: [4000, 9000, 15000, 15000, 13000, 11000],
        name: 'Expected Spending'
      },
      {
        value: [5500, 11000, 12000, 15000, 12000, 12000],
        name: 'Actual Spending'
      }
    ],
    PieChartDatas: [
      { value: 320, name: 'Industries' },
      { value: 240, name: 'Technology' },
      { value: 149, name: 'Forex' },
      { value: 100, name: 'Gold' },
      { value: 59, name: 'Forecasts' }
    ],
    BarChartDatas:{
      PageADatas:[79, 52, 200, 334, 390, 330, 220],
      PageBDatas:[80, 52, 200, 334, 390, 330, 220],
      PageCDatas:[30, 52, 200, 334, 390, 330, 220],
    }
  }
})