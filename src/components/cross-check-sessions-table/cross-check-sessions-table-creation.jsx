import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getCrossCheckSession,
  deleteCrossCheckSession,
  openModal,
  closeModal,
} from '../../store/actions/cross-check-session';
import { getTask, getTaskByTitle } from '../../store/actions/task';
import CrossCheckSessionsTable from './cross-check-sessions-table';

import './cross-check-sessions-table-creation.scss';

class CrossCheckSessionsTableContainer extends React.Component {
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
      getTaskByTitle,
      getCrossCheckSession,
      deleteCrossCheckSession,
      history,
      reviewRequestsData,
      isModalVisible,
      openModal,
      closeModal,
      tableData,
    } = this.props;

    return (
      <CrossCheckSessionsTable
        getTaskByTitle={getTaskByTitle}
        getCrossCheckSession={getCrossCheckSession}
        deleteCrossCheckSession={deleteCrossCheckSession}
        history={history}
        reviewRequestsData={reviewRequestsData}
        isModalVisible={isModalVisible}
        openModal={openModal}
        closeModal={closeModal}
        tableData={tableData}
      />
    );
  }
}

CrossCheckSessionsTableContainer.propTypes = {
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

CrossCheckSessionsTableContainer.defaultProps = {
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
  connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionsTableContainer)
);
