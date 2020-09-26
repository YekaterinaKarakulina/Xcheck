import React from 'react';
import { mount, shallow } from 'enzyme';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import TaskFormEdit, { TaskFormEdit as Component } from './task-form-edit';
import task from '../test-data';

jest.mock('./map-data-form', () => ({
	__esModule: true,
	default: () => ({})
}));

describe('TaskFormEdit page', () => {
	let store;
	const defaultProps = {};
	const onSubmitButton = jest.fn();
	beforeEach(() => {
		store = configureStore()({ tasks: { formValues: task.formValue } });
	});

	const wrapper = (props) => mount(
		<Router history={createMemoryHistory()}>
			<Provider store={store}>
				<TaskFormEdit {...defaultProps} {...props} onSubmit={onSubmitButton} />
			</Provider>
		</Router>
	);

	it('toMatchSnapshot for TaskFormEdit page', () => {
		expect(wrapper()).toMatchSnapshot();
	});

	it('Should render header for TaskFormEdit page', () => {
		const header = wrapper().find('.ant-page-header-heading-title');
		expect(header.length).toBe(1);
	});

	it('TaskFormEdit onSubmit action', async () => {
		const handleSubmit = jest.fn();
		const props = {
			tasks: { formValues: task.formValue },
			updateTaskSession: jest.fn(),
			history: { go: jest.fn() },
			getTasksTable: jest.fn(),
		};
		const wrapper = shallow(<Component handleSubmit={handleSubmit} {...props} />);
		const form = wrapper.find('ReduxForm');
		form.at(0).simulate('submit');
		await Promise.resolve()
		expect(props.updateTaskSession).toBeCalled();
		expect(props.getTasksTable).toBeCalled();
		expect(props.history.go).toBeCalled();
	});
});