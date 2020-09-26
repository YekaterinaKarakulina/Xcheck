import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';

const mockStore = configureStore();

describe('render ', () => {
  test('App component', () => {
    const tree = shallow(
    <Provider store={mockStore()}>
        <App/>
    </Provider>);
	  expect(tree).toMatchSnapshot();
	});
});