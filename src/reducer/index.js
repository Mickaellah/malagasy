import {act} from 'react-test-renderer';
import {combineReducers} from 'redux';

function phrases(state = [], action) {
  switch (action.type) {
    case 'GET_PHRASES':
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  phrases,
});
