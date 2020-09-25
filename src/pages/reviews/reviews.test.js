import React from 'react';
import { shallow } from 'enzyme';
import Reviews from './reviews';
import reviewsData from './test-data';
import mapData from './mapData';

const initialData = reviewsData[0];
const result = mapData(initialData);

describe('Check mapData', () => {
	it('Check mapData', () => {
		expect(result.author).toEqual(initialData.author);
		expect(result.requestor).toEqual(initialData.requestor);
		expect(result.key).toEqual(initialData.id);
		expect(result.state).toEqual(initialData.state);
		expect(result.taskTitle).toEqual(initialData.taskTitle);
        expect(result.title).toEqual(initialData.id);
	});
});

describe('render ', () => {
	it('render Reviews', () => {
		const tree = shallow(<Reviews />);
		expect(tree).toMatchSnapshot();
	});
});