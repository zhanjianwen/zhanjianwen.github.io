import * as Mock from 'mockjs'
export default Mock.mock('/api/logout', 'post', {
    isSucc: true,
    message: '退出成功',
})