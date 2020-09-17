import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskFormCreation from '../../../components/tasks/task-form/task-form-creation';
import { updateTaskSession, getTasksTable } from '../../../store/actions/task';
import mapDataValues from './map-data-form';

const TaskFormEdit = (props) => {
  const {
    tasks: { formValues },
    match: { params: id },
    updateTaskSession,
    history,
    getTasksTable,
  } = props;
  const taskformValue = formValues.find((elem) => elem.taskId === id.id);
  const onSubmit = async (values) => {
    const changedObjectValues = mapDataValues(values);
    await updateTaskSession(changedObjectValues);
    getTasksTable();
    history.push(`/tasks`);
  };

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task edit" />
      {formValues && <TaskFormCreation initialValues={taskformValue} onSubmit={onSubmit} />}
    </div>
  );
};

TaskFormEdit.propTypes = {
  tasks: PropTypes.oneOfType([PropTypes.object]).isRequired,
  updateTaskSession: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getTasksTable: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateTaskSession: (tasks) => dispatch(updateTaskSession(tasks)),
    getTasksTable: () => dispatch(getTasksTable()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskFormEdit));
