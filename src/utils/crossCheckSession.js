import moment from 'moment';

const transformFormValuesToCrossCheckSessionObject = (values) => {
  const {
    taskName,
    author,
    taskId,
    crossCheckSessionPeriod,
    taskCoefficient,
    minReviewsAmount,
    desiredReviewsAmount,
    discardMinScore,
    discardMaxScore,
    draft,
  } = values;

  const id = `rss2020Q3react-${taskName}`;

  const dateField = '_d';
  const dateFormat = 'YYYY-MM-DD';
  const startDate = moment(crossCheckSessionPeriod[0][dateField]).format(dateFormat);
  const endDate = moment(crossCheckSessionPeriod[1][dateField]).format(dateFormat);
  const state = draft ? 'draft' : 'active';

  return {
    id,
    author,
    state,
    taskId,
    coefficient: taskCoefficient,
    startDate,
    endDate,
    discardMinScore,
    discardMaxScore,
    minReviewsAmount,
    desiredReviewersAmount: desiredReviewsAmount,
    attendees: [],
  };
};

export default transformFormValuesToCrossCheckSessionObject;
