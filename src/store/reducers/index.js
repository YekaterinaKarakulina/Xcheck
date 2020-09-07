import { combineReducers } from 'redux';

import { reducer as reduxFormReducer } from 'redux-form';

import users from './users';
import tasks from './tasks';
import tasksTableData from './tasksTable';
import reviewsList from './reviewsList';
import login from './login';
import crossCheckSessionsData from './crossCheckSessionsData';
import crossCheckSessions from './crossCheckSessions';
import crossCheckSession from './crossCheckSession';
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
  taskCreation: reduxFormReducer.plugin({
    tasks,
  }),
});

export default rootReducer;
