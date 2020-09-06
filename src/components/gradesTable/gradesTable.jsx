import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'antd';

export default class GradesTable extends React.PureComponent {
  render() {
    const columns = [
      {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
        width: 150,
        align: 'center',
      },
      {
        title: 'Comment',
        dataIndex: 'comment',
        key: 'comment',
        width: 450,
        align: 'center',
      },
    ];

    const { tableData } = this.props;
    const dataHeader = Object.keys(tableData[0]);
    const data = Object.values(tableData[0]);

    return data.map((item, index) => {
      const dataWithKey = { ...item, key: index };
      return (
        <Table
          key={dataHeader[index]}
          title={() => `${dataHeader[index]}`}
          bordered
          pagination={false}
          columns={columns}
          dataSource={[dataWithKey]}
          size="middle"
        />
      );
    });
  }
}

GradesTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
};

GradesTable.defaultProps = {
  tableData: [],
};
