import { combineReducers } from 'redux';

import { reducer as reduxFormReducer } from 'redux-form';

import tasks from './tasks/tasks';
import tasksTableData from './tasks/tasks-table';
import reviewsData from './reviews/reviews-data';
import review from './reviews/review';
import login from './login/login';
import crossCheckSessionsData from './cross-check-sessions/cross-check-sessions-data';
import crossCheckSessions from './cross-check-sessions/cross-check-sessions';
import crossCheckSession from './cross-check-sessions/cross-check-session';
import reviewRequestsData from './review-requests/review-requests-data';
import reviewRequest from './review-requests/review-request';
import reviewRequests from './review-requests/review-requests';

const rootReducer = combineReducers({
  tasks,
  crossCheckSessionsData,
  crossCheckSessions,
  reviewsData,
  review,
  tasksTableData,
  form: reduxFormReducer.plugin({
    crossCheckSession,
    reviewRequest,
  }),
  login,
  reviewRequestsData,
  reviewRequests,
  taskCreation: reduxFormReducer.plugin({
    tasks,
  }),
});

export default rootReducer;
