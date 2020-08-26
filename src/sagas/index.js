import { all } from 'redux-saga/effects';
import { watchGetUsers, watchPostUser } from './users';

export default function* rootSaga() {
  yield all([watchGetUsers(), watchPostUser()]);
}
