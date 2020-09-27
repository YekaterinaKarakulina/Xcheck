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
import { isEmpty } from 'lodash';
import makeField from '../forms/make-field';
import { required, maxLength, minLength } from '../../utils/form-validations';

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
    category,
    score,
    selfGrade,
    detailIds,
    commentIds,
    commentFieldIds,
    changedInputIds,
    toggleMore,
    toggleShow,
    toggleAdd,
    handleInputChange,
    hideCommentArea,
  } = props;
  const { comment } = !isEmpty(selfGrade[id]) ? selfGrade[id] : '';
  const isDetailViewed = detailIds[id];
  const isCommentViewed = commentIds[id];
  const isCommentFieldOpened = commentFieldIds[id];
  const isInputChanged = changedInputIds[id];

  let maxScore;
  let minScore;

  if (category === 'fines') {
    maxScore = 0;
    minScore = -Math.abs(score);
  } else {
    maxScore = Number(score);
    minScore = -Math.abs(score / 2);
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
    <>
      <Space size="middle" align="start">
        <Space size="small" align="start">
          <Title level={5}>{title}</Title>
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
            onChange={(value) => {
              if (value !== Number(score)) {
                handleInputChange(id);
                toggleAdd(id);
              } else {
                hideCommentArea(id);
              }
            }}
          />
          <Button
            onClick={() => {
              toggleShow(id);
            }}
          >
            Show Student Comment
            {!isCommentViewed ? <CaretDownOutlined /> : <CaretUpOutlined />}
          </Button>
        </Space>
      </Space>

      <div>
        <p style={{ display: isDetailViewed ? 'block' : 'none' }}>{description}</p>
        <p style={{ display: isCommentViewed ? 'block' : 'none' }}>{comment}</p>

        <div>
          <div>
            <Space size="middle" align="start">
              <Field
                label="Performed"
                name={`performans-group-${id}`}
                component={ARadioGroup}
                onChange={(e, value) => {
                  if (value !== '50%') {
                    hideCommentArea(id);
                  } else {
                    handleInputChange(id);
                    toggleAdd(id);
                  }
                }}
              >
                <Radio value="0">Not performed</Radio>
                <Radio value="50%">50% Performed </Radio>
                <Radio value="100%">100% Performed</Radio>
              </Field>
              <Button
                type="primary"
                onClick={() => {
                  toggleAdd(id);
                }}
              >
                Add Comment
                {!isCommentFieldOpened ? <PlusCircleOutlined /> : <MinusCircleOutlined />}
              </Button>
            </Space>
          </div>
          <div style={{ display: isCommentFieldOpened ? 'block' : 'none' }}>
            <Field
              name={`comment_${id}`}
              placeholder="Comment"
              component={ATextarea}
              style={{
                display: isCommentFieldOpened ? 'block' : 'none',
                borderColor: isInputChanged ? '#ff4d4f' : '#d9d9d9',
              }}
              onChange={(e, value) => {
                if (value.length > 0) {
                  handleInputChange(id);
                }
              }}
            />
            <div
              style={{
                display: isInputChanged ? 'block' : 'none',
                color: 'red',
                marginTop: '-15px',
                marginBottom: '15px',
              }}
            >
              You noted: partially completed. Be sure to leave feedback!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GradeField;
