import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas/index';

import reducer from './reducers';

const reduxSagaMiddleware = reduxSaga();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxSagaMiddleware, logger))
);
reduxSagaMiddleware.run(rootSaga);

export default store;
