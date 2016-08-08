import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import notes from './notes';
import popups from './popups';
import settings from './settings';

const rootReducer = combineReducers({
  notes,
  popups,
  routing,
  settings
});

export default rootReducer;
