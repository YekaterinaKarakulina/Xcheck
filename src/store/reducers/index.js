import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import crossCheckSessions from './crossCheckSessions';

const rootReducer = combineReducers({
  users,
  tasks,
  crossCheckSessions,
});

export default rootReducer;
