import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const transformFormValuesToCrossCheckSessionObject = (values) => {
  const {
    title,
    author,
    taskTitle,
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
    taskTitle,
    crossCheckSessionPeriod: crossCheckSessionPeriodFormatted,
    coefficient: Number(coefficient),
    discardMinScore,
    discardMaxScore,
    minReviewsAmount: Number(minReviewsAmount),
    desiredReviewsAmount: Number(desiredReviewsAmount),
    attendees: [],
  };
};

const getTasksInfoForCrossCheckSessionForm = (tasksTableData) => {
  const tasks = [];
  const tasksOpened = tasksTableData.filter((task) => task.state === 'open');
  tasksOpened.forEach((task) => {
    const { title, id } = task;
    tasks.push({
      title,
      id,
    });
  });
  return tasks;
};

export { transformFormValuesToCrossCheckSessionObject, getTasksInfoForCrossCheckSessionForm };
