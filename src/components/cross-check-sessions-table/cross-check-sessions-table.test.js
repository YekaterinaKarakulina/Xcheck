import React from 'react';
import {render} from "@testing-library/react";
import CrossCheckSessionsTable from './cross-check-sessions-table';

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
      expect(trs.length).toEqual(0)
    })

    test('filled table', () => {
      const result = render(<CrossCheckSessionsTable tableData={tableData}/>);
        expect(result).toMatchSnapshot()
        const trs = document.querySelectorAll('.ant-table-row.ant-table-row-level-0')
        expect(trs.length).toEqual(tableData.length)
      })
  });