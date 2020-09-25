import taskFormValues from './test-data';
import mapDataValues from './map-data-form';

describe('Task form values mapping to object', () => {
    test('required (value undefined)', () => {
      const result = mapDataValues(taskFormValues);
      expect(result).toBeDefined();
      expect(result.author).toEqual('KatiaR');
      expect(result.description).toEqual('Some task description');
      expect(result.items.length).toEqual(3);
      expect(result.state).toEqual('open');
      expect(result.taskId).toBeDefined();
      expect(result.items.length).toEqual(3);
      expect(result.title).toEqual('some task');
      expect(result.taskScore).toEqual(70);
    });
});