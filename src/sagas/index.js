import { all } from 'redux-saga/effects';
import { watchGetUsers, watchPostUser } from './users';
import watchGetTasksTable from './tasksTable';

export default function* rootSaga() {
  yield all([watchGetUsers(), watchPostUser(), watchGetTasksTable()]);
}
