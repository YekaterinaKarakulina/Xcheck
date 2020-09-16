import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Descriptions } from 'antd';
import './tasks.scss';

const TaskDescription = (props) => {
  const {
    task: { title, author, taskScore, status, description, items },
  } = props;

  return (
    <>
      <Descriptions column={1} bordered>
        <Descriptions.Item label="Task title">{title}</Descriptions.Item>
        <Descriptions.Item label="Author">{author}</Descriptions.Item>
        <Descriptions.Item label="Max score">{taskScore}</Descriptions.Item>
        <Descriptions.Item label="Status">{status}</Descriptions.Item>
        <Descriptions.Item label="Description">{description}</Descriptions.Item>
        <Descriptions.Item label="Link to this task ">{1}</Descriptions.Item>
      </Descriptions>
      {items &&
        items.length &&
        items.map((item) => {
          return (
            <Descriptions
              key={`${item.title}${item.score}`}
              title={item.category}
              column={1}
              bordered
            >
              <Descriptions.Item label="Task title"> {item.title}</Descriptions.Item>
              <Descriptions.Item label="Description">{item.description}</Descriptions.Item>
              <Descriptions.Item label="Max score">{item.score}</Descriptions.Item>
            </Descriptions>
          );
        })}
    </>
  );
};

TaskDescription.propTypes = {
  task: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  taskScore: PropTypes.number,
  status: PropTypes.string,
  description: PropTypes.string,
};

TaskDescription.defaultProps = {
  status: undefined,
  description: undefined,
  title: undefined,
  author: undefined,
  taskScore: undefined,
};

export default TaskDescription;
