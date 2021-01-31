import {all} from "redux-saga/effects";


import profileSaga from "./profile/saga";

export const rootSaga = function* rootSaga() {
  yield all([profileSaga()]);
};