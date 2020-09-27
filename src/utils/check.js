/* eslint-disable no-restricted-syntax */
const transformFormValuesToSelfGradeObject = (values) => {
  const scoreIds = [];
  const selfGrade = {};
  for (const key of Object.keys(values)) {
    if (!key.includes('comment')) {
      scoreIds.push(key);
    }
  }

  scoreIds.forEach((scoreId) => {
    selfGrade[scoreId] = {
      score: Number(values[scoreId]),
      comment: values[`${scoreId}_comment`] ? values[`${scoreId}_comment`] : '',
    };
  });

  return selfGrade;
};

const transformFormValuesToGradeObject = (values) => {
  const scoreIds = [];
  const grade = {};
  const items = {};
  let sum = 0;

  for (const key of Object.keys(values)) {
    if (!key.includes('comment') && !key.includes('performans')) {
      scoreIds.push(key);
    }
  }

  scoreIds.forEach((scoreId) => {
    const key = `performans-group-${scoreId}`;

    if (values[key] === '50%') {
      items[scoreId] = {
        score: Number(values[scoreId]) / 2,
        comment: values[`comment_${scoreId}`] ? values[`comment_${scoreId}`] : '',
      };
    } else {
      items[scoreId] = {
        score: Number(values[scoreId]),
        comment: values[`comment_${scoreId}`] ? values[`comment_${scoreId}`] : '',
      };
    }
  });

  Object.values(items).forEach((item) => {
    sum += item.score;
  });
  grade.items = items;
  grade.total = sum;
  return grade;
};

export { transformFormValuesToSelfGradeObject, transformFormValuesToGradeObject };
