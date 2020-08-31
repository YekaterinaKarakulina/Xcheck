import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
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
  form: reduxFormReducer,
});

export default rootReducer;
