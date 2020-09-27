import React from 'react';
import { mount } from 'enzyme';
import { tasks, task } from '../test-data';
import mapData from './map-data-table';
import { TasksTable } from './tasks-table-list';

const initialData = tasks[0];
const result = mapData(initialData);

describe('Check mapData', () => {
	it('Check mapData', () => {
		expect(result.author).toEqual(initialData.author);
		expect(result.description).toEqual(initialData.description);
		expect(result.key).toEqual(initialData.taskId);
		expect(result.state).toEqual(initialData.state);
		expect(result.taskId).toEqual(initialData.taskId);
		expect(result.title).toEqual(initialData.title);
	});
});

describe('TasksTable component', () => {
	const defaultProps = {
		getTask: () => task,
		tableData: [],
		history: {}
	};

	it('toMatchSnapshot TasksTable component', () => {
		const tree = mount(<TasksTable {...defaultProps} />);
		expect(tree).toMatchSnapshot();
	});

	it('state searchText for TasksTable component', () => {
		const tree = mount(<TasksTable {...defaultProps} />);
		expect(tree.state().searchText).toBe("");
	});

	it('state searchedColumn for TasksTable component', () => {
		const tree = mount(<TasksTable {...defaultProps} />);
		expect(tree.state().searchedColumn).toBe("");
	});
});