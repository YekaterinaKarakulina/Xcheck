import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, /* Radio, */ Select, /* Checkbox, */ Button /* , DatePicker */ } from 'antd';

import './reviewRequest.scss';

const FormItem = Form.Item;
const { Option } = Select;
const crossCheckSessionData = ['rss2020Q1', 'rss2020Q3react', 'rss2020Q3angular'];
const tasks = ['simple-task-v1', 'simple-task-v2', 'simple-task-v3'];
const states = ['draft', 'published', 'completed'];

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

const makeField = (Component) => ({ /* input, meta, children, hasFeedback, label, */ ...rest }) => {
  // console.log(rest);
  // const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      {...formItemLayout}
      label={rest.label}
      // validateStatus={hasError ? 'error' : 'success'}
      // hasFeedback={hasFeedback && hasError}
      // help={hasError && meta.error}
    >
      <Component /* {...input} */ {...rest} /* children={children} */ />
    </FormItem>
  );
};

const AInput = makeField(Input);
const ASelect = makeField(Select);

const ReviewRequest = (props) => {
  //   const { handleSubmit, pristine, reset, submitting } = props;
  console.log(props);
  return (
    <div className="review__request">
      <Form /* onSubmit={handleSubmit} */>
        <Field
          defaultValue={crossCheckSessionData[0]}
          label="crossCheckSession"
          name="crossCheckSession"
          component={ASelect}
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
          // hasFeedback
        />

        <Field defaultValue={tasks[0]} label="task" name="task" component={ASelect}>
          {tasks.map((task) => (
            <Option key={task} value={task}>
              {task}
            </Option>
          ))}
        </Field>

        <Field defaultValue={states[0]} label="state" name="state" component={ASelect}>
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
        />

        <Field
          label="linkToPR"
          name="linkToPR"
          component={AInput}
          placeholder="Add link for Rull Request"
        />

        <Field
          label="selfGrade"
          name="selfGrade"
          component={AInput}
          placeholder="Add number of score"
        />

        <FormItem {...tailFormItemLayout}>
          <Button
            type="primary"
            //   disabled={pristine || submitting}
            htmlType="submit"
            style={{ marginRight: '10px' }}
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.Author) {
    errors.Author = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  validate,
})(ReviewRequest);
