import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_REVIEWS_LIST,
  GET_REVIEWS_LIST_SUCCESS,
  GET_REVIEWS_LIST_FAILURE,
} from '../store/actions/types';

function* workerGetReviewsList() {
  const uri = 'http://localhost:3000/reviews';
  try {
    const result = yield call(Axios.get, uri);
    console.log(result);
    yield put({
      type: GET_REVIEWS_LIST_SUCCESS,
      payload: result.data,
    });
  } catch {
    yield put({
      type: GET_REVIEWS_LIST_FAILURE,
      payload: `ERROR! Cannot get reviews list at ${uri}`,
    });
  }
}

function* watchGetReviewsList() {
  yield takeEvery(GET_REVIEWS_LIST, workerGetReviewsList);
}

export default watchGetReviewsList;
