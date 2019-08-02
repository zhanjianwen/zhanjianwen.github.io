import * as Mock from 'mockjs'
export default Mock.mock('/api/login', 'post', {
    isSucc: true,
    message: '登录成功',
    result: {
        token: 'S000000001',
        id: 'S000000001',
        userName: 'admin',
        userPwd: 'passWord'
    }
})