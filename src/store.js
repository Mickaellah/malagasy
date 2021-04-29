import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import state from './state';
import combineReducers from './reducer/index';

let store = createStore(combineReducers, state, applyMiddleware(thunk));
export default store;
