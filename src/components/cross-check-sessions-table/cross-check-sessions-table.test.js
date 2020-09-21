import React from 'react';
import {render} from "@testing-library/react";
import CrossCheckSessionsTable from './cross-check-sessions-table';
import mapData from './map-data';

const tableData = [
  {
    "id": "xcheck-1",
    "title": "rss2020Q3react-songbird",
    "author": "viktorsipach",
    "state": "draft",
    "taskTitle": "Task 1",
    "crossCheckSessionPeriod": [
      "2020-07-08",
      "2020-07-14"
    ],
    "coefficient": 0.2,
    "discardMinScore": true,
    "discardMaxScore": true,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": []
  },
  {
    "id": "xcheck-2",
    "title": "rss2020Q3react-xcheck",
    "author": "KatiaR",
    "state": "draft",
    "taskTitle": "Task 2",
    "crossCheckSessionPeriod": [
      "2020-09-15",
      "2020-09-17"
    ],
    "coefficient": 0.7,
    "discardMinScore": true,
    "discardMaxScore": true,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": []
  }
]

describe('render', () => {
  beforeAll(() => {  
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });
      
  
  test('empty table', () => {
    const result = render(<CrossCheckSessionsTable />);
    expect(result).toMatchSnapshot()
    const trs = document.querySelectorAll('.ant-table-row.ant-table-row-level-0');
    expect(trs.length).toEqual(0);
  });

  test('filled table', () => {
    const result = render(<CrossCheckSessionsTable tableData={tableData}/>);
    expect(result).toMatchSnapshot()
    const trs = document.querySelectorAll('.ant-table-row.ant-table-row-level-0')
    expect(trs.length).toEqual(tableData.length);
  });
});

describe('map data', () => {
  beforeAll(() => {  
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });
      
  
  test('map data', () => {
    const initialData = tableData[0];
    const result = mapData(initialData);
    expect(result).toBeInstanceOf(Object);
    expect(result.key).toEqual(result.id);
    expect(result.title).toEqual(initialData.title);
    expect(result.author).toEqual(initialData.author);
    expect(result.state).toEqual(initialData.state);
    expect(result.taskTitle).toEqual(initialData.taskTitle);
    expect(result.coefficient).toEqual(initialData.coefficient);
    expect(result.startDate).toEqual(initialData.crossCheckSessionPeriod[0]);
    expect(result.endDate).toEqual(initialData.crossCheckSessionPeriod[1]);
  });
});