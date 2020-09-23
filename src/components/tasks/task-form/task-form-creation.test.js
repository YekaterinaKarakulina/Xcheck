
import React from 'react';
import TaskFormCreation from './task-form-creation';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from '../../../../jest.setup';

const mockStore = configureStore();


describe('Render TaskFormCreation', () => {

	it('render correctly', () => {
		const mockDispatchFn = jest.fn();
		const wrapper = mount(
			<Provider store={mockStore()}>
				<TaskFormCreation dispatch={mockDispatchFn} />
			</Provider>,
		);
		expect(wrapper).toBeDefined();
		expect(wrapper).toMatchSnapshot();
	});

});