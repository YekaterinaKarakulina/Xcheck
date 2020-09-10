const transformFormValuesToReviewRequestObject = (values) => {
  const { crossCheckSession, author, task, state, linkToDemo, linkToPR, selfGrade } = values;

  const id = `${crossCheckSession}-${task}`;

  // const state = draft ? 'draft' : 'active';

  return {
    id,
    author,
    state,
    linkToDemo,
    linkToPR,
    selfGrade,
  };
};

export default transformFormValuesToReviewRequestObject;
