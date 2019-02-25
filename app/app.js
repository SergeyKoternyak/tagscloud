import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './containers/homePage';
import FullView from './containers/fullView';

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            component={HomePage}
          />
          <Route
            path='/:id'
            component={FullView}
          />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp();