import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Typography, Form, Input, Button, Radio } from 'antd';
import 'antd/dist/antd.css';
import isObjectEmpty from '../../utils';

const makeField = (Component) => (props) => {
  const { name, label, value, children } = props;
  return (
    <Form.Item name={name} label={label} value={value}>
      {children}
      <Component />
    </Form.Item>
  );
};

const { Title } = Typography;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

const AInput = makeField(Input);
const ATextarea = makeField(TextArea);
const ARadioGroup = makeField(RadioGroup);

const CheckForm = ({ groups, reviewRequest, handleSubmit }) => {
  console.log(groups, reviewRequest);
  const { selfGrade } = reviewRequest;
  console.log(selfGrade);
  const isSelfGradeEmpty = isObjectEmpty(selfGrade);

  const formFields = groups.map((groupsItem) => {
    return (
      <div className="check__form-row" key={groupsItem.id}>
        <Title level={2} className="check__form-row-title">
          {groupsItem.title}
        </Title>
        <div className="check__form-row-body">
          {isSelfGradeEmpty
            ? groupsItem.items.map((gItem) => {
                return (
                  <div key={gItem.id} className="check__form-item">
                    <Title level={3} className="check__form-item-title">
                      {gItem.title}
                    </Title>
                    <div className="check__form-item-desc">{gItem.description}</div>
                    <Field name="rate" label="Your Rate" component={AInput} />

                    <Field name="comment" label="Your Comment" component={ATextarea} />
                  </div>
                );
              })
            : groupsItem.items.map((gItem) => {
                const { score, comment } = selfGrade.items[gItem.id];
                console.log(score, comment);
                return (
                  <div key={gItem.id} className="check__form-item">
                    <div className="check__form-item-row">
                      <Title level={3} className="check__form-item-title">
                        {gItem.title}
                      </Title>
                      <div className="check__form-item-desc">{gItem.description}</div>
                      <Field name="rate" label="Оценка" component={AInput} value={score} />
                      <div>{comment}</div>
                    </div>
                    <div className="check__form-item-row">
                      <Field label="Rate Group" name="rate-group" component={ARadioGroup} value="0">
                        <Radio value="0">Не выполнена</Radio>
                        <Radio value="50%">50% выполнено</Radio>
                        <Radio value="50%">100% выполнено</Radio>
                      </Field>

                      {/* <Radio value="female">Female</Radio> */}
                    </div>
                    <div className="check__form-item-row">
                      <Field name="comment" label="ДОБАВИТЬ ОТЗЫВ" component={ATextarea} />
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  });

  return (
    <Form onSubmit={handleSubmit(handleSubmit)} className="check__form">
      <div className="check__form-inner"> {formFields}</div>

      <div className="check__form-bottom">
        <Button type="primary" htmlType="submit">
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
