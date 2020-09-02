import { all } from 'redux-saga/effects';
import { watchGetUsers, watchPostUser } from './users';
import watchGetCrossCheckSessions from './crossCheckSessions';
import { watchPostCrossCheckSession } from './crossCheckSession';
import watchGetTasksTable from './tasksTable';
import watchGetReviewsList from './reviewsList';

export default function* rootSaga() {
  yield all([
    watchGetUsers(),
    watchPostUser(),
    watchGetCrossCheckSessions(),
    watchPostCrossCheckSession(),
    watchGetTasksTable(),
    watchGetReviewsList(),
  ]);
}
