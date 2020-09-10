import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { postReviewRequest } from '../../../store/actions/review-requests';
import transformFormValuesToReviewRequestObject from '../../../utils/review-requests';
import ReviewRequestFormCreation from '../../../components/review-request-form';

const ReviewRequestForm = (props) => {
  const { postReviewRequest } = props;

  const onSubmit = (values) => {
    const reviewRequest = transformFormValuesToReviewRequestObject(values);
    postReviewRequest(reviewRequest);
  };

  return (
    <div className="wrapper">
      <PageHeader className="site-page-header" title="Create Review Request" button />
      <ReviewRequestFormCreation onSubmit={onSubmit} />
    </div>
  );
};

ReviewRequestForm.propTypes = {
  postReviewRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postReviewRequest: (reviewRequest) => dispatch(postReviewRequest(reviewRequest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewRequestForm);
