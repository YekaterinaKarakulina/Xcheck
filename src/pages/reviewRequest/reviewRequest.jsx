import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Form, Input, Select, Button, Checkbox, Modal } from 'antd';
import PropTypes from 'prop-types';
import makeField from '../../components/forms/make-field';
import { formItemLayout, tailFormItemLayout } from '../../components/forms/formLayout';
import { postReviewRequest } from '../../store/actions/index';
import { required } from '../../utils';
import transformFormValuesToReviewRequestObject from '../../utils/reviewRequest';

import './reviewRequest.scss';

const FormItem = Form.Item;
const { Option } = Select;
const crossCheckSessionData = ['rss2020Q1', 'rss2020Q3react', 'rss2020Q3angular'];
const tasks = ['simple-task-v1', 'simple-task-v2', 'simple-task-v3'];

const AInput = makeField(Input, formItemLayout);
const ASelect = makeField(Select, formItemLayout);
const ACheckbox = makeField(Checkbox, formItemLayout);

class ReviewRequest extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      postReviewRequest,
      hasChoiceСrossCheckSession,
    } = this.props;

    const { visible } = this.state;
    // console.log(visible);

    const onSubmit = (values) => {
      const reviewRequest = transformFormValuesToReviewRequestObject(values);
      postReviewRequest(reviewRequest);
    };

    return (
      <div className="review__request">
        <h2>Create Review Request</h2>
        <Form onFinish={handleSubmit(onSubmit)}>
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
            label="Task"
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
            label="Link to demo"
            name="linkToDemo"
            component={AInput}
            placeholder="Add link for demo"
            hasFeedback
            validate={required}
          />

          <Field
            label="Link to PR"
            name="linkToPR"
            component={AInput}
            placeholder="Add link for Rull Request"
            hasFeedback
            validate={required}
          />

          <Field
            label="Сhoice сross check session"
            name="сhoiceСrossCheckSession"
            component={ACheckbox}
            type="checkbox"
            hasFeedback
          />

          {hasChoiceСrossCheckSession && (
            <Field
              defaultValue={crossCheckSessionData[0]}
              label="Cross check session"
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
          )}

          <FormItem {...tailFormItemLayout}>
            <Button
              type="primary"
              disabled={pristine || submitting}
              htmlType="submit"
              style={{ marginRight: '1rem' }}
              onClick={() => this.showModal()}
            >
              Submit
            </Button>

            <Button disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </Button>
          </FormItem>
        </Form>

        <Modal
          visible={visible}
          title="Self grade"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              self grade later
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              self grade check
            </Button>,
          ]}
        >
          <p>Review Request success</p>
          <p>Go to self grade?</p>
        </Modal>
      </div>
    );
  }
}

ReviewRequest.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  postReviewRequest: PropTypes.func.isRequired,
  hasChoiceСrossCheckSession: PropTypes.bool,
};

ReviewRequest.defaultProps = {
  hasChoiceСrossCheckSession: false,
};

const selector = formValueSelector('reviewRequest');

const mapStateToProps = (state) => {
  const hasChoiceСrossCheckSession = selector(state, 'сhoiceСrossCheckSession');
  return {
    state,
    hasChoiceСrossCheckSession,
  };
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
