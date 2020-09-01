/* eslint-disable react/prop-types */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Select, Button, DatePicker, InputNumber, Checkbox } from 'antd';

import { required, minLength, maxLength } from '../../utils';

const minLength3 = minLength(3);
const maxLength50 = maxLength(50);

const { Option } = Select;
const { RangePicker } = DatePicker;

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

const makeField = (Component) => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;

  return (
    <FormItem
      {...formItemLayout}
      label={label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest}>
        {children}
      </Component>
    </FormItem>
  );
};

const AInput = makeField(Input);
const AInputNumber = makeField(InputNumber);
const ASelect = makeField(Select);
const ACheckbox = makeField(Checkbox);
const ARangePicker = makeField(RangePicker);

const CrossCheckSessionForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="Task name"
        name="taskName"
        component={AInput}
        placeholder="Type task name"
        hasFeedback
        validate={[required, minLength3, maxLength50]}
      />

      <Field
        label="Author"
        name="author"
        component={AInput}
        placeholder="Type author name"
        hasFeedback
        validate={[required, minLength3, maxLength50]}
      />

      <Field
        label="Task id"
        name="taskId"
        component={ASelect}
        hasFeedback
        validate={required}
        onBlur={(e) => e.preventDefault()}
      >
        <Option value="id-1">id-1</Option>
        <Option value="id-2">id-2</Option>
        <Option value="id-3">id-3</Option>
      </Field>

      <Field
        label="Time period"
        name="crossCheckSessionPeriod"
        component={ARangePicker}
        placeholder={['From', 'To']}
        onFocus={(e) => e.preventDefault()}
        onBlur={(e) => e.preventDefault()}
        hasFeedback
        validate={required}
      />

      <Field
        label="Task coefficient"
        name="taskCoefficient"
        min={0}
        max={1}
        step={0.1}
        component={AInputNumber}
        hasFeedback
        validate={required}
      />

      <Field
        label="Min reviews amount"
        name="minReviewsAmount"
        min={1}
        max={5}
        component={AInputNumber}
        hasFeedback
        validate={required}
      />

      <Field
        label="Desired reviews amount"
        name="desiredReviewsAmount"
        min={1}
        max={5}
        component={AInputNumber}
        hasFeedback
        validate={required}
      />

      <Field
        label="Discard min score"
        name="discardMinScore"
        component={ACheckbox}
        type="checkbox"
        hasFeedback
        validate={required}
      />

      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={pristine || submitting}>
          Create
        </Button>
      </FormItem>
    </Form>
  );
};

export default reduxForm({
  form: 'crossCheckSession',
  initialValues: {
    taskCoefficient: 1,
    minReviewsAmount: 2,
    desiredReviewsAmount: 3,
    discardMinScore: true,
  },
})(CrossCheckSessionForm);
