import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Form, Input, Select, Button, Checkbox, Modal } from 'antd';
import PropTypes from 'prop-types';
import makeField from '../forms/make-field';
import { formItemLayout, tailFormItemLayout } from '../forms/form-layout';
import { required } from '../../utils';
import { closeModal } from '../../store/actions/review-requests';

const FormItem = Form.Item;
const { Option } = Select;
const crossCheckSessionData = ['rss2020Q1', 'rss2020Q3react', 'rss2020Q3angular'];
const tasks = ['simple-task-v1', 'simple-task-v2', 'simple-task-v3'];

const AInput = makeField(Input, formItemLayout);
const ASelect = makeField(Select, formItemLayout);
const ACheckbox = makeField(Checkbox, formItemLayout);

class ReviewRequestFormCreation extends React.Component {
  handleOk = () => {
    const { closeModal, history } = this.props;
    closeModal();
    history.push(`/check`);
  };

  handleCancel = () => {
    const { closeModal, history } = this.props;
    closeModal();
    history.go(-1);
  };

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      hasChoiceCrossCheckSession,
      isModalVisible,
    } = this.props;

    return (
      <>
        <form onSubmit={handleSubmit}>
          <Field
            label="author"
            name="author"
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
            label="Сhoice сross check session"
            name="hasChoiceCrossCheckSession"
            component={ACheckbox}
            type="checkbox"
            hasFeedback
          />

          {hasChoiceCrossCheckSession && (
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
            >
              Submit
            </Button>

            <Button disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </Button>
          </FormItem>
        </form>

        <Modal
          visible={isModalVisible}
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
      </>
    );
  }
}

ReviewRequestFormCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  hasChoiceCrossCheckSession: PropTypes.bool,
  isModalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

ReviewRequestFormCreation.defaultProps = {
  hasChoiceCrossCheckSession: false,
};

const form = reduxForm({
  form: 'reviewRequest',
})(ReviewRequestFormCreation);

const mapStateToProps = (state) => {
  const selector = formValueSelector('reviewRequest');
  return {
    isModalVisible: state.reviewRequests.isModalVisible,
    hasChoiceCrossCheckSession: selector(state, 'hasChoiceCrossCheckSession'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(form));
