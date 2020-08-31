import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { UPDATE_INITIAL_STATE } from '../actions/types';
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
