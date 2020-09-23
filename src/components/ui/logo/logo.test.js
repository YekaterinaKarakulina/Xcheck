import React from 'react';
import {render} from "@testing-library/react";
import Logo from './logo';

describe('render', () => {    
  test('Logo', () => {
  const result = render(<Logo />);
    expect(result).toMatchSnapshot()
  });
});