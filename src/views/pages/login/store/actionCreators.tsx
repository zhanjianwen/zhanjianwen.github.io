import { StorageGet } from 'src/views/utils/Storage';

// import * as constants from './constants'

interface UserInfo {
  id: string
  userName: string
  loading: boolean
}
export const postLogin = (payload: object) => {
  return (dispatch: any) => {
    const loginState:StorageGet={
      key:'loginState',
      value:true
    }
    window.$utils.Storage.set(loginState);
    const info: UserInfo = {
      id: '1',
      userName: 'admin',
      loading: true
    }
    const userInfoState:StorageGet={
      key:'userInfo',
      value:info
    }
    window.$utils.Storage.set(userInfoState)
    // window.localStorage.userInfo = JSON.stringify(res.user);
    // window.$api.system.postLogin(payload).then((res: any) => {
    //     if (res.isSucc) {
    //         if (res.user.token) {
    //             window.localStorage.setItem('loginState', 'true');
    //             window.localStorage.userInfo = JSON.stringify(res.user);
    //             dispatch({ type: constants.REQUEST_TOKEN, token: res.user.token })
    //         }
    //     }
    // })
  }
}