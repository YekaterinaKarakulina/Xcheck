import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import CheckForm from './check-form';
import { initialStateEmpty, initialStateFilled } from './test-data';
import { mount } from '../../../jest.setup';

const mockStore = configureStore();
const mockDispatchFn = jest.fn();

describe('Render CheckForm When SelfGrade Empty', () => {
  it('render correctly', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <MemoryRouter>
          <CheckForm
            {...initialStateEmpty}
            dispatch={mockDispatchFn}
            detailIds={{}}
            commentFieldIds={{}}
            commentIds={{}}
            changedInputIds={{}}
          />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Render CheckForm When SelfGrade Fillled', () => {
  it('render correctly', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <MemoryRouter>
          <CheckForm
            {...initialStateFilled}
            dispatch={mockDispatchFn}
            detailIds={{}}
            commentFieldIds={{}}
            commentIds={{}}
            changedInputIds={{}}
          />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
