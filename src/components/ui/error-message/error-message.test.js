import React from 'react';
import {render} from "@testing-library/react";
import ErrorMessage from './error-message';

describe('render', () => {    
  test('Error message', () => {
  const result = render(<ErrorMessage />);
    expect(result).toMatchSnapshot()
  });
});