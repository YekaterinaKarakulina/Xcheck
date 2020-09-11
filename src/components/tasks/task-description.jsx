import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Descriptions } from 'antd';

const TaskDescription = (props) => {
  const task = props.task;
  const { title, author, taskScore, status, description } = task;

  return (
    <>
      <Descriptions column={1} bordered>
        <Descriptions.Item label="Task title">{title}</Descriptions.Item>
        <Descriptions.Item label="Author">{author}</Descriptions.Item>
        <Descriptions.Item label="Max score">{taskScore}</Descriptions.Item>
        <Descriptions.Item label="Status">{status}</Descriptions.Item>
        <Descriptions.Item label="Description">{description}</Descriptions.Item>
        <Descriptions.Item label="Link to this task "></Descriptions.Item>
      </Descriptions>
      <Descriptions title="User Info" column={1} bordered>
        <Descriptions.Item label="Task title">
          Task title Ефеф мидпфлм омфжлм тмжф
        </Descriptions.Item>
        <Descriptions.Item label="Author">ридм\ичвы осмывмо жлмижылвом</Descriptions.Item>
        <Descriptions.Item label="Max score">1000</Descriptions.Item>
      </Descriptions>
    </>
  );
};

TaskDescription.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  taskScore: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TaskDescription;
