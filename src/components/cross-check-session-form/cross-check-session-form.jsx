/* eslint-disable react/prop-types */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Select, Button, DatePicker, InputNumber, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { required, minLength, maxLength } from '../../utils';
import makeField from '../forms/make-field';
import { formItemLayout, tailFormItemLayout } from '../forms/form-layout';

const minLength3 = minLength(3);
const maxLength50 = maxLength(50);

const { Option } = Select;
const { RangePicker } = DatePicker;

const FormItem = Form.Item;

const AInput = makeField(Input, formItemLayout);
const AInputNumber = makeField(InputNumber, formItemLayout);
const ASelect = makeField(Select, formItemLayout);
const ACheckbox = makeField(Checkbox, formItemLayout);
const ARangePicker = makeField(RangePicker, formItemLayout);

const CrossCheckSessionFormCreation = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    reset,
    submitButtonName,
    tasks,
    initialValues,
  } = props;

  const draftCheckbox = initialValues.draft ? (
    <Field label="Create as DRAFT" name="draft" component={ACheckbox} type="checkbox" hasFeedback />
  ) : null;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        label="Title"
        name="title"
        component={AInput}
        placeholder="Type title"
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
        label="Task title"
        name="taskTitle"
        component={ASelect}
        hasFeedback
        validate={required}
        onBlur={(e) => e.preventDefault()}
      >
        {tasks.map(({ title, id }) => {
          return (
            <Option value={id} key={id}>
              {title}
            </Option>
          );
        })}
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
        name="coefficient"
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
      />

      <Field
        label="Discard max score"
        name="discardMaxScore"
        component={ACheckbox}
        type="checkbox"
        hasFeedback
      />

      {draftCheckbox}

      <FormItem {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={pristine || submitting}
          style={{ marginRight: '1rem' }}
        >
          {submitButtonName}
        </Button>

        <Button disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </FormItem>
    </form>
  );
};

CrossCheckSessionFormCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitButtonName: PropTypes.string.isRequired,
  tasks: PropTypes.instanceOf(Array).isRequired,
  initialValues: PropTypes.instanceOf(Object).isRequired,
};

const form = reduxForm({
  form: 'crossCheckSession',
  enableReinitialize: true,
})(CrossCheckSessionFormCreation);

export default form;
