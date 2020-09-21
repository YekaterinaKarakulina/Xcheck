import crossCheckSessions from './cross-check-sessions';

const initialState = {
  isModalVisible: false,
  currentSessionInfo: {},
};

const crossCheckSession = {
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
}

describe('Modal tests', () => {
test('modal open', () => {
    const result = crossCheckSessions(initialState, {type: 'OPEN_MODAL'});
    expect(result.isModalVisible).toEqual(true);
  })
test('modal close', () => {
    const result = crossCheckSessions(initialState, {type: 'CLOSE_MODAL'});
    expect(result.isModalVisible).toEqual(false);
  })
});

describe('Get cross check session', () => {
test('success', () => {
   const result = crossCheckSessions(initialState, {type: 'GET_CROSSCHECK_SESSION_SUCCESS', payload: crossCheckSession});
      expect(result.currentSessionInfo).toEqual(crossCheckSession);
    })
test('failure', () => {
    const result = crossCheckSessions(initialState, {type: 'GET_CROSSCHECK_SESSION_FAILURE'});
    expect(result.currentSessionInfo).toEqual({});
  })
});

describe('Post cross check session', () => {
test('success', () => {
    const result = crossCheckSessions(initialState, {type: 'POST_CROSSCHECK_SESSION_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
test('failure', () => {
    const result = crossCheckSessions(initialState, {type: 'POST_CROSSCHECK_SESSION_FAILURE'});
    expect(result.currentSessionInfo).toBeTruthy();
  })
});

describe('Update cross check session', () => {
test('success', () => {
    const result = crossCheckSessions(initialState, {type: 'UPDATE_CROSSCHECK_SESSION_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
test('failure', () => {
    const result = crossCheckSessions(initialState, {type: 'UPDATE_CROSSCHECK_SESSION_FAILURE'});
    expect(result.currentSessionInfo).toBeTruthy();
  })
});

describe('Delete cross check session', () => {
test('success', () => {
    const result = crossCheckSessions(initialState, {type: 'DELETE_CROSSCHECK_SESSION_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
test('failure', () => {
    const result = crossCheckSessions(initialState, {type: 'DELETE_CROSSCHECK_SESSION_FAILURE'});
    expect(result.currentSessionInfo).toBeTruthy();
  })
});