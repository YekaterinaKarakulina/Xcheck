import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
