import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PageHeader } from 'antd';
import CrossCheckSessionFormCreation from '../../../components/cross-check-session-form';
import { postCrossCheckSession } from '../../../store/actions/cross-check-session';
import { getTasksTable } from '../../../store/actions/task';
import {
  transformFormValuesToCrossCheckSessionObject,
  getTasksInfoForCrossCheckSessionForm,
} from '../../../utils/cross-check-sessions';

class CrossCheckSessionForm extends React.Component {
  componentDidMount() {
    const { getTasksTable } = this.props;
    getTasksTable();
  }

  render() {
    const { isRedirectToTableReady, tasksTableData, postCrossCheckSession } = this.props;
    const tasks = getTasksInfoForCrossCheckSessionForm(tasksTableData);

    const onSubmit = (values) => {
      const crossCheckSession = transformFormValuesToCrossCheckSessionObject(values);
      postCrossCheckSession(crossCheckSession);
    };

    if (isRedirectToTableReady) {
      return <Redirect to="/cross-check-sessions/" />;
    }

    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="Create CrossCheck session" button />
        <CrossCheckSessionFormCreation
          onSubmit={onSubmit}
          submitButtonName="Create"
          tasks={tasks}
        />
      </div>
    );
  }
}

CrossCheckSessionForm.propTypes = {
  isRedirectToTableReady: PropTypes.bool.isRequired,
  postCrossCheckSession: PropTypes.func.isRequired,
  tasksTableData: PropTypes.instanceOf(Array).isRequired,
  getTasksTable: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crossCheckSessions, tasksTableData }) => ({
  isRedirectToTableReady: crossCheckSessions.isRedirectToTableReady,
  tasksTableData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postCrossCheckSession: (crossCheckSession) =>
      dispatch(postCrossCheckSession(crossCheckSession)),
    getTasksTable: () => dispatch(getTasksTable()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionForm);
