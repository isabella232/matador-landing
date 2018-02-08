import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './reducers/user';

import TokenStudio from './reducers/tokenStudio';
import EducationReducer from './reducers/education';

const reducer = combineReducers({
  TokenStudio,
  EducationReducer,
  UserReducer,
  form: formReducer,
});

export default reducer;
