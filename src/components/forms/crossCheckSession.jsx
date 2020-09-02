import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Select, Button, DatePicker, InputNumber, Checkbox } from 'antd';
import PropTypes from 'prop-types';

import makeField from './makeField';
import { postCrossCheckSession } from '../../store/actions/crossCheckSession';

import { required, minLength, maxLength } from '../../utils';
import transformFormValuesToCrossCheckSessionObject from '../../utils/crossCheckSession';

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

const AInput = makeField(Input, formItemLayout);
const AInputNumber = makeField(InputNumber, formItemLayout);
const ASelect = makeField(Select, formItemLayout);
const ACheckbox = makeField(Checkbox, formItemLayout);
const ARangePicker = makeField(RangePicker, formItemLayout);

const CrossCheckSessionForm = (props) => {
  const { handleSubmit, pristine, submitting, reset, postCrossCheckSession } = props;

  const myHandleSubmit = (values) => {
    console.log(values);
    const crossCheckSession = transformFormValuesToCrossCheckSessionObject(values);
    postCrossCheckSession(crossCheckSession);
  };

  return (
    <Form onFinish={handleSubmit(myHandleSubmit)}>
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
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postCrossCheckSession: (a) => dispatch(postCrossCheckSession(a)),
  };
};

const form = reduxForm({
  form: 'crossCheckSession',
  initialValues: {
    taskCoefficient: 1,
    minReviewsAmount: 2,
    desiredReviewsAmount: 3,
    discardMinScore: true,
  },
})(CrossCheckSessionForm);

export default connect(mapStateToProps, mapDispatchToProps)(form);
