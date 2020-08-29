import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import tasksTableData from './tasksTable';
import crossCheckSessions from './crossCheckSessions';

const rootReducer = combineReducers({
  users,
  tasks,
  crossCheckSessions,
  tasksTableData,
});

export default rootReducer;
