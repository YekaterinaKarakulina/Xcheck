import { all } from 'redux-saga/effects';
import { watchGetUsers, watchPostUser } from './users';
import watchGetCrossCheckSessions from './crossCheckSessions';

export default function* rootSaga() {
  yield all([watchGetUsers(), watchPostUser(), watchGetCrossCheckSessions()]);
}
