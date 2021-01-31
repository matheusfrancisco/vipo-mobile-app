import { put } from 'redux-saga/effects';
import { answeredRecommendtionsSuccess, answeredRecommendtionsRequest } from './actions';
import { AnswersTypes } from './types'
import {  takeLatest, all } from 'redux-saga/effects';

export function* getProfileInformations({ answers } : any) {
  try {
    put(answeredRecommendtionsSuccess(answers))
  }
  catch (error) {
    console.log(error);
  }
}

export default function* watch() {
  yield takeLatest(AnswersTypes.ANSWER_REQUEST, answeredRecommendtionsRequest);
}