import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const transformFormValuesToCrossCheckSessionObject = (values) => {
  const {
    title,
    author,
    taskId,
    crossCheckSessionPeriod,
    taskCoefficient,
    minReviewsAmount,
    desiredReviewsAmount,
    discardMinScore = false,
    discardMaxScore = false,
    draft = false,
  } = values;

  let { id } = values;

  if (!id) {
    id = uuidv4();
  }

  const dateField = '_d';
  const dateFormat = 'YYYY-MM-DD';
  const startDate = moment(crossCheckSessionPeriod[0][dateField]).format(dateFormat);
  const endDate = moment(crossCheckSessionPeriod[1][dateField]).format(dateFormat);
  const state = draft ? 'draft' : 'active';

  return {
    id,
    title,
    author,
    state,
    taskId,
    coefficient: Number(taskCoefficient),
    startDate,
    endDate,
    discardMinScore,
    discardMaxScore,
    minReviewsAmount: Number(minReviewsAmount),
    desiredReviewersAmount: Number(desiredReviewsAmount),
    attendees: [],
  };
};

export default transformFormValuesToCrossCheckSessionObject;
