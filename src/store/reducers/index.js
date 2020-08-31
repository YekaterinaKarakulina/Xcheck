import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import tasksTableData from './tasksTable';
import crossCheckSessions from './crossCheckSessions';
import reviewsList from './reviewsList';
import login from './login';

const rootReducer = combineReducers({
  users,
  tasks,
  crossCheckSessions,
  reviewsList,
  tasksTableData,
  login,
});

export default rootReducer;
