import { transformFormValuesToSelfGradeObject, transformFormValuesToGradeObject } from './check';
import { selfCheckFormValues, checkFormValues } from './test-data';

describe('Transform form values into selfGrade object', () => {
test('values correct transformation', () => {
    const result = transformFormValuesToSelfGradeObject(selfCheckFormValues);
    expect(result).toBeDefined();
    expect(result['task-2-bp1']).toBeInstanceOf(Object);
    expect(result['task-2-bp1'].comment).toEqual('some comment');
    expect(result['task-2-bp1'].score).toEqual(10);
    expect(result['task-2-ep1']).toBeInstanceOf(Object);
    expect(result['task-2-ep1'].comment).toEqual('');
    expect(result['task-2-ep1'].score).toEqual(5);
    expect(result['task-2-fp1']).toBeInstanceOf(Object);
    expect(result['task-2-fp1'].comment).toEqual('eslint errors');
    expect(result['task-2-fp1'].score).toEqual(-2);
  });
});

describe('Transform form values into grade object', () => {
  test('values correct transformation', () => {
    const result = transformFormValuesToGradeObject(checkFormValues);
    expect(result).toBeDefined();
    const { items } = result;
    expect(items).toBeDefined();
    expect(result.total).toBeDefined();
    expect(result.total).toEqual(22);
    expect(items['task-3-bp1']).toBeInstanceOf(Object);
    expect(items['task-3-bp1'].comment).toEqual('Great!');
    expect(items['task-3-bp1'].score).toEqual(10);
    expect(items['task-3-ep1']).toBeInstanceOf(Object);
    expect(items['task-3-ep1'].comment).toEqual('');
    expect(items['task-3-ep1'].score).toEqual(13);
    expect(items['task-3-fp1']).toBeInstanceOf(Object);
    expect(items['task-3-fp1'].comment).toEqual('1 linter error!');
    expect(items['task-3-fp1'].score).toEqual(-1);
  });
});
  