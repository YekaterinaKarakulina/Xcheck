import  { transformFormValuesToCrossCheckSessionObject, getTasksInfoForCrossCheckSessionForm } from './cross-check-sessions';
import { 
  xCheckFormValuesDraft,
  xCheckFormValuesActive,
  xCheckObject,
  tasks
} from './test-data';

describe('Transform form values into crossCheckSession object', () => {
test('state values correct transformation', () => {
    const crossCheckSessionObject = transformFormValuesToCrossCheckSessionObject(xCheckFormValuesDraft);
    expect(crossCheckSessionObject).toBeDefined();
    expect(crossCheckSessionObject.author).toEqual(xCheckObject.author);
    expect(crossCheckSessionObject.coefficient).toEqual(xCheckObject.coefficient);
    expect(crossCheckSessionObject.crossCheckSessionPeriod).toBeInstanceOf(Array);
    expect(crossCheckSessionObject.desiredReviewsAmount).toEqual(xCheckObject.desiredReviewsAmount);
    expect(crossCheckSessionObject.discardMinScore).toEqual(xCheckObject.discardMinScore);
    expect(crossCheckSessionObject.discardMaxScore).toEqual(xCheckObject.discardMaxScore);
    expect(crossCheckSessionObject.minReviewsAmount).toEqual(xCheckObject.minReviewsAmount);
    expect(crossCheckSessionObject.taskTitle).toEqual(xCheckObject.taskTitle);
    expect(crossCheckSessionObject.title).toEqual(xCheckObject.title);
    expect(crossCheckSessionObject.id).toBeDefined();
  });

  test('state active', () => {
    const crossCheckSessionObject = transformFormValuesToCrossCheckSessionObject(xCheckFormValuesDraft);
    expect(crossCheckSessionObject).toBeDefined();
    expect(crossCheckSessionObject.state).toEqual('draft');
  });

  test('state draft', () => {
    const crossCheckSessionObject = transformFormValuesToCrossCheckSessionObject(xCheckFormValuesActive);
    expect(crossCheckSessionObject).toBeDefined();
    expect(crossCheckSessionObject.state).toEqual('active');
  });
});

describe('Get tasks info for crossCheck session form', () => {
  test('empty array', () => {
    const result = getTasksInfoForCrossCheckSessionForm([]);
    expect(result).toBeDefined();
    expect(result.length).toEqual(0);
  });

  test('filled array', () => {
    const result = getTasksInfoForCrossCheckSessionForm(tasks);
    expect(result).toBeDefined();
    expect(result.length).toEqual(1);
    const openTask = result[0];
    expect(openTask.id).toBeDefined();
    expect(openTask.id).toEqual('task-3');
    expect(openTask.title).toBeDefined();
    expect(openTask.title).toEqual('Task 3');
  });
});
