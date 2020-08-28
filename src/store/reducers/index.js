import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import tasksTableData from './tasksTable';

const rootReducer = combineReducers({
  users,
  tasks,
  tasksTableData,
});

export default rootReducer;
