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
  } = values;

  const id = `rss2020Q3react-${taskName}`;

  const dateField = '_d';
  const startDate = moment(crossCheckSessionPeriod[0][dateField]).format('YYYY-MM-DD');
  const endDate = moment(crossCheckSessionPeriod[1][dateField]).format('YYYY-MM-DD');

  return {
    id,
    author,
    state: 'closed',
    taskId,
    coefficient: taskCoefficient,
    startDate,
    endDate,
    discardMinScore,
    discardMaxScore: false,
    minReviewsAmount,
    desiredReviewersAmount: desiredReviewsAmount,
    attendees: [],
  };
};

export default transformFormValuesToCrossCheckSessionObject;
