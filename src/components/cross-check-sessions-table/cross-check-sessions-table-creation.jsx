/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import { EyeTwoTone, EditTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import {
  getCrossCheckSession,
  deleteCrossCheckSession,
} from '../../store/actions/cross-check-session';
import checkStatus from '../../utils/status';

import './cross-check-sessions-table-creation.scss';

const CrossCheckSessionsTableCreation = (props) => {
  const { getCrossCheckSession, deleteCrossCheckSession, history } = props;

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
                  : () => {
                      getCrossCheckSession({ id: row.key, editMode: true });
                    }
              }
            />
            <CloseCircleTwoTone
              twoToneColor="#ff4d4f"
              onClick={() => {
                deleteCrossCheckSession(row.key);
              }}
            />
          </Space>
        );
      },
    },
  ];

  const { tableData, isRedirectToFormReady } = props;

  if (isRedirectToFormReady) {
    return <Redirect to="/cross-check-sessions/cross-check-session-edit-form" />;
  }

  return <Table columns={columns} dataSource={tableData} />;
};

CrossCheckSessionsTableCreation.propTypes = {
  isRedirectToFormReady: PropTypes.bool.isRequired,
  tableData: PropTypes.instanceOf(Array).isRequired,
  getCrossCheckSession: PropTypes.func.isRequired,
  deleteCrossCheckSession: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ crossCheckSessions }) => ({
  isRedirectToFormReady: crossCheckSessions.isRedirectToFormReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSession: ({ id, editMode }) => dispatch(getCrossCheckSession({ id, editMode })),
    deleteCrossCheckSession: (id) => dispatch(deleteCrossCheckSession(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionsTableCreation)
);
