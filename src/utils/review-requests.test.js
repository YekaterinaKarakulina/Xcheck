import { transformFormValuesToReviewRequestObject, getCrossCheckSessionsInfoForReviewRequestForm } from './review-requests';
import {
  reviewRequestFormValuesRequired,
  reviewRequestFormValues,
  reviewRequestExpectedObject,
  crossCheckSessions
 } from './test-data';

describe('Transform form values into reviewRequest object', () => {
test('required values correct transformation', () => {
    const reviewRequestObject = transformFormValuesToReviewRequestObject(reviewRequestFormValuesRequired);
    expect(reviewRequestObject).toBeDefined();
    expect(reviewRequestObject.author).toEqual(reviewRequestExpectedObject.author);
    expect(reviewRequestObject.linkToDemo).toEqual(reviewRequestExpectedObject.linkToDemo);
    expect(reviewRequestObject.linkToPR).toEqual(reviewRequestExpectedObject.linkToPR);
    expect(reviewRequestObject.taskTitle).toEqual(reviewRequestExpectedObject.taskTitle);
    expect(reviewRequestObject.state).toEqual('draft');
    expect(reviewRequestObject.selfGrade).toBeDefined();
    expect(reviewRequestObject.crossCheckSessionId).toBeDefined();
    expect(reviewRequestObject.id).toBeDefined();
  });

test('required values correct transformation', () => {
    const reviewRequestObject = transformFormValuesToReviewRequestObject(reviewRequestFormValues);
    expect(reviewRequestObject).toBeDefined();
    expect(reviewRequestObject.author).toEqual(reviewRequestExpectedObject.author);
    expect(reviewRequestObject.linkToDemo).toEqual(reviewRequestExpectedObject.linkToDemo);
    expect(reviewRequestObject.linkToPR).toEqual(reviewRequestExpectedObject.linkToPR);
    expect(reviewRequestObject.taskTitle).toEqual(reviewRequestExpectedObject.taskTitle);
    expect(reviewRequestObject.state).toEqual('draft');
    expect(reviewRequestObject.selfGrade).toBeDefined();
    expect(reviewRequestObject.crossCheckSessionId).toEqual(reviewRequestExpectedObject.crossCheckSessionId);
    expect(reviewRequestObject.crossCheckSessionId).toBeDefined();
    expect(reviewRequestObject.id).toBeDefined();
  });
});

describe('Get crossCheck sessions info for review requests form', () => {
test('empty array', () => {
    const result = getCrossCheckSessionsInfoForReviewRequestForm([]);
    expect(result).toBeDefined();
    expect(result.length).toEqual(0);
  });
  
test('filled array', () => {
    const result = getCrossCheckSessionsInfoForReviewRequestForm(crossCheckSessions);
    expect(result).toBeDefined();
    expect(result.length).toEqual(1);
    const activeSession = result[0];
    expect(activeSession.id).toBeDefined();
    expect(activeSession.id).toEqual('xcheck-4');
  });
});
