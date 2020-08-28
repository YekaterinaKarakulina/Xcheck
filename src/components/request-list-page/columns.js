import React from 'react';

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
  },
];

export default columns;
