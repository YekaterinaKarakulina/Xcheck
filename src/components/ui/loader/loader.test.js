import React from 'react';
import {render} from "@testing-library/react";
import Loader from './loader';

describe('render', () => {    
  test('Loader', () => {
  const result = render(<Loader />);
    expect(result).toMatchSnapshot()
  });
});