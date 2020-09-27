import React from 'react';
import { render } from "@testing-library/react";
import LoginCover from './login-cover';

describe('render', () => {    
  test('LoginCover', () => {
  const result = render(<LoginCover />);
    expect(result).toMatchSnapshot()
  });
});