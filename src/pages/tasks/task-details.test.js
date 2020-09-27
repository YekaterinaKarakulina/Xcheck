import React from 'react';
import { mount } from 'enzyme';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { TaskDetails } from './task-details';
import task from './test-data';

describe('TaskDetails page', () => {
	const mockStore = configureStore();
	let store;
	const defaultProps = {
		tasks: task
	}
	beforeEach(() => {
		store = mockStore({ task });
	});

	it('toMatchSnapshot TaskDetails page', () => {
		const tree = mount(<Router history={createMemoryHistory()}><TaskDetails {...defaultProps} /></Router>);
		expect(tree).toMatchSnapshot();
	});

	it('Should render header, button for TaskDetails page', () => {
		const wrapper = mount(
			<Router history={createMemoryHistory()}>
				<Provider store={store}>
					<TaskDetails {...defaultProps} />
				</Provider>
			</Router>,
		)
		const header = wrapper.find('.ant-page-header-heading-title');
		const buttonAdd = wrapper.find('.ant-btn-primary');
		expect(header.length).toBe(1);
		expect(buttonAdd.length).toBe(1);
	});
});