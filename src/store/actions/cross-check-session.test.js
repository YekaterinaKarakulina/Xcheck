import { 
  GET_CROSSCHECK_SESSION, 
  GET_CROSSCHECK_SESSIONS,
  POST_CROSSCHECK_SESSION,
  UPDATE_CROSSCHECK_SESSION,
  DELETE_CROSSCHECK_SESSION,
  OPEN_MODAL,
  CLOSE_MODAL,
 } from './types/cross-check-sessions';
import { 
    getCrossCheckSession,
    getCrossCheckSessions,
    postCrossCheckSession,
    updateCrossCheckSession,
    deleteCrossCheckSession,
    openModal,
    closeModal
} from './cross-check-session';

describe('CrossCheck sessions actions', () => {
test('getCrossCheckSessions', () => {
    const result = getCrossCheckSessions();
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(GET_CROSSCHECK_SESSIONS);
  });

  test('getCrossCheckSession', () => {
    const result = getCrossCheckSession('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(GET_CROSSCHECK_SESSION);
    expect(result.payload).toEqual('some_id')
  });

  test('postCrossCheckSession', () => {
    const result = postCrossCheckSession('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(POST_CROSSCHECK_SESSION);
    expect(result.payload).toEqual('some_id');
  });

  test('updateCrossCheckSession', () => {
    const result = updateCrossCheckSession('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(UPDATE_CROSSCHECK_SESSION);
    expect(result.payload).toEqual('some_id');
  });

  test('deleteCrossCheckSession', () => {
    const result = deleteCrossCheckSession('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(DELETE_CROSSCHECK_SESSION);
    expect(result.payload).toEqual('some_id');
  });

  test('openModal', () => {
    const result = openModal();
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(OPEN_MODAL);
  });

  test('closeModal', () => {
    const result = closeModal();
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(CLOSE_MODAL);
  });

});