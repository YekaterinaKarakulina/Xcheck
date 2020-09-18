import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { postReviewRequest, openModal } from '../../../store/actions/review-requests';
import { getCrossCheckSessions } from '../../../store/actions/cross-check-session';
import { getTasksTable } from '../../../store/actions/task';
import {
  transformFormValuesToReviewRequestObject,
  getCrossCheckSessionsInfoForReviewRequestForm,
} from '../../../utils/review-requests';
import ReviewRequestFormCreation from '../../../components/review-request-form';
import { getTasksInfoForCrossCheckSessionForm } from '../../../utils/cross-check-sessions';

class ReviewRequestForm extends React.Component {
  componentDidMount() {
    const { getCrossCheckSessions, getTasksTable } = this.props;
    getCrossCheckSessions();
    getTasksTable();
  }

  render() {
    const { crossCheckSessionsData, tasksTableData, postReviewRequest, openModal } = this.props;
    const crossCheckSessionsActive = getCrossCheckSessionsInfoForReviewRequestForm(
      crossCheckSessionsData
    );
    const tasks = getTasksInfoForCrossCheckSessionForm(tasksTableData);

    const onSubmit = (values) => {
      const reviewRequest = transformFormValuesToReviewRequestObject(values);
      postReviewRequest(reviewRequest);
      openModal();
    };

    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="Create Review Request" button />
        <ReviewRequestFormCreation
          onSubmit={onSubmit}
          crossCheckSessions={crossCheckSessionsActive}
          tasks={tasks}
        />
      </div>
    );
  }
}

ReviewRequestForm.propTypes = {
  postReviewRequest: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  getCrossCheckSessions: PropTypes.func.isRequired,
  crossCheckSessionsData: PropTypes.instanceOf(Array).isRequired,
  tasksTableData: PropTypes.instanceOf(Array).isRequired,
  getTasksTable: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crossCheckSessionsData, tasksTableData }) => {
  return { crossCheckSessionsData, tasksTableData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postReviewRequest: (reviewRequest) => dispatch(postReviewRequest(reviewRequest)),
    openModal: () => dispatch(openModal()),
    getCrossCheckSessions: () => dispatch(getCrossCheckSessions()),
    getTasksTable: () => dispatch(getTasksTable()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewRequestForm);
