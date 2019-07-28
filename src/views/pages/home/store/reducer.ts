import * as constants from './constants'
import {
  fromJS
} from 'immutable'
const defaultState = fromJS({
  list: {},
})

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case constants.HOME_LIST:
      return state.merge({
        list:action.list,
        loading: true
      });
    default:
      return state
  }


}