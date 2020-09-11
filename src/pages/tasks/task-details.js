import React from 'react';
import { PageHeader, Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskDescription from '../../components/tasks/task-description';

const TaskDetails = (props) => {
  const { tasks } = props;
  console.log('11111111111111111111111111111', tasks);
  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task details" />
      <Button type="primary" size="small" style={{ width: 90 }}>
        Back
      </Button>
      {tasks?.formValues && tasks.formValues[0] && <TaskDescription task={tasks.formValues[0]} />}
    </div>
  );
};

TaskDetails.propTypes = {
  tasks: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default connect(mapStateToProps)(TaskDetails);
