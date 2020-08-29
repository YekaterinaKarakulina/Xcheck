import React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';

import { Table, Tag } from 'antd';

export default class ReviewsTable extends React.Component {
  componentDidMount() {}

  render() {
    const columns = [
      {
        title: 'Name task',
        dataIndex: 'task',
        key: 'task',
        render: (text, record) => {
          return <a href={record.urlTask}>{text}</a>;
        },
        sorter: (a, b) => (a.task > b.task ? 1 : -1),
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        render: (text, record) => {
          return <a href={record.urlAuthor}>{text}</a>;
        },
        sorter: (a, b) => (a.author > b.author ? 1 : -1),
      },
      {
        title: 'Status',
        dataIndex: 'state',
        key: 'state',
        sorter: (a, b) => (a.state > b.state ? 1 : -1),
        render: (state) => {
          let color = 'green';
          switch (state) {
            case 'published':
              color = 'green';
              break;
            case 'draft':
              color = 'geekblue';
              break;
            case 'disputed':
              color = 'volcano';
              break;
            default:
              color = 'green';
          }
          return <Tag color={color}>{state.toUpperCase()}</Tag>;
        },
      },
    ];

    const { tableData } = this.props;

    return <Table columns={columns} dataSource={tableData} />;
  }
}

ReviewsTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
};

ReviewsTable.defaultProps = {
  tableData: [],
};
