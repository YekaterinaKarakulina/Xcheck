import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Typography, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const makeField = (Component) => (props) => {
  const { name, label } = props;
  return (
    <Form.Item name={name} label={label}>
      <Component />
    </Form.Item>
  );
};

const { Title } = Typography;
const { TextArea } = Input;

const AInput = makeField(Input);
const ATextarea = makeField(TextArea);

const CheckForm = ({ groups, handleSubmit }) => {
  console.log(groups);
  const formFields = groups.map((groupsItem) => {
    return (
      <div className="check__form-inner">
        <div className="check__form-row">
          <Title level={2} className="check__form-row-title">
            {groupsItem.title}
          </Title>
          <div className="check__form-row-body">
            {groupsItem.items.map((gItem) => {
              return (
                <div key={gItem.id}>
                  <Title level={3}>{gItem.title}</Title>
                  <div>{gItem.description}</div>
                  <Field name="rate" label="Your Rate" component={AInput} />

                  <Field name="comment" label="Your Comment" component={ATextarea} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <Form onSubmit={handleSubmit(handleSubmit)} className="check__form">
      {formFields}
      <div className="check__form-bottom">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

CheckForm.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckForm;
