/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Typography, Form, Input, InputNumber, Radio, Button, Space } from 'antd';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import makeField from '../forms/makeField';

const { Title } = Typography;
// const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

// const AInput = makeField(Input);
const AInputNumber = makeField(InputNumber);
const ARadioGroup = makeField(RadioGroup);
const ATextarea = makeField(TextArea);

const isObjectEmpty = (value) =>
  value && Object.keys(value).length === 0 && value.constructor === Object;

// eslint-disable-next-line import/no-mutable-exports
let CheckForm = ({
  scopes,
  reviewRequest,
  handleSubmit,
  toggleMore,
  toggleAdd,
  toggleShow,
  detailIds,
  commentFieldIds,
  commentIds,
}) => {
  const { selfGrade } = reviewRequest;
  const isSelfGradeEmpty = isObjectEmpty(selfGrade);

  const renderSelfGradeFields = (fields) => {
    return fields.map((field) => {
      const isDetailViewed = detailIds[field.id];
      const isCommentFieldOpened = commentFieldIds[field.id];
      return (
        <div key={field.id} className="check__form-item">
          <div className="check__form-item-top">
            <Space size="middle" align="start">
              <Title level={5} className="check__form-item-title">
                {field.title}
              </Title>
              <Button
                className="check__form-item-more"
                onClick={() => {
                  toggleMore(field.id);
                }}
              >
                More info {!isDetailViewed ? <CaretDownOutlined /> : <CaretUpOutlined />}
              </Button>
              <Field name={`score_${field.id}`} placeholder="Score" component={AInputNumber} />
              <Button
                className="check__form-item-add"
                onClick={() => {
                  toggleAdd(field.id);
                }}
              >
                Add Comment
                {!isCommentFieldOpened ? <PlusCircleOutlined /> : <MinusCircleOutlined />}
              </Button>
            </Space>
          </div>

          <div className="check__form-item-inner">
            <p
              className="check__form-item-desc"
              style={{ display: isDetailViewed ? 'block' : 'none' }}
            >
              {field.description}
            </p>
            <Field
              className={`comment_${field.id}`}
              placeholder="Comment"
              component={ATextarea}
              style={{ display: isCommentFieldOpened ? 'block' : 'none' }}
            />
          </div>
        </div>
      );
    });
  };

  const renderGradeFields = (fields) => {
    return fields.map((field) => {
      const { comment } = selfGrade.items[field.id];
      const isDetailViewed = detailIds[field.id];
      const isCommentViewed = commentIds[field.id];
      const isCommentFieldOpened = commentFieldIds[field.id];

      return (
        <div className="check__form-item" key={field.id}>
          <div className="check__form-item-top">
            <Space size="middle" align="start">
              <Space size="small" align="start">
                <Title level={5} className="check__form-item-title">
                  {field.title}
                </Title>
                <Button
                  onClick={() => {
                    toggleMore(field.id);
                  }}
                >
                  More info {!isDetailViewed ? <CaretDownOutlined /> : <CaretUpOutlined />}
                </Button>
              </Space>
              <Space size="small" align="start">
                <Field name={field.id} placeholder="Score" component={AInputNumber} />
                <Button
                  className="check__form-item-show"
                  onClick={() => {
                    toggleShow(field.id);
                  }}
                >
                  Show Student Comment
                </Button>
              </Space>
            </Space>
          </div>

          <div className="check__form-item-inner">
            <p
              className="check__form-item-desc"
              style={{ display: isDetailViewed ? 'block' : 'none' }}
            >
              {field.description}
            </p>
            <p
              className="check__form-item-comment"
              style={{ display: isCommentViewed ? 'block' : 'none' }}
            >
              {comment}
            </p>

            <div className="check__form-item-group">
              <div className="check__form-item-group-top">
                <Space size="middle" align="start">
                  <Field
                    label="Performed"
                    name={`performans-group-${field.id}`}
                    component={ARadioGroup}
                  >
                    <Radio value="0">Not performed</Radio>
                    <Radio value="50%">50% Performed </Radio>
                    <Radio value="100%">100% Performed</Radio>
                  </Field>
                  <Button
                    className="check__form-item-add"
                    onClick={() => {
                      toggleAdd(field.id);
                    }}
                  >
                    Add Comment
                    {!isCommentFieldOpened ? <PlusCircleOutlined /> : <MinusCircleOutlined />}
                  </Button>
                </Space>
              </div>
              <div className="check__form-item-group-body">
                <Field
                  name={`comment_${field.id}`}
                  placeholder="Comment"
                  component={ATextarea}
                  style={{ display: isCommentFieldOpened ? 'block' : 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderScopes = scopes.map((scope) => {
    return (
      <div className="check__form-row" key={scope.id}>
        <Title level={4} className="check__form-row-title">
          {scope.title}
        </Title>

        <div className="check__form-row-body">
          {isSelfGradeEmpty ? renderSelfGradeFields(scope.items) : renderGradeFields(scope.items)}
        </div>
      </div>
    );
  });

  return (
    <Form onSubmit={handleSubmit} className="check__form">
      <div className="check__form-inner"> {renderScopes}</div>
      <div className="check__form-bottom">
        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </div>
    </Form>
  );
};

CheckForm = reduxForm({
  form: 'checkForm',
})(CheckForm);

CheckForm = connect((state) => ({
  initialValues: state.values,
}))(CheckForm);

export default CheckForm;
