import React from 'react';
import { mount } from 'enzyme';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TaskLayout from './task-layout';
import task from '../test-data';

describe('TaskLayout with id=task-form', () => {
	let store;
	const defaultProps = {}
	beforeEach(() => {
		store = configureStore()(defaultProps);
	});

	const wrapper = (props) => mount(
		<Router history={createMemoryHistory()}>
			<Provider store={store}>
				<TaskLayout {...defaultProps} {...props} />
			</Provider>
		</Router>
	);

	it('toMatchSnapshot TaskLayout with id=task-form', () => {
		expect(wrapper({
			match: { params: { id: 'task-form' } }
		})).toMatchSnapshot();
	});
});

describe('TaskLayout with id=task-edit-form', () => {
	let store;
	const defaultProps = {};
	const onSubmitButton = jest.fn();
	beforeEach(() => {
		store = configureStore()({ tasks: { formValues: task.formValue } });
	});

	const wrapper = (props) => mount(
		<Router history={createMemoryHistory()}>
			<Provider store={store}>
				<TaskLayout {...defaultProps} {...props} onSubmit={onSubmitButton} />
			</Provider>
		</Router>
	);

	it('toMatchSnapshot TaskLayout with id=task-edit-form', () => {
		expect(wrapper({
			match: { params: { id: 'task-edit-form' } }, task
		})).toMatchSnapshot();
	});
});

describe('TaskLayout defaul value', () => {
	let store;
	const defaultProps = {}
	beforeEach(() => {
		store = configureStore()({ tasks: { formValues: task.formValue } });
	});

	const wrapper = (props) => mount(
		<Router history={createMemoryHistory()}>
			<Provider store={store}>
				<TaskLayout {...defaultProps} {...props} />
			</Provider>
		</Router>
	);

	it('toMatchSnapshot TaskLayout defaul value', () => {
		expect(wrapper({
			match: { params: { id: '1' } }
		})).toMatchSnapshot();
	});
});