import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import tasksTable from './tasksTable';

const rootReducer = combineReducers({
  users,
  tasks,
  tasksTable,
});

export default rootReducer;
