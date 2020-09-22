import tasks from './tasks';
import { initialStateFilled, taskInitialValues } from './test-data';

const tasksSession = taskInitialValues[0];

describe('Action tests', () => {

	describe('Get task session', () => {
		test('success', () => {
			const result = tasks(initialStateFilled, { type: 'GET_TASK_SUCCESS', payload: tasksSession });
			expect(result.formValues).toEqual(tasksSession);
		})
		test('failure', () => {
			const result = tasks(initialStateFilled, { type: 'GET_TASK_FAILURE' });
			expect(result.formValues).toEqual({});
		})
	});

	describe('Get task by title session', () => {
		test('success', () => {
			const result = tasks(initialStateFilled, { type: 'GET_TASK_BY_TITLE_SUCCESS', payload: tasksSession });
			expect(result.currentTask).toEqual(tasksSession);
		})
		test('failure', () => {
			const result = tasks(initialStateFilled, { type: 'GET_TASK_BY_TITLE_FAILURE' });
			expect(result.currentTask).toEqual({});
		})
	});

	describe('Post task session', () => {
		test('success', () => {
			const result = tasks(initialStateFilled, { type: 'POST_TASK_SESSIONS_SUCCESS' });
			expect(result).toBeInstanceOf(Object);
		})
		test('failure', () => {
			const result = tasks(initialStateFilled, { type: 'POST_TASK_SESSIONS_FAILURE' });
			expect(result.formValues).toBeTruthy();
		})
	});

	describe('Update task session', () => {
		test('success', () => {
			const result = tasks(initialStateFilled, { type: 'UPDATE_TASK_SESSION_SUCCESS' });
			expect(result).toBeInstanceOf(Object);
		})
		test('failure', () => {
			const result = tasks(initialStateFilled, { type: 'UPDATE_TASK_SESSION_FAILURE' });
			expect(result.formValues).toBeTruthy();
		})
	});

	describe('none task session', () => {
		test('success', () => {
			const result = tasks(initialStateFilled, { type: '' });
			expect(result).toBeInstanceOf(Object);
		})
		test('failure', () => {
			const result = tasks(initialStateFilled, { type: '' });
			expect(result.formValues).toBeTruthy();
		})
	});

	describe('without initialState', () => {
		test('success', () => {
			const result = tasks();
			expect(result).toBeInstanceOf(Object);
		})
	});
});
