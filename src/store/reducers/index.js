import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import tasksTableData from './tasksTable';
import crossCheckSessions from './crossCheckSessions';
import reviewsList from './reviewsList';

const rootReducer = combineReducers({
  users,
  tasks,
  crossCheckSessions,
  reviewsList,
  tasksTableData,
});

export default rootReducer;
