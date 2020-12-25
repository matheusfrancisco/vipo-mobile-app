import { combineReducers } from 'redux';

// Imports: Reducers
import profile from './profile/index';

// Redux: Root Reducer
const rootReducer = combineReducers({
  profile,
});

// Exports
export default rootReducer;