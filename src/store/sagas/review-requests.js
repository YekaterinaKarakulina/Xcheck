import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_REVIEW_REQUESTS,
  GET_REVIEW_REQUESTS_SUCCESS,
  GET_REVIEW_REQUESTS_FAILURE,
  POST_REVIEW_REQUEST,
  POST_REVIEW_REQUEST_SUCCESS,
  POST_REVIEW_REQUEST_FAILURE,
  UPDATE_REVIEW_REQUEST,
  UPDATE_REVIEW_REQUEST_SUCCESS,
  UPDATE_REVIEW_REQUEST_FAILURE,
} from '../actions/types/review-requests';

function* workerGetReviewRequests() {
  const uri = 'http://localhost:3000/reviewRequests';
  try {
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_REVIEW_REQUESTS_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_REVIEW_REQUESTS_FAILURE,
      payload: `ERROR! Cannot get review requests from ${uri}`,
    });
  }
}

function* workerPostReviewRequest(action) {
  const uri = 'http://localhost:3000/reviewRequests';
  try {
    const result = yield call(Axios.post, uri, action.payload);
    yield put({ type: POST_REVIEW_REQUEST_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: POST_REVIEW_REQUEST_FAILURE,
      payload: `ERROR! Cannot post review request at ${uri}`,
    });
  }
}

function* workerUpdateReviewRequest(action) {
  const { id } = action.payload;
  const uri = `http://localhost:3000/reviewRequests/${id}`;
  try {
    const result = yield call(Axios.put, uri, action.payload);
    yield put({ type: UPDATE_REVIEW_REQUEST_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: UPDATE_REVIEW_REQUEST_FAILURE,
      payload: `ERROR! Cannot update review request with id ${id}`,
    });
  }
}

function* watchRequests() {
  yield takeEvery(GET_REVIEW_REQUESTS, workerGetReviewRequests);
  yield takeEvery(POST_REVIEW_REQUEST, workerPostReviewRequest);
  yield takeEvery(UPDATE_REVIEW_REQUEST, workerUpdateReviewRequest);
}

export default watchRequests;
