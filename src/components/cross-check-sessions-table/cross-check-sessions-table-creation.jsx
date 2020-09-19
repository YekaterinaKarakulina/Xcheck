import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import { EyeTwoTone, EditTwoTone, CloseCircleTwoTone, InfoCircleTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import {
  getCrossCheckSession,
  deleteCrossCheckSession,
  openModal,
  closeModal,
} from '../../store/actions/cross-check-session';
import { getTask, getTaskByTitle } from '../../store/actions/task';
import checkStatus from '../../utils/status';
import { CrossCheckSessionModal } from '../modals';

import './cross-check-sessions-table-creation.scss';

class CrossCheckSessionsTableCreation extends React.Component {
  componentDidUpdate(prev) {
    const { currentTask, history, getTask } = this.props;
    const currentTaskId = currentTask.taskId;

    if (currentTaskId !== prev.currentTask.taskId) {
      history.push(`/tasks/${currentTaskId}`);
      getTask(currentTaskId);
    }
  }

  render() {
    const {
      getCrossCheckSession,
      deleteCrossCheckSession,
      history,
      reviewRequestsData,
      isModalVisible,
      openModal,
      closeModal,
      tableData,
    } = this.props;

    const redirectToTask = async (taskTitle) => {
      const { getTaskByTitle } = this.props;
      await getTaskByTitle(taskTitle);
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
        render: (state) => {
          const color = checkStatus(state);
          return <Tag color={color}>{state.toUpperCase()}</Tag>;
        },
      },
      {
        title: 'Task',
        dataIndex: 'taskTitle',
        key: 'taskTitle',
        render: (action, row) => {
          return (
            <span>
              {row.taskTitle}
              <InfoCircleTwoTone
                onClick={() => redirectToTask(row.taskTitle)}
                style={{ marginLeft: '0.5rem' }}
              />
            </span>
          );
        },
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
        render: (action, row) => {
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
        },
      },
    ];

    return <Table columns={columns} dataSource={tableData} />;
  }
}

CrossCheckSessionsTableCreation.propTypes = {
  tableData: PropTypes.instanceOf(Array).isRequired,
  getCrossCheckSession: PropTypes.func.isRequired,
  deleteCrossCheckSession: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  reviewRequestsData: PropTypes.instanceOf(Object).isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  getTask: PropTypes.func.isRequired,
  getTaskByTitle: PropTypes.func.isRequired,
  currentTask: PropTypes.instanceOf(Object),
};

CrossCheckSessionsTableCreation.defaultProps = {
  currentTask: {},
};

const mapStateToProps = ({ crossCheckSessions, reviewRequestsData, tasks }) => ({
  isModalVisible: crossCheckSessions.isModalVisible,
  reviewRequestsData,
  currentTask: tasks.currentTask[0],
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSession: (id) => dispatch(getCrossCheckSession(id)),
    deleteCrossCheckSession: (id) => dispatch(deleteCrossCheckSession(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    getTask: (id) => dispatch(getTask(id)),
    getTaskByTitle: (title) => dispatch(getTaskByTitle(title)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionsTableCreation)
);
