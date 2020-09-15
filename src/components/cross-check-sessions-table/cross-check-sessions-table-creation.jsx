/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import { EyeTwoTone, EditTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import {
  getCrossCheckSession,
  deleteCrossCheckSession,
  openModal,
  closeModal,
} from '../../store/actions/cross-check-session';
import checkStatus from '../../utils/status';
import { CrossCheckSessionModal } from '../modals';

import './cross-check-sessions-table-creation.scss';

const CrossCheckSessionsTableCreation = (props) => {
  const {
    getCrossCheckSession,
    deleteCrossCheckSession,
    history,
    reviewRequestsData,
    isModalVisible,
    openModal,
    closeModal,
    tableData,
  } = props;

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
      title: 'State',
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
      render: (task) => <a>{task}</a>,
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
};

CrossCheckSessionsTableCreation.propTypes = {
  tableData: PropTypes.instanceOf(Array).isRequired,
  getCrossCheckSession: PropTypes.func.isRequired,
  deleteCrossCheckSession: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  reviewRequestsData: PropTypes.instanceOf(Object).isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crossCheckSessions, reviewRequestsData }) => ({
  isModalVisible: crossCheckSessions.isModalVisible,
  reviewRequestsData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSession: (id) => dispatch(getCrossCheckSession(id)),
    deleteCrossCheckSession: (id) => dispatch(deleteCrossCheckSession(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionsTableCreation)
);
