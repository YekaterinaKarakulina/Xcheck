import reviewRequestsData from './review-requests-data';

const initialState = [];

const reviewRequests = [
    {
    "id": "rev-req-2",
    "author": "KatiaR",
    "taskTitle": "Task 2",
    "state": "draft",
    "selfGrade": {},
    "linkToDemo": "#",
    "linkToPR": "#",
    "crossCheckSessionId": "xcheck-3"
  },
  {
    "id": "rev-req-3",
    "author": "KatiaR",
    "taskTitle": "Task 3",
    "state": "draft",
    "selfGrade": {},
    "linkToDemo": "#",
    "linkToPR": "#",
    "crossCheckSessionId": "xcheck-3"
  }
]

describe('Get review requests', () => {
    test('success', () => {
        const result = reviewRequestsData(initialState, {type: 'GET_REVIEW_REQUESTS_SUCCESS', payload: reviewRequests});
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(reviewRequests.length);
    })
    test('failure', () => {
        const result = reviewRequestsData(initialState, {type: 'GET_REVIEW_REQUESTS_FAILURE'});
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(0);
    })
});