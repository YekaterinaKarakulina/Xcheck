import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button, InputNumber, Select } from 'antd';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import makeField from '../forms/makeField';
import { required, minLength, maxLength } from '../../utils';
import FieldArraysForm from './FieldArraysForm';
import './taskForm.scss';

const minLength3 = minLength(3);
const maxLength50 = maxLength(50);

const { Option } = Select;
const { TextArea } = Input;
const taskId = uuidv4();
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
const ATextArea = makeField(TextArea, formItemLayout);

const TaskFormCreation = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="Task title"
        name="taskTitle"
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
        label="Max score"
        name="taskScore"
        min={0}
        max={1000}
        step={0.1}
        component={AInputNumber}
        hasFeedback
        validate={required}
      />

      <Field
        label="Status"
        name="status"
        component={ASelect}
        hasFeedback
        validate={required}
        onBlur={(e) => e.preventDefault()}
      >
        <Option value="id-1">Open</Option>
        <Option value="id-2">Closed</Option>
        <Option value="id-3">Archived</Option>
      </Field>

      <Field label="Description" name="description" component={ATextArea} hasFeedback />

      <Field
        label="Link to this task "
        name="author"
        component={AInput}
        placeholder="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/xcheck/xcheck.md"
        hasFeedback
      />

      <FieldArraysForm />

      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={pristine || submitting}>
          Create
        </Button>
      </FormItem>
    </Form>
  );
};

TaskFormCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'taskCreation',
  initialValues: {
    taskScore: 100,
    taskId,
  },
})(TaskFormCreation);
