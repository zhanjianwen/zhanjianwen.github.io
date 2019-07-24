


import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Dashboard from '../../components/Dashboard'

// interface IInfo {
//   user: any
// }

// const mapStateToProps = ({ user }: IInfo) => {
//   return { token: user.token }
// }

// export const mapDispatchToProps = (dispatch: any) => {
//   return {
  
//   }
// }
const DashboardMap: any = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Dashboard)
export default withRouter(DashboardMap)
