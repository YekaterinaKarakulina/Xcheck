/* eslint-disable react/prop-types */
import React from 'react';

import { Descriptions } from 'antd';

const CrossCheckSessionDescriptionCreation = ({ descriptionValues }) => {
  const { author, coefficient, crossCheckSessionPeriod, taskId } = descriptionValues;
  return (
    <Descriptions layout="horizontal" column={2} bordered>
      <Descriptions.Item label="Author">{author}</Descriptions.Item>
      <Descriptions.Item label="Coefficient">{coefficient}</Descriptions.Item>
      <Descriptions.Item label="Start date">{crossCheckSessionPeriod[0]}</Descriptions.Item>
      <Descriptions.Item label="End date">{crossCheckSessionPeriod[1]}</Descriptions.Item>
      <Descriptions.Item label="Task" span={2}>
        {taskId}
      </Descriptions.Item>
      <Descriptions.Item label="Attendees" span={2} />
    </Descriptions>
  );
};

export default CrossCheckSessionDescriptionCreation;
