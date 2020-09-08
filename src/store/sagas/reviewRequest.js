/* eslint-disable import/prefer-default-export */
import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  POST_REVIEWS_REQUEST,
  POST_REVIEWS_REQUEST_SUCCESS,
  POST_REVIEWS_REQUEST_FAILURE,
} from '../actions/types-old';

function* workerPostReviewRequest(action) {
  const uri = 'http://localhost:3000/reviewRequest';
  try {
    const result = yield call(Axios.post, uri, action.payload);
    yield put({ type: POST_REVIEWS_REQUEST_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: POST_REVIEWS_REQUEST_FAILURE,
      payload: `ERROR! Cannot post crossCheck session at ${uri}`,
    });
  }
}

function* watchPostReviewRequest() {
  yield takeEvery(POST_REVIEWS_REQUEST, workerPostReviewRequest);
}

export { watchPostReviewRequest };
