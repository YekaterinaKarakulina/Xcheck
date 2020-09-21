import React from 'react';
import {render} from "@testing-library/react";
import CrossCheckSessionDescriptionCreation from './cross-check-session-description';

const initialValues = {
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
  test('CrossCheckSessionDescriptionCreation', () => {
  const result = render(<CrossCheckSessionDescriptionCreation descriptionValues={initialValues}/>);
    expect(result).toMatchSnapshot()
  });
});