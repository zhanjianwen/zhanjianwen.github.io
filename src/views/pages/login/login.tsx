import Login from '../../components/Login'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state:any) => {
  return { 
    userName:state.getIn(['login','userName']),
    passWord:state.getIn(['login','passWord']),
    loading:state.getIn(['login','loading']),
    token:state.getIn(['login','token'])
  }
}
// export const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     login: (payload: object) => {
//       dispatch({ type: REQUEST_TOKEN, payload })
//     }
//   }
// }
const mapDispatchToProps = (dispatch: any) => ({
  login: (payload: object) => {
    dispatch(actionCreators.postLogin(payload))
    // dispatch({ type: REQUEST_TOKEN, payload })
  }
})
const LoginMap: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default withRouter(LoginMap)
