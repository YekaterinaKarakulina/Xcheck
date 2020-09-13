/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { Field } from 'redux-form';
import { Typography, Input, InputNumber, Radio, Button, Space } from 'antd';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import makeField from '../forms/make-field';
import { required, maxLength, minLength } from '../../utils/formValidations';

const maxLength3 = maxLength(3);
const minLength1 = minLength(1);

const { Title } = Typography;
// const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

// const AInput = makeField(Input);
const AInputNumber = makeField(InputNumber);
const ARadioGroup = makeField(RadioGroup);
const ATextarea = makeField(TextArea);

const GradeField = (props) => {
  const {
    id,
    title,
    description,
    maxScore,
    minScore,
    selfGrade,
    detailIds,
    commentIds,
    commentFieldIds,
    toggleMore,
    toggleShow,
    toggleAdd,
  } = props;
  const { comment } = selfGrade.items[id];
  const isDetailViewed = detailIds[id];
  const isCommentViewed = commentIds[id];
  const isCommentFieldOpened = commentFieldIds[id];

  const maxValue = useMemo(
    () => (value) => (value > maxScore ? `Must be at most ${maxScore}` : undefined),
    [maxScore]
  );

  const minValue = useMemo(
    () => (value) => (value < minScore ? `Must be at least ${minScore}` : undefined),
    [minScore]
  );

  return (
    <div className="check__form-item" key={id}>
      <div className="check__form-item-top">
        <Space size="middle" align="start">
          <Space size="small" align="start">
            <Title level={5} className="check__form-item-title">
              {title}
            </Title>
            <Button
              onClick={() => {
                toggleMore(id);
              }}
            >
              More info {!isDetailViewed ? <CaretDownOutlined /> : <CaretUpOutlined />}
            </Button>
          </Space>
          <Space size="small" align="start">
            <Field
              name={id}
              placeholder="Score"
              component={AInputNumber}
              validate={[required, maxValue, minValue, maxLength3, minLength1]}
            />
            <Button
              className="check__form-item-show"
              onClick={() => {
                toggleShow(id);
              }}
            >
              Show Student Comment
            </Button>
          </Space>
        </Space>
      </div>

      <div className="check__form-item-inner">
        <p className="check__form-item-desc" style={{ display: isDetailViewed ? 'block' : 'none' }}>
          {description}
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
              <Field label="Performed" name={`performans-group-${id}`} component={ARadioGroup}>
                <Radio value="0">Not performed</Radio>
                <Radio value="50%">50% Performed </Radio>
                <Radio value="100%">100% Performed</Radio>
              </Field>
              <Button
                className="check__form-item-add"
                onClick={() => {
                  toggleAdd(id);
                }}
              >
                Add Comment
                {!isCommentFieldOpened ? <PlusCircleOutlined /> : <MinusCircleOutlined />}
              </Button>
            </Space>
          </div>
          <div className="check__form-item-group-body">
            <Field
              name={`comment_${id}`}
              placeholder="Comment"
              component={ATextarea}
              style={{ display: isCommentFieldOpened ? 'block' : 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeField;
