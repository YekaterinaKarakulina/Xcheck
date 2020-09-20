import reviewRequests from './review-requests';

const initialState = {
    isModalVisible: false,
    currentReviewRequest: {},
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