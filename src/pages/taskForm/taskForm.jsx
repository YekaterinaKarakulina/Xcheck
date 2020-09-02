import React from 'react';
import { PageHeader } from 'antd';
import TaskFormCreation from '../../components/taskForm/taskFormCreation';

class TaskForm extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="Task create/update" />
        <TaskFormCreation />
      </div>
    );
  }
}

export default TaskForm;
