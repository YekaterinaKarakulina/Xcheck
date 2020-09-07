import React from 'react';
import { PageHeader } from 'antd';
import TaskFormCreation from '../../components/taskForm/taskFormCreation';

const TaskForm = () => {
  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task create" />
      <TaskFormCreation initialValues={{ taskScore: 100 }} />
    </div>
  );
};

export default TaskForm;
