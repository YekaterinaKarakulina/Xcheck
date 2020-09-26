import React from 'react';
import { shallow } from 'enzyme';
import ReviewsTable from './reviews-table';

describe('render ', () => {
	it('Reviews Table', () => {
		const tree = shallow(<ReviewsTable/>);
		expect(tree).toMatchSnapshot();
	});
});