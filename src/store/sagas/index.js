import { all } from 'redux-saga/effects';
import { watchGetUsers, watchPostUser } from './users';
import watchGetCrossCheckSessions from './crossCheckSessions';
import watchGetTasksTable from './tasksTable';
import watchGetReviewsList from './reviewsList';
import { watchPostReviewRequest } from './reviewRequest';
import watchTask from './task';
import watchRequests from './requests';

export default function* rootSaga() {
  yield all([
    watchGetUsers(),
    watchPostUser(),
    watchGetCrossCheckSessions(),
    watchGetTasksTable(),
    watchGetReviewsList(),
    watchPostReviewRequest(),
    watchTask(),
    watchRequests(),
  ]);
}
