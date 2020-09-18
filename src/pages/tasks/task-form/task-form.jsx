import React from 'react';
import { PageHeader } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postTaskSession, getTasksTable } from '../../../store/actions/task';
import TaskFormCreation from '../../../components/tasks/task-form/task-form-creation';
import mapDataValues from './map-data-form';

const TaskForm = (props) => {
  const { postTaskSession, getTasksTable, history } = props;

  const onSubmit = async (values) => {
    const fullObjectValues = mapDataValues(values);
    await postTaskSession(fullObjectValues);
    getTasksTable();
    history.push(`/tasks`);
  };

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task create" />
      <TaskFormCreation onSubmit={onSubmit} />
    </div>
  );
};

TaskForm.propTypes = {
  postTaskSession: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  getTasksTable: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postTaskSession: (tasks) => dispatch(postTaskSession(tasks)),
    getTasksTable: () => dispatch(getTasksTable()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm));
