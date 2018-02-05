import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './reducers/user';
import TokenStudio from './reducers/tokenStudio';

const reducer = combineReducers({
  TokenStudio,
  UserReducer,
  form: formReducer,
});

export default reducer;
