import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
import actions from './actions'

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk, logger)),
);
export {store, actions};