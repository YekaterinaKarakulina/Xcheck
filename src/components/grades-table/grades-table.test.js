import React from 'react';
import {render} from "@testing-library/react";
import GradesTable from './grades-table';
import tableData from './test-data';

describe('render', () => {    
  test('Grades Table', () => {
  const result = render(<GradesTable tableData={tableData}/>);
    expect(result).toMatchSnapshot()
  });
});