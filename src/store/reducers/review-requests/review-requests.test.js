import reviewRequests from './review-requests';

const initialState = {
  isModalVisible: false,
  currentReviewRequest: {},
};

const reviewRequest = {
  "id": "rev-req-4",
  "author": "viktorsipach",
  "taskTitle": "Task 3",
  "state": "readyToXCheck",
  "selfGrade": {
    "task-3-bp1": {
      "score": 20,
      "comment": "Well done!"
    },
    "task-3-ep1": {
      "score": 15,
      "comment": "Some things are done, some are not"
    },
    "task-3-fp1": {
      "score": 0,
      "comment": "No ticket today"
    }
  },
  "linkToDemo": "#",
  "linkToPR": "#",
  "crossCheckSessionId": "xcheck-3"
};

describe('reviewRequests', () => {
    test('modal open', () => {
      const result = reviewRequests(initialState, {type: 'OPEN_MODAL'});
      expect(result.isModalVisible).toEqual(true);
    })
    test('modal close', () => {
      const result = reviewRequests(initialState, {type: 'CLOSE_MODAL'});
      expect(result.isModalVisible).toEqual(false);
    })
  });

describe('Get review request', () => {
  test('success', () => {
    const result = reviewRequests(initialState, {type: 'GET_REVIEW_REQUESTS_SUCCESS', payload: reviewRequest});
        expect(result.currentReviewRequest).toEqual(reviewRequest);
    })
  test('failure', () => {
    const result = reviewRequests(initialState, {type: 'GET_REVIEW_REQUESTS_FAILURE'});
    expect(result.currentReviewRequest).toEqual({});
  })
});

describe('Post review request', () => {
  test('success', () => {
    const result = reviewRequests(initialState, {type: 'POST_REVIEW_REQUEST_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
  test('failure', () => {
    const result = reviewRequests(initialState, {type: 'POST_REVIEW_REQUEST_FAILURE'});
    expect(result.currentReviewRequest).toBeTruthy();
  })
});

describe('Update review request', () => {
  test('success', () => {
    const result = reviewRequests(initialState, {type: 'UPDATE_REVIEW_REQUEST_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
  test('failure', () => {
    const result = reviewRequests(initialState, {type: 'UPDATE_REVIEW_REQUEST_FAILURE'});
    expect(result.currentReviewRequest).toBeTruthy();
  })
});