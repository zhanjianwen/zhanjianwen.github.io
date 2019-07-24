import * as React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './views/components/NotFound';
import Login from './views/components/Login';
import Dashboard from './views/components/Dashboard';

export default () => (
    <Router>
        <Switch>
            {/* <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />         */}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)