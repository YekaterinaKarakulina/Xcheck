/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { Button, PageHeader, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getCrossCheckSession,
  updateCrossCheckSession,
} from '../../../store/actions/cross-check-session';
import { updateReviewRequest } from '../../../store/actions/review-requests';
import { updateReview } from '../../../store/actions/reviews';
import CrossCheckSessionDescriptionCreation from '../../../components/cross-check-session-description';
import checkStatus from '../../../utils/status';

import './cross-check-session-description.scss';

class CrossCheckSessionDescription extends React.Component {
  componentDidMount() {
    const { id, getCrossCheckSession } = this.props;
    getCrossCheckSession(id);
  }

  finishRequestsCollection = async () => {
    const {
      id,
      getCrossCheckSession,
      reviewRequestsData,
      initialValues,
      updateCrossCheckSession,
      updateReviewRequest,
    } = this.props;

    const attendees = [];

    const publishedReviewRequests = reviewRequestsData.filter(
      (request) => request.state === 'readyToXCheck'
    );

    publishedReviewRequests.forEach((item, index) => {
      const reviewRequests = publishedReviewRequests;

      const currentAuthor = reviewRequests[index].author;
      const anotherRequests = [
        ...reviewRequests.slice(0, index),
        ...reviewRequests.slice(index + 1),
      ];
      anotherRequests.sort(() => Math.random() - 0.5);

      const { desiredReviewsAmount, minReviewsAmount } = initialValues;

      if (anotherRequests.length > desiredReviewsAmount) {
        anotherRequests.splice(desiredReviewsAmount);
      } else if (anotherRequests.length > minReviewsAmount) {
        anotherRequests.splice(minReviewsAmount);
      } else {
        console.log('not enough requests!');
      }

      const reviewerOf = [];
      anotherRequests.forEach((request) => {
        reviewerOf.push(request.author);
      });

      const currentAttendees = {
        githubId: currentAuthor,
        reviewerOf,
      };
      attendees.push(currentAttendees);
    });
    const crossCheckSessionUpdated = initialValues;
    crossCheckSessionUpdated.attendees = attendees;
    crossCheckSessionUpdated.state = 'onReview';
    await updateCrossCheckSession(crossCheckSessionUpdated);
    publishedReviewRequests.forEach(async (request) => {
      const newRequest = request;
      newRequest.state = 'published';
      await updateReviewRequest(newRequest);
    });
    getCrossCheckSession(id);
  };

  stopSession = async () => {
    console.log('stopSession');
    const {
      reviewRequestsData,
      initialValues,
      updateCrossCheckSession,
      updateReviewRequest,
      reviewsData,
      updateReview,
    } = this.props;

    const publishedReviewRequests = reviewRequestsData.filter(
      (request) => request.state === 'published'
    );

    const crossCheckSessionUpdated = initialValues;
    crossCheckSessionUpdated.state = 'closed';
    await updateCrossCheckSession(crossCheckSessionUpdated);
    publishedReviewRequests.forEach(async (request) => {
      const newRequest = request;
      newRequest.state = 'closed';
      await updateReviewRequest(newRequest);
    });

    const draftReviews = reviewsData.filter((request) => request.state === 'draft');
    draftReviews.forEach(async (review) => {
      const newReview = review;
      newReview.state = 'published';
      await updateReview(newReview);
    });
  };

  render() {
    const { initialValues } = this.props;

    if (initialValues.title) {
      const { title, state } = initialValues;
      const color = checkStatus(state);

      let finishCollectionButton = (
        <Button type="primary" onClick={this.finishRequestsCollection}>
          Finish requests collection
        </Button>
      );

      let stopSessionButton = (
        <Button type="primary" className="disable">
          Stop cross-check session{' '}
        </Button>
      );

      switch (state) {
        case 'onReview':
          finishCollectionButton = (
            <Button type="primary" className="disable">
              Finish requests collection
            </Button>
          );
          stopSessionButton = (
            <Button type="primary" onClick={this.stopSession}>
              Stop cross-check session{' '}
            </Button>
          );
          break;
        default:
          break;
      }

      const extraButtons = (
        <Space size="middle">
          {finishCollectionButton}
          {stopSessionButton}
        </Space>
      );

      return (
        <div className="wrapper">
          <PageHeader className="site-page-header" title={title}>
            <Tag color={color}>{state.toUpperCase()}</Tag>
          </PageHeader>
          <Button type="primary">
            <Link to="/cross-check-sessions/">Back</Link>
          </Button>
          <CrossCheckSessionDescriptionCreation descriptionValues={initialValues} />
          {extraButtons}
        </div>
      );
    }
    return null;
  }
}

CrossCheckSessionDescription.propTypes = {
  id: PropTypes.string.isRequired,
  initialValues: PropTypes.instanceOf(Object).isRequired,
  getCrossCheckSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crossCheckSessions, reviewRequestsData, reviewsData }) => ({
  initialValues: crossCheckSessions.currentSessionInfo,
  reviewRequestsData,
  reviewsData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSession: (id) => dispatch(getCrossCheckSession(id)),
    updateCrossCheckSession: (attendees) => dispatch(updateCrossCheckSession(attendees)),
    updateReviewRequest: (newReviewRequest) => dispatch(updateReviewRequest(newReviewRequest)),
    updateReview: (newReviews) => dispatch(updateReview(newReviews)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionDescription);
