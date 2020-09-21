import React from 'react';
import {render} from "@testing-library/react";
import CrossCheckSessionDescriptionCreation from './cross-check-session-description';

const aaa = {
  id: "xcheck-1",
  title: "rss2020Q3react-songbird",
  author: "viktorsipach",
  state: "draft",
  taskTitle: "Task 1",
  crossCheckSessionPeriod: [
    "2020-07-08",
    "2020-07-14"
  ],
  coefficient: 0.2,
  discardMinScore: true,
  discardMaxScore: true,
  minReviewsAmount: 1,
  desiredReviewsAmount: 2,
  attendees: []
}

describe('render', () => {
  beforeAll(() => {  
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });
    
  test('CrossCheckSessionDescriptionCreation', () => {
  const result = render(<CrossCheckSessionDescriptionCreation descriptionValues={aaa}/>);
    expect(result).toMatchSnapshot()
  })
});