import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import TaskFormCreation from '../../components/taskForm/taskFormCreation';

const TaskFormEdit = (props) => {
  const { tasks } = props;

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task edit" />
      {tasks?.formValues && tasks.formValues[0] && (
        <TaskFormCreation initialValues={tasks.formValues[0]} />
      )}
    </div>
  );
};

TaskFormEdit.propTypes = {
  tasks: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = ({ tasks }) => {
  return { tasks };
};

export default connect(mapStateToProps)(TaskFormEdit);
