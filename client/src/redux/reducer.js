import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './reducers/user';

const reducer = combineReducers({
  UserReducer,
  form: formReducer,
});

export default reducer;
