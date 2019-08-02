import { message } from 'antd'
// import * as constants from './constants'
export const postLogout = (payload: object) => {
  return (dispatch: any) => {
    window.$api.system.postLogout(payload).then((res: any) => {
      if (res.isSucc) {
        message.success(res.message);
        // dispatch({ type: constants.DELETE_TOKEN, token: null })
      }
    })
  }
}