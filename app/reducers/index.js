import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import notes from './notes';

const rootReducer = combineReducers({
  notes,
  routing
});

export default rootReducer;
