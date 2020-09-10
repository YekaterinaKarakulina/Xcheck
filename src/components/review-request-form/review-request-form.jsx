import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Select, Button } from 'antd';
import PropTypes from 'prop-types';
import makeField from '../forms/make-field';
import { formItemLayout, tailFormItemLayout } from '../forms/form-layout';
import { required } from '../../utils';

const FormItem = Form.Item;
const { Option } = Select;
const crossCheckSessionData = ['rss2020Q1', 'rss2020Q3react', 'rss2020Q3angular'];
const tasks = ['simple-task-v1', 'simple-task-v2', 'simple-task-v3'];
const states = ['draft', 'published', 'completed'];

const AInput = makeField(Input, formItemLayout);
const ASelect = makeField(Select, formItemLayout);

const ReviewRequestFormCreation = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        defaultValue={crossCheckSessionData[0]}
        label="crossCheckSession"
        name="crossCheckSession"
        component={ASelect}
        hasFeedback
        validate={required}
        onBlur={(e) => e.preventDefault()}
      >
        {crossCheckSessionData.map((crossCheckSession) => (
          <Option key={crossCheckSession} value={crossCheckSession}>
            {crossCheckSession}
          </Option>
        ))}
      </Field>

      <Field
        label="Author"
        name="Author"
        component={AInput}
        placeholder="Add your name"
        hasFeedback
        validate={required}
      />

      <Field
        defaultValue={tasks[0]}
        label="task"
        name="task"
        component={ASelect}
        hasFeedback
        validate={required}
        onBlur={(e) => e.preventDefault()}
      >
        {tasks.map((task) => (
          <Option key={task} value={task}>
            {task}
          </Option>
        ))}
      </Field>

      <Field
        defaultValue={states[0]}
        label="state"
        name="state"
        component={ASelect}
        hasFeedback
        validate={required}
        onBlur={(e) => e.preventDefault()}
      >
        {states.map((state) => (
          <Option key={state} value={state}>
            {state}
          </Option>
        ))}
      </Field>

      <Field
        label="linkToDemo"
        name="linkToDemo"
        component={AInput}
        placeholder="Add link for demo"
        hasFeedback
        validate={required}
      />

      <Field
        label="linkToPR"
        name="linkToPR"
        component={AInput}
        placeholder="Add link for Rull Request"
        hasFeedback
        validate={required}
      />

      <Field
        label="selfGrade"
        name="selfGrade"
        component={AInput}
        placeholder="Add number of score"
        hasFeedback
        validate={required}
      />

      <FormItem {...tailFormItemLayout}>
        <Button
          type="primary"
          disabled={pristine || submitting}
          htmlType="submit"
          style={{ marginRight: '1rem' }}
        >
          Submit
        </Button>

        <Button disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </FormItem>
    </form>
  );
};

ReviewRequestFormCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

const form = reduxForm({
  form: 'reviewRequest',
  initialValues: {
    state: true,
  },
})(ReviewRequestFormCreation);

export default form;
