// import * as constants from './constants'
export const loginOut = (payload: Object) => {
    return (dispatch: any) => {
        console.log(payload)
        // window.$api.system.postLogin(payload).then((res: any) => {
        //     if (res.isSucc) {
        //         if (res.user.token) {
        //             window.localStorage.setItem('loginState', 'true');
        //             window.localStorage.userInfo = JSON.stringify(res.user);
        //             dispatch({ type: constants.DELETE_TOKEN, token: res.user.token })
        //         }
        //     }
        // })
    }
}