import React from 'react';
import { Table, Tag, Space } from 'antd';
import { EyeTwoTone, EditTwoTone, CloseCircleTwoTone, InfoCircleTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import checkStatus from '../../utils/status';
import { CrossCheckSessionModal } from '../cross-check-session-modal';

const CrossCheckSessionsTable = (props) => {
  const {
    getTaskByTitle,
    getCrossCheckSession,
    deleteCrossCheckSession,
    history,
    reviewRequestsData,
    isModalVisible,
    openModal,
    closeModal,
    tableData,
  } = props;

  const redirectToTask = async (taskTitle) => {
    await getTaskByTitle(taskTitle);
  };

  const renderState = (state) => {
    const color = checkStatus(state);
    return <Tag color={color}>{state.toUpperCase()}</Tag>;
  };

  const renderTaskTitle = (taskTitle) => {
    return (
      <span>
        {taskTitle}
        <InfoCircleTwoTone
          onClick={() => redirectToTask(taskTitle)}
          style={{ marginLeft: '0.5rem' }}
        />
      </span>
    );
  };

  const renderActions = (action, row) => {
    return (
      <>
        <Space size="middle" data-id={row.id}>
          <EyeTwoTone
            twoToneColor="#9254de"
            onClick={() => {
              history.push(row.id);
            }}
          />

          <EditTwoTone
            twoToneColor="#ffa940"
            className={row.state === 'closed' ? 'disabled' : ''}
            onClick={
              row.state === 'closed'
                ? () => {}
                : async () => {
                    await getCrossCheckSession(row.key);
                    history.push('cross-check-session-edit-form');
                  }
            }
          />
          <CloseCircleTwoTone
            twoToneColor="#ff4d4f"
            onClick={() => {
              let isAbleToDelete = true;
              reviewRequestsData.forEach((reviewRequest) => {
                if (reviewRequest.crossCheckSessionId === row.key) {
                  isAbleToDelete = false;
                }
              });
              if (isAbleToDelete) {
                deleteCrossCheckSession(row.key);
              } else {
                openModal();
              }
            }}
          />
        </Space>
        <CrossCheckSessionModal isModalVisible={isModalVisible} closeModal={closeModal} />
      </>
    );
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Status',
      key: 'state',
      dataIndex: 'state',
      render: (state) => renderState(state),
    },
    {
      title: 'Task',
      dataIndex: 'taskTitle',
      key: 'taskTitle',
      render: (taskTitle) => renderTaskTitle(taskTitle),
    },
    {
      title: 'Coefficient',
      dataIndex: 'coefficient',
      key: 'coefficient',
    },
    {
      title: 'Start date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (action, row) => renderActions(action, row),
    },
  ];
  return <Table columns={columns} dataSource={tableData} />;
};

CrossCheckSessionsTable.propTypes = {
  tableData: PropTypes.instanceOf(Array),
  getCrossCheckSession: PropTypes.func,
  deleteCrossCheckSession: PropTypes.func,
  history: PropTypes.instanceOf(Object),
  reviewRequestsData: PropTypes.instanceOf(Object),
  isModalVisible: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  getTaskByTitle: PropTypes.func,
};

CrossCheckSessionsTable.defaultProps = {
  tableData: [],
  getCrossCheckSession: () => {},
  deleteCrossCheckSession: () => {},
  history: {},
  reviewRequestsData: [],
  isModalVisible: false,
  openModal: () => {},
  closeModal: () => {},
  getTaskByTitle: () => {},
};

export default CrossCheckSessionsTable;
