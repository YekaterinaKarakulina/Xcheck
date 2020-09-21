import crossCheckSessionsData from './cross-check-sessions-data';

const initialState = [];

const crossCheckSessions = [
  {
    "id": "xcheck-1",
    "title": "rss2020Q3react-songbird",
    "author": "viktorsipach",
    "state": "draft",
    "taskTitle": "Task 1",
    "crossCheckSessionPeriod": [
      "2020-07-08",
      "2020-07-14"
    ],
    "coefficient": 0.2,
    "discardMinScore": true,
    "discardMaxScore": true,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": []
  },
  {
    "id": "xcheck-2",
    "title": "rss2020Q3react-xcheck",
    "author": "KatiaR",
    "state": "draft",
    "taskTitle": "Task 2",
    "crossCheckSessionPeriod": [
      "2020-09-15",
      "2020-09-17"
    ],
    "coefficient": 0.7,
    "discardMinScore": true,
    "discardMaxScore": true,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": []
  },
  {
    "id": "xcheck-3",
    "title": "rss2020Q3react-schedule",
    "author": "YekaterinaKarakulina",
    "state": "closed",
    "taskTitle": "Task 3",
    "crossCheckSessionPeriod": [
      "2020-08-22",
      "2020-09-22"
    ],
    "coefficient": 0.7,
    "discardMinScore": true,
    "discardMaxScore": false,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": []
  }
];
  
describe('Get cross check sessions', () => {
test('success', () => {
    const result = crossCheckSessionsData(initialState, {type: 'GET_CROSSCHECK_SESSIONS_SUCCESS', payload: crossCheckSessions});
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(crossCheckSessions.length);
  })
  test('failure', () => {
    const result = crossCheckSessionsData(initialState, {type: 'GET_CROSSCHECK_SESSIONS_FAILURE'});
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(0);
  })
});