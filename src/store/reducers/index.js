import { combineReducers } from 'redux';

import { reducer as reduxFormReducer } from 'redux-form';

import users from './users';
import tasks from './tasks';
import tasksTableData from './tasksTable';
import reviews from './reviews';
import login from './login';
import crossCheckSessionsData from './cross-check-sessions-data';
import crossCheckSessions from './cross-check-sessions';
import crossCheckSession from './cross-check-session';
import reviewRequest from './reviewRequest';
import requestsData from './requestsData';
import values from './values';

const rootReducer = combineReducers({
  users,
  tasks,
  crossCheckSessionsData,
  crossCheckSessions,
  reviews,
  tasksTableData,
  form: reduxFormReducer.plugin({
    crossCheckSession,
    reviewRequest,
  }),
  login,
  requestsData,
  values,
  taskCreation: reduxFormReducer.plugin({
    tasks,
  }),
});

export default rootReducer;
