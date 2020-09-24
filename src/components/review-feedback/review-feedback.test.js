import React from 'react';
import { shallow } from 'enzyme';
import ReviewFeedback from './review-feedback';

describe('render ', () => {
	it('Reviews Table', () => {
		const tree = shallow(<ReviewFeedback />);
		expect(tree).toMatchSnapshot();
	});
});