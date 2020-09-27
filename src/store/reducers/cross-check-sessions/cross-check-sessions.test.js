import crossCheckSessions from './cross-check-sessions';
import { initialStateFilled, crossCheckSessionsDatabase } from './test-data';

const crossCheckSession = crossCheckSessionsDatabase[0];

describe('Modal tests', () => {
test('modal open', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'OPEN_MODAL'});
    expect(result.isModalVisible).toEqual(true);
  })
test('modal close', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'CLOSE_MODAL'});
    expect(result.isModalVisible).toEqual(false);
  })
});

describe('Get cross check session', () => {
test('success', () => {
   const result = crossCheckSessions(initialStateFilled, {type: 'GET_CROSSCHECK_SESSION_SUCCESS', payload: crossCheckSession});
      expect(result.currentSessionInfo).toEqual(crossCheckSession);
    })
test('failure', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'GET_CROSSCHECK_SESSION_FAILURE'});
    expect(result.currentSessionInfo).toEqual({});
  })
});

describe('Post cross check session', () => {
test('success', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'POST_CROSSCHECK_SESSION_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
test('failure', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'POST_CROSSCHECK_SESSION_FAILURE'});
    expect(result.currentSessionInfo).toBeTruthy();
  })
});

describe('Update cross check session', () => {
test('success', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'UPDATE_CROSSCHECK_SESSION_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
test('failure', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'UPDATE_CROSSCHECK_SESSION_FAILURE'});
    expect(result.currentSessionInfo).toBeTruthy();
  })
});

describe('Delete cross check session', () => {
test('success', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'DELETE_CROSSCHECK_SESSION_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
test('failure', () => {
    const result = crossCheckSessions(initialStateFilled, {type: 'DELETE_CROSSCHECK_SESSION_FAILURE'});
    expect(result.currentSessionInfo).toBeTruthy();
  })
});

describe('Default', () => {
  test('No action passed', () => {
    const result = crossCheckSessions(initialStateFilled, {type: ''});
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
  });
});
