import React from 'react';
import { PageHeader, Button } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskDescription from '../../components/tasks/task-description';

const TaskDetails = (props) => {
  const { tasks, history } = props;
  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Task details" />
      <Button
        type="primary"
        size="small"
        style={{ width: 90 }}
        onClick={() => {
          history.push(`/tasks`);
        }}
      >
        Back
      </Button>
      {tasks?.formValues && tasks.formValues[0] && <TaskDescription task={tasks.formValues[0]} />}
    </div>
  );
};

TaskDetails.propTypes = {
  tasks: PropTypes.oneOfType([PropTypes.object]).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default withRouter(connect(mapStateToProps)(TaskDetails));
