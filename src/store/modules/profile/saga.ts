import { put } from 'redux-saga/effects';
import { getProfileSucess } from './actions';
import { ProfileTypes } from './types';
import { takeLatest, all } from 'redux-saga/effects';

export function* getProfileInformations({ profileInformations }: any) {
  try {
    put(getProfileSucess(profileInformations));
  } catch (error) {
    console.log(error);
  }
}

export default function* watch() {
  yield takeLatest(ProfileTypes.GET_PROFILE_REQUEST, getProfileInformations);
}
