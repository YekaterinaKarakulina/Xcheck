import React from 'react';
import { mount, shallow } from 'enzyme';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import TasksTable from './tasks-table';
import tasks from './test-data';

describe('TasksTable page', () => {
	let store;
	const defaultProps = {
		getTasksTable: () => tasks[0],
		tasksTableData: tasks
	};
	beforeEach(() => {
		store = configureStore()({ tasksTableData: tasks });
	});

	it('toMatchSnapshot TasksTable', () => {
		const tree = shallow(<Router history={createMemoryHistory()}><TasksTable {...defaultProps} /></Router>);
		expect(tree).toMatchSnapshot();
	});

	it('Should render header, button', () => {
		const wrapper = mount(
			<Router history={createMemoryHistory()}>
				<Provider store={store}>
					<TasksTable {...defaultProps} />
				</Provider>
			</Router>
		)
		const header = wrapper.find('.ant-page-header-heading-title');
		const buttonAdd = wrapper.find('.ant-btn-primary');
		expect(header.length).toBe(1);
		expect(buttonAdd.length).toBe(1);
	});
});