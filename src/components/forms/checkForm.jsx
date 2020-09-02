import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Typography, Form, Input, Button, Radio } from 'antd';
import makeField from './makeField';

const isObjectEmpty = (value) =>
  value && Object.keys(value).length === 0 && value.constructor === Object;

const { Title } = Typography;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

const AInput = makeField(Input);
const ATextarea = makeField(TextArea);
const ARadioGroup = makeField(RadioGroup);

const CheckForm = ({ groups, reviewRequest, handleSubmit }) => {
  const { selfGrade } = reviewRequest;
  const isSelfGradeEmpty = isObjectEmpty(selfGrade);

  const formFields = groups.map((groupsItem) => {
    return (
      <div className="check__form-row" key={groupsItem.id}>
        <Title level={3} className="check__form-row-title">
          {groupsItem.title}
        </Title>
        <div className="check__form-row-body">
          {isSelfGradeEmpty
            ? groupsItem.items.map((gItem) => {
                return (
                  <div key={gItem.id} className="check__form-item">
                    <div className="check__form-item-group">
                      <Title level={4} className="check__form-item-title">
                        {gItem.title}
                      </Title>

                      <p className="check__form-item-desc">{gItem.description}</p>
                    </div>

                    <div className="check__form-item-group">
                      <Field name="rate" label="Your Rate" component={AInput} />

                      <Field name="comment" label="Your Comment" component={ATextarea} />
                    </div>
                  </div>
                );
              })
            : groupsItem.items.map((gItem) => {
                const { comment } = selfGrade.items[gItem.id];

                return (
                  <div key={gItem.id} className="check__form-item">
                    <div className="check__form-item-row">
                      <div className="check__form-item-group">
                        <Title level={4} className="check__form-item-title">
                          {gItem.title}
                        </Title>
                        <div className="check__form-item-desc">{gItem.description}</div>
                      </div>

                      <div className="check__form-item-group">
                        <Field name="rate" label="Student rate" component={AInput} />
                        <div className="check__form-item-group-desc">
                          <span>Student comment: </span>
                          <span>{comment}</span>
                        </div>
                      </div>
                    </div>
                    <div className="check__form-item-row">
                      <Field
                        label="Performed"
                        name={`performans-group-${gItem.id}`}
                        component={ARadioGroup}
                        value="0"
                      >
                        <Radio value="0">Not performed</Radio>
                        <Radio value="50%">50% Performed </Radio>
                        <Radio value="100%">100% Performed</Radio>
                      </Field>

                      <Field name="comment" label="Add feedback" component={ATextarea} />
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  });

  return (
    <Form onSubmit={handleSubmit} className="check__form">
      <div className="check__form-inner"> {formFields}</div>
      <div className="check__form-bottom">
        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </div>
    </Form>
  );
};

CheckForm.defaultProps = {
  reviewRequest: {},
};

CheckForm.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviewRequest: PropTypes.objectOf(PropTypes.object),
  handleSubmit: PropTypes.func.isRequired,
};

export default CheckForm;
