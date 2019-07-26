import { message } from 'antd'
import * as constants from './constants'
export const postLogout = (payload: object) => {
  return (dispatch: any) => {
    window.$api.system.postLogin(payload).then((res: any) => {
      if (res.isSucc) {
        message.success(res.message);
        window.$utils.Storage.remove('userInfo');
        window.$utils.Storage.remove('loginState');
        dispatch({ type: constants.DELETE_TOKEN, token: null })
      }
    })
  }
}