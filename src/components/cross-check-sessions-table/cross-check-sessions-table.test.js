import React from 'react';
import {render} from "@testing-library/react";
import CrossCheckSessionsTable from './cross-check-sessions-table';

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
      
    test('CrossCheckSessionsTable', () => {
    const result = render(<CrossCheckSessionsTable />);
      expect(result).toMatchSnapshot()
    })
  });