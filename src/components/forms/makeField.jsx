/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

const makeField = (Component, formItemLayout) => ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  console.log(formItemLayout);

  return (
    <FormItem
      {...formItemLayout}
      label={label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest}>
        {children}
      </Component>
    </FormItem>
  );
};

makeField.propTypes = {
  hasFeedback: PropTypes.bool,
};

export default makeField;
