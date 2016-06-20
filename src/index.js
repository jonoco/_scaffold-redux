import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';	  // async action creator
import createLogger from 'redux-logger';// redux debugger						

import App from './components/app';
import Home from './components/home';
import reducers from './reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
	reduxThunk,
	logger
)(createStore);

// import styles
require('./stylesheets/main.scss');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory}>
  		<Route path='/' component={App}>
  			<IndexRoute component={Home} />
  		</Route>
  	</Router>
  </Provider>
  , document.querySelector('.application'));
