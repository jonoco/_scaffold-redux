import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';	  // async action creator
import createLogger from 'redux-logger';// redux debugger						

import App from './components/app';
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
    <App />
  </Provider>
  , document.querySelector('.application'));
