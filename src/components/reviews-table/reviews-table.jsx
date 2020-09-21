import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Space, Button, Input, Tag, Tooltip } from 'antd';
import { SearchOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import checkStatus from '../../utils/status';
import { getTask, getTaskByTitle } from '../../store/actions/task';

class ReviewsTable extends React.Component {
  componentDidUpdate(prev) {
    const { currentTask, history, getTask } = this.props;
    const currentTaskId = currentTask.taskId;

    if (currentTaskId !== prev.currentTask.taskId) {
      history.push(`/tasks/${currentTaskId}`);
      getTask(currentTaskId);
    }
  }

  redirectToTask = async (taskTitle) => {
    const { getTaskByTitle } = this.props;
    await getTaskByTitle(taskTitle);
  };

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
    const { tableData } = this.props;
    const { handleClick } = this.props;

    const columns = [
      {
        title: 'Task',
        dataIndex: 'taskTitle',
        key: 'taskTitle',
        render: (text, record) => {
          return (
            <span>
              {text}
              <InfoCircleTwoTone
                onClick={() => this.redirectToTask(record.taskTitle)}
                style={{ marginLeft: '0.5rem' }}
              />
            </span>
          );
        },
        sorter: (a, b) => (a.task > b.task ? 1 : -1),
        ...this.getColumnSearchProps('taskTitle'),
      },
      {
        title: 'Task author',
        dataIndex: 'taskAuthor',
        key: 'taskAuthor',
        render: (taskAuthor) => (
          <Tooltip placement="topLeft" title={taskAuthor}>
            <span>{taskAuthor}</span>
          </Tooltip>
        ),
        sorter: (a, b) => (a.taskAuthor > b.taskAuthor ? 1 : -1),
        ...this.getColumnSearchProps('taskAuthor'),
      },
      {
        title: 'Check author',
        dataIndex: 'author',
        key: 'author',
        ellipsis: {
          showTitle: false,
        },
        render: (author) => (
          <Tooltip placement="topLeft" title={author}>
            <span>{author}</span>
          </Tooltip>
        ),
        sorter: (a, b) => (a.author > b.author ? 1 : -1),
        ...this.getColumnSearchProps('author'),
      },
      {
        title: 'Status',
        dataIndex: 'state',
        key: 'state',
        align: 'center',
        render: (state) => {
          const color = checkStatus(state);
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
  history: PropTypes.instanceOf(Object).isRequired,
  getTask: PropTypes.func.isRequired,
  getTaskByTitle: PropTypes.func.isRequired,
  currentTask: PropTypes.instanceOf(Object),
};

ReviewsTable.defaultProps = {
  tableData: [],
  handleClick: PropTypes.func,
  currentTask: {},
};

const mapStateToProps = ({ reviewRequestsData, tasks }) => {
  return {
    reviewRequestsData,
    currentTask: tasks.currentTask[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTask: (id) => dispatch(getTask(id)),
    getTaskByTitle: (title) => dispatch(getTaskByTitle(title)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsTable));
