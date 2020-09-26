import React from 'react';
import { mount } from 'enzyme';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import TaskForm from './task-form';
import task from '../test-data';

jest.mock('./map-data-form', () => ({
	__esModule: true,
	default: () => ({})
}))

describe('TaskForm page', () => {
	let store;
	const defaultProps = {};
	const onSubmitButton = jest.fn();
	beforeEach(() => {
		store = configureStore()({ tasks: { formValues: task.formValue } });
	});

	const wrapper = (props) => mount(
		<Router history={createMemoryHistory()}>
			<Provider store={store}>
				<TaskForm {...defaultProps} {...props} onSubmit={onSubmitButton} />
			</Provider>
		</Router>
	);

	it('toMatchSnapshot for TaskForm page', () => {
		expect(wrapper()).toMatchSnapshot();
	});

	it('Should render header for TaskForm page', () => {
		const header = wrapper().find('.ant-page-header-heading-title');
		expect(header.length).toBe(1);
	});
});