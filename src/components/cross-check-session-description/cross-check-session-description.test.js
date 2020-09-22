import React from 'react';
import {render} from "@testing-library/react";
import CrossCheckSessionDescriptionCreation from './cross-check-session-description';
import initialValues from './test-data';

describe('render', () => {    
  test('CrossCheckSessionDescriptionCreation', () => {
  const result = render(<CrossCheckSessionDescriptionCreation descriptionValues={initialValues}/>);
    expect(result).toMatchSnapshot()
  });
});