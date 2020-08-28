import React from 'react';

const columns = [
  {
    title: 'Name task',
    dataIndex: 'task',
    key: 'task',
    render: (text, record) => {
      return <a href={record.urlTask}>{text}</a>;
    },
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    render: (text, record) => {
      return <a href={record.urlAuthor}>{text}</a>;
    },
  },
  {
    title: 'Status',
    dataIndex: 'state',
    key: 'state',
  },
];

export default columns;
