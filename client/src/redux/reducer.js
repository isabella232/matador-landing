import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './reducers/user';
import EducationReducer from './reducers/education';

const reducer = combineReducers({
  UserReducer,
  form: formReducer,
});

export default reducer;
