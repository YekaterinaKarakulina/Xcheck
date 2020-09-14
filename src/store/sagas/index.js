import { all } from 'redux-saga/effects';
import watchCrossCheckSessions from './cross-check-sessions';
import watchReviews from './reviews';
import watchTask from './task';
import watchRequests from './review-requests';
import { watchLogin, watchUserRoles, watchLogout } from './login';

export default function* rootSaga() {
  yield all([
    watchCrossCheckSessions(),
    watchReviews(),
    watchTask(),
    watchRequests(),
    watchLogin(),
    watchUserRoles(),
    watchLogout(),
  ]);
}
