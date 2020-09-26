import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Tag, Space, Button, Input } from 'antd';
import { SearchOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import checkStatus from '../../../utils/status';
import { getTask } from '../../../store/actions/task';

export class TasksTable extends React.Component {
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

  handleClick = async (taskId, editMode) => {
    const { getTask, history } = this.props;
    await getTask(taskId);
    return editMode ? history.push('task-edit-form') : history.push(`${taskId}`);
  };

  render() {
    const editMode = false;
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
        render: (description) => {
          return description.length > 20 ? `${description.slice(0, 20)}...` : description;
        },
      },
      {
        title: 'Status',
        key: 'state',
        dataIndex: 'state',
        ...this.getColumnSearchProps('state'),
        render: (state) => {
          const color = checkStatus(state);
          return <Tag color={color}>{state.toUpperCase()}</Tag>;
        },
      },
      {
        title: 'Action',
        key: 'taskId',
        render: ({ taskId }) => (
          <Space size="large">
            <Button
              type="link"
              onClick={() => this.handleClick(taskId, !editMode)}
              icon={<EditTwoTone twoToneColor="#ffa940" />}
              size="small"
            />
            <Button
              type="link"
              onClick={() => this.handleClick(taskId, editMode)}
              icon={<EyeTwoTone twoToneColor="#9254de" />}
              size="small"
            />
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
  getTask: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTask: (taskId) => dispatch(getTask(taskId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksTable));
