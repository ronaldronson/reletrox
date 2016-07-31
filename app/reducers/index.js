import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import notes from './notes';
import popups from './popups';

const rootReducer = combineReducers({
  notes,
  popups,
  routing
});

export default rootReducer;
