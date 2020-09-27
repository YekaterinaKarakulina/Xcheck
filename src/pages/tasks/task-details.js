import React from 'react';
import { PageHeader, Button } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskDescription from '../../components/tasks/task-description';

export const TaskDetails = (props) => {
  const { tasks } = props;
  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task details" />
      <Button type="primary">
        <Link to="/tasks/">Back</Link>
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
