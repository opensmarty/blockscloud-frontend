import React from 'react';
import { Router, Route } from 'dva/router';
import dashboard from './routes/dashboard/index';
import login from './routes/base/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={dashboard} />
      <Route path="/dashboard" component={dashboard} />
      <Route path="/login" component={login} />
    </Router>
  );
}

export default RouterConfig;
