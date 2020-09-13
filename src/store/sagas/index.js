import { all } from 'redux-saga/effects';
import watchUsers from './users';
import watchCrossCheckSessions from './cross-check-sessions';
import watchReviews from './reviews';
import watchTask from './task';
import watchRequests from './review-requests';

export default function* rootSaga() {
  yield all([
    watchUsers(),
    watchCrossCheckSessions(),
    watchReviews(),
    watchTask(),
    watchRequests(),
  ]);
}
