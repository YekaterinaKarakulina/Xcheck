import React from 'react';
import { shallow } from 'enzyme';
import ReviewRequestsTableCreation from './review-requests-table';

describe('render ', () => {
  test('Review requests table creation', () => {
    const tree = shallow(<ReviewRequestsTableCreation/>);
	  expect(tree).toMatchSnapshot();
	});
});