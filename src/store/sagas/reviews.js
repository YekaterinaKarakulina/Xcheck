import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { GET_REVIEWS, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE } from '../actions/types/reviews';

function* workerGetReviews() {
  const uri = 'http://localhost:3000/reviews';
  try {
    const result = yield call(Axios.get, uri);
    yield put({
      type: GET_REVIEWS_SUCCESS,
      payload: result.data,
    });
  } catch {
    yield put({
      type: GET_REVIEWS_FAILURE,
      payload: `ERROR! Cannot get reviews list at ${uri}`,
    });
  }
}

function* watchReviews() {
  yield takeEvery(GET_REVIEWS, workerGetReviews);
}

export default watchReviews;
