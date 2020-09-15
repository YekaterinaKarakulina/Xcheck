/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    const { tasksTableData, postCrossCheckSession, history } = this.props;
    const tasks = getTasksInfoForCrossCheckSessionForm(tasksTableData);

    const onSubmit = async (values) => {
      const crossCheckSession = transformFormValuesToCrossCheckSessionObject(values);
      await postCrossCheckSession(crossCheckSession);
      history.go(-1);
    };

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
  postCrossCheckSession: PropTypes.func.isRequired,
  tasksTableData: PropTypes.instanceOf(Array).isRequired,
  getTasksTable: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tasksTableData }) => ({
  tasksTableData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postCrossCheckSession: (crossCheckSession) =>
      dispatch(postCrossCheckSession(crossCheckSession)),
    getTasksTable: () => dispatch(getTasksTable()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionForm));
