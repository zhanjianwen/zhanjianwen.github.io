import * as constants from './constants'
import {
    fromJS
} from 'immutable'
const defaultState = fromJS({
    userName: 'admin',
    passWord: 'admin',
    loading:false,
    token:null
})

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case constants.REQUEST_TOKEN:
            return state.merge({
                token:action.token,
                // passWord:action.passWord,
                loading: true
            });
            // return state.merge({
            //     ticketInfo: fromJS(action.ticketInfo),
            //     token: fromJS(action.token)
            // })
        default:
            return state
    }


}