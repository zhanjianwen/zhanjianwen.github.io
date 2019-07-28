import Home from '../../components/Home'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
// import { HOME_LIST } from './store/constants'
const mapStateToProps = (state: any) => {
  return {
    list: state.getIn(['home', 'list']),
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  // homeList: (payload: object) => {
  //   dispatch(actionCreators.postHome({ type: HOME_LIST }))
  //   // dispatch({ type: REQUEST_TOKEN, payload })
  // },
    homeList: (payload: object) => {
      dispatch(actionCreators.postHome(payload))
  },

})
const HomeMap: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
export default withRouter(HomeMap)
