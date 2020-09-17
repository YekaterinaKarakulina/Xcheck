import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { postReviewRequest, openModal } from '../../../store/actions/review-requests';
import { getCrossCheckSessions } from '../../../store/actions/cross-check-session';
import {
  transformFormValuesToReviewRequestObject,
  getCrossCheckSessionsInfoForReviewRequestForm,
} from '../../../utils/review-requests';
import ReviewRequestFormCreation from '../../../components/review-request-form';

class ReviewRequestForm extends React.Component {
  componentDidMount() {
    // console.log('Hello');
    const { getCrossCheckSessions } = this.props;
    getCrossCheckSessions();
  }

  render() {
    const { crossCheckSessionsData, postReviewRequest, openModal } = this.props;
    const crossCheckSessionsActive = getCrossCheckSessionsInfoForReviewRequestForm(
      crossCheckSessionsData
    );
    console.log(crossCheckSessionsData);

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
};

const mapStateToProps = ({ crossCheckSessionsData }) => {
  return { crossCheckSessionsData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postReviewRequest: (reviewRequest) => dispatch(postReviewRequest(reviewRequest)),
    openModal: () => dispatch(openModal()),
    getCrossCheckSessions: () => dispatch(getCrossCheckSessions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewRequestForm);
