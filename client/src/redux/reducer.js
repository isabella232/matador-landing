import { combineReducers } from 'redux';

import UserReducer from './reducers/user';

const reducer = combineReducers({
  UserReducer,
});

export default reducer;
