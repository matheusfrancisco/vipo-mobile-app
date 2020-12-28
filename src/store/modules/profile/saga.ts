import {  takeLatest, put, all } from 'redux-saga/effects';
import { ProfileTypes } from './types'
import { getProfileSucess } from './actions';
import { AnyAction } from 'redux';

function* getProfileInformations(a : AnyAction) {
  console.log(a, 'oiii')
  try {
    // put(getProfileSucess(profileInformations))
  }
  catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(ProfileTypes.GET_PROFILE_REQUEST, getProfileInformations),
])
