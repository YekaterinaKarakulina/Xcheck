import { takeEvery, put } from 'redux-saga/effects';
import { axiosDB } from '../../axios';
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
  try {
    const result = yield axiosDB.get('reviews');
    yield put({
      type: GET_REVIEWS_SUCCESS,
      payload: result.data,
    });
  } catch {
    yield put({
      type: GET_REVIEWS_FAILURE,
      payload: `ERROR! Cannot get reviews list`,
    });
  }
}

function* workerPostReview(action) {
  try {
    const result = yield axiosDB.post('reviews', action.payload);
    yield put({ type: POST_REVIEW_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: POST_REVIEW_FAILURE,
      payload: `ERROR! Cannot post review`,
    });
  }
}

function* workerUpdateReview(action) {
  const { id } = action.payload;
  try {
    // const uri = `http://localhost:3000/reviews/${id}`;
    yield axiosDB.put(`reviews/${id}`, action.payload);
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
