import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Select, Button, DatePicker, InputNumber, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postCrossCheckSession } from '../../store/actions/crossCheckSession';
import { required, minLength, maxLength } from '../../utils';
import transformFormValuesToCrossCheckSessionObject from '../../utils/crossCheckSession';
import makeField from './makeField';
import { formItemLayout, tailFormItemLayout } from './formLayout';
import { crossCheckSessionForm } from './initialValues';

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

const CrossCheckSessionForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    reset,
    postCrossCheckSession,
    isRedirectReady,
  } = props;

  const onSubmit = (values) => {
    const crossCheckSession = transformFormValuesToCrossCheckSessionObject(values);
    postCrossCheckSession(crossCheckSession);
  };

  if (isRedirectReady) {
    return <Redirect to="/crossCheckSessions/" />;
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
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
      />

      <Field
        label="Discard max score"
        name="discardMaxScore"
        component={ACheckbox}
        type="checkbox"
        hasFeedback
      />

      <Field
        label="Create as DRAFT"
        name="draft"
        component={ACheckbox}
        type="checkbox"
        hasFeedback
      />

      <FormItem {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={pristine || submitting}
          style={{ marginRight: '1rem' }}
        >
          Create
        </Button>

        <Button disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </FormItem>
    </Form>
  );
};

CrossCheckSessionForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  postCrossCheckSession: PropTypes.func.isRequired,
  isRedirectReady: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isRedirectReady: state.form.crossCheckSession.isRedirectReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postCrossCheckSession: (crossCheckSession) =>
      dispatch(postCrossCheckSession(crossCheckSession)),
  };
};

const form = reduxForm({
  form: 'crossCheckSession',
  initialValues: crossCheckSessionForm,
})(CrossCheckSessionForm);

export default connect(mapStateToProps, mapDispatchToProps)(form);
