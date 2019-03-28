import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import tempReducer from './temp_reducer';

const rootReducer = combineReducers({
  temp: tempReducer
  // entities,
  // session,
  // errors,
  // ui
});

const configureStore = (preloadedState = {}) =>
  process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, preloadedState, applyMiddleware(thunk))
    : createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;
