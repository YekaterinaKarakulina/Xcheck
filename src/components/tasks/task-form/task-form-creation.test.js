
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from '../../../../jest.setup';
import TaskFormCreation from './task-form-creation';

describe('Render TaskFormCreation', () => {

	it('render correctly', () => {
		const mockDispatchFn = jest.fn();
		const wrapper = mount(
			<Provider store={configureStore()()}>
				<TaskFormCreation dispatch={mockDispatchFn} />
			</Provider>
		);
		expect(wrapper).toBeDefined();
		expect(wrapper).toMatchSnapshot();
	});
});