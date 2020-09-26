import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button, Select } from 'antd';
import PropTypes from 'prop-types';
import makeField from '../../forms/make-field';
import { required, minLength, maxLength } from '../../../utils';
import { formItemLayout, tailFormItemLayout } from '../../forms/form-layout';
import FieldArraysForm from './field-arrays-form';

import './task-form.scss';

const minLength3 = minLength(3);
const maxLength50 = maxLength(50);

const { Option } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;

const AInput = makeField(Input, formItemLayout);
const ASelect = makeField(Select, formItemLayout);
const ATextArea = makeField(TextArea, formItemLayout);

export let TaskFormCreation = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        label="Task title"
        name="title"
        component={AInput}
        placeholder="Type task title"
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
        label="Status"
        name="state"
        component={ASelect}
        validate={required}
        onBlur={(e) => e.preventDefault()}
      >
        <Option value="open">Open</Option>
        <Option value="closed">Closed</Option>
        <Option value="archived">Archived</Option>
        <Option value="draft">Draft</Option>
      </Field>

      <Field label="Description" name="description" component={ATextArea} hasFeedback />

      <FieldArraysForm />

      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={pristine || submitting}>
          Save
        </Button>
      </FormItem>
    </form>
  );
};

TaskFormCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  initialValues: PropTypes.oneOfType([PropTypes.object]),
};

TaskFormCreation.defaultProps = {
  initialValues: undefined,
};

export default TaskFormCreation = reduxForm({
  form: 'taskCreation',
  enableReinitialize: true,
})(TaskFormCreation);
