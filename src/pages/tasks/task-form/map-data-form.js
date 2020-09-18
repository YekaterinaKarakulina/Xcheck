/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';

const mapDataValues = (values) => {
  const fieldArrayForm = values.items || [];
  let fullScore = 0;
  if (fieldArrayForm.length) {
    fieldArrayForm.forEach((item) => {
      item.id = `${item.title}${item.category}`;
      item.mentorCheck = item.mentorCheck || false;
      item.description = item.description || '';
      item.score = parseInt(item.score, 10);
      if (item.category !== 'fines') {
        fullScore += item.score;
      }
    });
  }

  const { title, state, author, description, id } = values;

  return {
    taskScore: fullScore,
    title,
    state,
    author,
    description: description || '',
    items: fieldArrayForm,
    taskId: uuidv4(),
    id,
  };
};

export default mapDataValues;
