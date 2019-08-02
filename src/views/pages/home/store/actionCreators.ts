import * as constants from './constants'
export const postHome = (payload: object) => {
  return (dispatch: any) => {
    window.$api.system.postHome(payload).then((res: any) => {
      if (res.isSucc) {
        dispatch({ type: constants.HOME_LIST, list: res.result })
      }
    })
  }
}