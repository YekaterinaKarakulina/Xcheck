import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Table, Space, Button, Input, Tag } from 'antd';
import { SearchOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { getReviewRequests } from '../../store/actions/review-requests';
import checkStatus from '../../utils/status';
import { getTask, getTaskByTitle } from '../../store/actions/task';

class ReviewRequestsTableCreation extends React.Component {
  componentDidMount() {
    const { getReviewRequests } = this.props;
    getReviewRequests();
  }

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
    const { reviewRequestsData } = this.props;

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
        ...this.getColumnSearchProps('task'),
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        render: (text) => {
          return <span>{text}</span>;
        },
        sorter: (a, b) => (a.author > b.author ? 1 : -1),
        ...this.getColumnSearchProps('author'),
      },
      {
        title: 'Status',
        dataIndex: 'state',
        key: 'state',
        align: 'center',
        sorter: (a, b) => (a.state > b.state ? 1 : -1),
        ...this.getColumnSearchProps('author'),
        render: (state) => {
          const color = checkStatus(state);
          return <Tag color={color}>{state.toUpperCase()}</Tag>;
        },
      },
      {
        title: 'Action',
        key: 'action',
        align: 'center',
        render: (record, row) => {
          const isEmptySelfGrade = isEmpty(record.selfGrade);
          const { state } = record;

          if (isEmptySelfGrade) {
            return (
              <Link to={`/check/${row.id}`}>
                <Button type="primary" size="small" style={{ width: 90 }}>
                  Self check
                </Button>
              </Link>
            );
          }

          if (state === 'published') {
            return (
              <Link to={`/check/${row.id}`}>
                <Button type="primary" size="small" style={{ width: 90 }}>
                  Check
                </Button>
              </Link>
            );
          }

          return null;
        },
      },
    ];
    return <Table dataSource={reviewRequestsData} columns={columns} rowKey="id" />;
  }
}

ReviewRequestsTableCreation.propTypes = {
  getReviewRequests: PropTypes.func.isRequired,
  reviewRequestsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  getTask: PropTypes.func.isRequired,
  getTaskByTitle: PropTypes.func.isRequired,
  currentTask: PropTypes.instanceOf(Object),
};

ReviewRequestsTableCreation.defaultProps = {
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
    getReviewRequests: () => dispatch(getReviewRequests()),
    getTask: (id) => dispatch(getTask(id)),
    getTaskByTitle: (title) => dispatch(getTaskByTitle(title)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewRequestsTableCreation)
);
