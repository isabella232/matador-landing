import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const composedStore = compose(applyMiddleware(thunk))(createStore);

const configureStore = initialState => composedStore(reducer, initialState);

export default configureStore;
