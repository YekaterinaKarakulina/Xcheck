import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const transformFormValuesToCrossCheckSessionObject = (values) => {
  const {
    title,
    author,
    taskId,
    coefficient,
    minReviewsAmount,
    desiredReviewsAmount,
    discardMinScore = false,
    discardMaxScore = false,
    draft = false,
    crossCheckSessionPeriod,
  } = values;

  let { id } = values;

  if (!id) {
    id = uuidv4();
  }

  const dateField = '_d';
  const dateFormat = 'YYYY-MM-DD';
  const crossCheckSessionPeriodFormatted = [
    moment(crossCheckSessionPeriod[0][dateField]).format(dateFormat),
    moment(crossCheckSessionPeriod[1][dateField]).format(dateFormat),
  ];

  const state = draft ? 'draft' : 'active';

  return {
    id,
    title,
    author,
    state,
    taskId,
    crossCheckSessionPeriod: crossCheckSessionPeriodFormatted,
    coefficient: Number(coefficient),
    discardMinScore,
    discardMaxScore,
    minReviewsAmount: Number(minReviewsAmount),
    desiredReviewsAmount: Number(desiredReviewsAmount),
    attendees: [],
  };
};

export default transformFormValuesToCrossCheckSessionObject;
