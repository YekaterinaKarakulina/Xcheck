import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space, Button, Input } from 'antd';
import {
  EditOutlined,
  ArrowRightOutlined,
  DownloadOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    title: 'Task1',
    author: 'John Brown',
    description: 'New York No. 1 Lake Park',
    state: ['closed'],
  },
  {
    key: '2',
    title: 'Task2',
    author: 'John Brown',
    description: 'London No. 1 Lake Park',
    state: ['active'],
  },
  {
    key: '3',
    title: 'Task3',
    author: 'John Brown',
    description: 'Sidney No. 1 Lake Park',
    state: ['archived'],
  },
];

class TasksTable extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
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
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
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
        title: 'State',
        key: 'state',
        dataIndex: 'state',
        ...this.getColumnSearchProps('state'),
        render: (state) => (
          <span>
            {state.map((tag) => {
              let color;
              switch (tag) {
                case 'active':
                  color = 'green';
                  break;
                case 'closed':
                  color = 'red';
                  break;
                default:
                  color = 'blue';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <Space size="large">
            <Button type="primary" icon={<EditOutlined />} size="small" />
            <Button type="primary" icon={<ArrowRightOutlined />} size="small" />
            <Button type="primary" icon={<DownloadOutlined />} size="small" />
          </Space>
        ),
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default TasksTable;
