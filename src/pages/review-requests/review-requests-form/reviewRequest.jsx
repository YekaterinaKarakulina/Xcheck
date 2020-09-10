import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Select, Button } from 'antd';
import PropTypes from 'prop-types';
import makeField from '../../components/forms/make-field';
import { formItemLayout, tailFormItemLayout } from '../../components/forms/form-layout';
import { postReviewRequest } from '../../store/actions/index';
import { required } from '../../utils';
import transformFormValuesToReviewRequestObject from '../../utils/reviewRequest';

import './reviewRequest.scss';

const FormItem = Form.Item;
const { Option } = Select;
const crossCheckSessionData = ['rss2020Q1', 'rss2020Q3react', 'rss2020Q3angular'];
const tasks = ['simple-task-v1', 'simple-task-v2', 'simple-task-v3'];
const states = ['draft', 'published', 'completed'];

const AInput = makeField(Input, formItemLayout);
const ASelect = makeField(Select, formItemLayout);

const ReviewRequest = (props) => {
  const { handleSubmit, pristine, reset, submitting, postReviewRequest } = props;

  const onSubmit = (values) => {
    const reviewRequest = transformFormValuesToReviewRequestObject(values);
    postReviewRequest(reviewRequest);
  };

  return (
    <div className="review__request">
      <h2>Create Review Request session</h2>
      <Form onFinish={handleSubmit(onSubmit)}>
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
      </Form>
    </div>
  );
};

ReviewRequest.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  postReviewRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postReviewRequest: (reviewRequest) => dispatch(postReviewRequest(reviewRequest)),
  };
};

const form = reduxForm({
  form: 'reviewRequest',
  initialValues: {
    state: true,
  },
})(ReviewRequest);

export default connect(mapStateToProps, mapDispatchToProps)(form);
