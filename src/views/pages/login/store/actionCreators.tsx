import { IStorage } from 'src/views/utils/Storage';
import { message } from 'antd'
import * as constants from './constants'
interface UserInfo {
  id: string
  userName: string
  loading: boolean
}
export const postLogin = (payload: object) => {
  return (dispatch: any) => {
    const loginState: IStorage = {
      key: 'loginState',
      value: true
    }
    window.$utils.Storage.set(loginState);
    const info: UserInfo = {
      id: '1',
      userName: 'admin',
      loading: true
    }
    const userInfoState: IStorage = {
      key: 'userInfo',
      value: info
    }
    window.$utils.Storage.set(userInfoState)
    // window.localStorage.userInfo = JSON.stringify(res.user);
    window.$api.system.postLogin(payload).then((res: any) => {
      if (res.isSucc) {
        message.success(res.message);
        window.localStorage.setItem('loginState', 'true');
        window.localStorage.userInfo = JSON.stringify(res.result);
        dispatch({ type: constants.REQUEST_TOKEN, token: res.result.token })
      }
    })
  }
}
export const postLogout=(payload:object)=>{
  
}