import React from 'react';
import { Field, FieldArray } from 'redux-form';
import { Input, Button, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { required } from '../../utils';
import { formItemLayout } from '../forms/formLayot';
import makeField from '../forms/makeField';

const { TextArea } = Input;

const AInput = makeField(Input, formItemLayout);
const AInputNumber = makeField(InputNumber, formItemLayout);
const ATextArea = makeField(TextArea, formItemLayout);

const renderTaskItem = ({ fields }) => (
  <ul className="creationItemposition">
    <li>
      <Button type="button" onClick={() => fields.push({})}>
        Add evaluation criteria
      </Button>
    </li>
    {fields.map((point, index) => (
      <li key={uuidv4()}>
        <Button
          type="button"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => fields.remove(index)}
          title="Remove item description"
        />

        <h4>item #{index + 1}</h4>
        <Field
          label="Title item"
          name={`${point}.title`}
          type="text"
          component={AInput}
          validate={[required]}
        />

        <Field
          label="Max score"
          name="taskScore"
          min={0}
          max={50}
          step={0.1}
          component={AInputNumber}
          validate={[required]}
          hasFeedback
        />

        <Field
          label="Description item"
          name={`${point}.description`}
          type="text"
          component={ATextArea}
        />
      </li>
    ))}
  </ul>
);

const FieldArraysForm = () => {
  return (
    <>
      <FieldArray name="taskDescription" component={renderTaskItem} />
    </>
  );
};

export default FieldArraysForm;
