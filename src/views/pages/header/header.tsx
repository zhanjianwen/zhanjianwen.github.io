import { connect } from 'react-redux'
import { DELETE_TOKEN } from './store/constants'
import { actionCreators } from './store'
import Header from '../../components/Layout/Header'

export const mapStateToProps = (state: any) => {
  return {
    userName: state.getIn(['login', 'userName']),
  }
}
export const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => {
      dispatch(actionCreators.postLogout({ type: DELETE_TOKEN }))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)