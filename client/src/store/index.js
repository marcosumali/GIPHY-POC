import { combineReducers } from 'redux';

import userReducer from './user/user.reducers';

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers