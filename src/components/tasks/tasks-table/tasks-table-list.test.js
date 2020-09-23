import React from 'react';
import { shallow } from 'enzyme';
import TasksTable from './tasks-table-list';
import tasks from '../test-data';
import mapData from './map-data-table';

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

describe('render ', () => {
	it('render TasksTable', () => {
		const tree = shallow(<TasksTable />);
		expect(tree).toMatchSnapshot();
	});
});



