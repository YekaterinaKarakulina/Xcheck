import React from 'react';
import { PageHeader } from 'antd';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postTaskSession } from '../../store/actions/task';
import TaskFormCreation from '../../components/taskForm/taskFormCreation';

const TaskForm = (props) => {
  const { isRedirectToTableReady, postTaskSession } = props;

  const onSubmit = (values) => {
    const taskId = uuidv4();
    const fullObjectValues = { ...values, taskId };
    postTaskSession(fullObjectValues);
  };

  if (isRedirectToTableReady) {
    return <Redirect to="/tasks" />;
  }

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task create" />
      <TaskFormCreation initialValues={{ taskScore: 100 }} onSubmit={onSubmit} />
    </div>
  );
};

TaskForm.propTypes = {
  isRedirectToTableReady: PropTypes.bool.isRequired,
  postTaskSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  isRedirectToTableReady: tasks.isRedirectToTableReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postTaskSession: (tasks) => dispatch(postTaskSession(tasks)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
