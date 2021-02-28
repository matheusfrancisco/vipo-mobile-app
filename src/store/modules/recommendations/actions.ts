import { action } from 'typesafe-actions';
import { AnswersTypes } from './types';

export const answeredRecommendtionsRequest = (answers: any) => ({
  type: action(AnswersTypes.ANSWER_REQUEST, { answers }),
});
export const answeredRecommendtionsSuccess = (answers: any) => ({
  type: action(AnswersTypes.ANSWER_SUCCESS, { answers }),
});
