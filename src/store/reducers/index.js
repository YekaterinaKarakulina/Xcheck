import { combineReducers } from 'redux';

import { reducer as reduxFormReducer } from 'redux-form';

import users from './users';
import tasks from './tasks';
import tasksTableData from './tasksTable';
import reviewsList from './reviewsList';
import login from './login';
import crossCheckSessionsData from './cross-check-sessions-data';
import crossCheckSessions from './cross-check-sessions';
import crossCheckSession from './cross-check-session';
import requestsData from './requestsData';

const rootReducer = combineReducers({
  users,
  tasks,
  crossCheckSessionsData,
  crossCheckSessions,
  reviewsList,
  tasksTableData,
  form: reduxFormReducer.plugin({
    crossCheckSession,
  }),
  login,
  requestsData,
});

export default rootReducer;
