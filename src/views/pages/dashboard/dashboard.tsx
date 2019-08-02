
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Dashboard from '../../components/Dashboard'
const DashboardMap: any = connect()(Dashboard)
export default withRouter(DashboardMap)
