import { v4 as uuidv4 } from 'uuid';

const transformFormValuesToReviewRequestObject = (values) => {
  const { author, taskTitle, linkToDemo, linkToPR, crossCheckSessionTitle } = values;

  let { id } = values;

  if (!id) {
    id = uuidv4();
  }

  return {
    id,
    author,
    taskTitle,
    state: 'draft',
    selfGrade: {},
    linkToDemo,
    linkToPR,
    crossCheckSessionTitle: crossCheckSessionTitle === undefined ? '' : crossCheckSessionTitle,
  };
};

const getCrossCheckSessionsInfoForReviewRequestForm = (value) => {
  const crossCheckSessions = [];
  const crossCheckSessionsActive = value.filter(
    (crossCheckSession) => crossCheckSession.state === 'active'
  );
  crossCheckSessionsActive.forEach((crossCheckSessionActive) => {
    const { id, title } = crossCheckSessionActive;
    crossCheckSessions.push({
      id,
      title,
    });
  });
  return crossCheckSessions;
};

export { transformFormValuesToReviewRequestObject, getCrossCheckSessionsInfoForReviewRequestForm };
