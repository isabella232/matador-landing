import { combineReducers } from 'redux';

import UserReducer from './reducers/user';
import EducationReducer from './reducers/education';

const reducer = combineReducers({
  UserReducer,
});

export default reducer;
