import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layout
import App from 'layouts/app';

// Components
import TodoContainer from 'ui/todos-container';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={TodoContainer} />
    </Route>
  </Router>
,document.getElementById('app'));