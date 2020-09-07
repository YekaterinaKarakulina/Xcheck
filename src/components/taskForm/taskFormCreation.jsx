import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, InputNumber, Select } from 'antd';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import makeField from '../forms/makeField';
import { required, minLength, maxLength } from '../../utils';
import { formItemLayout, tailFormItemLayout } from '../forms/formLayout';
import FieldArraysForm from './FieldArraysForm';
import { postTaskSession } from '../../store/actions/task';
import './taskForm.scss';

const minLength3 = minLength(3);
const maxLength50 = maxLength(50);

const { Option } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;

const AInput = makeField(Input, formItemLayout);
const AInputNumber = makeField(InputNumber, formItemLayout);
const ASelect = makeField(Select, formItemLayout);
const ATextArea = makeField(TextArea, formItemLayout);

let TaskFormCreation = (props) => {
  const { handleSubmit, pristine, submitting, postTaskSession, isRedirectToTableReady } = props;

  const onSubmit = (values) => {
    const taskId = uuidv4();
    const fullObjectValues = { ...values, taskId };
    postTaskSession(fullObjectValues);
  };

  if (isRedirectToTableReady) {
    return <Redirect to="/tasks" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        validate={required}
        onBlur={(e) => e.preventDefault()}
      >
        <Option value="open">Open</Option>
        <Option value="closed">Closed</Option>
        <Option value="archived">Archived</Option>
        <Option value="draft">Draft</Option>
      </Field>

      <Field label="Description" name="description" component={ATextArea} hasFeedback />

      <Field
        label="Link to this task "
        name="link"
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
    </form>
  );
};

TaskFormCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  postTaskSession: PropTypes.func.isRequired,
  isRedirectToTableReady: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ tasks }) => ({
  isRedirectToTableReady: tasks.isRedirectToTableReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postTaskSession: (values) => dispatch(postTaskSession(values)),
  };
};

TaskFormCreation = reduxForm({
  form: 'taskCreation',
  initialValues: {
    taskScore: 100,
  },
})(TaskFormCreation);

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormCreation);
