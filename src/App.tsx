import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './views/components/NotFound';
import Login from './views/pages/login/login';
import Dashboard from './views/components/Dashboard';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/admin/home" push />} />
      <Route path="/admin" component={Dashboard} />
      <Route path="/404" component={NotFound} />
      <Route path="/login" component={Login} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
)