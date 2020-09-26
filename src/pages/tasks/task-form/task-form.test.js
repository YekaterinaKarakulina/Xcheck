import React from 'react';
import { shallow } from 'enzyme';
import TaskForm from './task-form';

describe('render ', () => {
  test('Task form', () => {
    const tree = shallow(<TaskForm/>);
	  expect(tree).toMatchSnapshot();
	});
});