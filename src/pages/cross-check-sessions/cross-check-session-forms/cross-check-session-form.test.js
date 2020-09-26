import React from 'react';
import { shallow } from 'enzyme';
import CrossCheckSessionForm from './cross-check-session-form';

describe('render ', () => {
  test('CrossCheck session form', () => {
    const tree = shallow(<CrossCheckSessionForm/>);
	  expect(tree).toMatchSnapshot();
	});
});