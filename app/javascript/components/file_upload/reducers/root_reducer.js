import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import docmentReducer from './document_reducer';

const rootReducer = combineReducers({
  temp: documentReducer
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
