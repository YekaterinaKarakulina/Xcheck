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
import CrossCheckSessionDescriptionCreation from '../../../components/cross-check-session-description';
import checkStatus from '../../../utils/status';

class CrossCheckSessionDescription extends React.Component {
  componentDidMount() {
    const { id, getCrossCheckSession } = this.props;
    getCrossCheckSession({ id, editMode: false });
  }

  finishRequestsCollection = async () => {
    const {
      id,
      getCrossCheckSession,
      reviewRequestsData,
      initialValues,
      updateCrossCheckSession,
    } = this.props;

    const attendees = [];

    const publishedReviewRequests = reviewRequestsData.filter(
      (request) => request.state === 'published'
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
        console.log('not enought requests!');
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
    await updateCrossCheckSession(crossCheckSessionUpdated);
    getCrossCheckSession({ id, editMode: false });
  };

  render() {
    const { initialValues } = this.props;

    if (initialValues.title) {
      const { title, state } = initialValues;
      const color = checkStatus(state);

      const extraButtons =
        state === 'active' ? (
          <Space size="middle">
            <Button type="primary" onClick={this.finishRequestsCollection}>
              Finish requests collection
            </Button>
            <Button type="primary">Stop cross-check session</Button>
          </Space>
        ) : null;

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

const mapStateToProps = ({ crossCheckSessions, reviewRequestsData }) => ({
  initialValues: crossCheckSessions.currentSessionInfo,
  reviewRequestsData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSession: ({ id, editMode }) => dispatch(getCrossCheckSession({ id, editMode })),
    updateCrossCheckSession: (attendees) => dispatch(updateCrossCheckSession(attendees)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionDescription);
