import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Select, Button, DatePicker, InputNumber, Checkbox } from 'antd';

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

const makeField = (Component) => ({ ...rest }) => {
  return (
    <FormItem {...formItemLayout} label={rest.label}>
      <Component {...rest} />
    </FormItem>
  );
};

const AInput = makeField(Input);
const AInputNumber = makeField(InputNumber);
const ASelect = makeField(Select);
const ACheckbox = makeField(Checkbox);
const ARangePicker = makeField(RangePicker);

const CrossCheckSessionForm = () => {
  return (
    <div className="review__request">
      <Form>
        <Field label="Task name" name="taskName" component={AInput} placeholder="Type task name" />

        <Field label="Author" name="author" component={AInput} placeholder="Type author name" />

        <Field label="Task id" name="taskId" component={ASelect} placeholder="Select task id">
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
        />

        <Field
          label="Task coefficient"
          name="taskCoefficient"
          min={0}
          max={1}
          step={0.1}
          defaultValue={1}
          component={AInputNumber}
        />

        <Field
          label="Min reviews amount"
          name="minReviewsAmount"
          min={1}
          max={5}
          defaultValue={1}
          component={AInputNumber}
        />

        <Field
          label="Desired reviews amount"
          name="desiredReviewsAmount"
          min={1}
          max={5}
          defaultValue={1}
          component={AInputNumber}
        />

        <Field
          label="Discard min score"
          name="discardMinScore"
          component={ACheckbox}
          type="checkbox"
        />

        <Field
          label="Discard max score"
          name="discardMaxScore"
          component={ACheckbox}
          type="checkbox"
        />

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'crossCheckSession',
})(CrossCheckSessionForm);
