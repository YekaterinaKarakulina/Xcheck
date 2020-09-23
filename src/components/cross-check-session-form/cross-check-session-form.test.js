import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from '../../../jest.setup';
import CrossCheckSessionFormCreation from './cross-check-session-form';

const mockStore = configureStore();
const mockDispatchFn = jest.fn();

describe('Render CrossCheckSessionForm', () => {
  it('render correctly', () => {
    const wrapper = mount(
    <Provider store={mockStore()}>
        <CrossCheckSessionFormCreation dispatch={mockDispatchFn}/>
      </Provider>,
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});