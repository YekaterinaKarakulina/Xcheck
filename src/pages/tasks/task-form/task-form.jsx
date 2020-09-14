import React from 'react';
import { PageHeader } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postTaskSession } from '../../../store/actions/task';
import TaskFormCreation from '../../../components/tasks/task-form/task-form-creation';

const TaskForm = (props) => {
  const { postTaskSession, history } = props;

  const onSubmit = async (values) => {
    const taskId = uuidv4();
    const fullObjectValues = { ...values, taskId };
    await postTaskSession(fullObjectValues);
    history.push(`/tasks`);
  };

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task create" />
      <TaskFormCreation initialValues={{ taskScore: 100 }} onSubmit={onSubmit} />
    </div>
  );
};

TaskForm.propTypes = {
  postTaskSession: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  isRedirectToTableReady: tasks.isRedirectToTableReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postTaskSession: (tasks) => dispatch(postTaskSession(tasks)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm));
