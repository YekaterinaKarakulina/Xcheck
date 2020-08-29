import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, /* Input,  Radio, Select, Checkbox, */ Button /* , DatePicker */ } from 'antd';

const FormItem = Form.Item;

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 6 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 14 },
//   },
// };

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

// const makeField = (Component) => ({ input, meta, children, hasFeedback, label, ...rest }) => {
//   console.log(input);
//   const hasError = meta.touched && meta.invalid;
//   return (
//     <FormItem
//       {...formItemLayout}
//       label={label}
//       validateStatus={hasError ? 'error' : 'success'}
//       hasFeedback={hasFeedback && hasError}
//       help={hasError && meta.error}
//     >
//       <Component {...input} {...rest} children={children} />
//     </FormItem>
//   );
// };

// const AInput = makeField(Input);

const ReviewRequest = (props) => {
  //   const { handleSubmit, pristine, reset, submitting } = props;
  console.log(props);
  return (
    <Form /* onSubmit={handleSubmit} */>
      <Field
        label="First Name"
        name="firstName"
        component="input" /* {AInput} */
        placeholder="First Name"
        hasFeedback
      />

      <Field
        label="Last Name"
        name="lastName"
        component="input" /* {AInput} */
        placeholder="Last Name"
      />

      <Field
        label="Email"
        name="email"
        component="input" /* {AInput} */
        type="email"
        placeholder="Email"
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
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  validate,
})(ReviewRequest);
