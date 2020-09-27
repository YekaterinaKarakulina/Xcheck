import React from 'react';
import {render} from "@testing-library/react";
import CrossCheckSessionsTable from './cross-check-sessions-table';
import mapData from './map-data';
import tableData from './test-data';

describe('map data', () => {
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

describe('render', () => {
  test('empty table', () => {
    const result = render(<CrossCheckSessionsTable />);
    expect(result).toMatchSnapshot()
    const trs = document.querySelectorAll('.ant-table-row.ant-table-row-level-0');
    expect(trs.length).toEqual(0);
  });

  test('filled table', () => {
    const mappedTableData = [];
    tableData.forEach((el) => {
      mappedTableData.push(mapData(el));
    })
    const result = render(<CrossCheckSessionsTable tableData={mappedTableData}/>);
    expect(result).toMatchSnapshot()
    const trs = document.querySelectorAll('.ant-table-row.ant-table-row-level-0')
    expect(trs.length).toEqual(tableData.length);
  });
});