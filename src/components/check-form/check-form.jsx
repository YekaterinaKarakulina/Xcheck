/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { isEmpty } from 'lodash';
import { Button, Divider, Row, Typography } from 'antd';
import SelfGradeFields from './selfgrade-fields';
import GradeFields from './grade-fields';

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
}) => {
  const { selfGrade } = reviewRequest;
  const isSelfGradeEmpty = isEmpty(selfGrade);

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
    <form onSubmit={handleSubmit}>
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

export default connect(mapStateToProps)(
  reduxForm({
    form: 'checkForm',
    enableReinitialize: true,
  })(CheckForm)
);
