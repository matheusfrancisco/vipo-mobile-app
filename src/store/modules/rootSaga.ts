import { all } from 'redux-saga/effects';
import  profile from './profile/saga'

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    profile,
  ]);
};