import { all } from 'redux-saga/effects';
import watchUsers from './users';
import watchCrossCheckSessions from './cross-check-sessions';
import watchGetTasksTable from './tasksTable';
import watchGetReviewsList from './reviewsList';
import watchTask from '../../sagas/task';
import watchRequests from './requests';

export default function* rootSaga() {
  yield all([
    watchUsers(),
    watchCrossCheckSessions(),
    watchGetTasksTable(),
    watchGetReviewsList(),
    watchTask(),
    watchRequests(),
  ]);
}
