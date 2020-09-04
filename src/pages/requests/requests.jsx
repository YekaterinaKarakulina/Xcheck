/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Space, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getRequests } from '../../store/actions/requests';

import './requests.scss';

class Requests extends Component {
  componentDidMount() {
    const { getRequests } = this.props;
    getRequests();
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(confirm)}
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
  });

  handleSearch = (confirm) => {
    confirm();
  };

  handleReset = (clearFilters) => {
    clearFilters();
  };

  render() {
    const { requestsData } = this.props;

    const columns = [
      {
        title: 'Name task',
        dataIndex: 'task',
        key: 'task',
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
        sorter: (a, b) => (a.state > b.state ? 1 : -1),
      },
    ];
    return <Table dataSource={requestsData} columns={columns} rowKey="id" />;
  }
}

const mapStateToProps = ({ requestsData }) => {
  return { requestsData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRequests: () => dispatch(getRequests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
