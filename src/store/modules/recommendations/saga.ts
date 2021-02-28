import { put, call } from 'redux-saga/effects';
import {
  answeredRecommendtionsSuccess,
  answeredRecommendtionsRequest,
} from './actions';
import { AnswersTypes } from './types';
import { takeLatest, all } from 'redux-saga/effects';
import { getToken, useAuth } from '../../../hooks/auth';
import api from '../../../services/api';

export function* getProfileInformations({ answers }: any) {
  try {
    put(answeredRecommendtionsSuccess(answers));
  } catch (error) {
    console.log(error);
  }
}

export async function sendRecommendations({ answers }: any) {
  const token = await getToken();
  const { user } = useAuth();
  console.log(token, 'api token');
  const recommendations = api.post('/recommendations', {
    answers,
    email: user.email,
    headers: { authorization: `Bearer ${token}` },
  });
  console.log(recommendations);
  return recommendations;
}

export default function* watch() {
  yield takeLatest(AnswersTypes.ANSWER_REQUEST, answeredRecommendtionsRequest);
}
