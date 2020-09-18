/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { Field } from 'redux-form';
import { Typography, Input, InputNumber, Button, Space } from 'antd';
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
const { TextArea } = Input;

const AInputNumber = makeField(InputNumber);
const ATextarea = makeField(TextArea);

const SelfGradeField = (props) => {
  const {
    id,
    title,
    description,
    category,
    score,
    detailIds,
    commentFieldIds,
    toggleMore,
    toggleAdd,
  } = props;
  const isDetailViewed = detailIds[id];
  const isCommentFieldOpened = commentFieldIds[id]; // 10, -10

  let maxScore;
  let minScore;

  if (category === 'fines') {
    maxScore = 0;
    minScore = -Math.abs(score);
  } else {
    maxScore = score;
    minScore = 0;
  }

  const maxValue = useMemo(
    () => (value) => (Number(value) > maxScore ? `Must be at most ${maxScore}` : undefined),
    [maxScore]
  );

  const minValue = useMemo(
    () => (value) => (Number(value) < minScore ? `Must be at least ${minScore}` : undefined),
    [minScore]
  );

  return (
    <div key={id} className="check__form-item">
      <div className="check__form-item-top">
        <Space size="middle" align="start">
          <Title level={5} className="check__form-item-title">
            {title}
          </Title>
          <Button
            className="check__form-item-more"
            onClick={() => {
              toggleMore(id);
            }}
          >
            More info {!isDetailViewed ? <CaretDownOutlined /> : <CaretUpOutlined />}
          </Button>
          <Field
            name={id}
            placeholder="Score"
            component={AInputNumber}
            validate={[required, maxValue, minValue, maxLength3, minLength1]}
          />
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

      <div className="check__form-item-inner">
        <p className="check__form-item-desc" style={{ display: isDetailViewed ? 'block' : 'none' }}>
          {description}
        </p>
        <Field
          name={`comment_${id}`}
          placeholder="Comment"
          component={ATextarea}
          style={{ display: isCommentFieldOpened ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
};

export default SelfGradeField;
