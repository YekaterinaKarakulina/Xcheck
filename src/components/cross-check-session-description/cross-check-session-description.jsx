import React from 'react';
import { Descriptions } from 'antd';
import PropTypes from 'prop-types';

const CrossCheckSessionDescriptionCreation = ({ descriptionValues }) => {
  const { author, coefficient, crossCheckSessionPeriod, taskId, attendees } = descriptionValues;

  return (
    <Descriptions layout="horizontal" column={2} bordered>
      <Descriptions.Item label="Author">{author}</Descriptions.Item>
      <Descriptions.Item label="Coefficient">{coefficient}</Descriptions.Item>
      <Descriptions.Item label="Start date">{crossCheckSessionPeriod[0]}</Descriptions.Item>
      <Descriptions.Item label="End date">{crossCheckSessionPeriod[1]}</Descriptions.Item>
      <Descriptions.Item label="Task" span={2}>
        {taskId}
      </Descriptions.Item>
      <Descriptions.Item label="Attendees" span={2}>
        {attendees.map((attendee) => {
          const reviewerOf = attendee.reviewerOf.map((reviewer) => {
            return (
              <span key={reviewer} style={{ marginRight: '1rem', marginLeft: '1rem' }}>
                {reviewer}
              </span>
            );
          });
          return (
            <div key={attendee.githubId}>
              <span style={{ fontWeight: '700', marginRight: '1rem' }}>{attendee.githubId}</span>[
              {reviewerOf}]
              <br />
            </div>
          );
        })}
      </Descriptions.Item>
    </Descriptions>
  );
};

CrossCheckSessionDescriptionCreation.propTypes = {
  descriptionValues: PropTypes.instanceOf(Object).isRequired,
};

export default CrossCheckSessionDescriptionCreation;
