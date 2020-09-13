import { v4 as uuidv4 } from 'uuid';

const transformFormValuesToReviewRequestObject = (values) => {
  const {
    // crossCheckSession,
    author,
    task,
    /* state, */ linkToDemo,
    linkToPR /* , selfGrade */,
    crossCheckSession,
  } = values;

  let { id } = values;

  if (!id) {
    id = uuidv4();
  }

  // const id = `${task}`;
  // console.log(сhoiceСrossCheckSession);

  // const state = draft ? 'draft' : 'active';

  return {
    id,
    task,
    author,
    state: 'draft',
    linkToDemo,
    linkToPR,
    crossCheckSession,
    // selfGrade,
  };
};

export default transformFormValuesToReviewRequestObject;
