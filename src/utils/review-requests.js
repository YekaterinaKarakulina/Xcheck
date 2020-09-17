import { v4 as uuidv4 } from 'uuid';

const transformFormValuesToReviewRequestObject = (values) => {
  const { author, task, linkToDemo, linkToPR, crossCheckSession } = values;

  let { id } = values;

  if (!id) {
    id = uuidv4();
  }

  return {
    id,
    author,
    task,
    state: 'draft',
    selfGrade: {},
    linkToDemo,
    linkToPR,
    crossCheckSession,
  };
};

export default transformFormValuesToReviewRequestObject;
