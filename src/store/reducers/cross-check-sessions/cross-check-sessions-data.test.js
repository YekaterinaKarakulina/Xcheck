import crossCheckSessionsData from './cross-check-sessions-data';
import {initialStateEmpty, crossCheckSessionsDatabase } from './test-data';
  
describe('Get cross check sessions', () => {
test('success', () => {
    const result = crossCheckSessionsData(initialStateEmpty, {type: 'GET_CROSSCHECK_SESSIONS_SUCCESS', payload: crossCheckSessionsDatabase});
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(crossCheckSessionsDatabase.length);
  })
  test('failure', () => {
    const result = crossCheckSessionsData(initialStateEmpty, {type: 'GET_CROSSCHECK_SESSIONS_FAILURE'});
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(0);
  })
});