import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskFormCreation from '../../../components/tasks/task-form/task-form-creation';
import { updateTaskSession } from '../../../store/actions/task';

const TaskFormEdit = (props) => {
  const { tasks, updateTaskSession, history } = props;

  const onSubmit = (values) => {
    updateTaskSession(values);
    history.push(`/tasks`);
  };

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
  updateTaskSession: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskFormEdit));
