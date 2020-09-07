import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskFormCreation from '../../components/taskForm/taskFormCreation';
import { updateTaskSession } from '../../store/actions/task';

const TaskFormEdit = (props) => {
  const { tasks, updateTaskSession, isRedirectToTableReady } = props;

  const onSubmit = (values) => {
    updateTaskSession(values);
  };

  if (isRedirectToTableReady) {
    return <Redirect to="/tasks" />;
  }

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task edit" />
      {tasks?.formValues && tasks.formValues[0] && (
        <TaskFormCreation initialValues={tasks.formValues[0]} onSubmit={onSubmit} />
      )}
    </div>
  );
};

TaskFormEdit.propTypes = {
  tasks: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isRedirectToTableReady: PropTypes.bool.isRequired,
  updateTaskSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  isRedirectToTableReady: tasks.isRedirectToTableReady,
  tasks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateTaskSession: (tasks) => dispatch(updateTaskSession(tasks)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormEdit);
