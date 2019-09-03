import { combineReducers } from 'redux';

// parts of state
import cookiesData from './CookiesReducer';
import resolutionData from './ResolutionReducer';

// combine all reducers
const rootReducer = combineReducers({
  cookiesData,
  resolutionData
});

export default rootReducer;
