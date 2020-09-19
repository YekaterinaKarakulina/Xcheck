import React from 'react';
import PropTypes from 'prop-types';

import { Table, Tag, Space, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

export default class ReviewsTable extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(event) => setSelectedKeys(event.target.value ? [event.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    render: (text) => {
      const { searchedColumn, searchText } = this.state;
      return searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      );
    },
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const { tableData } = this.props;
    const { handleClick } = this.props;

    const columns = [
      {
        title: 'Name task',
        dataIndex: 'taskTitle',
        key: 'taskTitle',
        render: (text, record) => {
          return <a href={record.urlTask}>{text}</a>;
        },
        sorter: (a, b) => (a.task > b.task ? 1 : -1),
        ...this.getColumnSearchProps('task'),
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        render: (text, record) => {
          return <a href={record.urlAuthor}>{text}</a>;
        },
        sorter: (a, b) => (a.author > b.author ? 1 : -1),
        ...this.getColumnSearchProps('author'),
      },
      {
        title: 'Status',
        dataIndex: 'state',
        key: 'state',
        align: 'center',
        render: (state) => {
          let color = 'green';
          switch (state) {
            case 'published':
              color = 'volcano';
              break;
            case 'draft':
              color = 'geekblue';
              break;

            default:
              color = 'green';
          }
          return <Tag color={color}>{state.toUpperCase()}</Tag>;
        },
      },
      {
        title: 'Grade',
        dataIndex: 'grade',
        key: 'grade',
        align: 'center',
        sorter: (a, b) => (a.grade > b.grade ? 1 : -1),
        ...this.getColumnSearchProps('grade'),
      },
      {
        title: 'Action',
        key: 'action',
        align: 'center',
        render: (record) => {
          return (
            <Button
              onClick={() => handleClick(record)}
              type="primary"
              size="small"
              style={{ width: 90 }}
            >
              Details
            </Button>
          );
        },
      },
    ];

    return <Table bordered columns={columns} dataSource={tableData} />;
  }
}

ReviewsTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func,
};

ReviewsTable.defaultProps = {
  tableData: [],
  handleClick: PropTypes.func,
};
