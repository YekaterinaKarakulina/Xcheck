/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { isEmpty } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { Button, Divider, Row, Typography } from 'antd';
import SelfGradeFields from './selfgrade-fields';
import GradeFields from './grade-fields';
import {
  transformFormValuesToSelfGradeObject,
  transformFormValuesToGradeObject,
} from '../../utils/check';
import { updateReviewRequest } from '../../store/actions/review-requests';
import { postReview } from '../../store/actions/reviews';

const { Title } = Typography;

// eslint-disable-next-line import/no-mutable-exports
const CheckForm = ({
  scopes,
  reviewRequest,
  handleSubmit,
  submitting,
  pristine,
  toggleMore,
  toggleAdd,
  toggleShow,
  detailIds,
  commentFieldIds,
  commentIds,
  updateReviewRequest,
  postReview,
  history,
  user,
}) => {
  const { selfGrade } = reviewRequest;
  const isSelfGradeEmpty = isEmpty(selfGrade);

  const selfCheckSubmit = (values) => {
    const newSelfGrade = transformFormValuesToSelfGradeObject(values);
    const { crossCheckSessionId } = reviewRequest;
    const status = crossCheckSessionId ? 'readyToXCheck' : 'published';
    const newRequest = reviewRequest;

    newRequest.selfGrade = newSelfGrade;
    newRequest.state = status;

    updateReviewRequest(newRequest);

    history.push('/review-requests/');
  };

  const checkSubmit = (values) => {
    const review = {};
    const { crossCheckSessionId, id, author, taskTitle } = reviewRequest;
    const status = crossCheckSessionId ? 'draft' : 'published';
    const grade = transformFormValuesToGradeObject(values);
    review.id = uuidv4();
    review.requestId = id;
    review.taskAuthor = author;
    review.author = user.user.login;
    review.taskTitle = taskTitle;
    review.state = status;
    review.comments = [];
    review.grade = grade;

    postReview(review);

    history.push('/reviews/');
  };

  const submit = () => {
    if (isSelfGradeEmpty) {
      return selfCheckSubmit;
    }
    return checkSubmit;
  };

  const renderScopes = scopes.map((scope) => {
    return (
      <Row key={scope.id}>
        <Title style={{ fontSize: '1.8rem' }}>{scope.title}</Title>
        <Divider style={{ marginTop: '0.5rem' }} />

        <div>
          {isSelfGradeEmpty ? (
            <SelfGradeFields
              fields={scope.items}
              detailIds={detailIds}
              commentFieldIds={commentFieldIds}
              toggleMore={toggleMore}
              toggleAdd={toggleAdd}
            />
          ) : (
            <GradeFields
              fields={scope.items}
              detailIds={detailIds}
              commentIds={commentIds}
              commentFieldIds={commentFieldIds}
              toggleMore={toggleMore}
              toggleAdd={toggleAdd}
              toggleShow={toggleShow}
              selfGrade={selfGrade}
            />
          )}
        </div>
      </Row>
    );
  });

  return (
    <form onSubmit={handleSubmit(submit())}>
      <div> {renderScopes}</div>

      <Divider />
      <Button type="primary" htmlType="submit" size="large" disabled={pristine || submitting}>
        Submit
      </Button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { initialValues: ownProps.initialValues };
};

const mapDispatchToProps = (dispatch) => ({
  updateReviewRequest: (newRequest) => dispatch(updateReviewRequest(newRequest)),
  postReview: (newReview) => dispatch(postReview(newReview)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    reduxForm({
      form: 'checkForm',
      enableReinitialize: true,
    })(CheckForm)
  )
);
