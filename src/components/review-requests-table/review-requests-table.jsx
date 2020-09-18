import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Table, Space, Button, Input, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getReviewRequests } from '../../store/actions/review-requests';

class ReviewRequestsTableCreation extends React.Component {
  componentDidMount() {
    const { getReviewRequests } = this.props;
    getReviewRequests();
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
    const { reviewRequestsData } = this.props;

    const columns = [
      {
        title: 'Task title',
        dataIndex: 'taskTitle',
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
        align: 'center',
        sorter: (a, b) => (a.state > b.state ? 1 : -1),
        ...this.getColumnSearchProps('author'),
        render: (state) => {
          let color = 'green';
          switch (state) {
            case 'PUBLISHED':
              color = 'green';
              break;
            case 'DRAFT':
              color = 'geekblue';
              break;
            case 'COMPLETED':
              color = 'volcano';
              break;
            default:
              color = 'green';
          }
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

          if (state === 'COMPLETED') {
            return null;
          }
          if (isEmptySelfGrade) {
            return (
              <Link to={`/check/${row.id}`}>
                <Button type="primary" size="small" style={{ width: 90 }}>
                  Self check
                </Button>
              </Link>
            );
          }

          return (
            <Link to={`/check/${row.id}`}>
              <Button type="primary" size="small" style={{ width: 90 }}>
                Check
              </Button>
            </Link>
          );
        },
      },
    ];
    return <Table dataSource={reviewRequestsData} columns={columns} rowKey="id" />;
  }
}

ReviewRequestsTableCreation.propTypes = {
  getReviewRequests: PropTypes.func.isRequired,
  reviewRequestsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ reviewRequestsData }) => {
  return { reviewRequestsData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewRequests: () => dispatch(getReviewRequests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewRequestsTableCreation);
