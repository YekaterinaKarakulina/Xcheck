import React from 'react';
import { shallow } from 'enzyme';
import TaskFormEdit from './task-form-edit';

describe('render ', () => {
  test('Task form edit', () => {
    const tree = shallow(<TaskFormEdit/>);
	  expect(tree).toMatchSnapshot();
	});
});