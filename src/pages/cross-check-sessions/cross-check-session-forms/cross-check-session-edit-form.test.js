import React from 'react';
import { shallow } from 'enzyme';
import CrossCheckSessionEditForm from './cross-check-session-edit-form';

describe('render ', () => {
  test('CrossCheck session edit form', () => {
    const tree = shallow(<CrossCheckSessionEditForm/>);
	  expect(tree).toMatchSnapshot();
	});
});