import {
  GET_TASK,
  GET_TASK_BY_TITLE,
  POST_TASK_SESSIONS,
  UPDATE_TASK_SESSION,
  GET_TASKSTABLE_SESSIONS,
} from './types/task';

import {
  getTask,
  getTaskByTitle,
  postTaskSession,
  updateTaskSession,
  getTasksTable
} from './task';

describe('Tasks actions', () => {
  test('getTask', () => {
    const result = getTask('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(GET_TASK)
    expect(result.payload).toEqual('some_id');
  });

  test('getTaskByTitle', () => {
    const result = getTaskByTitle('some_title');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(GET_TASK_BY_TITLE)
    expect(result.payload).toEqual('some_title');
  });

  test('postTaskSession', () => {
    const result = postTaskSession('some_values');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(POST_TASK_SESSIONS)
    expect(result.payload).toEqual('some_values');
  });

  test('updateTaskSession', () => {
    const result = updateTaskSession('some_values');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(UPDATE_TASK_SESSION)
    expect(result.payload).toEqual('some_values');
  });

  test('getTasksTable', () => {
    const result = getTasksTable();
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(GET_TASKSTABLE_SESSIONS)
  });
});
