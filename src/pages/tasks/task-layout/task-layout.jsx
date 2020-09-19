/* eslint-disable react/prop-types */
import React from 'react';
import TaskForm from '../task-form/task-form';
import TaskFormEdit from '../task-form/task-form-edit';
import TaskDetails from '../task-details';

const TaskLayout = ({ match }) => {
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

export default TaskLayout;
