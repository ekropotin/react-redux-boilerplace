import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counterReducer from 'modules/counter';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({ counter: counterReducer, router: routerReducer });
};

export default makeRootReducer;
