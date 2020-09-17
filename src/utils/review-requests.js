import { v4 as uuidv4 } from 'uuid';

const transformFormValuesToReviewRequestObject = (values) => {
  const { author, taskTitle, linkToDemo, linkToPR, crossCheckSessionId } = values;

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
    crossCheckSessionId,
  };
};

const getCrossCheckSessionsInfoForReviewRequestForm = (value) => {
  const crossCheckSessions = [];
  const crossCheckSessionsActive = value.filter(
    (crossCheckSession) => crossCheckSession.state === 'active'
  );
  crossCheckSessionsActive.forEach((crossCheckSessionActive) => {
    const { id } = crossCheckSessionActive;
    crossCheckSessions.push({
      id,
    });
  });
  return crossCheckSessions;
};

export { transformFormValuesToReviewRequestObject, getCrossCheckSessionsInfoForReviewRequestForm };
