import {  takeLatest, put, all } from 'redux-saga/effects';
import { ProfileState } from './types'
import { getProfileSucess } from './actions';

function* getProfileInformations({profileInformations} : any) {
  
  try {
    put(getProfileSucess(profileInformations))
  }
  catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(ProfileState.GET_PROFILE_REQUEST, getProfileInformations),
])
