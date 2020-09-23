import tasksTableData from './tasks-table';
import { initialStateEmpty, taskInitialValues } from './test-data';

describe('Get task table sessions', () => {
	test('success', () => {
		const result = tasksTableData(initialStateEmpty, { type: 'GET_TASKSTABLE_SESSIONS_SUCCESS', payload: taskInitialValues });
		expect(result).toBeInstanceOf(Array);
		expect(result).toHaveLength(taskInitialValues.length);
	})
	test('failure', () => {
		const result = tasksTableData(initialStateEmpty, { type: 'GET_TASKSTABLE_SESSIONS_FAILURE' });
		expect(result).toBeInstanceOf(Array);
		expect(result).toHaveLength(0);
	})
	test('without action', () => {
		const result = tasksTableData(initialStateEmpty, { type: '' });
		expect(result).toBeInstanceOf(Array);
		expect(result).toHaveLength(0);
	})
	test('without initialState', () => {
		const result = tasksTableData();
		expect(result).toBeInstanceOf(Array);
		expect(result).toHaveLength(0);
	})
});