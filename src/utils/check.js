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
      // eslint-disable-next-line no-prototype-builtins
      comment: values.hasOwnProperty(`${scoreId}_comment`) ? values[`${scoreId}_comment`] : '',
    };
  });

  return selfGrade;
};

export default transformFormValuesToSelfGradeObject;
