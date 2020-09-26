import React from 'react';
import { render } from "@testing-library/react";
import LoginButton from './login-button';
import env from '../../../env';

describe('render', () => {    
  test('LoginButton', () => {
  const result = render(<LoginButton clientId={env.clientId} redirectUri={`${env.appBaseURL}login`} />);
    expect(result).toMatchSnapshot()
  });
});