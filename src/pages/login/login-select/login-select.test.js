import React from 'react';
import { render } from "@testing-library/react";
import LoginSelect from './login-select';

describe('render', () => {    
  test('LoginSelect', () => {
    const roles = ['author', 'student', 'supervisor', 'course_manager'];
    const result = render(
      <LoginSelect
        roles={roles} />
    );
    expect(result).toMatchSnapshot()
  });
});