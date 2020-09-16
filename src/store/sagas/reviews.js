import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
  POST_REVIEW,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAILURE,
  UPDATE_REVIEW,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILURE,
} from '../actions/types/reviews';

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

function* workerPostReview(action) {
  const uri = 'http://localhost:3000/reviews';
  try {
    const result = yield call(Axios.post, uri, action.payload);
    yield put({ type: POST_REVIEW_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: POST_REVIEW_FAILURE,
      payload: `ERROR! Cannot post review request at ${uri}`,
    });
  }
}

function* workerUpdateReview(action) {
  const { id } = action.payload;
  try {
    const uri = `http://localhost:3000/reviews/${id}`;
    yield call(Axios.put, uri, action.payload);
    yield put({ type: UPDATE_REVIEW_SUCCESS });
  } catch {
    yield put({
      type: UPDATE_REVIEW_FAILURE,
      payload: `ERROR! Cannot update review with id ${id}`,
    });
  }
}

function* watchReviews() {
  yield takeEvery(GET_REVIEWS, workerGetReviews);
  yield takeEvery(POST_REVIEW, workerPostReview);
  yield takeEvery(UPDATE_REVIEW, workerUpdateReview);
}

export default watchReviews;
