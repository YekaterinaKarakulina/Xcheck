import { takeEvery, put } from 'redux-saga/effects';
import { axiosDB } from '../../axios';

import {
  GET_REVIEW_REQUESTS,
  GET_REVIEW_REQUESTS_SUCCESS,
  GET_REVIEW_REQUESTS_FAILURE,
  GET_REVIEW_REQUEST,
  GET_REVIEW_REQUEST_SUCCESS,
  GET_REVIEW_REQUEST_FAILURE,
  POST_REVIEW_REQUEST,
  POST_REVIEW_REQUEST_SUCCESS,
  POST_REVIEW_REQUEST_FAILURE,
  UPDATE_REVIEW_REQUEST,
  UPDATE_REVIEW_REQUEST_SUCCESS,
  UPDATE_REVIEW_REQUEST_FAILURE,
} from '../actions/types/review-requests';

function* workerGetReviewRequests() {
  try {
    const result = yield axiosDB.get('reviewRequests');
    yield put({ type: GET_REVIEW_REQUESTS_SUCCESS, payload: result.data });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_REVIEW_REQUESTS_FAILURE,
      payload: 'ERROR! Cannot get review requests from',
    });
  }
}

function* workerGetReviewRequest(action) {
  const id = action.payload;
  try {
    const result = yield axiosDB.get(`reviewRequests/${id}`);
    yield put({ type: GET_REVIEW_REQUEST_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_REVIEW_REQUEST_FAILURE,
      payload: `ERROR! Cannot get review request with ID ${id}`,
    });
  }
}

function* workerPostReviewRequest(action) {
  try {
    yield axiosDB.post('reviewRequests', action.payload);
    yield put({ type: POST_REVIEW_REQUEST_SUCCESS });
  } catch (error) {
    console.error(error);
    yield put({
      type: POST_REVIEW_REQUEST_FAILURE,
      payload: 'ERROR! Cannot post review request',
    });
  }
}

function* workerUpdateReviewRequest(action) {
  const { id } = action.payload;
  try {
    yield axiosDB.put(`reviewRequests/${id}`, action.payload);
    yield put({ type: UPDATE_REVIEW_REQUEST_SUCCESS });
  } catch (error) {
    console.error(error);
    yield put({
      type: UPDATE_REVIEW_REQUEST_FAILURE,
      payload: `ERROR! Cannot update review request with ID ${id}`,
    });
  }
}

function* watchRequests() {
  yield takeEvery(GET_REVIEW_REQUESTS, workerGetReviewRequests);
  yield takeEvery(GET_REVIEW_REQUEST, workerGetReviewRequest);
  yield takeEvery(POST_REVIEW_REQUEST, workerPostReviewRequest);
  yield takeEvery(UPDATE_REVIEW_REQUEST, workerUpdateReviewRequest);
}

export default watchRequests;
