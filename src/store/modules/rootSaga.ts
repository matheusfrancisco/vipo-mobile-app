import { all } from 'redux-saga/effects';

import profileSaga from './profile/saga';
import answerSaga from './recommendations/saga';

export const rootSaga = function* rootSaga() {
  yield all([profileSaga(), answerSaga()]);
};
