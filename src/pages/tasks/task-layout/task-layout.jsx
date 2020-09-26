import React from 'react';
import PropTypes from 'prop-types';
import TaskForm from '../task-form/task-form';
import TaskFormEdit from '../task-form/task-form-edit';
import TaskDetails from '../task-details';

export const TaskLayout = ({ match }) => {
  const { id } = match.params;
  switch (id) {
    case 'task-form':
      return <TaskForm />;
    case 'task-edit-form':
      return <TaskFormEdit />;
    default:
      return <TaskDetails id={id} />;
  }
};

TaskLayout.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default TaskLayout;
