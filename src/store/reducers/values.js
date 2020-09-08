import { reviewRequests } from '../../pages/check/data';

const isObjectEmpty = (value) =>
  value && Object.keys(value).length === 0 && value.constructor === Object;

const reviewRequest = reviewRequests[0];

const { selfGrade } = reviewRequest;

const initialValues = {};

if (!isObjectEmpty(selfGrade)) {
  // eslint-disable-next-line no-restricted-syntax
  for (const item of Object.keys(selfGrade.items)) {
    initialValues[item] = selfGrade.items[item].score;
  }
}

const values = (state = initialValues, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default values;
