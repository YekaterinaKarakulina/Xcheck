import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Table, Tag, Space, Button, Input } from 'antd';
import { CloseCircleTwoTone, SearchOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import checkStatus from '../../utils/status';

class TasksTable extends React.Component {
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
    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        ...this.getColumnSearchProps('title'),
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        ...this.getColumnSearchProps('author'),
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        ...this.getColumnSearchProps('status'),
        render: (status) => {
          const color = checkStatus(status);
          return <Tag color={color}>{status.toUpperCase()}</Tag>;
        },
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <Space size="large">
            <Button type="text" icon={<EditTwoTone twoToneColor="#ffa940" />} size="small" />
            <Button type="text" icon={<EyeTwoTone twoToneColor="#9254de" />} size="small" />
            <Button type="text" icon={<CloseCircleTwoTone twoToneColor="#ff4d4f" />} size="small" />
          </Space>
        ),
      },
    ];

    const { tableData } = this.props;
    return <Table columns={columns} dataSource={tableData} />;
  }
}

TasksTable.propTypes = {
  tableData: PropTypes.instanceOf(Array).isRequired,
};

export default TasksTable;
