import React from 'react';
import { shallow } from 'enzyme';
import ReviewRequestFormCreation from './review-request-form';

describe('render ', () => {
	it('Review request form creation', () => {
		const tree = shallow(<ReviewRequestFormCreation/>);
		expect(tree).toMatchSnapshot();
	});
});