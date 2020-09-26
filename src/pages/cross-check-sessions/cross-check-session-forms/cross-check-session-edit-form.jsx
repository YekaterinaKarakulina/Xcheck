import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PageHeader } from 'antd';
import moment from 'moment';
import CrossCheckSessionFormCreation from '../../../components/cross-check-session-form';
import { updateCrossCheckSession } from '../../../store/actions/cross-check-session';
import { getTasksTable } from '../../../store/actions/task';
import {
  transformFormValuesToCrossCheckSessionObject,
  getTasksInfoForCrossCheckSessionForm,
} from '../../../utils/cross-check-sessions';

class CrossCheckSessionEditForm extends React.Component {
  componentDidMount() {
    const { getTasksTable } = this.props;
    getTasksTable();
  }

  render() {
    const { initialValues, updateCrossCheckSession, tasksTableData, history } = this.props;
    if (initialValues.title) {
      const dateFormat = 'YYYY-MM-DD';

      const initialValuesTransformed = {
        ...initialValues,
        crossCheckSessionPeriod: [
          moment(initialValues.crossCheckSessionPeriod[0], dateFormat),
          moment(initialValues.crossCheckSessionPeriod[1], dateFormat),
        ],
        draft: initialValues.state === 'draft',
      };

      const tasks = getTasksInfoForCrossCheckSessionForm(tasksTableData);

      const onSubmit = async (values) => {
        const crossCheckSession = transformFormValuesToCrossCheckSessionObject(values);
        await updateCrossCheckSession(crossCheckSession);
        history.go(-1);
      };

      return (
        <div className="wrapper">
          <PageHeader className="site-page-header" title="Edit CrossCheck session" />
          <CrossCheckSessionFormCreation
            onSubmit={onSubmit}
            initialValues={initialValuesTransformed}
            submitButtonName="Edit"
            tasks={tasks}
          />
        </div>
      );
    }
    return null;
  }
}

CrossCheckSessionEditForm.propTypes = {
  initialValues: PropTypes.oneOfType([PropTypes.object]).isRequired,
  updateCrossCheckSession: PropTypes.func.isRequired,
  tasksTableData: PropTypes.instanceOf(Array).isRequired,
  getTasksTable: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = ({ crossCheckSessions, tasksTableData }) => ({
  initialValues: crossCheckSessions.currentSessionInfo,
  tasksTableData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCrossCheckSession: (crossCheckSession) =>
      dispatch(updateCrossCheckSession(crossCheckSession)),
    getTasksTable: () => dispatch(getTasksTable()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionEditForm));
