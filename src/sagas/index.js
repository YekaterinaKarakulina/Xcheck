import { watchGetUsers } from './users';

export default function* rootSaga() {
  yield watchGetUsers();
  console.log('root saga');
}
