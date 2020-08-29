import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import crossCheckSessions from './crossCheckSessions';
import reviewsList from './reviewsList';

const rootReducer = combineReducers({
  users,
  tasks,
  crossCheckSessions,
  reviewsList,
});

export default rootReducer;
