import { all } from 'redux-saga/effects';
import watchUsers from './users';
import watchCrossCheckSessions from './cross-check-sessions';
import watchGetTasksTable from './tasksTable';
import watchGetReviewsList from './reviewsList';
import { watchPostReviewRequest } from './reviewRequest';
import watchTask from './task';
import watchRequests from './requests';

export default function* rootSaga() {
  yield all([
    watchUsers(),
    watchCrossCheckSessions(),
    watchGetTasksTable(),
    watchGetReviewsList(),
    watchPostReviewRequest(),
    watchTask(),
    watchRequests(),
  ]);
}
