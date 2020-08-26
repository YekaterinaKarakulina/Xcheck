import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';

const rootReducer = combineReducers({
  users,
  tasks,
});

export default rootReducer;
