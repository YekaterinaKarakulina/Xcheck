import React from 'react';
import { PageHeader } from 'antd';
import TaskFormCreation from '../../components/taskForm/taskFormCreation';

const TaskForm = () => {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task create/update" />
      <TaskFormCreation onSubmit={submit} />
    </div>
  );
};

export default TaskForm;
