/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Form, Button, Typography } from 'antd';
import SelfGradeFields from './selfgrade-fields';
import GradeFields from './grade-fields';

const { Title } = Typography;

const isObjectEmpty = (value) =>
  value && Object.keys(value).length === 0 && value.constructor === Object;

// eslint-disable-next-line import/no-mutable-exports
let CheckForm = ({
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
  const isSelfGradeEmpty = isObjectEmpty(selfGrade);

  const renderScopes = scopes.map((scope) => {
    return (
      <div className="check__form-row" key={scope.id}>
        <Title level={4} className="check__form-row-title">
          {scope.title}
        </Title>

        <div className="check__form-row-body">
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
      </div>
    );
  });

  return (
    <Form onFinish={handleSubmit} className="check__form">
      <div className="check__form-inner"> {renderScopes}</div>
      <div className="check__form-bottom">
        <Button type="primary" htmlType="submit" size="large" disabled={pristine || submitting}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

CheckForm = reduxForm({
  form: 'checkForm',
})(CheckForm);

CheckForm = connect((state) => ({
  initialValues: state.values,
}))(CheckForm);

export default CheckForm;
