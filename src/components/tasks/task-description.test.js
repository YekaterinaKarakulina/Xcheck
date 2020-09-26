import React from 'react';
import { shallow } from 'enzyme';
import TaskDescription from './task-description';
import { tasks } from './test-data';

describe('render', () => {

	it('TaskDescription render with data', () => {
		const wrapper = shallow(<TaskDescription task={tasks[0]} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('TaskDescription render without data', () => {
		const wrapper = shallow(<TaskDescription task={{}} />);
		expect(wrapper).toMatchSnapshot();
	});
});