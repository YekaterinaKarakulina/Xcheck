import crossCheckSessions from './cross-check-sessions';

const initialState = {
  isModalVisible: false,
  currentSessionInfo: {},
};

describe('crossCheckSessions', () => {
    test('modal open', () => {
      const result = crossCheckSessions(initialState, {type: 'OPEN_MODAL'});
      expect(result.isModalVisible).toEqual(true);
    })
    test('modal close', () => {
      const result = crossCheckSessions(initialState, {type: 'CLOSE_MODAL'});
      expect(result.isModalVisible).toEqual(false);
    })
  });